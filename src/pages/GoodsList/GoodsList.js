import './GoodsList.scss';

useEffect(() => {
  fetch('http://localhost:3000/data/mock.json')
    .then(res => res.json())
    .then(data => setCommentList(data));
}, []);

function GoodsList() {
  return (
    <>
      <div className="product_list_header">
        <div className="categories title">
          <h2>구이용</h2>
          <button> 추천순</button>
        </div>
        <ul className="categories_option_list">
          <li>
            <a>전체</a>
          </li>
          <li>
            <a>윙</a>
          </li>
          <li>
            <a>봉</a>
          </li>
          <li>
            <a>닭가슴살</a>
          </li>
          <li>
            <a>특수부위</a>
          </li>
        </ul>
      </div>
      <div className="product_list_left_menu"></div>
      <div className="product_list">
        <div></div>
      </div>
    </>
  );
}

export default GoodsList;
