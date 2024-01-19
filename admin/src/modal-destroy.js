class ModalDestroy extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('openModalDestroy', (event) => {
      this.openModal()
    })
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
          <style>
        * {
        margin: 0;
        padding: 0;
        }

        button {
            background: transparent;
            border: none;
            cursor: pointer;
        }

        a {
            text-decoration: none;
        }

        ul {
            list-style: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: hsl(0, 0%, 100%);
            font-family: 'Roboto', sans-serif;
        }

        input,
        label,
        select,
        textarea,
        li,
        span,
        p {
            color: hsl(0, 0%, 100%);
            font-family: 'Roboto', sans-serif;
        }
        .delete-modal {
            background-color: hsla(0, 7%, 3%, 0.5);
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            opacity: 0;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 3003;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s;
        }

        .delete-modal.active {
            opacity: 1;
            visibility: visible;
        }

        .delete-form {
            background-color: hsl(219, 77%, 46%);
            display: flex;
            flex-direction: column;
            gap: 0.8em;
            border: 5px solid white;
            padding: 1em 2em;

        }

        .delete-title span {
            text-align: center;
            text-transform: uppercase;
        }

        .delete-buttons {
            display: flex;
            text-transform: uppercase;
            gap: 0.6em;

        }

        .delete-buttons .confirm {
            background-color: green;
            padding: 0.5em 0.5em;
            width: 50%;
        }

        .delete-buttons .cancel {
            background-color: red;
            padding: 0.5em 0.5em;
            width: 50%;
        }
           
          </style>
            <div class="delete-modal">
            <div class="delete-form">
                <div class="delete-title">
                    <span>quieres eliminar este registro?</span>
                </div>
                <div class="delete-buttons">
                    <button class="confirm">si</button>
                    <button class="cancel">no </button>
                </div>

                </div>
            </div>
        `
    const cancelButton = this.shadow.querySelector('.cancel')

    cancelButton.addEventListener('click', async (event) => {
      this.closeModal()
    })
  }

  openModal () {
    const deleteModal = this.shadow.querySelector('.delete-modal')
    deleteModal.classList.add('active')
  }

  closeModal () {
    const deleteModal = this.shadow.querySelector('.delete-modal')
    deleteModal.classList.remove('active')
  }
}

customElements.define('modal-destroy-component', ModalDestroy)
