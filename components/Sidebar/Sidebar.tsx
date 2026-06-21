type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className="grow shadow rounded-lg px-36">
            <h1>Sidebar</h1>
            <div className="flex flex-col justify-between gap-6 px-3">
                <button className="shadow rounded-lg px-3 py-2">Menu</button>
                <button className="shadow rounded-lg px-3 py-2">Menu</button>
                <button className="shadow rounded-lg px-3 py-2">Menu</button>
                <button className="shadow rounded-lg px-3 py-2">Menu</button>
            </div>
        </div>
    )
}

export default Sidebar
