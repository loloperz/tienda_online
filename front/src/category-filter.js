class CategoryFilter extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
    await this.updateArrowVisibility()
  }

  async loadData () {
    this.categories = [
      {
        id: 1,
        title: 'Acción',
        backgroundColor: '#ff5c6b'
      },
      {
        id: 2,
        title: 'Arcade',
        backgroundColor: '#d59040'
      },
      {
        id: 3,
        title: 'Aventura',
        backgroundColor: '#8d8d34'
      },
      {
        id: 4,
        title: 'Puzzles',
        backgroundColor: '#6bc57f'
      },
      {
        id: 5,
        title: 'Rol',
        backgroundColor: '#ff8590'
      },
      {
        id: 6,
        title: 'Construcción',
        backgroundColor: '#843a3a'
      },
      {
        id: 7,
        title: 'Deportes',
        backgroundColor: '#64b4d8'
      },
      {
        id: 8,
        title: 'Simuladores de carrera',
        backgroundColor: '#8e50bc'
      },
      {
        id: 9,
        title: 'Lucha',
        backgroundColor: '#4246cb'
      },
      {
        id: 10,
        title: 'Terror',
        backgroundColor: '#208240'
      },
      {
        id: 11,
        title: 'Cooperativos',
        backgroundColor: '#b36215'
      },
      {
        id: 12,
        title: 'Shooter',
        backgroundColor: '#ff5c6b'
      },
      {
        id: 13,
        title: 'Terror',
        backgroundColor: '#208240'
      },
      {
        id: 14,
        title: 'Cooperativos',
        backgroundColor: '#b36215'
      }
    ]
  }

  updateArrowVisibility () {
    const slider = this.shadow.querySelector('.slider')
    const leftArrow = this.shadow.querySelector('.left-arrow')
    const rightArrow = this.shadow.querySelector('.right-arrow')

    const isScrollable = slider.scrollWidth > slider.clientWidth

    slider.style.justifyContent = isScrollable ? 'flex-start' : 'center'
    leftArrow.style.display = isScrollable ? 'block' : 'none'
    rightArrow.style.display = isScrollable ? 'block' : 'none'
  }

  render () {
    this.shadow.innerHTML =
    /* html */`
    <style>
      :host {
        margin: 0 2rem;
      }

      .slider-container {
        height: 100px;
        position: relative;
        width: 100%;
      }

      .slider {
        display: flex;
        gap: 1rem;
        height: 100%;
        margin: 0 3%;
        overflow-x: auto;
        scroll-behavior: smooth;
        -ms-overflow-style: none;  
        scrollbar-width: none;  
      }

      .slider::-webkit-scrollbar {
        display: none;  
      }

      .category {
        align-items: center;
        border-radius: 1rem;
        box-shadow: inset 0 0 1rem hsl(0deg 0% 0%);
        cursor: pointer;
        display: flex;
        flex: 0 0 100px;
        justify-content: center;
        padding: 0 1rem;
      }

      .category:hover {
        filter: brightness(1.2);
      }

      .category h2 {
        color: hsl(0, 0%, 100%);
        font-family: 'Ubuntu', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
      }

      .slide-arrow {
        background: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .slide-arrow svg{
        height: 2.5rem;
        width: 2.5rem;
      }

      .slide-arrow svg path{
        fill: hsl(0deg 0% 69.29%);
      }

      .left-arrow {
        left: 0;
      }

      .right-arrow {
        right: 0;
      }
    </style>

    <div class="slider-container">
      <button class="slide-arrow left-arrow">
        <svg viewBox="0 0 24 24">
          <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M7,12L12,17V14H16V10H12V7L7,12Z" />
        </svg>
      </button>
      <div class="slider"></div>
      <button class="slide-arrow right-arrow">
        <svg viewBox="0 0 24 24">
          <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M17,12L12,7V10H8V14H12V17L17,12Z" />
        </svg>
      </button>
    </div>
    `

    const sliderContainer = this.shadow.querySelector('.slider-container')
    const slider = this.shadow.querySelector('.slider')

    const categoryElement = document.createElement('div')
    categoryElement.classList.add('category')
    categoryElement.style.backgroundColor = '#504e4e'
    categoryElement.dataset.endpoint = 0
    categoryElement.innerHTML = '<h2>Todos</h2>'
    slider.appendChild(categoryElement)

    this.categories.forEach(category => {
      const categoryElement = document.createElement('div')
      categoryElement.classList.add('category')
      categoryElement.style.backgroundColor = category.backgroundColor
      categoryElement.dataset.endpoint = category.id
      categoryElement.innerHTML = `<h2>${category.title}</h2>`
      slider.appendChild(categoryElement)
    })

    sliderContainer.addEventListener('click', event => {
      if (event.target.closest('.left-arrow')) {
        this.slideLeft()
      }

      if (event.target.closest('.right-arrow')) {
        this.slideRight()
      }

      if (event.target.closest('.category')) {
        document.dispatchEvent(new CustomEvent('category-selected', {
          detail: event.target.closest('.category').dataset.endpoint
        }))
      }
    })
  }

  slideLeft () {
    const slider = this.shadow.querySelector('.slider')
    slider.scrollBy({ left: -600, behavior: 'smooth' })
  }

  slideRight () {
    const slider = this.shadow.querySelector('.slider')
    slider.scrollBy({ left: 600, behavior: 'smooth' })
  }
}

customElements.define('category-filter-component', CategoryFilter)
