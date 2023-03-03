import { useParams } from "react-router-dom";
const Item = () => {
  const { item } = useParams();
  return (
    <div>
      <h1>{item} Page</h1>
    </div>
  );
};
export default Item;
