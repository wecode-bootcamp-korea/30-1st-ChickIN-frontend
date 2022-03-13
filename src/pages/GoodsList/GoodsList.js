import React from 'react';
import './GoodsList.scss';
import GoodsCard from './Goods_card/GoodsCard';
import SubCategories from './SubCategories/SubCategories';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function GoodsList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [itemList, setItemList] = useState([]);
  const [listName, setListName] = useState('구이용');
  const [queryData, setQueryData] = useState({
    query_for_meat: 'main_category=1',
    query_for_kind: '',
    query_for_sort: '',
  });

  const BASE_URL = 'http://13.125.170.124:8000';

  const goToDetail = productId => {
    navigate(`/goodsview/${productId}`);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then(res => res.json())
      .then(res => {
        setItemList(res.products_list);
      });
  }, []);

  const updateSubCategory = new_kind => {
    const new_query = queryData;
    new_query.query_for_kind = new_kind;
    updateQuery(new_query);
  };

  const updateSort = e => {
    const new_query = queryData;
    new_query.query_for_sort = e.target.value;
    updateQuery(new_query);
  };

  const changeSection = nameParam => {
    setListName(nameParam);
    if (nameParam === '구이용') {
      setQueryData({ ...queryData, query_for_meat: 'main_category=1' });
    } else if (nameParam === '요리용') {
      setQueryData({ ...queryData, query_for_meat: 'main_category=2' });
    } else if (nameParam === '더그로인') {
      setQueryData({ ...queryData, query_for_meat: 'main_category=3' });
    } else {
      setQueryData({ ...queryData, query_for_meat: 'main_category=1' });
    }
    updateQuery(queryData);
  };

  const updateQuery = new_query => {
    navigate(
      `?${new_query.query_for_meat}&${new_query.query_for_kind}&${new_query.query_for_sort}`
    );
  };

  useEffect(() => {
    console.log('location.search', location.search);
    fetch(`${BASE_URL}/products${location.search}`)
      .then(res => res.json())
      .then(res => setItemList(res.products_list));
  }, [location.search]);

  return (
    <section className="goods_list_page">
      <div className="product_list_header">
        <div className="categories_title">
          <h2>{listName}</h2>
          <select className="filter_button" onChange={updateSort}>
            <option value="sort=id">상품 정렬하기</option>
            <option value="sort=rec">추천순</option>
            <option value="sort=asc">가격 낮은 순</option>
            <option value="sort=desc">가격 높은 순</option>
          </select>
        </div>
        <div>
          {listName === '구이용' && (
            <SubCategories updateSubCategory={updateSubCategory} />
          )}
        </div>
      </div>
      <section className="main_section">
        <section className="section_categories_menu_bar">
          <div className="menu_categories">
            <dl>
              <div className="name_category">닭</div>
              <li>
                <div onClick={() => changeSection('구이용')}>구이용</div>
              </li>
              <li>
                <div onClick={() => changeSection('요리용')}>요리용</div>
              </li>
            </dl>
          </div>
          <div className="menu_categories">
            <dl>
              <div className="name_category">오리</div>
              <li>
                <div onClick={() => changeSection('더그로인')}>더그로인DAY</div>
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
                <div>봄맞이</div>
              </li>
              <li>
                <div>럭키박스</div>
              </li>
            </dl>
          </div>
          <div className="menu_categories">
            <dl>
              <div className="name_category">치키인 ONLY</div>
              <li>
                <div>월간치키인</div>
              </li>
              <li>
                <div>샤퀴테리</div>
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
              {itemList.map(item => {
                return <GoodsCard item={item} goToDetail={goToDetail} />;
              })}
            </ul>
          </div>
        </section>
      </section>
    </section>
  );
}

export default GoodsList;
