import Sidebar from "@/components/Sidebar/Sidebar"

type Props = {}

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="min-h-full">
            <h1>Pantry Layout</h1>
            <div className="min-h-full flex justify-between gap-6 mx-20">
                <Sidebar></Sidebar>
                {children}
            </div>
        </div>
    )
}

export default layout
