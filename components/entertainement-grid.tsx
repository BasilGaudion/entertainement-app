import { ForYouHomePropsI } from "../app/types";
import Item from "@/components/item";

const EntertainementGrid: React.FC<ForYouHomePropsI> = ({ data }) => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-white font-body text-4xl">Recommended for you</h1>
      </div>
      <div className="mt-8 flex flex-wrap gap-20 pb-[50px]">
        {data.map((item, key) => (
          <Item item={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default EntertainementGrid;
