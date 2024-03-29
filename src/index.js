import moment from 'moment-timezone';

import config from '../config';
import { TIMEZONE_MAP, registerHooks, setTZ } from './knack';

export default config;

export function hone(callback) {
  if (callback && typeof callback === 'function') {
    callback(config);
  }

  setTZ();

  registerHooks(config.knack.hooks);
}
