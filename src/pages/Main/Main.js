import Footer from '../../components/Footer/Footer';
import Goods_view from '../Goods_view/Goods_view';
import items from '../Goods_view/mock.json';
function Main() {
  return (
    <div className="body">
      <Goods_view items={items} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Main;
