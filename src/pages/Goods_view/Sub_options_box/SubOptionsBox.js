import './SubOptionsBox.scss';

function SubOptionsBox({ optionName, optionPrice }) {
  return (
    <form>
      <div className="sub_option_total_area">
        <div className="sub_option_display_area">
          <span className="sub_option_name">&#9493; {optionName}</span>
          <div className="sub_option_price">
            <em>{Number(optionPrice).toLocaleString()} 원</em>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SubOptionsBox;
