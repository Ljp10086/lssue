import { processOpts } from './helper';
import { LssueOptions } from './types';
import EventEmitter from './utils/events';

export default class Lssue extends EventEmitter {
  opts: LssueOptions;
  isMounted = false;
  container: Element | null = null;
  el: HTMLElement;

  constructor(opts: LssueOptions) {
    super();
    this.opts = processOpts(opts);
    this.el = document.createElement('div');
  }

  mount(container: string | HTMLElement): boolean {
    if (this.isMounted) return true;
    const el =
      typeof container === 'string'
        ? document.querySelector(container)
        : container;

    if (!el) return false;

    el.appendChild(this.el);
    this.container = el;
    this.isMounted = true;

    return true;
  }
}
