import React from 'react';
import './GoodsCard.scss';

function GoodsCard({ item, goToDetail }) {
  const { id, name, thumbnail, price } = item;
  return (
    <li className="product" key={id}>
      <div className="product_img_Wrap" onClick={() => goToDetail(id)}>
        <img alt="product" className="product_img" src={thumbnail} />
      </div>
      <div className="content_wrap">
        <div className="product_name" onClick={() => goToDetail(id)}>
          {name}
        </div>
        <div className="product_price"> {price} </div>
      </div>
    </li>
  );
}

export default GoodsCard;

//  li vs div  simentic 한 부분이 차이 , 다른건 블락요소이기에 똑같음 p도
// logo는 h1 tag를 써야한다 -> 컨벤션인듯!

//질문 리스트
// 라우팅 문제
// 서버에서 받는 값들 할당 해줄때 -> 순서대로 제공 받는걸로 인지 되는건지
// useNavigate 문제
// onClick 에 arrow function 안써주면 렌더링관계
