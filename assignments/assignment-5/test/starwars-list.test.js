import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/starwars-list.js';

/**
 * For this assignment, we have a new component. The component does an API call to the starwars API at:
 * https://swapi.dev/api/people/
 *
 * Which returns a list of characters as an array. You can visit the link above in the browser to see the API response
 *
 * For this assignment, we would like to _stub_ the `fetchCharacters` method on the `starwars-list` element, and
 * make it return the following response:
 * ```
 * [
 *   {name: 'Luke SkyWalker'},
 *   {name: 'C-3PO'}
 * ]
 * ```
 *
 * Stuck? Check out the Sinon documentation here: https://sinonjs.org/releases/latest/stubs/
 * Really stuck? Take a look at the `solution/` folder.
 */

describe('starwars-list', () => {
  let element;

  it('renders list of characters', async () => {
    element = await fixture(html`<starwars-list></starwars-list>`);
    // your implementation
    expect(element.characters.length).to.equal(2);
  });
});
