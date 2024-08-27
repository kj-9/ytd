import { parse } from 'std/flags/mod.ts';
import { bold, green, red, yellow } from 'std/fmt/colors.ts';
import { AppName, Platform, Version } from './constants.ts';

import main from './app.ts';

const help = `${AppName} ${Version}-${Platform}

Usage:
    ${AppName} [playlistId] [apikey]
    ${AppName} (-h | --help)
    ${AppName} (-v | --version)

Options:
    -h, --help       Print help
    -v, --version    Print version
    [arg1]
    [arg2]
`;

const args = parse(Deno.args);

if (args._.includes('help') || args?.h || args?.help) {
  console.log(help);

  Deno.exit(0);
}

if (args._.includes('version') || args?.v || args?.version) {
  console.log(
    green(bold(AppName)) +
      ' ' +
      yellow(Version + '-' + Platform),
  );

  Deno.exit(0);
}

await main(args);
