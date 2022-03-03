import './Nav.scss';
import {
  FaUser,
  FaMapMarkerAlt,
  FaSistrix,
  FaShoppingCart,
} from 'react-icons/fa';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav_logo">
        <a href="#">
          <div>Chick.IN</div>
        </a>
      </div>
      <div className="nav_service_menu">
        <ul className="nav_service_list">
          <li className="nav_service_item active">
            <a href="#">구매</a>
            <ul className="drop_down_menu">
              <li className="meat_option">
                <a href="#">닭고기</a>
              </li>
              <li className="meat_option">
                <a href="#">오리고기</a>
              </li>
              <li className="meat_option">
                <a href="#">특별한 구성</a>
              </li>
              <li className="meat_option">
                <a href="#">치크인 ONLY</a>
              </li>
            </ul>
          </li>

          <li className="nav_service_item" data-link="#">
            선물제안
          </li>
          <li className="nav_service_item" data-link="#">
            설로인 매거진
          </li>
          <li className="nav_service_item" data-link="#">
            이벤트
          </li>
          <li className="nav_service_item" data-link="#">
            브랜드
          </li>
          <li className="nav_service_item" data-link="#">
            B2B
          </li>
        </ul>
      </div>
      <div className="nav_user_menu">
        <a href="#">
          <FaMapMarkerAlt />
        </a>
        <a href="#">
          <FaSistrix />
        </a>
        <a href="#">
          <FaUser />
        </a>
        <a href="#">
          <FaShoppingCart />
        </a>
      </div>
    </nav>
  );
}
export default Nav;
