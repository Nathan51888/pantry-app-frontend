import PantryList from "@/components/Pantry/PantryList";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="mx-auto h-full w-6xl rounded-lg p-6 shadow">
      <h1>Pantry Page</h1>
      <PantryList></PantryList>
    </div>
  );
};

export default page;
