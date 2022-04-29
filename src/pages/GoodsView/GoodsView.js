import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
// import { API } from '../../config';
import MainOptionsBox from './Main_options_box/MainOptionsBox';
import SubOptionsBox from './Sub_options_box/SubOptionsBox';
import './GoodsView.scss';

function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function GoodsView() {
  const [isShowOptionBox, setIsShowOptionBox] = useState(false);
  const [selectedOptionId, setselectedOptionId] = useState();
  const [resultPrice, setResultPrice] = useState(0);
  const [productData, setProductData] = useState(null);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const BASE_URL = 'http://13.125.170.124:8000';
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.search.split('=')[1];

  const CartButtonHandler = () => {
    fetch(`${BASE_URL}/carts/id`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        product_id: productData.id,
        option_ids: [selectedOptionId],
        quantity: resultPrice / productData.price,
      }),
    })
      .then(res => res.json())
      .then(alert('장바구니에 담겼습니다.'));

    const paymentPageMoveHandler = () => {
      navigate('/cartview');
    };
    paymentPageMoveHandler();
  };

  const orderNow = () => {
    alert('주문이 완료되었습니다.');
  };

  useEffect(() => {
    fetch(`${BASE_URL}/products/1`)
      .then(res => res.json())
      // .then(data => console.log(data));
      .then(data => setProductData(data.data));
  }, []);

  const selectedOption = productData?.option.find(
    el => el.id === Number(selectedOptionId)
  );

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
                        {Number(productData.price).toLocaleString()} 원
                      </div>
                    </div>
                  </div>
                  <div className="product_description">
                    {showMoreButton
                      ? `${productData.description}`
                      : `${`${productData.description}`.substring(0, 150)}`}
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
                          setselectedOptionId(e.target.value);
                          e.target.value !== ''
                            ? setIsShowOptionBox(true)
                            : setIsShowOptionBox(false);
                        }}
                      >
                        {productData.option.map(el => {
                          return (
                            <option value={el.id} key={el.id}>
                              {el.name} {Number(el.price).toLocaleString()}원
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <MainOptionsBox
                      items={productData}
                      setResultPrice={setResultPrice}
                    />
                    {isShowOptionBox && (
                      <SubOptionsBox
                        optionName={selectedOption.name}
                        optionPrice={selectedOption.price}
                      />
                    )}
                    <div className="buy_button_wrapper">
                      <button
                        type="button"
                        className="cartButton"
                        onClick={CartButtonHandler}
                      >
                        장바구니
                      </button>

                      <button onClick={orderNow}>바로 구매</button>
                    </div>
                    <div className="total_price">
                      <p className="total">
                        <strong>총 구매 금액 : </strong>
                        <strong>
                          {/* selectedOption.price로 수정할 것*/}

                          {priceToString(
                            (Number(selectedOption?.price) || '') + resultPrice
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
