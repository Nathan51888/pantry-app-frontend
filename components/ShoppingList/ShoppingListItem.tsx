import { ShoppingListItemGet } from "@/models/ShoppingList";
import ShoppingListItemCheckbox from "./ShoppingListItemCheckbox";
import ShoppingListItemDelete from "./ShoppingListItemDelete";

interface Props {
    item: ShoppingListItemGet;
}

const ShoppingListItem = ({ item }: Props) => {
    return (
        <div className="bg-white shadow rounded-lg flex gap-2 w-4xl">
            <ShoppingListItemCheckbox item={item}></ShoppingListItemCheckbox>
            <p className="inline-block align-middle">{item.title}</p>
            <ShoppingListItemDelete item={item}></ShoppingListItemDelete>
        </div>
    )
}

export default ShoppingListItem
