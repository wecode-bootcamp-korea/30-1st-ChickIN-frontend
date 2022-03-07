import React from 'react';
import './GoodsList.scss';
import GoodsCard from './Goods_card/GoodsCard';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function GoodsList() {
  const [itemList, setItemList] = useState([]);
  const [listName, setListName] = useState('구이용');
  const navigate = useNavigate();
  const location = useLocation();
  const decodeuri = decodeURI(location.search);
  // console.log(`decode: ${decodeuri}`);
  const nextQuestionMark = decodeuri.substr(1); // 쿼리스트링 값나오게끔! (? 다음부분)
  // console.log(nextQuestionMark);

  const sectionChangeToDish = () => {
    setListName('요리용');
    fetch(`/data/mock2.json`)
      .then(res => res.json())
      .then(data => setItemList(data));
  };

  const goToDetail = productId => {
    navigate(`/goodsview/${productId}`);
  };

  const fetch_for_grilled = () => {
    fetch(`/data/mock.json`)
      .then(res => res.json())
      .then(data => setItemList(data));
  };

  const sectionChangeToGrill = () => {
    setListName('구이용');
    fetch(`/data/mock.json`)
      .then(res => res.json())
      .then(data => setItemList(data));
  };

  useEffect(() => {
    fetch('/data/mock.json')
      .then(res => res.json())
      .then(data => setItemList(data));
    //data 받을때는 메세지랑 같이 오니까 results로 넣어줄것
  }, []);

  return (
    <section className="goods_list_page">
      <div className="product_list_header">
        <div className="categories_title">
          <h2>{listName}</h2>
          <button className="filter_button">추천순 V</button>
        </div>
        <div>
          <ul className="filterSort">
            <li>
              <div onClick={fetch_for_grilled}>전체</div>
            </li>
            <span class="category-span"></span>
            <li>
              <div>윙</div>
            </li>
            <span class="category-span"></span>
            <li>
              <div>봉</div>
            </li>
            <span class="category-span"></span>
            <li>
              <div>닭가슴살</div>
            </li>
            <span class="category-span"></span>
            <li>
              <div>특수부위</div>
            </li>
          </ul>
        </div>
      </div>
      <body>
        <section className="section_categories_menu_bar">
          <div className="menu_categories">
            <dl>
              <div className="name_category">닭</div>
              <li>
                <div onClick={sectionChangeToGrill}>구이용</div>
              </li>
              <li>
                <div onClick={sectionChangeToDish}>요리용</div>
              </li>
            </dl>
          </div>
          <div className="menu_categories">
            <dl>
              <div className="name_category">오리</div>
              <li>
                <div>더그로인DAY</div>
              </li>
            </dl>
          </div>
          <div className="menu_categories">
            <dl>
              <div className="name_category">특별한 구성</div>
              <li>
                <div>세트상품</div>
              </li>
              <li>
                <div>럭키박스</div>
              </li>
            </dl>
            git push
          </div>
          <div className="menu_categories">
            <dl>
              <div className="name_category">치키인 ONLY</div>
              <li>
                <div>월간치키인</div>
              </li>
              <li>
                <div>가니쉬 & 시즈닝</div>
              </li>
            </dl>
          </div>
        </section>
        <section className="product_list_body">
          <div className="product_list_wrap">
            <h1 className="productCount">제품 &#40;{itemList.length}&#41;</h1>
            <ul className="productList">
              <GoodsCard CardsList={itemList} goToDetail={goToDetail} />
            </ul>
          </div>
        </section>
      </body>
      {/* <Pagination updateOffset={updateOffset} /> */}
    </section>
  );
}

export default GoodsList;
