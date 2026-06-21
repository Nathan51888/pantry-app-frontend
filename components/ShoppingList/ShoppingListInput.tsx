import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ChangeEvent, SyntheticEvent } from "react"

interface Props {
    inputTitle: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onItemSubmit: (e: SyntheticEvent) => void;
}

const ShoppingListInput = ({ inputTitle: title, handleInputChange, onItemSubmit }: Props) => {
    return (
        <div className="shadow w-fit py-3 px-6">
            <form
                className="mx-auto w-fit flex gap-3"
                onSubmit={onItemSubmit}
            >
                <TextField
                    id="item-input"
                    placeholder="item"
                    value={title}
                    onChange={handleInputChange}
                ></TextField>
                <Button variant="contained" type="submit">Add</Button>
            </form>
        </div>
    )
}

export default ShoppingListInput
