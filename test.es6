import assert from 'assert';
import listen from './';


describe('fd-listen', () => {
  var a, e;

  beforeEach(() => {
    e = document.createEvent('MouseEvents');
    e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    a = document.createElement('a');
    a.setAttribute('href', '#');
    a.innerHTML = 'nope';
    document.body.appendChild(a);
  });

  it('#listen', () => {
    assert.equal(typeof listen, 'function');
    assert.equal(typeof listen('click'), 'function');
    assert.equal(typeof listen('click')(() => {}), 'function');

    listen('click')((event) => {event.target.innerHTML = 'clicked';})(a);
    a.dispatchEvent(e);
    assert.equal(a.innerHTML, 'clicked');
  });
});
