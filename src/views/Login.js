import React, { useState } from "react";

import googleIcon from '../assets/images/icons/google.svg';
import facebookIcon from '../assets/images/icons/facebook.svg';

const Login = () => {
  return (
    <div>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-55">
                Login
          </span>

              <div className="wrap-input100 validate-input m-b-16" data-validate="Digite um email válido: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i class="far fa-envelope"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input m-b-16" data-validate="A senha é obrigatória">
                <input className="input100" type="password" name="pass" placeholder="Senha" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i class="fas fa-unlock"></i>
                </span>
              </div>

              <div className="contact100-form-checkbox m-l-4">
                <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                <label className="label-checkbox100" htmlFor="ckb1">
                  Lembre de mim
            </label>
              </div>

              <div className="container-login100-form-btn p-t-25">
                <button className="login100-form-btn">
                  Login
            </button>
              </div>

              <div className="text-center w-full p-t-42 p-b-22">
                <span className="txt1">
                  Ou faça login com
            </span>
              </div>

              <a href="#" className="btn-face m-b-10">
                <i class="fab fa-facebook-square"></i>
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