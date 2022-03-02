function Good_list() {
  return (
  <>
  <div className="product_detail_container">
        <div className="inner_wrap">
          <div className="detail_top">
            <div className="detail_left">
              <div className="detail_image_container">
                <div className="detail_image_wrapper">
                  <img src="https://image.shutterstock.com/image-photo/chiken-potato-other-vegetables-on-600w-534962260.jpg" />
                </div>
              </div>
            </div>
            <div className="detail_right">
              <div className="detail_information">
                <div className="detail_information_title">
                  닭가슴살 더블팩( 100g * 2팩 )
                </div>
                <div className="detail_information_wrapper">
                  <div className="product_price_wrapper">
                    <div className="product_discount"></div>
                    <div className="product_new_price"></div>
                  </div>
                </div>
                <div className="product-description"></div>
                <div className="product_option">
                  <div className="option_list">
                    <select name="option">
                      <option value="">옵션</option>
                      <option value="cut">손질 (+2,000원)</option>
                      <option value="ganish">가니쉬 (+2,000원)</option>
                    </select>
                  </div>
                  <div className="option_total_area">
                    <span className="product_name">닭가슴살 더블팩( 100g * 2팩 )</span>
                    <div className="product_price">
                      <span className="product_count">1</span>
                      <em>
                        <input type="hidden" value=""
                      </em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 댓글구현 --> */}
          <div className="detail_bottom"></div>
        </div>
      </div>
  </>
  )
}

export default Good_list;
