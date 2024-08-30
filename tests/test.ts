import { snapshotTest } from '@cliffy/testing';
import command from '../src/lib/command.ts';

await snapshotTest({
  name: 'should log help',
  meta: import.meta,
  args: ['--help'],
  async fn() {
    await command();
  },
});
