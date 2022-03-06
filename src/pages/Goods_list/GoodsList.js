import React from 'react';
import './GoodsList.scss';
import GoodsCard from './Goods_card/GoodsCard';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoodsList() {
  const [itemList, setItemList] = useState([]);
  // const [filterShow, setFilteshow] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation();

  // const updateOffset = buttonIndex => {
  //   const limit = 6;
  //   const offset = buttonIndex * limit;
  //   const queryString = `?limit=${limit}&offset=${offset}`;
  //   window.scrollTo({
  //     top: 400,
  //     behavior: 'auto',
  //   });

  //   navigate(queryString);
  // };

  // const filterHandler = () => {
  //   setFilterShow(!filterShow);
  // };

  const goToDetail = productId => {
    navigate(`/goodsview/${productId}`);
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
          <h2>구이용</h2>
          <button className="filter_button">추천순 V</button>
        </div>
        <div>
          <ul className="filterSort">
            <li>
              <a>전체</a>
            </li>
            <span class="category-span"></span>
            <li>
              <a>윙</a>
            </li>
            <span class="category-span"></span>
            <li>
              <a>봉</a>
            </li>
            <span class="category-span"></span>
            <li>
              <a>닭가슴살</a>
            </li>
            <span class="category-span"></span>
            <li>
              <a>특수부위</a>
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
                <a>구이용</a>
              </li>
              <li>
                <a>요리용</a>
              </li>
            </dl>
          </div>
          <div className="menu_categories">
            <dl>
              <div className="name_category">오리</div>
              <li>
                <a>더그로인DAY</a>
              </li>
            </dl>
          </div>
          <div className="menu_categories">
            <dl>
              <div className="name_category">특별한 구성</div>
              <li>
                <a>세트상품</a>
              </li>
              <li>
                <a>럭키박스</a>
              </li>
            </dl>
          </div>
          <div className="menu_categories">
            <dl>
              <div className="name_category">치키인 ONLY</div>
              <li>
                <a>월간치키인</a>
              </li>
              <li>
                <a>가니쉬 & 시즈닝</a>
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
