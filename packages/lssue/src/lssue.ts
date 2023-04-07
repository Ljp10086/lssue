import { processOpts } from './helper';
import { LssueOptions } from './types';
import EventEmitter from './utils/events';

export default class Lssue extends EventEmitter {
  opts: LssueOptions;

  constructor(opts: LssueOptions) {
    super();
    this.opts = processOpts(opts);
  }

  // mount() {}
}
