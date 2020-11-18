import { expect, fixture, html } from '@open-wc/testing';
import '../src/my-counter.js';

/**
 * Really stuck? Take a look at the `solution` directory
 */

describe('my-counter', () => {
  let element;

  it('resets the counter', async () => {
    element = await fixture(html`<my-counter></my-counter>`);
    element.increment();
    element.increment();
    element.reset();
    await element.updateComplete;
    expect(element.count).to.equal(0);
  });
});
