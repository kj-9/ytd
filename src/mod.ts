import config from '../deno.json' with { type: 'json' };
import { Command } from 'cliffy/command/mod.ts';
import main from './app.ts';

import * as log from 'std/log/mod.ts';

const { name, version, description } = config;

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
