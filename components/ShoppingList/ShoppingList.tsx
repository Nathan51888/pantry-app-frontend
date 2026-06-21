import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import ShoppingListInput from "./ShoppingListInput";
import ShoppingListItem from "./ShoppingListItem"
import { ShoppingListItemGet } from "@/models/ShoppingList";
import { v4 as uuidv4 } from "uuid";

type Props = {}

const ShoppingList = (props: Props) => {
    const [inputTitle, setInputTitle] = useState<string>("");
    const [items, setItems] = useState<ShoppingListItemGet[] | null>();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value);
        console.log(e.target.value)
    }

    const onItemSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const newItem: ShoppingListItemGet = {
            title: inputTitle,
            isCompleted: false,
        }
        const updatedItems = [...items!, newItem!]
        setItems(updatedItems)
        console.log("added item: " + newItem.title)
    }

    const example: ShoppingListItemGet[] = [
        {
            title: "cheese",
            isCompleted: true,
        },
        {
            title: "beef",
            isCompleted: false,
        }
    ]

    useEffect(() => {
        setItems(example)
    }, [])

    return (
        <div className="bg-gray-300 shadow p-6 mx-auto w-fit flex flex-col gap-2 items-center">
            ShoppingListComponent
            <ShoppingListInput inputTitle={inputTitle} handleInputChange={handleInputChange} onItemSubmit={onItemSubmit}></ShoppingListInput>
            {
                items ? items?.map((item) => {
                    return <ShoppingListItem key={uuidv4()} item={item}></ShoppingListItem>
                }) : (
                    <p>No items</p>
                )
            }
        </div>
    )
}

export default ShoppingList
