import { Project } from "projen";
import { licenseFile } from "./license/license";

export const configureProject = (project: Project) => {
  licenseFile(project);
  const packageJson = project.tryFindObjectFile("package.json");
  packageJson?.addOverride("license", "ASL");
  packageJson?.addOverride("private", true);
};
