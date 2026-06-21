import { PantryItemGet } from "@/models/Pantry";

interface Props {
    item: PantryItemGet;
}

const PantryListItem = ({ item }: Props) => {
    return (
        <div className="shadow rounded-lg flex w-fit px-6">
            <p>{item.name}</p>
        </div>
    )
}

export default PantryListItem
