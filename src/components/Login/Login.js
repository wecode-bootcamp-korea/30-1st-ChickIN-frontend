import React, { useState } from 'react';
import './Login.scss';

const ID = 'hslee72@gmail.com';
const PW = '1234';

let regExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const updateId = e => {
    setId(e.target.value);
  };

  const updatePw = e => {
    setPw(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (id === ID && pw === PW) {
      return alert('로그인 성공!');
    } else if (!regExp.test(id)) {
      return alert('올바른 이메일 형식이 아닙니다');
    } else if (!regExp.test(id) && pw !== PW) {
      return alert('올바른 이메일 형식이 아닙니다');
    } else if (regExp.test(id) && pw === PW) {
      return alert('등록된 이메일 정보가 없습니다');
    } else if (regExp.test(id) && pw !== PW) {
      return alert('일치하는 회원정보가 없습니다');
    }
  };

  return (
    <div className="Login">
      <div className="login-header">
        <div className="login-button-close" />
        <div className="login-title">로그인 및 회원가입</div>
      </div>
      <div className="login-body">
        <div className="welcome-text">
          <p>안녕하세요,</p>
          <p>회원가입하고 ChickIN 혜택을 받으세요</p>
        </div>
        <form className="form-login" method="post" action="">
          <div className="login-form-wrapper">
            <div className="login-user-id">
              <input
                type="email"
                className="login-id-input"
                placeholder="이메일"
                onChange={updateId}
              />
            </div>
            <div className="login-user-pw">
              <input
                type="password"
                className="login-pw-input"
                placeholder="비밀번호"
                onChange={updatePw}
              />
            </div>
            <button
              type="submit"
              className="button-login"
              onClick={submitHandler}
            >
              로그인 하기
            </button>
          </div>
          <a href="/sign-up" className="sign_up-button">
            ChickIN 계정이 없으신가요? 계정을 만드세요!
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
