import './SubOptionsBox.scss';

const OPTION_OBJET = {
  '껍질 제거': 1000,
  시즈닝: 2000,
  '양념소스 추가': 1000,
};
function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function SubOptionsBox({ selectedOptions }) {
  return (
    <form>
      <div className="sub_option_total_area">
        <div className="sub_option_display_area">
          <span className="sub_option_name">&#9493; {selectedOptions}</span>
          <div className="sub_option_price">
            <em>{priceToString(OPTION_OBJET[selectedOptions])} 원</em>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SubOptionsBox;
