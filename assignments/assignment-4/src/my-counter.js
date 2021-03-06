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

  reset() {
    this.count = 0;
  }

  increment() {
    this.count = this.count + 1;
    this.dispatchEvent(new CustomEvent('counter-incremented', {detail: this.count}));
  }

  decrement() {
    this.count = this.count - 1;
    this.dispatchEvent(new CustomEvent('counter-decremented', {detail: this.count}));
  }

  render() {
    return html`
      Count: ${this.count}
      <hr/>
      <button @click=${this.increment}>Increment</button>
      <button @click=${this.decrement}>Decrement</button>
      <button @click=${this.reset}>Reset</button>
    `;
  }
}

customElements.define('my-counter', MyCounter);
