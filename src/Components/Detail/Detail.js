import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './Detail.scss';
import Tap from '../Tap/Tap'

const Detail = (props) => {
    let history = useHistory();

    let [alert, setAlert] = useState(true)
    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 2000);
        return () => { clearTimeout(timer) }  
    }, [alert])


    let { id } = useParams();
    let productId = props.shoes.find(function(a) {
        return a.id == id;
    });

    let [push, setPush] = useState(0)
    let [switchs, setSwitchs] = useState(false)  //CSSTransition

    // localStorage에 데이터를 저장하고 최근본상품에 활용
    useEffect(() => {
        let arr = localStorage.getItem('watched');
        if (arr) {
            arr = JSON.parse(arr)
        }

        arr.push(id)
        arr = new Set(arr); // 중복제거
        arr = [...arr];
        localStorage.setItem('watched', JSON.stringify(arr));
    },[]);


    return (
        <div className="container">
            <h4> Detail </h4>
            {
                alert === true
                    ? (<div className="my-alert-yellow">
                        <p> 재고가 얼마 남지 않았습니다 </p>
                        </div>)
                    : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + (productId.id+1) + '.jpg'} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5"> {productId.title} </h4>
                    <p> {productId.content} </p>
                    <p> {productId.price}원 </p>
                    <p> 재고: {props.lestState[0]}</p>
                    
                    <button className="btn btn-danger order" onClick={() => {
                        props.dispatch({ type: 'lestSubstract' });
                        props.dispatch({ type: 'cartAdd', payload: {id: productId.id , title: productId.title, quan: 1} });
                        history.push('./cart');
                    }}> 주문하기</button>
                    <button className="btn btn-danger back" onClick={() => { history.push('/') }}>Back</button>
                </div>
            </div>

            <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={() => { setPush(0); setSwitchs(false); }}>상품 정보</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="dink-1" onClick={() => { setPush(1); setSwitchs(false);}}>배송 문의</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="dink-2" onClick={() => { setPush(2); setSwitchs(false);}}>상품평</Nav.Link>
                </Nav.Item>
            </Nav>

            <CSSTransition in={switchs} classNames="effect" timeout={500}>  
                  <Tap push={push} setSwitchs={setSwitchs}/>
            </CSSTransition>
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
export default connect(shoeProps)(Detail); 