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
                <input placeholder="PWνμΈ" />
            </div>
            <button className="btn-danger">LOG IN</button>

            <div className="footer">
                <p>μπ! μμ§ <strong>Shoes Shop</strong> νμμ΄ μλμ­λκΉ?</p>
                <p><Link to="/signup">νμ κ°μ νλ¬ κ°κΈ°</Link></p>
            </div>
        </div>
    );
};

export default Login;