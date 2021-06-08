import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Data from './data';

let shoeState = Data;
let lestState = [10, 11, 12, 13, 14, 15, 16];
let cartState = [{ id: 0, title: 'nike', quan: 0 }];

function reducer(state=shoeState, action) {
  console.log(state)
  // ajax 요청을 통해 추가 데이터 받아오기(더보기 기능)
  if (action.type === 'addList') {
    let setShoes = [...state, ...action.payload]
    return setShoes
  }
  else {
    return state
  }
}

function reducer2(state=lestState, action) {
  if (action.type === 'lestSubstract') {
    let setLest = [...lestState];
    setLest = [9,10,11,12,13,14,15]
    return setLest
  }
  else {
    return state
  }
}

function reducer3(state = cartState, action) {
   // cart - 수량변경(+) 버튼
  if (action.type === 'plus') {
    let setCart = [...state]
    setCart[action.payload].quan++;
    return setCart
  }
  // cart - 수량변경(-) 버튼
  else if (action.type === 'substract') {
    let setCart = [...state]
    setCart[action.payload].quan--;
    return setCart
  }
  // detail - 장바구니 버튼 누르면 cart에 추가
  if (action.type === 'cartAdd') {
    let found = state.findIndex((a) => { return a.id === action.payload.id })
    
    if (found >= 0) {
      let setCart =[...state];
      setCart[found].quan++;
      return setCart;
    }
    else{
      let setCart =[...state];
      setCart.push(action.payload)
      return setCart;
    }

  }
  else {
    return state
  }
}

const store = createStore(combineReducers( { reducer, reducer2, reducer3 } ));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorkerRegistration.unregister();

reportWebVitals();
