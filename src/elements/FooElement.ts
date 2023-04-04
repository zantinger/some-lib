export class FooElement extends HTMLElement {
  shadow: ShadowRoot;
  name: string;
  
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.name = 'foo';
  }

  getAttributes() {
    this.name = this.getAttribute('name') || ''; 
  }
}
