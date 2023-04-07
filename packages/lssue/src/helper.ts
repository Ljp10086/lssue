import { LssueOptions } from './types';

const defaultOpts = {
  id: location.pathname
};

export const processOpts = (opts: LssueOptions) => {
  return Object.assign(defaultOpts, opts);
};
