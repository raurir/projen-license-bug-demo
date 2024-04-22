import { Project, TextFile } from "projen";

export const getShortLicense = (prefix: string = "", suffix: string = "") =>
  ["Test short"].map((line) => `${prefix}${line}${suffix}`);

export const getLongLicense = () => [`Test long`];

export const licenseFile = (project: Project) => {
  project.tryRemoveFile("LICENSE");
  const enabled = true;
  if (enabled) {
    new TextFile(project, "LICENSE", { lines: getLongLicense() });
  } else {
    console.log("licenseFile skipping");
  }
};
