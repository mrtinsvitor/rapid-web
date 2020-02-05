import React, { useState } from "react";

import googleIcon from '../assets/images/icons/google.svg';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidLogin, setInvalidLogin] = useState(false);

  function login() {
    if (!email || !password) {
      return setInvalidLogin(true);
    }

    return props.history.push('/eventos')
  }

  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-55">
                Área do Professor
              </span>

              {invalidLogin &&
                <div style={{ margin: '0 auto', marginBottom: '5px' }}>
                  <span style={{ color: 'red' }}>E-mail ou senha inválidos</span>
                </div>
              }

              <div className="wrap-input100 validate-input m-b-16">
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="far fa-envelope"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input m-b-16">
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Senha"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fas fa-unlock"></i>
                </span>
              </div>

              <div className="contact100-form-checkbox m-l-4">
                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Lembre de mim
                </label>
              </div>

              <div className="container-login100-form-btn p-t-25">
                <button className="login100-form-btn" type="button" onClick={(e) => login(e)}>
                  Login
                </button>
              </div>

              <div className="text-center w-full p-t-42 p-b-22">
                <span className="txt1">
                  Ou faça login com
                </span>
              </div>

              <a href="#" className="btn-face m-b-10">
                <i className="fab fa-facebook-square"></i>
                Facebook
              </a>

              <a href="#" className="btn-google m-b-10">
                <img src={googleIcon} alt="GOOGLE" />
                Google
              </a>

              <div className="text-center w-full p-t-115">
                <span className="txt1">
                  Ainda não é cadastrado?
                </span>

                <a className="txt1 bo1 hov1" href="#">
                  Cadastre-se agora
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;