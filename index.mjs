import { execute } from "./src/job.mjs"

try {
  execute();
} catch (error) {
  console.error(error);
  process.exit(1);
}
