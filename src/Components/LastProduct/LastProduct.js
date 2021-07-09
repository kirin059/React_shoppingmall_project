import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './LastProduct.scss';

const LastProduct = (props) => {
    const [late, setLate] = useState([]);

    useEffect(() => {
        const info = localStorage.getItem('items');
        if (info == null) {
            info = []
        }
        else {
            info = JSON.parse(info);
            console.log(info)
            //info = parseInt(info)
            setLate(info)
        }
        console.log(info)
    }, []);
    console.log(late)
    console.log(setLate)
    return (
        <div className="LastProduct">
            <div className="LastProduct_title">최근 본 상품</div>
            <ul>
                {
                    late.map((a, i) => {
                        return (
                            <li key={i}><img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(late[i])+1) + ".jpg"} /></li>
                        )
                    })
                }               
            </ul>   
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
export default connect(shoeProps)(LastProduct);
