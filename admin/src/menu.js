class Menu extends HTMLElement {
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

          button{
            background: none;
            border: none;
            cursor: pointer;
          }
          
          .menu-button {
            position: relative;
            z-index: 3001;
          }

          .menu-button button svg {
            width: 3rem;
          }

          .menu-button button svg path {
            fill: hsl(0, 0%, 100%);
          }

          .menu {
            background-color: hsl(19, 63%, 45%);
            position: fixed;
            top: -100vh;
            left: 0;
            width: 100%;
            height: 100%;
            transition: top 0.3s;
            z-index: 3000;
          }

          .menu.active {
            top: 0;
          }
        </style>
          
          
        <div class="menu-button">
          <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>menu</title>
                  <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </svg>
          </button>
        </div>
        <div class="menu"></div>
      `

    const menu = this.shadow.querySelector('.menu')
    const menuButton = this.shadow.querySelector('.menu-button')

    menuButton.addEventListener('click', () => {
      menu.classList.toggle('active')
    })
  }
}

customElements.define('menu-component', Menu)
