"use client";

import { use, useEffect, useState } from "react";
import ShoppingListAddInput from "./ShoppingListAddInput";
import ShoppingListItem from "./ShoppingListItem";
import { ShoppingListItemGet } from "@/models/ShoppingList";

type Props = {
  data: Promise<ShoppingListItemGet[] | null>;
};

const ShoppingList = ({ data }: Props) => {
  const fetchedItems = use(data);
  const [itemList, setItemList] = useState<ShoppingListItemGet[] | null>();

  useEffect(() => {
    setItemList(fetchedItems);
    console.log("fetched data [fetchedItems]: ", fetchedItems);
    console.log("itemListState [fetchedItems]: ", itemList);
  }, [fetchedItems]);

  useEffect(() => {
    console.log("itemListState updated [itemList]", itemList);
  }, [itemList]);

  return (
    <div className="mx-autoflex flex-col items-center gap-2 bg-gray-300 p-6 shadow">
      ShoppingListComponent
      <ShoppingListAddInput></ShoppingListAddInput>
      {itemList ? (
        itemList?.map((item) => {
          return (
            <ShoppingListItem key={item.id} item={item}></ShoppingListItem>
          );
        })
      ) : (
        <p>No items</p>
      )}
    </div>
  );
};

export default ShoppingList;
