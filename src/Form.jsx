import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import customFetch from "./util";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: () => customFetch.post("/", { title: "greatness is here" }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          placeholder='put task here'
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
