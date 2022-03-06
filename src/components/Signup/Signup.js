import React, { useState } from 'react';
import './Signup.scss';

const SignUp = () => {
  const [inputValue, setInputValue] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
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
            <form className="signup_content" onChange={handleInput}>
              {/* input 에 각각 handleInput 함수를 넣었는데 form 태그 특성상 form tag 에 onChange 를 넣어주면 form tag 안에 있는 input 의 변화를 감지해서 동일한 영향을 줄 수 있다는 것을 깨달았다.  */}
              <div className="email_box">
                <div className="email_left">
                  <h3 className="email">* 이메일</h3>
                </div>
                <div className="email_right">
                  <input name="email" className="email_input" />
                </div>
              </div>
              <div className="pw_box">
                <div className="pw_left">
                  <h3 className="pw">* 비밀번호</h3>
                </div>
                <div className="pw_right">
                  <input name="password" type="password" className="pw_input" />
                </div>
              </div>
              <div className="pw_confirm_box">
                <div className="pw_confirm_left">
                  <h3 className="pw_confirm">* 비밀번호 확인</h3>
                </div>
                <div className="pw_confirm_right">
                  <input
                    name="confirm-password"
                    type="password"
                    className="pw_confirm_input"
                  />
                </div>
              </div>
              <div className="name_box">
                <div className="name_left">
                  <h3 className="name">* 이름</h3>
                </div>
                <div className="name_right">
                  <input name="name" className="name_input" />
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
                  />
                </div>
              </div>
              <div className="address_box">
                <div className="address_left">
                  <h3 className="address">* 주소</h3>
                </div>
                <div className="address_right">
                  <input name="address" className="address_input" />
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
