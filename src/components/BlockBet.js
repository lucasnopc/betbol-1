export default function BlockBet(props) {
    return <> 
    <div className="border-2 rounded-lg border-gray-200 mt-3 flex-grow">
                <h2 className="text-lg rounded-t-lg font-semibold text-gray-800 uppercase bg-gray-100 px-3 border-b py-1 border-gray-200 mb-2">{props.title}</h2>
                <div className="h-96 overflow-auto p-3">
                    {props.children}
                </div>
                </div>
    </>
}