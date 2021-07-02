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
let cartState = [];

// 기본 상품 데이터
function reducer(state=shoeState, action) {
  if (action.type === 'addList') {
    let setShoes = [...state, ...action.payload]
    return setShoes
  }
  else if (action.type === 'sortHighPrice') {
    let copy = [...state];
    copy.sort(function (a, b) {
      return b.price - a.price;
    });
    return copy
  }
  else if (action.type === 'sortLowPrice') {
    let copy = [...state];
    copy.sort(function (a, b) {
      return a.price - b.price;
    });
    return copy
  }
  else if (action.type === 'sortPopularPrice') {
    let copy = [...state];
    copy.sort(function (a, b) {
      return a.id - b.id;
    });
    return copy
  }
  else {
    return state
  }
}

// 재고 변경 데이터
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

// cart 데이터
function reducer3(state = cartState, action) {
  // 주문하기 누르면 cart에 항목 추가
  if (action.type === 'cartAdd') {
    let found = state.findIndex((a) => { return a.id === action.payload.id })
    
    if (found >= 0) {
      let setCart = [...state];
      //setCart[found] = action.payload;
      setCart[found].quan++;
      return setCart;
    }
    else{
      let setCart =[...state];
      setCart.push(action.payload)
      return setCart;
    }
  }

  // cart에 수량증감
  else if (action.type === 'plus') {
    let setCart = [...state]
    //console.log(setCart)
    setCart[action.payload].quan++;
    return setCart
  }

  else if (action.type === 'substract') {
    let setCart = [...state]
    
    if (setCart[action.payload].quan > 0) {  
      setCart[action.payload].quan--;
      return setCart
    }
    else {
      return 0
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
