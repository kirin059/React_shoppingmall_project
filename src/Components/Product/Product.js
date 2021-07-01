import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';
import './Product.scss';

const Product = (props) => {
    let history = useHistory();

    return (
        <>
        <div className="sort_product">
            <p onClick={ () => {props.dispatch({type: 'sortHighPrice'})} }>높은금액순</p>
            <p onClick={ () => {props.dispatch({type: 'sortLowPrice'})} }> 낮은금액순</p>
            <p onClick={ () => {props.dispatch({type: 'sortPopularPrice'})} }> 인기순</p>
        </div>
        <div className="row">
            
            {
                props.state.map((a, i) => {
                    return (
                        <div className="col-md-4" key={i} onClick={()=>{ history.push('/detail/' + props.state[i].id) }}>
                            <img src={"https://codingapple1.github.io/shop/shoes" + (props.state[i].id+1) + ".jpg"} width="100%" />
                            <h4> { props.state[i].title } </h4>
                            <p> {props.state[i].content} & {props.state[i].price} </p>
                            <p> 재고: { props.lestState[i] }</p>
                        </div>
                    )
                })
            }

            <button className="btn btn-primary moreBtn" onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                    props.dispatch({ type: 'addList', payload: result.data })
                })
                .catch(() => {
                    console.log('failure')
                  })
            }} >더보기</button>
           
            </div>
            </>
    );
};

function shoeProps(state) {
    return {
        state: state.reducer,
        lestState: state.reducer2,
        cartState: state.reducer3
    }
}
export default connect(shoeProps)(Product);

