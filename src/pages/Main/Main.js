import Footer from '../../components/Footer/Footer';
import GoodsView from '../Goods_view/GoodsView';
import items from '../Goods_view/mock.json';
import CounterBox from '../Goods_view/Counter_box/CounterBox';
function Main() {
  return (
    <div className="body">
      <GoodsView items={items} />
      <CounterBox />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Main;
