import GoodsView from '../Goods_view/GoodsView';
import items from '../Goods_view/mock.json';
function Main() {
  return (
    <div className="body">
      <GoodsView items={items} />
    </div>
  );
}

export default Main;
