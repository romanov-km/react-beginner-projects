import React from 'react';
import './index.scss';

function App() {
  //let count = 0;
  const [count, setCount] = React.useState(0); // хук из react
  // два значения сама переменная и функция которая будет обновлять назвать можно хоть как

  const onClickPlus = () => {
    // count++; аналог на js
    console.log(count);
    setCount(count + 1);
  }

  const onClickMinus = () => {
    // count--; аналог на js
    console.log(count);
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
