import { assertEquals } from '@std/assert';
import command from '../src/lib/command.ts';

// edit this template to update README.md file
const readmeTemplate = ({ version, help }: { version: string; help: string }) =>
  `\
<!-- deno-fmt-ignore-file -->
<!-- DO NOT EDIT README.md DIRECTLY, EDIT tests/readme_tests.ts AND RUN deno task test-update -->
# ytd

[![JSR](https://jsr.io/badges/@kj-9/ytd)](https://jsr.io/@kj-9/ytd)

youtube data api cli tool and library for deno.

## Installation

### Standalone binary

- Download standalone binary from
  [releases](https://github.com/kj-9/ytd/releases).
- Move downloaded file to path
- Or you can download source code and compile on your own.

### with Deno

\`\`\`sh
deno install --allow-net -g -n ytd https://jsr.io/@kj-9/ytd/${version}/src/cli.ts
\`\`\`

## Usage

\`\`\`sh
${help}
\`\`\`

## Development

### Release

- bump version in \`deno.json\`
- run \`deno task test-update\` to update snapshot tests if needed
- create and push a tag
`;

Deno.test('Regression test for README.md file to check embebbed help and version', async () => {
  const actual = await Deno.readTextFile('README.md');

  const cmd = command();

  const help = cmd.getHelp({ colors: false });
  const version = cmd.getVersion() as string;

  const rendered = readmeTemplate({ version, help });

  // if set --update flag, update README.md file
  if (Deno.args.includes('--update')) {
    await Deno.writeTextFile('README.md', rendered);
    console.log('README.md file updated');
  } else {
    assertEquals(
      actual,
      rendered,
      'README.md file is not up to date. Run `deno task test-update` to update README.md file',
    );
  }
});
