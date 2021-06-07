import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="header">
                <h3>Log In</h3>
            </div>
            <div className="info">
                <input placeholder="ID" />
                <input placeholder="PW" />
                <input placeholder="PW확인" />
            </div>
            <button className="btn-danger">LOG IN</button>

            <div className="footer">
                <p>앗🙄! 아직 <strong>Shoes Shop</strong> 회원이 아니십니까?</p>
                <p><Link to="/signup">회원 가입 하러 가기</Link></p>
            </div>
        </div>
    );
};

export default Login;