import * as log from '@std/log';

function logger(name: string = 'ytd') {
  return log.getLogger(name);
}

export default logger;
