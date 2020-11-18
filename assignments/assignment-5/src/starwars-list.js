import { LitElement, html, css } from 'lit-element';

export class StarwarsList extends LitElement {
  static get properties() {
    return {
      characters: { type: Array },
    };
  }

  constructor() {
    super();
    this.characters = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    this.characters = await this.fetchCharacters();
  }

  async fetchCharacters() {
    return fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((response) => {
        return response.results;
      });
  }

  render() {
    return html`
      <ul>
        ${this.characters.map(character => html`
          <li>${character.name}</li>
        `)}
      </ul>
    `;
  }
}

customElements.define('starwars-list', StarwarsList);
