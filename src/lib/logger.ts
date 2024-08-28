import * as log from 'https://deno.land/std@0.224.0/log/mod.ts';

function logger(name: string = 'ytd') {
  return log.getLogger(name);
}

export default logger;
