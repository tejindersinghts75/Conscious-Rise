import { projects } from "@/lib/content";

const token = (slug: string) => slug.replace(/-/g, "_").toUpperCase();

export const caseStudies = projects.map((project) => {
  const key = token(project.slug);
  return {
    ...project,
    year: `{{${key}_YEAR}}`,
    brief: [`{{${key}_BRIEF_1}}`, `{{${key}_BRIEF_2}}`],
    built: [`{{${key}_BUILT_1}}`, `{{${key}_BUILT_2}}`, `{{${key}_BUILT_3}}`],
    supportingScreenshots: [`{{${key}_SCREENSHOT_2}}`, `{{${key}_SCREENSHOT_3}}`],
    decisions: [
      { title: `{{${key}_DECISION_1_TITLE}}`, body: `{{${key}_DECISION_1_BODY}}` },
      { title: `{{${key}_DECISION_2_TITLE}}`, body: `{{${key}_DECISION_2_BODY}}` },
    ],
    result: `{{${key}_RESULT}}`,
  };
});

export type CaseStudy = (typeof caseStudies)[number];
