import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./util";

const Items = ({ items }) => {
  const { isLoading, data, error, isError, response } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });

  if (isLoading) {
    return (
      <p style={{ marginTop: "0.5rem", color: "red", fontSize: "2rem" }}>
        Loading
      </p>
    );
  }
  if (isError) {
    return (
      <p style={{ marginTop: "0.5rem", color: "red", fontSize: "2rem" }}>
        {" "}
        <span>
          There was an error <br />
        </span>
        {error.message}
      </p>
    );
  }

  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
