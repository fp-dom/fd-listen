import { curry3 } from 'fj-curry';
require('6to5/polyfill');


// TODO extract flatten, reduce to module
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

let listen = (type, listener, targets) => 
  [for (target of flatten([targets])) target.addEventListener(type, listener)];

export default curry3(listen);
