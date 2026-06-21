import PantryList from "@/components/Pantry/PantryList"

type Props = {}

const page = (props: Props) => {
    return (
        <div className="shadow rounded-lg w-6xl h-full p-6 mx-auto">
            <h1>Pantry Page</h1>
            <PantryList></PantryList>
        </div>
    )
}

export default page
