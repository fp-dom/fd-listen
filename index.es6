import flatten from 'fj-flatten';
import { curry3 } from 'fj-curry';
require('6to5/polyfill');


let listen = (type, listener, targets) =>
  [for (target of flatten([targets])) target.addEventListener(type, listener)];

export default curry3(listen);
