import flatten from 'fj-flatten';
import { curry3 } from 'fj-curry';
require('core-js/shim');


let listen = (type, listener, targets) =>
  [for (target of flatten([targets])) target.addEventListener(type, listener)];

export default curry3(listen);
