class Filter extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('openModalFilter', (event) => {
      this.openModal()
    })

    this.render()
  }

  render () {
    this.shadow.innerHTML =
        /* html */
        `
          <style>
            
         .filter {
             align-items: center;
             background-color: hsl(0, 0%, 100%);
             display: flex;
            justify-content: center;
            margin-bottom: 2rem;
            padding: 0.2rem 0;
            z-index: 2999;
                }

        .filter-button button svg {
            width: 2rem;
            }

        .filter-button button svg path {
            fill: hsl(207, 85%, 69%);
        }

        .filter-button button:hover svg path {
            fill: hsl(34, 79%, 53%);
        }

        .filter-modal {
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
            z-index: 3000;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s;
            }

        .filter-modal.active {
            opacity: 1;
             visibility: visible;
            }

        .filter-form {
            background-color: hsl(219, 77%, 46%);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1em 2em;
            border: 5px solid white;
        }

        .filter-title span {
            text-align: center;
            text-transform: uppercase;
        }

        .filter-buttons {
            display: flex;
            gap: 0.6em;
        }

        .filter-buttons .confirm {
            background-color: green;
            padding: 0.5em 0.5em;
            width: 50%;
            }

        .filter-buttons .cancel {
            background-color: red;
            padding: 0.5em 0.5em;
            width: 50%;
        }
        .form-element {
            display: flex;
            flex: 1;
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1rem;
            }

        .form-element-label label {
            font-weight: 700;
            }

        .form-element-input * {
            background-color: hsl(226, 64%, 66%);
            border: none;
            box-sizing: border-box;
            font-size: 1rem;
            height: 2rem;
            outline: transparent;
            padding: 0.5rem;
            width: 100%;
            }

        .form-element-input input[type="number"]::-webkit-outer-spin-button,
        .form-element-input input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
            }

        .form-element-input input[type="date"]::-webkit-calendar-picker-indicator,
        .form-element-input input[type="time"]::-webkit-calendar-picker-indicator {
            filter: invert(1);
            }

        .form-element-input textarea {
            height: 20vh;
            resize: none;
            }
        input,
        label,
        select,
        textarea,
        li,
        span,
        p ,
        button{
            color: hsl(0, 0%, 100%);
            font-family: 'Roboto', sans-serif;
            } 
        button {
            background: transparent;
            border: none;
            cursor: pointer;
            }  
        </style>
           <div class="filter-modal">
                <div class="filter-form">
                    <div class="filter-title">
                        <span>filtraje de tabla</span>
                    </div>
                    <div class="form-element">
                        <div class="form-element-label">
                            <label for="name">
                                Nombre
                            </label>
                        </div>
                        <div class="form-element-input">
                            <input type="text">
                        </div>
                    </div>
                    <div class="form-element">
                        <div class="form-element-label">
                            <label for="email">
                                Email
                            </label>
                        </div>
                        <div class="form-element-input">
                            <input type="text">
                        </div>
                    </div>

                    <div class="filter-buttons">
                        <button class="confirm">filtrar</button>
                        <button class="cancel">cancelar </button>
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
    const filterModal = this.shadow.querySelector('.filter-modal')
    filterModal.classList.add('active')
  }

  closeModal () {
    const filterModal = this.shadow.querySelector('.filter-modal')
    filterModal.classList.remove('active')
  }
}

customElements.define('filter-component', Filter)
