import { curry3 } from 'fj-curry';

let listen = (type, listener, target) => {
  target.addEventListener(type, listener);
};

export default curry3(listen);
