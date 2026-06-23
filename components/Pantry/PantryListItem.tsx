import { PantryItemGet } from "@/models/Pantry";

interface Props {
  item: PantryItemGet;
}

const PantryListItem = ({ item }: Props) => {
  return (
    <div className="flex w-fit rounded-lg px-6 shadow">
      <p>{item.name}</p>
    </div>
  );
};

export default PantryListItem;
