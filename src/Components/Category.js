import Item from "./Item";

function Category(props) {
  const name = props.name;

//use props name to get items from database and url?
//or pass filtered array as props?

  return (
    <div class="category">
      <h2>{name}</h2>
      <div class="items-container">
        <Item imageUrl="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
        <Item imageUrl="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" />
        <Item imageUrl="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
        <Item imageUrl="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" />
        <Item imageUrl="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      </div>
    </div>
  );
}

export default Category;
