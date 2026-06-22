import { deleteShoppingListAction } from "@/actions/shoppingList";
import { ShoppingListItemGet } from "@/models/ShoppingList"
import { Button } from "@mui/material";

interface Props {
    item: ShoppingListItemGet;
}

const ShoppingListItemDelete = ({ item }: Props) => {
    return (
        <form action={deleteShoppingListAction}>
            <input hidden={true} readOnly={true} name="id" value={item.id} />
            <Button variant="contained" type="submit">X</Button>
        </form>
    )
}

export default ShoppingListItemDelete
