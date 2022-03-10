import React, { useState, useEffect } from 'react';
import MainOptionsBox from './Main_options_box/MainOptionsBox';
import SubOptionsBox from './Sub_options_box/SubOptionsBox';
import './GoodsView.scss';
import { API } from '../../config';

const OPTION_OBJECT = {
  '껍질 제거': 1000,
  시즈닝: 2000,
  '양념소스 추가': 1000,
};

function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function GoodsView() {
  const [isShowOptionBox, setIsShowOptionBox] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState();
  const [resultPrice, setResultPrice] = useState(0);
  const [productData, setProductData] = useState(null);
  const [showMoreButton, setShowMoreButton] = useState(false);

  // const params = useParams();
  useEffect(() => {
    // fetch('http://localhost:3000/data/mock.json')
    // fetch('http://10.58.7.79:8000/products/1');
    fetch(API.goodsview)
      .then(res => res.json())
      // .then(data => console.log(data));
      .then(data => setProductData(data.data));
  }, []);

  return (
    productData !== null && (
      <div>
        <div className="product_detail_container">
          <div className="inner_wrap">
            <div className="detail_top">
              <div className="detail_left">
                <div className="detail_image_container">
                  <div className="detail_image_wrapper">
                    <img src={productData.image[0]} />
                    <img src={productData.image[1]} />
                    <img src={productData.image[2]} />
                  </div>
                </div>
              </div>
              <div className="detail_right">
                <div className="detail_information">
                  <h1 className="detail_information_title">
                    {`${productData.name}`}
                  </h1>
                  <div className="detail_information_wrapper">
                    <div className="product_price_wrapper">
                      <div className="product_price">
                        {priceToString(parseInt(productData.price))} 원
                      </div>
                    </div>
                  </div>
                  <div className="product_description">
                    {showMoreButton
                      ? `${productData.description}`
                      : `${`${productData.description}`.substring(0, 200)}`}
                    <div className="showMoreButton">
                      <button
                        className="btn"
                        onClick={() => setShowMoreButton(!showMoreButton)}
                      >
                        더 알아보기 &#8897;
                      </button>
                    </div>
                  </div>
                  <div className="product_option">
                    <div className="choice_number_option">
                      <select className="option">
                        <option className="1_pack" value="2">
                          {`${productData.name}`}
                        </option>
                      </select>
                    </div>
                    <div className="choice_add_option">
                      <select
                        className="option"
                        onChange={e => {
                          setSelectedOptions(e.target.value);
                          e.target.value !== ''
                            ? setIsShowOptionBox(true)
                            : setIsShowOptionBox(false);
                        }}
                      >
                        <option value="">추가옵션</option>
                        <option value="껍질 제거">
                          {`${productData.option[0].name}`}
                        </option>
                        <option value="시즈닝">
                          {`${productData.option[1].name}`}
                        </option>
                        <option value="양념소스 추가">
                          {`${productData.option[2].name}`}
                        </option>
                      </select>
                    </div>
                    <MainOptionsBox
                      items={productData}
                      setResultPrice={setResultPrice}
                    />
                    {isShowOptionBox && (
                      <SubOptionsBox selectedOptions={selectedOptions} />
                    )}
                    <div className="buy_button_wrapper">
                      <button type="butotn">장바구니</button>
                      <button type="butotn">
                        {/* <button type="butotn" onClick={handleSubmit}> */}
                        {/* Cart */}
                        바로 구매
                      </button>
                    </div>
                    <div className="total_price">
                      <p className="total">
                        <strong>총 구매 금액 : </strong>
                        <strong>
                          {priceToString(
                            (OPTION_OBJECT[selectedOptions] || '') + resultPrice
                          )}
                        </strong>
                        <strong> 원</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!— 댓글구현 —> */}
            <div className="detail_bottom" />
          </div>
        </div>
      </div>
    )
  );
}

export default GoodsView;
