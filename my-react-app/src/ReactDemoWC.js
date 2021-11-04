import { ReactDOM } from 'react-dom'
import App from './ReactApp'

class MyReactAppWebComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Create a ShadowDOM
    const root = this.attachShadow({ mode: 'open' });

    // Create a mount element
    const mountPoint = document.createElement('div');
    
    root.appendChild(mountPoint);

    // You can directly use shadow root as a mount point
    ReactDOM.render(<App />, mountPoint);
  }
}

customElements.define('my-react-wc', MyReactAppWebComponent)