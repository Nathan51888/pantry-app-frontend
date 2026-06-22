'use client'

import { createShoppingListAction } from "@/actions/shoppingList";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useActionState } from "react"

interface Props {
}

const ShoppingListAddInput = ({ }: Props) => {
    const [state, formAction, isPending] = useActionState(createShoppingListAction, {
    });

    return (
        <div className="shadow w-fit py-3 px-6">
            <form
                className="mx-auto w-fit flex gap-3"
                action={formAction}
            >
                <TextField
                    name="title"
                    placeholder="item"
                ></TextField>
                <Button variant="contained" type="submit" disabled={isPending}>Add</Button>
                {isPending ? "Adding..." : `Added Item: "${state.data?.title}"`}
            </form>
        </div>
    )
}

export default ShoppingListAddInput
