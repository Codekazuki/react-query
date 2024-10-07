import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./util";
const Items = ({ items }) => {
  const result = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });
  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
