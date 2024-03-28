import './styles/App.scss'

function App() {

  return (
    <div className='phone'>
      {/* 상위 메뉴 */}
      <header className="header">
        <ul className="header__list">
          <li className="header__list-item header__list-item--inverted">All</li>
          <li className="header__list-item">Advertising</li>
          <li className="header__list-item">Dev & Data Science</li>
          <li className="header__list-item">Graphic Design</li>
          <li className="header__list-item">Ios Development</li>
        </ul>
      </header>
      {/* 카드 섹션 */}
      <div className="cards">
        <div className="cards__card">
          <h2 className="card__title">The Making of Modern...</h2>
          <div className="card__footer">
            <div className="price">Free</div>
            <div className="length">2</div>
          </div>
        </div>
        <div className="cards__card">
          <h2 className="card__title">Movile Interfaces Advanced</h2>
          <div className="card__footer">
            <div className="price">Free</div>
            <div className="length">2</div>
          </div>
        </div>
        <div className="cards__card">
          <h2 className="card__title">Graphic Design. Professium</h2>
          <div className="card__footer">
            <div className="price">$199 / month</div>
            <div className="length">9 months</div>
          </div>
        </div>
        <div className="cards__card">
          <h2 className="card__title">Web Design Junior</h2>
          <div className="card__footer">
            <div className="price">Free</div>
            <div className="length">3</div>
          </div>
        </div>
        <div className="cards__card">
          <h2 className="card__title">Inclusive Web Design</h2>
          <div className="card__footer">
            <div className="price">$99 / month</div>
            <div className="length">3</div>
          </div>
        </div>
        <div className="cards__card">
          <h2 className="card__title">Machine Learning</h2>
          <div className="card__footer">
            <div className="price">$59 / month</div>
            <div className="length">3 months</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
