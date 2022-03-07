import './SubOptionsBox.scss';

function SubOptionsBox({ selectedOptions }) {
  let result;
  const array = [1000, 2000, 3000, 4000, 5000];

  if (selectedOptions === '선물 포장1') {
    result = array[0];
  } else if (selectedOptions === '선물 포장2') {
    result = array[1];
  } else if (selectedOptions === '선물 포장3') {
    result = array[2];
  } else if (selectedOptions === '선물 포장4') {
    result = array[3];
  } else if (selectedOptions === '선물 포장5') {
    result = array[4];
  }

  return (
    <form>
      <div className="sub_option_total_area">
        <div className="sub_option_display_area">
          <span className="sub_option_name">&#9493; {selectedOptions}</span>
          <div className="sub_option_price">
            <em>{result} 원</em>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SubOptionsBox;
