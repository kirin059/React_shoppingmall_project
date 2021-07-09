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

const shoeState = Data;
const lestState = [10, 11, 12, 13, 14, 15, 16];
const cartState = [];

// 기본 상품 데이터
function reducer(state=shoeState, action) {
  if (action.type === 'addList') {
    const setShoes = [...state, ...action.payload]
    return setShoes
  }
  else if (action.type === 'sortHighPrice') {
    const copy = [...state];
    copy.sort(function (a, b) {
      return b.price - a.price;
    });
    return copy
  }
  else if (action.type === 'sortLowPrice') {
    const copy = [...state];
    copy.sort(function (a, b) {
      return a.price - b.price;
    });
    return copy
  }
  else if (action.type === 'sortPopularPrice') {
    const copy = [...state];
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
    const setLest = [...lestState];
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
    const found = state.findIndex((a) => { return a.id === action.payload.id })
    
    if (found >= 0) {
      const setCart = [...state];
      //setCart[found] = action.payload;
      setCart[found].quan++;
      return setCart;
    }
    else{
      const setCart =[...state];
      setCart.push(action.payload)
      return setCart;
    }
  }

  // cart에 수량증감
  else if (action.type === 'plus') {
    const setCart = [...state];

    console.log(setCart)  // [{id: 1, title: "" , quan: 1}, {id: 5, title:""}, {id: 3, title:""}]
    
    const copy = setCart.findIndex((e, i) => e.id === action.payload );
    console.log(copy) 
    setCart[copy].quan++;
  
    
// 아마 지금 수량증가/감소 기능은 id가 2인 상품의 +/- 버튼을 누르면
// state에서 2번째 들어있는 상품을 수정하라고 간단히 개발해놔서 그렇습니다 
// 2번째 말고 id가 2인 상품을 수정하라고 개발해놓으면 되겠군요 
    return setCart
  }
    
    
    

  else if (action.type === 'substract') {
    const setCart = [...state];
    const copy = setCart.findIndex((e, i) => e.id === action.payload );
    
    if (setCart[copy].quan > 0) {
      
      setCart[copy].quan--;
      return setCart
    }
    else {
      return setCart
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
