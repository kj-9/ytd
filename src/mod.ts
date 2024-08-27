import { parse } from 'std/flags/mod.ts';
import { bold, green, yellow } from 'std/fmt/colors.ts';
import config from '../deno.json' with { type: 'json' };

const { name, version } = config;

import main from './app.ts';

const help = `${name} ${version}

Usage:
    ${name} [playlistId] [apikey]
  list all videos in a youtube playlist

    ${name} (-h | --help)
  show this help message

    ${name} (-v | --version)
  show version

Options:
    -h, --help       Print help
    -v, --version    Print version
`;

const args = parse(Deno.args);

if (args._.includes('help') || args?.h || args?.help) {
  console.log(help);

  Deno.exit(0);
}

if (args._.includes('version') || args?.v || args?.version) {
  console.log(
    green(bold(name)) +
      ' ' +
      yellow(version),
  );

  Deno.exit(0);
}

await main(args);
