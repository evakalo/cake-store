import "./InventoryBook.css";

function InventoryBook(props) {
  function handleChange(event) {
    const updatedCookie = {
      ...props.cookie,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    console.log(updatedCookie);
    props.updateCookie(props.index, updatedCookie);
  }

  return (
    <form className="inventory-book">
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={props.cookie.name}
      />
      <input
        name="price"
        type="text"
        onChange={handleChange}
        value={props.cookie.price}
      />
      <input
        name="desc"
        type="text"
        onChange={handleChange}
        value={props.cookie.desc}
      />
      <select name="status">
        <option value="available">Fresh batch</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <input
        name="image"
        type="text"
        onChange={handleChange}
        value={props.cookie.image}
      />
    </form>
  );
}

export default InventoryBook;
