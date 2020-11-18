import { expect, fixture, html } from '@open-wc/testing';
import '../src/my-counter.js';

/**
 * In `src/my-counter.js` we have added a `reset` method. When a user increments
 * or decrements the counter a bunch, they might want to reset the counter to 0 at
 * some point.
 *
 * In this assignment, we want to test that the `reset` method has
 * the expected behavior, and resets the counter to 0.
 *
 * Really stuck? Take a look at the `solution` directory
 */

describe('my-counter', () => {
  it('resets the counter', async () => {
    const element = await fixture(html`<my-counter></my-counter>`);
    // ... finish test implementation
    expect(element.count).to.equal(0);
  });
});
