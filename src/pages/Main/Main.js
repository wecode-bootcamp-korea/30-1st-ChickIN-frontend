import Footer from '../../components/Footer/Footer';
import GoodsView from '../Goods_view/GoodsView';
import items from '../Goods_view/mock.json';
function Main() {
  return (
    <div className="body">
      <GoodsView items={items} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Main;
