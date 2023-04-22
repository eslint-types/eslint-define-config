import { execSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';

const changes: string[] = execSync('git diff --name-only --staged', {
  encoding: 'utf-8',
}).split('\n');

const rules: string[] = changes.filter((change) =>
  change.startsWith('src/rules/'),
);

console.log(rules);

for (const rule of rules) {
  const dir: string = `scripts/generate-rule-files/diffs/${rule
    .slice(4)
    .replace(/\/[^/]*$/, '')}`;
  console.log({ dir });
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  const diffPath: string = `scripts/generate-rule-files/diffs/${rule.slice(4)}`;
  execSync(`git diff --staged ${rule} > ${diffPath}.diff`);
}
