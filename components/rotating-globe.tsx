"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const AXIAL_TILT = THREE.MathUtils.degToRad(-23.5);
const ROTATION_SPEED = 0.045;

export function RotatingGlobe() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hostElement = hostRef.current!;
    if (!hostElement) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    // Leave enough camera distance for the full sphere and atmosphere to stay
    // inside the square canvas at every viewport size.
    camera.position.z = 7.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.maxWidth = "100%";
    renderer.domElement.style.maxHeight = "100%";
    hostElement.appendChild(renderer.domElement);

    const texture = new THREE.TextureLoader().load(
      "/assets/conscious-rise-earth-texture.png",
      () => renderer.render(scene, camera),
    );
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());

    const globeMaterial = new THREE.ShaderMaterial({
      uniforms: { globeMap: { value: texture } },
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `
        uniform sampler2D globeMap;
        varying vec2 vUv;
        void main(){
          vec4 source=texture2D(globeMap,vUv);
          float neutral=max(source.g,source.b);
          float redDominance=max(source.r-neutral,0.0);
          float redMask=smoothstep(0.04,0.42,redDominance);
          float luminance=dot(source.rgb,vec3(0.2126,0.7152,0.0722));
          vec3 cherry=vec3(0.824,0.016,0.176);
          vec3 cherrySurface=vec3(luminance*0.14)+cherry*(source.r*1.08);
          vec3 finalColor=mix(source.rgb,cherrySurface,redMask*0.9);
          gl_FragColor=vec4(finalColor,source.a);
        }
      `,
    });

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(2, 128, 96),
      globeMaterial,
    );
    globe.rotation.y = -0.38;

    const tiltedAxis = new THREE.Group();
    tiltedAxis.rotation.z = AXIAL_TILT;
    tiltedAxis.add(globe);
    scene.add(tiltedAxis);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(2.025, 128, 96),
      new THREE.ShaderMaterial({
        transparent: true,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        vertexShader: `varying vec3 vNormal; void main(){ vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
        fragmentShader: `varying vec3 vNormal; void main(){ float rim=pow(0.72-dot(vNormal,vec3(0.0,0.0,1.0)),3.0); gl_FragColor=vec4(0.824,0.016,0.176,rim*0.78); }`,
      }),
    );
    tiltedAxis.add(atmosphere);

    function resize() {
      const width = hostElement.clientWidth;
      const height = hostElement.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(hostElement);
    resize();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const clock = new THREE.Clock();
    let frame = 0;

    function animate() {
      const delta = Math.min(clock.getDelta(), 0.05);
      if (!reduceMotion.matches) globe.rotation.y -= ROTATION_SPEED * delta;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      globe.geometry.dispose();
      globeMaterial.dispose();
      atmosphere.geometry.dispose();
      (atmosphere.material as THREE.Material).dispose();
      texture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} aria-hidden="true" className="h-full w-full" />;
}
