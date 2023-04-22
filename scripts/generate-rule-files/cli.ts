import { run } from '.';

const selectedPlugins: string[] | undefined = process.argv
  .slice(2)
  .find((arg) => arg.startsWith('--plugins='))
  ?.replace('--plugins=', '')
  .split(',');

const debuggedRules: string[] | undefined = process.argv
  .slice(2)
  .find((arg) => arg.startsWith('--debug='))
  ?.replace('--debug=', '')
  .split(',');

run({ plugins: selectedPlugins, debuggedRules }).catch((err) =>
  console.error(err),
);
