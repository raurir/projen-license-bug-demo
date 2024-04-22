import { MonorepoTsProject } from "@aws/pdk/monorepo";
import { NodePackageManager } from "projen/lib/javascript";
import { configureProject } from "./projenrc/common";

const monorepo = new MonorepoTsProject({
  name: "@demo/monorepo",
  devDeps: ["@aws/pdk", "glob", "@types/glob", "common-comment-parser"],
  defaultReleaseBranch: "main",
  packageManager: NodePackageManager.PNPM,

  tsconfig: {
    compilerOptions: {
      lib: ["es2019", "dom"],
      skipLibCheck: true,
    },
  },
});

configureProject(monorepo);

monorepo.synth();
