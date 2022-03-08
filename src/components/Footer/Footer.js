import './Footer.scss';
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="company_information">
          <p>
            <span className="company_name">ChickIN(주)</span>
            <span className="class_title">대표자</span>
            <span>
              <b>김지성 김가람휘 강성훈 이희수 이상민</b>
            </span>
          </p>
          <p>
            <span className="class_title">개인정보 관리 책임자</span>
            <span className="company_content"> 김위코드</span>
            <span className="class_title">사업자 등록번호</span>
            <span className="company_content"> 123-44-56789</span>
            <span className="class_title">통신판매업 신고번호</span>
            <span className="company_content"> 2022-wecode-123456</span>
          </p>
          <p>
            <span className="company_content">
              서울특별시 강남구 테헤란로 427
            </span>
            <span className="class_title">팩스</span>
            <span className="company_content"> 02-1234-1234</span>
            <span className="class_title">호스팅</span>
            <span className="company_content"> 위코드</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
