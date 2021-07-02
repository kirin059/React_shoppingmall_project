import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './LastProduct.scss';

const LastProduct = (props) => {
    let [late, setLate] = useState([]);

    useEffect(() => {
        let info = localStorage.getItem('items');
        //console.log(info)
        if (info == null) {
            info = []
        }
        else {
            info = JSON.parse(info);
            console.log(info)
        }
        // console.log(info)
        // late.push(info)
        // console.log(late)
        // //late = new Set(info);
        // late = [...late]
        setLate(info)
        
        // info.push(info)
        // info = new Set(info); // 중복제거
        // info = [...info];      
    }, []);
  console.log(late)
    
    return (
        <div className="LastProduct">
            <div className="LastProduct_title">최근 본 상품</div>
            <ul>
                {
                    late.map((a, i) => {
                        return (
                            <li key={i}><img src={late[i].img} /></li>
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
