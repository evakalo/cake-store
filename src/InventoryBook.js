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
  // function handleRemove(event) {
  //   props.removeCookie(key);
  // }

  return (
    <>
      {" "}
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
        <select
          name="status"
          onChange={handleChange}
          value={props.cookie.status}
        >
          <option>Fresh batch</option>
          <option>Sold Out!</option>
        </select>
        <input
          name="image"
          type="text"
          onChange={handleChange}
          value={props.cookie.image}
        />
        <button
          type="button"
          className="remove-button"
          onClick={() => props.removeCookie(props.index)}
        >
          Remove
        </button>
      </form>
    </>
  );
}

export default InventoryBook;
