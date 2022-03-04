import Footer from '../../components/Footer/Footer';
import Goods_view from '../Goods_view/Goods_view';
import items from '../Goods_view/mock.json';
import Counter_box from '../Goods_view/Counter_box/Counter_box';
function Main() {
  return (
    <div className="body">
      <Goods_view items={items} />
      {/* <Counter /> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Main;
