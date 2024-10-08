import * as log from '@std/log';
import logger from './logger.ts';
import { playlistItems } from './youtube.ts';
import config from '../../deno.json' with { type: 'json' };
import { Command } from '@cliffy/command';

const { name, version, description } = config;

// name is @user/app so we need to extract the app name
const [_, appName] = name.split('/');

async function main(options: any, args: string[]) {
  logger().debug('Fetching playlist items...');

  const res = await playlistItems(
    String(args[0]),
    String(args[1]),
  );

  console.log(JSON.stringify(res, null, 2));
}

export default function command() {
  return new Command()
    .name(appName)
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
    });
  //.parse(Deno.args);
}
