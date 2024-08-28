import config from '../deno.json' with { type: 'json' };
import { Command } from 'https://deno.land/x/cliffy@v1.0.0-rc.4/command/mod.ts';
import main from './app.ts';

import * as log from 'https://deno.land/std@0.224.0/log/mod.ts';

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
