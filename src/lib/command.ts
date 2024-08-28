import * as log from 'std/log/mod.ts';
import logger from './logger.ts';
import { playlistItems } from './youtube.ts';
import config from '../../deno.json' with { type: 'json' };
import { Command } from 'cliffy/command/mod.ts';

const { name, version, description } = config;

async function main(options: any, args: string[]) {
  logger().debug('Fetching playlist items...');

  const res = await playlistItems(
    String(args[0]),
    String(args[1]),
  );
  console.log(res);
}

export default async function command() {
  await new Command()
    .name(name)
    .version(version)
    .description(description)
    .option('-d, --debug', 'Enable debug output.')
    .arguments('<playlistId:string> <apiKey:string>')
    .action(async (options, ...args) => {
      log.setup({
        handlers: {
          console: new log.ConsoleHandler(options.debug ? 'DEBUG' : 'INFO'),
        },

        loggers: {
          'ytd': {
            level: 'DEBUG',
            handlers: ['console'],
          },
        },
      });

      await main(options, args);
    })
    .parse(Deno.args);
}
