import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import '../src/my-counter.js';

/**
 * Hint: You will need a *certain* helper from `@open-wc/testing` for this assignment.
 *
 * Stuck? Take a look at the documentation here: https://open-wc.org/guides/knowledge/testing/events/
 *
 * Really stuck? Take a look at the `solution` directory
 */

describe('my-counter', () => {
  let element;

  it('fires an event when counter is incremented', async () => {
    element = await fixture(html`<my-counter></my-counter>`);
    const listener = oneEvent(element, 'counter-incremented');
    element.increment();
    const { detail } = await listener;
    expect(detail).to.equal(1);
  });

  it('fires an event when counter is decremented', async () => {
    element = await fixture(html`<my-counter></my-counter>`);
    const listener = oneEvent(element, 'counter-decremented');
    element.decrement();
    const { detail } = await listener;
    expect(detail).to.equal(-1);
  });
});
