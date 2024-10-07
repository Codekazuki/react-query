import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./util";
import { toast } from "react-toastify";

const SingleItem = ({ item }) => {
  // const handleDelete = () => {
  //   newData = data.filter((filtered) => filtered.id !== id);
  // };
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task status changed");
    },
  });
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
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
