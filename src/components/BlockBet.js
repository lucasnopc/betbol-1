export default function BlockBet(props) {
    return <> 
    <div className="border-2 rounded-lg border-gray-200 flex-grow">
                <h2 className="uppercase font-semibold block px-2 py-1 bg-gray-200 text-gray-800">{props.title}</h2>
                <div className="max-h-60 overflow-auto p-3">
                    {props.children}
                </div>
                </div>
    </>
}