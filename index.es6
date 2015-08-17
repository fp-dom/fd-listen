import flatten from 'fj-flatten';
import { curry3 } from 'fj-curry';
require('babel/polyfill');


let listen = (type, listener, targets) =>
  [for (target of flatten([targets])) target.addEventListener(type, listener)];

export default curry3(listen);
