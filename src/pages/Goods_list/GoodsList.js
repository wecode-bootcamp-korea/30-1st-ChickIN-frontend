import React from 'react';
import './GoodsList.scss';
import GoodsCard from './Goods_card/GoodsCard';
import SubCategories from './SubCategories/SubCategories';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function GoodsList() {
  const [itemList, setItemList] = useState([]);
  const [listName, setListName] = useState('');
  const [meatOptionPath, setMeatOptionPath] = useState('구이용');
  const [subCategoryOption, setSubCategoryOption] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [navigateParam, setNavigateParam] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  // const decodeuri = decodeURI(location.search);
  const BASE_URL = 'http://10.58.6.148:8000';
  // console.log(`decode: ${decodeuri}`);
  // const nextQuestionMark = decodeuri.substr(1); // 쿼리스트링 값나오게끔! (? 다음부분)
  // console.log(nextQuestionMark);

  const goToDetail = productId => {
    navigate(`/goodsview/${productId}`);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItemList(data.products_list);
      });
    //data 받을때는 메세지랑 같이 오니까 results로 넣어줄것
  }, []);

  // const chooseSubCategory = () => {
  //   fetchForGrilled();
  //   updateSubCategory('');
  // };

  const updateSubCategory = subCategoryNameParam => {
    setSubCategoryOption(subCategoryNameParam);
  };

  const updateSort = sortParam => {
    setSortOption(sortParam);
  };

  const changeSection = nameParam => {
    setListName(nameParam);
    if (nameParam === '구이용') {
      setMeatOptionPath('?main_category=1');
    } else if (nameParam === '요리용') {
      setMeatOptionPath('?main_category=2');
    } else if (nameParam === '더그로인') {
      setMeatOptionPath('?main_category=3');
    } else {
      setMeatOptionPath('?main_category=1');
    }
  };

  useEffect(() => {
    setNavigateParam(
      `products/${meatOptionPath}${subCategoryOption}${sortOption}`
    );
    updateUrl(navigateParam);
  }, [meatOptionPath, subCategoryOption, sortOption]);

  const updateUrl = changeUrl => {
    navigate(`/${changeUrl}`);
  };

  /* URL 변경 하는 부분 클릭시에 변함 */
  useEffect(() => {
    navigate(`/${navigateParam}`);
  }, [navigateParam]);

  useEffect(() => {
    fetch(`${BASE_URL}/${navigateParam}`)
      .then(res => res.json())
      .then(data => setItemList(data));
    //data 받을때는 메세지랑 같이 오니까 results로 넣어줄것
  }, [location.search]);

  if (!itemList.length) {
    return null;
  }

  return (
    <section className="goods_list_page">
      <div className="product_list_header">
        <div className="categories_title">
          <h2>{listName}</h2>
          <select className="filter_button">
            <option onClick={() => updateSort('&sort=id')}>
              상품 정렬하기
            </option>
            <option onClick={() => updateSort('&sort=rec')}>추천순</option>
            <option onClick={() => updateSort('&sort=desc')}>
              가격 낮은 순
            </option>
            <option onClick={() => updateSort('&sort=ase')}>
              가격 높은 순
            </option>
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
              <GoodsCard CardsList={itemList} goToDetail={goToDetail} />
            </ul>
          </div>
        </section>
      </section>
      {/* <Pagination updateOffset={updateOffset} /> */}
    </section>
  );
}

export default GoodsList;

// const BASE_URL = 'http://3.36.97.236:8000';

// export const END_POINT = {
//   signIn: `${BASE_URL}/users/signin`,
//   signUp: `${BASE_URL}/users/user`,
//   myPage: `${BASE_URL}/users/user`,
//   productDetail: `${BASE_URL}/products`,
//   productList: `${BASE_URL}/products`,
//   search: `${BASE_URL}/products`,
//   wishList: `${BASE_URL}/carts`,
//   payment: `${BASE_URL}/orders`,
// };

// export default END_POINT;

// const sectionChangeToGrill = () => {
//   setListName('구이용');
//   setMeatOptionPath('main_category=1');
//   updateSubCategory('');
//   fetch(
//     `${BASE_URL}/goodslist/products?${meatOptionPath}&${subCategoryOption}&${sortOption}`,
//     {
//       method: 'GET',
//     }
//   )
//     .then(res => res.json())
//     .then(
//       data => setItemList(data),
//       console.log(`location:${location.search}`)
//     );
// };

// const fetchForGrilled = () => {
//   fetch(`/data/mock.json`)
//     .then(res => res.json())
//     .then(data => setItemList(data));
// };

// useEffect(() => {
//   fetch('/data/mock.json')
//     .then(res => res.json())
//     .then(data => setItemList(data), console.log(listName === '구용'));
//   //data 받을때는 메세지랑 같이 오니까 results로 넣어줄것
//   // consoel debugging 용이니까 지워주기
// }, []);
