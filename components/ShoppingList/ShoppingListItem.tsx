import { ShoppingListItemGet } from "@/models/ShoppingList";
import { Checkbox } from "@mui/material";

interface Props {
    item: ShoppingListItemGet;
}

const ShoppingListItem = ({ item }: Props) => {
    return (
        <div className="bg-white shadow rounded-lg flex gap-2 w-4xl">
            <Checkbox checked={item.isCompleted}></Checkbox>
            <p className="inline-block align-middle">{item.title}</p>
        </div>
    )
}

export default ShoppingListItem
