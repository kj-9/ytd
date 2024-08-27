import type { Args } from 'std/flags/mod.ts';
import { playlistItems } from './lib/youtube.ts';

//import { spinnerStart, spinnerSuccess, spinnerUpdate } from './lib/spinner.ts';

export default async (args: Args) => {
  console.log('Fetching playlist items...');

  const res = await playlistItems(
    String(args._[0]),
    String(args._[1]),
  );
  console.log(res);
};
