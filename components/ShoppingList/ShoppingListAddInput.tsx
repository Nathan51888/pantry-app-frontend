"use client";

import { createShoppingListAction } from "@/actions/shoppingList";
import { useActionState } from "react";

interface Props {}

const ShoppingListAddInput = ({}: Props) => {
  const [state, formAction, isPending] = useActionState(
    createShoppingListAction,
    {},
  );

  return (
    <div className="px-6 py-3 shadow">
      <form className="mx-auto flex gap-3" action={formAction}>
        <input name="title" placeholder="item" />
        <button type="submit" disabled={isPending}>
          Add
        </button>
        {isPending ? "Adding..." : ""}
        {`Added Item: "${state.data?.title}"`}
      </form>
    </div>
  );
};

export default ShoppingListAddInput;
