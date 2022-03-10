import React from 'react';
import './SubCategories.scss';

function SubCategories(props) {
  return (
    <ul className="sub_category">
      <li>
        <div onClick={() => props.updateSubCategory('')}> 전체</div>
      </li>
      <span className="category-span"></span>
      <li>
        <div onClick={() => props.updateSubCategory('&sub_category=1')}>
          다리
        </div>
      </li>
      <span className="category-span"></span>
      <li>
        <div onClick={() => props.updateSubCategory('&sub_category=2')}>윙</div>
      </li>
      <span className="category-span"></span>
      <li>
        <div onClick={() => props.updateSubCategory('&sub_category=3')}>봉</div>
      </li>
      <span className="category-span"></span>
      <li>
        <div onClick={() => props.updateSubCategory('&sub_category=4')}>
          닭가슴살
        </div>
      </li>
      <span className="category-span"></span>
      <li>
        <div onClick={() => props.updateSubCategory('&sub_category=5')}>
          특수부위
        </div>
      </li>
    </ul>
  );
}

export default SubCategories;
