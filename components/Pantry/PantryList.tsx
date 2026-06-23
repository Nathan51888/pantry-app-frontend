"use client";

import { PantryItemGet } from "@/models/Pantry";
import { useEffect, useState } from "react";
import PantryListItem from "./PantryListItem";
import { v4 as uuidv4 } from "uuid";
import PantryListInput from "./PantryListInput";

type Props = {};

const PantryList = (props: Props) => {
  const [items, setItems] = useState<PantryItemGet[] | null>();
  const example: PantryItemGet[] = [
    {
      name: "Apple",
    },
    {
      name: "Orange",
    },
  ];

  useEffect(() => {
    setItems(example);
  }, []);

  return (
    <div className="rounded-lg p-6 shadow">
      <h1>PantryList</h1>
      <PantryListInput></PantryListInput>
      <div className="flex flex-col gap-6 rounded-lg bg-gray-200 p-2 shadow">
        {items ? (
          items.map((item) => {
            return <PantryListItem key={uuidv4()} item={item}></PantryListItem>;
          })
        ) : (
          <h1>No pantry item found</h1>
        )}
      </div>
    </div>
  );
};

export default PantryList;
