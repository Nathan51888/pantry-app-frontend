import { ShoppingListItemGet } from "@/models/ShoppingList";
import { Button, Checkbox } from "@mui/material";
import { SyntheticEvent } from "react";

interface Props {
    item: ShoppingListItemGet;
    onItemDelete: (e: SyntheticEvent) => void;
}

const ShoppingListItem = ({ item, onItemDelete }: Props) => {
    return (
        <div className="bg-white shadow rounded-lg flex gap-2 w-4xl">
            <Checkbox checked={item.isCompleted}></Checkbox>
            <p className="inline-block align-middle">{item.title}</p>
            <form onSubmit={onItemDelete}>
                <input hidden={true} value={item.id} readOnly={true} />
                <Button variant="contained" type="submit">X</Button>
            </form>
        </div>
    )
}

export default ShoppingListItem
