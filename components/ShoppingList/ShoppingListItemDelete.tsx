import { deleteShoppingListAction } from "@/actions/shoppingList";
import { ShoppingListItemGet } from "@/models/ShoppingList";

interface Props {
  item: ShoppingListItemGet;
}

const ShoppingListItemDelete = ({ item }: Props) => {
  return (
    <form action={deleteShoppingListAction}>
      <input hidden={true} readOnly={true} name="id" value={item.id} />
      <button type="submit">X</button>
    </form>
  );
};

export default ShoppingListItemDelete;
