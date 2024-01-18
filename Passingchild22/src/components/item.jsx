import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleButtonClicked = (foodItem) => {
    console.log(`${foodItem} being bougjt`);
  };
  return (
    <li className={`${styles["pg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={() => handleButtonClicked(foodItem)}
      >
        Buy{" "}
      </button>
    </li>
  );
};
export default Item;
