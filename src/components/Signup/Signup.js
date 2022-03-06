import React, { useState, navigate } from 'react';
import './Signup.scss';

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    confirm_password: '',
    username: '',
    phone_number: '',
    address: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  console.log(inputValue);

  const isEmailValid = inputValue.email.includes('@');
  const reg = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const isPasswordValid =
    inputValue.password.length >= 8 && reg.test(inputValue.password);
  const isPasswordSame = inputValue.password === inputValue.confirm_password;
  const hasUsername = inputValue.username.length > 0;
  const hasAddress = inputValue.address.length > 0;
  const hasPhoneNumber = inputValue.phone_number.length > 0;
  const isFormValid =
    isEmailValid &&
    isPasswordValid &&
    isPasswordSame &&
    hasUsername &&
    hasAddress &&
    hasPhoneNumber;

  // fetch(api.signup, {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: inputValue.email,
  //     password: inputValue.password,
  //     username: inputValue.username,
  //     phone_number: inputValue.phone_number,
  //     address: inputValue.address,
  //   }),
  // })
  //   .then(response => response.json())
  //   .then(result => {
  //     if (result.message === 'CREATE ACCOUNT SUCCESS') {
  //       alert('회원가입이 완료되었습니다!');
  //       navigate('/main');
  //       return;
  //     }
  //     if (result.message === 'ALREADY_EXIST_EMAIL') {
  //       alert('이미 가입된 이메일 입니다');
  //       return;
  //     } else if (result.message === 'ALREADY_EXIST_PHONE_NUMBER') {
  //       alert('이미 가입된 전화번호 입니다');
  //       return;
  //     }
  //   });

  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <div className="top">
            <h2>회원가입</h2>
          </div>
          <div className="join">
            <p className="join_info">회원정보입력</p>
            <p className="essential_info">( *는 필수입력사항 입니다.)</p>
          </div>
          <div className="signup_form">
            <form className="signup_content">
              <div className="email_box">
                <div className="email_left">
                  <h3 className="email">* 이메일</h3>
                </div>
                <div className="email_right">
                  <input
                    name="email"
                    className="email_input"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="pw_box">
                <div className="pw_left">
                  <h3 className="password">* 비밀번호</h3>
                </div>
                <div className="pw_right">
                  <input
                    name="password"
                    type="password"
                    className="pw_input"
                    value={inputValue.passsword}
                    onChange={handleInput}
                    placeholder="8자 이상, 특수문자 포함"
                  />
                </div>
              </div>
              <div className="pw_confirm_box">
                <div className="pw_confirm_left">
                  <h3 className="pw_confirm">* 비밀번호 확인</h3>
                </div>
                <div className="pw_confirm_right">
                  <input
                    name="confirm_password"
                    type="password"
                    className="pw_confirm_input"
                    value={inputValue.confirm_password}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="username_box">
                <div className="username_left">
                  <h3 className="username">* 이름</h3>
                </div>
                <div className="username_right">
                  <input
                    name="username"
                    className="username_input"
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="phone_number_box">
                <div className="phone_number_left">
                  <h3 className="phone_number">* 휴대폰 번호</h3>
                </div>
                <div className="phone_number_right">
                  <input
                    name="phone_number"
                    className="phone_number_input"
                    placeholder="- 없이 입력하세요."
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="address_box">
                <div className="address_left">
                  <h3 className="address">* 주소</h3>
                </div>
                <div className="address_right">
                  <input
                    name="address"
                    className="address_input"
                    onChange={handleInput}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="button">
            <button className="cancel">취소</button>
            <button
              className={`${isFormValid ? 'button_activate' : 'invalid'}`}
              disabled={!isFormValid}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
