import * as log from 'std/log/mod.ts';

function logger(name: string = 'ytd') {
  return log.getLogger(name);
}

export default logger;
