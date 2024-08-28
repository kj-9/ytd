import logger from './lib/logger.ts';
import { playlistItems } from './lib/youtube.ts';

//import { spinnerStart, spinnerSuccess, spinnerUpdate } from './lib/spinner.ts';

export default async (options: any, args: string[]) => {
  logger().debug('Fetching playlist items...');

  const res = await playlistItems(
    String(args[0]),
    String(args[1]),
  );
  console.log(res);
};
