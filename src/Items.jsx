import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./util";
const Items = ({ items }) => {
  const { isLoading, data } = useQuery({
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

  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
