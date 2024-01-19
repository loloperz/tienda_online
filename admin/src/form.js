class Form extends HTMLElement {
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
        * {
            margin: 0;
            padding: 0;
            }

        button {
            background: transparent;
            border: none;
            cursor: pointer;
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
        
        .form {
            flex: 2;

            }

        .tab.active {
            visibility: 0;
            opacity: 0;
            }

        .form-top-bar {
            background-color: hsl(0, 0%, 100%);
            display: flex;
            justify-content: space-between;
            gap: 0.5rem;
            margin-bottom: 1rem;
            padding-right: 0.5rem;
            
            
            }

        .tabs {
            display: flex;
            justify-content: flex-start;
            }

        .form {
                flex: 2;
                
                }


        .form-clean-button button svg,
        .form-save-button button svg {
            width: 2rem;

            }

        .form-clean-button button svg path,
        .form-save-button button svg path {
            fill: hsl(207, 85%, 69%);
            }

        .form-clean-button button:hover svg path,
        .form-save-button button:hover svg path {
            fill: hsl(34, 79%, 53%);
            }

        .tab-content {
            display: none;
            }

        .tab-content.active {
            display: block;
            }

        .form-row {
            display: flex;
            gap: 2rem;
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
        .form-buttons {
            display: flex;
             justify-content: flex-end;
            }
        .tab-button {
            padding: 0.5em 1em;

                }

        .tab-button.active {
            background-color: hsl(204, 75%, 36%);
            color: hsl(180, 100%, 97%);
                }
        .validate.invalid {
            border-bottom: 1px solid red;
                }
       
          </style>
        
            <section class="form">
                <div class="form-top-bar">
                    <div class="tabs">
                        <button class="tab-button active" data-tab="main">
                            principal
                        </button>
                        <button class="tab-button" data-tab="image">
                            imagenes
                        </button>
                    
                    </div>

                    <div class="form-buttons">
                        <div class="form-clean-button">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <title>broom</title>
                                    <path
                                        d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" />
                                </svg>
                            </button>

                        </div>
                        <div class="form-save-button">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <title>content-save</title>
                                    <path
                                        d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <form class="form-tabs">
                    <div class="tab-content active" data-tab="main">
                        <div class="form-row">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label for="name">
                                        Nombre
                                    </label>
                                </div>
                                <div class="form-element-input">
                                    <input type="text"  class="validate" data-onlyletters>
                                </div>
                            </div>
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label for="email">
                                        Email
                                    </label>
                                </div>
                                <div class="form-element-input">
                                    <input type="email" class="validate" data-email>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label for="password">
                                        Contraseña
                                    </label>
                                </div>
                                <div class="form-element-input">
                                    <input type="password" class="validate" data-minlength=8>
                                </div>
                            </div>
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label for="confirmar-password">
                                        Repetir contraseña
                                    </label>
                                </div>
                                <div class="form-element-input">
                                    <input type="password" class="validate" data-minlength=8>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content" data-tab="image">
                        <div class="form-row">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label for="avatar">
                                        Avatar
                                    </label>
                                </div>
                                <div class="form-element-input">
                                    <input type="file">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
       
        `

    const formSection = this.shadow.querySelector('.form')

    formSection.addEventListener('input', (event) => {
      if (event.target.closest('[data-minlength')) {
        const input = event.target.closest('[data-minlength')

        if (input.value.length < input.dataset.minlength) {
          input.classList.add('invalid')
        } else {
          input.classList.remove('invalid')
        }
      }

      if (event.target.closest('[data-onlyletters')) {
        const onlyletters = event.target.closest('[data-onlyletters]')

        const letters = /^[A-Za-z\s]+$/

        if (!event.target.value.match(letters)) {
          onlyletters.classList.add('invalid')
        } else {
          onlyletters.classList.remove('invalid')
        }
      }
      if (event.target.closest('[data-email')) {
        const onlyEmail = event.target.closest('[data-email]')

        const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (!event.target.value.match(email)) {
          onlyEmail.classList.add('invalid')
        } else {
          onlyEmail.classList.remove('invalid')
        }
      }
    })

    formSection.addEventListener('click', async (event) => {
      if (event.target.closest('.form-save-button')) {
        document.dispatchEvent(new CustomEvent('notification'))
      }

      if (event.target.closest('.tab-button')) {
        const tab = event.target.closest('.tab-button')
        tab.parentElement.querySelector('.active').classList.remove('active')
        tab.classList.add('active')

        tab.closest('section').querySelector('.tab-content.active').classList.remove('active')
        tab.closest('section').querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active')
      }
    })
  }
}

customElements.define('form-component', Form)
