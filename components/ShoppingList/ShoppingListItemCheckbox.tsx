import { updateShoppingListCompletedAction } from "@/actions/shoppingList";
import { ShoppingListItemGet } from "@/models/ShoppingList";
import { ChangeEvent } from "react";

interface Props {
    item: ShoppingListItemGet;
}

const ShoppingListItemCheckbox = ({ item }: Props) => {
    const handleToggle = async (e: ChangeEvent<HTMLInputElement>) => {
        try {
            await updateShoppingListCompletedAction(item, e.currentTarget.checked);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <input type="checkbox" name="completed" defaultChecked={item.isCompleted} onChange={handleToggle}></input>
    )
}

export default ShoppingListItemCheckbox
