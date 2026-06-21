'use client'

import ShoppingList from "@/components/ShoppingList/ShoppingList";

export default function Page() {
    return (
        <div className="shadow rounded-lg w-6xl h-full p-6 m-3 mx-auto">
            <h1>ShoppingListPage</h1>
            <ShoppingList></ShoppingList>
        </div >
    )
}
