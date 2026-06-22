import ShoppingList from "@/components/ShoppingList/ShoppingList";
import { apiShoppingListGetAll } from "@/lib/data";
import { ShoppingListItemGet } from "@/models/ShoppingList";
import { Suspense } from "react";

export default async function Page() {
    const data: Promise<ShoppingListItemGet[] | null> = apiShoppingListGetAll();

    return (
        <div className="shadow rounded-lg w-6xl h-full p-6 m-3 mx-auto">
            <h1>ShoppingListPage</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <ShoppingList data={data}></ShoppingList>
            </Suspense>
        </div >
    )
}
