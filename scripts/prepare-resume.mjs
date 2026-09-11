import { copyFile, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resumeDirectory = path.join(projectRoot, "public", "resume");
const stablePath = path.join(projectRoot, "public", "cv.pdf");
const files = await readdir(resumeDirectory, { withFileTypes: true });
const pdfs = files
  .filter((file) => file.isFile() && path.extname(file.name).toLowerCase() === ".pdf")
  .map((file) => file.name);

if (pdfs.length !== 1) {
  throw new Error(
    `Expected exactly one PDF in public/resume, found ${pdfs.length}. Keep only your current CV there.`,
  );
}

await copyFile(path.join(resumeDirectory, pdfs[0]), stablePath);
console.log(`Prepared public/cv.pdf from public/resume/${pdfs[0]}`);
