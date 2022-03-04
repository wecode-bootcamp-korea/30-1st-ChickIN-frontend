import React from 'react';
import './Signup.scss';

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <div className="top">
            <h2>회원가입</h2>
          </div>
          <div className="signup-form">
            <form className="signup-content">
              <div className="id-box">
                <div className="id-left">
                  <h3 className="id">아이디</h3>
                </div>
                <div className="id-right">
                  <input className="id-input" />
                </div>
              </div>
              <div className="pw-box">
                <div className="pw-left">
                  <h3 className="pw">비밀번호</h3>
                </div>
                <div className="pw-right">
                  <input type="password" className="pw-input" />
                </div>
              </div>
              <div className="pw-check-box">
                <div className="pw-check-left">
                  <h3 className="pw-check">비밀번호 확인</h3>
                </div>
                <div className="pw-check-right">
                  <input type="password" className="pw-check-input" />
                </div>
              </div>
              <div className="name-box">
                <div className="name-left">
                  <h3 className="name">이름</h3>
                </div>
                <div className="name-right">
                  <input className="name-input" />
                </div>
              </div>
              <div className="email-box">
                <div className="email-left">
                  <h3 className="email">이메일</h3>
                </div>
                <div className="email-right">
                  <input className="email-input" />
                </div>
              </div>
              <div className="phone-number-box">
                <div className="phone-number-left">
                  <h3 className="phone-number">휴대폰 번호</h3>
                </div>
                <div className="phone-number-right">
                  <input
                    className="phone-number-input"
                    placeholder="- 없이 입력하세요."
                  />
                </div>
              </div>
              <div className="address-box">
                <div className="address-left">
                  <h3 className="address">주소</h3>
                </div>
                <div className="address-right">
                  <input className="address-input" />
                </div>
              </div>
            </form>
          </div>
          <div className="button">
            <button className="cancel">취소</button>
            <button className="signup-submit">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
