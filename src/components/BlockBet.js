export default function BlockBet(props) {
    return <> 
    <div className="border-2 rounded-lg border-gray-100 flex-grow">
                <h2 className="block-title">{props.title}</h2>
                <div className=" md:max-h-screen overflow-auto p-3 bg-blue-100">
                    {props.children}
                </div>
                </div>
    </>
}