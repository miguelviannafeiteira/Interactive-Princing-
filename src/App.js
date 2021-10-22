import React, { useState } from 'react';
import './App.css';
import check from './images/icon-check.svg';

function App() {
  const [pageview, setPageviews] = useState('10');
  const [money, setMoney] = useState('16');
  const [pagamento, setPagamentos] = useState('');

  function handleInput({ target }) {
    setPageviews(+target.value);
    const page = +target.value;

    if (page < 5) {
      setMoney('8,00');
    } else if (page < 10) {
      setMoney('12,00');
    } else if (page < 50) {
      setMoney('16,00');
    } else if (page < 100) {
      setMoney('24,00');
    } else if (page === 100) {
      setMoney('36,00');
    }

    if (pagamento === 'anuidade') {
      if (page < 5) {
        setMoney('6,00');
      } else if (page < 10) {
        setMoney('9,00');
      } else if (page < 50) {
        setMoney('12,00');
      } else if (page < 100) {
        setMoney('18,00');
      } else if (page === 100) {
        setMoney('27,00');
      }
    }
  }
  function handleMove({ target }) {
    const x = target.value;
    let color =
      'linear-gradient(90deg,hsl(174, 77%, 80%)' +
      x +
      '%, rgb(214, 214, 214)' +
      x +
      '% )';
    target.style.background = color;
  }

  return (
    <div className="bg">
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <p>sign-up for our 30-day trial. No credit car required</p>
      </header>
      <section className="container">
        <div className="first">
          <p id="value">{pageview}0K PAGEVIEWS</p>{' '}
          <h2>
            ${money}
            <p className="month">/month</p>
          </h2>
        </div>

        <div className="slideContainer">
          <input
            type="range"
            min="1"
            max="100"
            className="slider"
            id="myRange"
            onInput={handleInput}
            onMouseMove={handleMove}
            list="steplist"
          />
        </div>

        <div className="biling">
          <div>
            <p>Monthly biling</p>
            {pagamento === 'mensalidade' ? (
              <label
                className="custom-radio-btn"
                style={{ background: 'hsl(174, 86%, 45%)' }}
              >
                <input
                  id="mes"
                  type="radio"
                  name="sample"
                  checked={pagamento === 'mensalidade'}
                  value="mensalidade"
                  onChange={({ target }) => setPagamentos(target.value)}
                />
                <span className="checkmark"></span>
              </label>
            ) : (
              <label className="custom-radio-btn">
                <input
                  id="mes"
                  type="radio"
                  name="sample"
                  checked={pagamento === 'mensalidade'}
                  value="mensalidade"
                  onChange={({ target }) => setPagamentos(target.value)}
                />
                <span className="checkmark"></span>
              </label>
            )}
          </div>

          <div>
            <p>Yearly biling</p>
            {pagamento === 'anuidade' ? (
              <label
                className="custom-radio-btn"
                style={{ background: 'hsl(174, 86%, 45%)' }}
              >
                <input
                  name="sample"
                  id="ano"
                  type="radio"
                  checked={pagamento === 'anuidade'}
                  value="anuidade"
                  onChange={({ target }) => setPagamentos(target.value)}
                />
                <span className="checkmark"></span>
                <p>25% discount</p>
              </label>
            ) : (
              <label className="custom-radio-btn">
                <input
                  name="sample"
                  id="ano"
                  type="radio"
                  checked={pagamento === 'anuidade'}
                  value="anuidade"
                  onChange={({ target }) => setPagamentos(target.value)}
                />
                <span className="checkmark"></span>
                <p>25% discount</p>
              </label>
            )}
          </div>
        </div>

        <footer>
          <div>
            <p>
              {' '}
              <img src={check} className="img" /> Unlimited website
            </p>
            <p>
              <img src={check} className="img" />
              100% data ownership
            </p>
            <p>
              <img src={check} className="img" />
              Email reports
            </p>
          </div>
          <button>Start my trial</button>
        </footer>
      </section>
    </div>
  );
}

export default App;
