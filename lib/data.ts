"use server";

import { ShoppingListItemGet } from "@/models/ShoppingList";

export const apiShoppingListGetAll = async (): Promise<
  ShoppingListItemGet[] | null
> => {
  try {
    const res = await fetch("http://localhost:5165/api/shopping-list/");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const apiShoppingListCreate = async (
  title: string,
): Promise<ShoppingListItemGet | null> => {
  try {
    const res = await fetch("http://localhost:5165/api/shopping-list/", {
      method: "POST",
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const apiShoppingListUpdateCompleted = async (
  item: ShoppingListItemGet,
  isCompleted: boolean,
): Promise<any> => {
  try {
    const res = await fetch(
      `http://localhost:5165/api/shopping-list/${item.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          title: item.title,
          isCompleted: isCompleted,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const apiShoppingListUpdateTitle = async (
  item: ShoppingListItemGet,
  title: string,
): Promise<any> => {
  try {
    const res = await fetch(
      `http://localhost:5165/api/shopping-list/${item.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          title: title,
          isCompleted: item.isCompleted,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const apiShoppingListDelete = async (id: string): Promise<any> => {
  try {
    const res = await fetch(`http://localhost:5165/api/shopping-list/${id}`, {
      method: "DELETE",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
