function AddItems2() {
  let task = "Coding";
  let date = "24/09/2025";

  return (
    <div className="Item-2">
      <div className="row">
        <div className="col-6">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddItems2;
