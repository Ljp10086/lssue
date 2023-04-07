import { processOpts } from './helper';
import { LssueOptions } from './types';

export default class Lssue {
  opts: LssueOptions;

  constructor(opts: LssueOptions) {
    this.opts = processOpts(opts);
  }

  // mount() {}
}
