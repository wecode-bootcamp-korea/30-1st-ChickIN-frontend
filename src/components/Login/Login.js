import React, { useState } from 'react';
import './Login.scss';

const ID = 'heesoo';
const PW = '1234';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const idHandler = e => {
    setId(e.target.value);
  };

  const pwHandler = e => {
    setPw(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (id === ID && pw === PW) {
      alert('로그인 성공');
    } else {
      alert('일치하는 회원정보가 없습니다.');
    }
  };

  return (
    <div className="member-service-container">
      <div clssName="login-header">
        <div className="login-button-close" />
        <div className="login-title">안녕하세요</div>
      </div>
      <div className="login-body">
        <div className="welcome-text">
          <p>안녕하세요,</p>
          <p>회원가입하고 ChickIN 혜택을 받으세요</p>
        </div>
        <form id="form-login" method="post" action="">
          <div className="login-form-wrapper">
            <div className="login-user-id">
              <input
                type="text"
                id="login-id"
                name="login-id"
                placeholder="아이디"
                onChange={idHandler}
              />
            </div>
            <div className="login-user-pw">
              <input
                typs="text"
                id="login-pw"
                name="login-pw"
                placeholder="비밀번호"
                onChange={pwHandler}
              />
            </div>
            <button
              type="submit"
              id="button-login"
              class="button-login"
              onClick={submitHandler}
            >
              로그인 하기
            </button>
            <p>
              {/* 계정이 없으신가요?<a href=회원가입 페이지 컴포넌트 >회원가입</a>  */}
              {/* 링크로 변경하기 */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
