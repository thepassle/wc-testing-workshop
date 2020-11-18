import { expect, fixture, html } from '@open-wc/testing';
import '../src/my-counter.js';

/**
 * HINT:
 * Stuck? Check out the @open-wc/testing-helpers documentation if you're running into timing issues:
 * https://open-wc.org/docs/testing/helpers/#timings
 *
 * Really stuck? Take a look at the `solution` directory
 */

describe('my-counter', () => {
  let element;

  it('increments the counter', async () => {
    /**
     * The fixture function lets us create a test fixture for our component.
     * What it does is create an instance of our component, and appends it to the dom in the test runner,
     * so we can then call methods on the element, run querySelectors if needed, and access its properties
     *
     * The reason the fixture is async is because LitElements render pipeline is asynchronous, so the fixture will render
     * the component, and `await` untill LitElements render pipeline has finished.
     *
     * Keep this in mind when writing your tests! Whenever you update a property in your element, an asynchronous update
     * will be scheduled. You might need to await that update somehow! *wink wink*
     */
    element = await fixture(html`<my-counter></my-counter>`);
    element.increment();
    await element.updateComplete;
    expect(element.count).to.equal(1);
  });

  it('decrements the counter', async () => {
    element = await fixture(html`<my-counter></my-counter>`);
    element.decrement();
    await element.updateComplete;
    expect(element.count).to.equal(-1);
  });
});
