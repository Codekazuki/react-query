const SingleItem = ({ item }) => {
  const handleDelete = () => {
    newData = data.filter((filtered) => filtered.id !== id);
  };
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => console.log("edit task")}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => console.log("delete task")}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
