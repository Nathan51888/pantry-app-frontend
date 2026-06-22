"use server"

import { apiShoppingListCreate, apiShoppingListDelete, apiShoppingListUpdateCompleted } from "@/lib/data";
import { ShoppingListItemGet } from "@/models/ShoppingList";
import { revalidatePath } from "next/cache";

type ActionResult = {
    success?: boolean;
    error?: string;
    data?: ShoppingListItemGet | null;
}

export const createShoppingListAction = async (prevState: any, formData: FormData): Promise<ActionResult> => {
    const title = formData.get("title") as string
    if (title === "") return { success: false, error: "Title cannot be empty." }

    try {
        const data = await apiShoppingListCreate(title)
        revalidatePath("/shopping-list/")
        return { success: true, data: data }
    } catch (error) {
        console.log("Failed to create shoppingListItem: ", error)
        return { success: false, error: "Something went wrong. Please try again." }
    }
}

export const updateShoppingListCompletedAction = async (item: ShoppingListItemGet, isCompleted: boolean) => {
    const data = await apiShoppingListUpdateCompleted(item, isCompleted);
    revalidatePath("/shopping-list/")
}

export const deleteShoppingListAction = async (formData: FormData) => {
    const id = formData.get("id") as string
    const data = await apiShoppingListDelete(id)
    revalidatePath("/shopping-list")
} 
