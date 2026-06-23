type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="grow rounded-lg px-36 shadow">
      <h1>Sidebar</h1>
      <div className="flex flex-col justify-between gap-6 px-3">
        <button className="rounded-lg px-3 py-2 shadow">Menu</button>
        <button className="rounded-lg px-3 py-2 shadow">Menu</button>
        <button className="rounded-lg px-3 py-2 shadow">Menu</button>
        <button className="rounded-lg px-3 py-2 shadow">Menu</button>
      </div>
    </div>
  );
};

export default Sidebar;
