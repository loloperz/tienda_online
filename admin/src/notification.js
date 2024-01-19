class Notification extends HTMLElement {
  constructor () {
    super()

    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('notification', (event) => {
      this.sendNotification()
    })
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
          <style>
        span{
            color: hsl(0, 0%, 100%);
            font-family: 'Roboto', sans-serif;
        }
        .notification.active{
            background-color: #3498db;
            position: absolute;
            bottom: 20px;
            right: 20px;
            opacity: 1;
            transition: opacity 1s ease-in-out;
        }
        .notification{
            opacity:0;
            display:flex;
            align-items:center;
            padding:2em 2em;
        }
          </style>
          <div class="notification">
           <span> El cambio ha sido guardado con exito</span>
          </div>
            
            
        `
  }

  sendNotification () {
    const notification = this.shadow.querySelector('.notification')
    notification.classList.add('active')
    setTimeout(() => {
      notification.classList.remove('active')
    }, 3500)
  }
}

customElements.define('notification-component', Notification)
