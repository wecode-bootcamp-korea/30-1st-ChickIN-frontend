import React from 'react';
import './GoodsCard.scss';

function GoodsCard(props) {
  console.log(`props: ${props}`);
  return props.CardsList.map(
    ({ product_id, product_name, product_price, product_img }) => (
      <li className="product" key={product_id}>
        <div
          className="product_img_Wrap"
          onClick={() => props.goToDetail(product_id)}
        >
          <img alt="product" className="product_img" src={product_img} />
        </div>
        <div className="content_wrap">
          <div
            className="product_name"
            onClick={() => props.goToDetail(product_id)}
          >
            {product_name}
          </div>
          <div className="product_price"> {product_price} </div>
        </div>
      </li>
    )
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
