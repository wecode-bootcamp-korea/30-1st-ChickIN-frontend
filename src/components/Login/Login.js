import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const updateId = e => {
    setIdValue(e.target.value);
  };
  const updatePw = e => {
    setPwValue(e.target.value);
  };
  const fetchLogin = e => {
    e.preventDefault();

    fetch(API.login, {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('token', result.access_token);
          alert('로그인 성공!');
          navigate('/Main');
        } else {
          alert('가입된 회원 정보가 없습니다');
        }
      });
  };
  return (
    <div className="login">
      <div className="login_header">
        <div className="login_button_close" />
        <div className="login_title">로그인 및 회원가입</div>
      </div>
      <div className="login_body">
        <div className="welcome_text">
          <p>안녕하세요,</p>
          <p>회원가입하고 Chick'in 혜택을 받으세요</p>
        </div>
        <form className="form_login" method="post" action="">
          <div className="login_form_wrapper">
            <div className="login_user_id">
              <input
                type="email"
                className="login_id_input"
                placeholder="이메일"
                onChange={updateId}
              />
            </div>
            <div className="login_user_pw">
              <input
                type="password"
                className="login_pw_input"
                placeholder="비밀번호"
                onChange={updatePw}
              />
            </div>
            <button type="submit" className="button_login" onClick={fetchLogin}>
              로그인 하기
            </button>
          </div>
          <p className="sign_up_button">
            ChickIN 계정이 없으신가요? 계정을 만드세요!
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
