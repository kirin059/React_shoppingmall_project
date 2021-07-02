import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './LastProduct.scss';

const LastProduct = (props) => {
    let [late, setLate] = useState({
        id: "",
        img: null,
        title: "",
        content: "",
        price: "",
    })

    useEffect(() => {
        let info = localStorage.getItem('items');
        if (info == null) {
            info = []
        }
        else {
            info = JSON.parse(info);
        }
           
        setLate(info)
        // info.push(info)
        // info = new Set(info); // 중복제거
        // info = [...info];
        
    }, []);
    
    return (
        <div className="LastProduct">
            <div className="LastProduct_title">최근 본 상품</div>
            <ul>
                {
                    late.map((a, i) => {
                        return(
                            <li key={i}>
                                <img src={late[i].img} />
                            </li>
                    )})
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
