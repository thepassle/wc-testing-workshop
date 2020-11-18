import { LitElement, html, css } from 'lit-element';

export class MyCounter extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.count = 0;
  }

  firstUpdated() {
    this.addEventListener('counter-incremented', (e) => {console.log(e)})
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count - 1;
  }

  render() {
    return html`
      Count: ${this.count}
      <hr/>
      <button @click=${this.increment}>Increment</button>
      <button @click=${this.decrement}>Decrement</button>
    `;
  }
}

customElements.define('my-counter', MyCounter);
