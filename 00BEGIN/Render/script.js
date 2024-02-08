import { createRoot } from "react-dom/client";
import "./style.css";

function Card(key, title, image, brand, price) {
  console.log(key);
  return (
    <div className="card" key={key}>
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}
// const container = [Card(1), Card(2), Card(3), Card(4), Card(5)];

// const card = (
//   <div className="card">
//     <img
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_RdqdbCGodvxHfVmYUftjS1HJ-YJ2jRRVg&usqp=CAU"
//       alt="card image"
//     />
//     <div className="card-content">
//       <h3>Iphone</h3>
//       <p>Apple</p>
//       <p>$1000</p>
//     </div>
//   </div>
// );
// const container = [card, card, card, card, card, card, card, card, card, card];

const root = createRoot(document.getElementById("root"));
// root.render(<div className="container-style">{container}</div>);

console.log("Hello world");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const container2 = data.products.map((product) => {
      return Card(
        product.id,
        product.title,
        product.thumbnail,
        product.brand,
        product.price
      );
    });
    root.render(<div className="container-style">{container2}</div>);
  });
