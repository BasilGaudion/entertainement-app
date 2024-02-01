import { MovieDataI } from "../app/types";
import Item from "@/components/item";

interface EntertainementGridProps {
  data: MovieDataI[];
  title: string;
}

const EntertainementGrid: React.FC<EntertainementGridProps> = ({
  data,
  title,
}) => {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-white font-body text-4xl">{title}</h1>
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
