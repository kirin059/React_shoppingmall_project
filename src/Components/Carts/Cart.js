import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Cart.scss';

const Cart = (props) => {
    let [alert, setAlert] = useState(true);
    console.log(props.cartState)
    console.log(props.state)
    return (
        <div className="cart">
            <Table>
                <thead>
                    <tr>
                        <th>index</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.cartState.map((a, i) => {
                        return (
                            <tr key={i}>
                                <td> { props.cartState[i].id }</td>
                                <td> { props.cartState[i].title} </td>
                                <td> { props.cartState[i].quan } </td>
                                <td>
                                    <button class="btn" onClick={() => {
                                        props.dispatch({ type: 'plus', payload: props.cartState.id })
                                    }}>+</button>
                                    <button class="minusBtn btn" onClick={() => {
                                        props.dispatch({ type: 'substract', payload: props.cartState.id })
                                    }}>-</button>
                                </td>
                            </tr>
                        )
                    })
                }
               
                </tbody>
            </Table>

            {
                alert === true
                ?(<div className="my-alert">
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={() => { setAlert(false) }}>닫기</button>
                </div>)
                : null
            }

        </div>
    );
};

function shoeProps(state) {
    return {
        state: state.reducer,
        lestState: state.reducer2,
        cartState: state.reducer3
    }
}
export default connect(shoeProps)(Cart); 