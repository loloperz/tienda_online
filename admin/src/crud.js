class Crud extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
          <style>
            
        .crud {
            display: flex;
            gap: 5%;
            justify-content: space-between;
        }

        .table-section{
            flex: 1;
        }

        .form-section{
            flex: 2;
        }
          </style>
        <div class="crud">
              <section class="table-section">
                <slot name="table"></slot>
              </section>
              <section class="form-section">
                <slot name="form"></slot>  
              </section>
        </div>
        
        `
  }
}

customElements.define('crud-component', Crud)
