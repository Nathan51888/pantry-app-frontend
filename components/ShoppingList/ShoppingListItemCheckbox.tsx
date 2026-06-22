import { updateShoppingListCompletedAction } from "@/actions/shoppingList";
import { ShoppingListItemGet } from "@/models/ShoppingList";
import { Checkbox } from "@mui/material";
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
        <Checkbox name="completed" defaultChecked={item.isCompleted} onChange={handleToggle}></Checkbox>
    )
}

export default ShoppingListItemCheckbox
