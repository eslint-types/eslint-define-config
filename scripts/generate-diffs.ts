import { execSync } from 'node:child_process';

const changes: string[] = execSync('git diff --name-only --staged', {
  encoding: 'utf-8',
}).split('\n');

const rules: string[] = changes.filter((change) =>
  change.startsWith('src/rules/'),
);

console.log(rules);

for (const rule of rules) {
  const diffPath: string = `scripts/generate-rule-files/diffs/${rule.slice(4)}`;
  execSync(`git diff --staged ${rule} > ${diffPath}.diff`);
}
