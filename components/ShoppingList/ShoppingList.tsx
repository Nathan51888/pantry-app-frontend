"use client"

import { use, useEffect, useState } from "react";
import ShoppingListAddInput from "./ShoppingListAddInput";
import ShoppingListItem from "./ShoppingListItem"
import { ShoppingListItemGet } from "@/models/ShoppingList";

type Props = {
    data: Promise<ShoppingListItemGet[] | null>;
}

const ShoppingList = ({ data }: Props) => {
    const fetchedItems = use(data);
    const [itemList, setItemList] = useState<ShoppingListItemGet[] | null>();

    useEffect(() => {
        setItemList(fetchedItems);
        console.log("fetched data [fetchedItems]: ", fetchedItems);
        console.log("itemListState [fetchedItems]: ", itemList);
    }, [fetchedItems])

    useEffect(() => {
        console.log("itemListState updated [itemList]", itemList)
    }, [itemList])

    return (
        <div className="bg-gray-300 shadow p-6 mx-auto w-fit flex flex-col gap-2 items-center">
            ShoppingListComponent
            <ShoppingListAddInput></ShoppingListAddInput>
            {
                itemList ? itemList?.map((item) => {
                    return <ShoppingListItem key={item.id} item={item} ></ShoppingListItem>
                }) : (
                    <p>No items</p>
                )
            }
        </div>
    )
}

export default ShoppingList
