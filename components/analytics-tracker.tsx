"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!siteConfig.googleAnalyticsId) return;
    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
      send_to: siteConfig.googleAnalyticsId,
    });
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.href;
      const label = link.textContent?.trim().replace(/\s+/g, " ").slice(0, 100) || "unlabelled link";

      if (link.protocol === "mailto:") {
        trackEvent("email_click", { link_location: window.location.pathname });
        return;
      }
      if (link.protocol === "tel:") {
        trackEvent("phone_click", { link_location: window.location.pathname });
        return;
      }

      if (link.target === "_blank" && new URL(href).hostname !== window.location.hostname) {
        const isBooking = href === siteConfig.bookingUrl;
        trackEvent(isBooking ? "book_call_click" : "outbound_click", {
          link_url: href,
          link_domain: new URL(href).hostname,
          link_text: label,
          link_location: window.location.pathname,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  );
}
