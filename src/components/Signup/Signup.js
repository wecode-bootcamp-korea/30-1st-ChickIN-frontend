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
          <div className="signup_form">
            <form className="signup_content">
              <div className="id_box">
                <div className="id_left">
                  <h3 className="id">아이디</h3>
                </div>
                <div className="id_right">
                  <input className="id_input" />
                </div>
              </div>
              <div className="pw_box">
                <div className="pw_left">
                  <h3 className="pw">비밀번호</h3>
                </div>
                <div className="pw_right">
                  <input type="password" className="pw_input" />
                </div>
              </div>
              <div className="pw_check_box">
                <div className="pw_check_left">
                  <h3 className="pw_check">비밀번호 확인</h3>
                </div>
                <div className="pw_check_right">
                  <input type="password" className="pw_check_input" />
                </div>
              </div>
              <div className="name_box">
                <div className="name_left">
                  <h3 className="name">이름</h3>
                </div>
                <div className="name_right">
                  <input className="name_input" />
                </div>
              </div>
              <div className="email_box">
                <div className="email_left">
                  <h3 className="email">이메일</h3>
                </div>
                <div className="email_right">
                  <input className="email_input" />
                </div>
              </div>
              <div className="phone_number_box">
                <div className="phone_number_left">
                  <h3 className="phone_number">휴대폰 번호</h3>
                </div>
                <div className="phone_number_right">
                  <input
                    className="phone_number_input"
                    placeholder="- 없이 입력하세요."
                  />
                </div>
              </div>
              <div className="address_box">
                <div className="address_left">
                  <h3 className="address">주소</h3>
                </div>
                <div className="address_right">
                  <input className="address_input" />
                </div>
              </div>
            </form>
          </div>
          <div className="button">
            <button className="cancel">취소</button>
            <button className="signup_submit">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
