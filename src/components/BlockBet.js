export default function BlockBet(props) {
    return <> 
    <div className="border-2 rounded-lg border-gray-100 flex-grow bg-white">
                <h2 className="block-title">{props.title}</h2>
                <div id={props.id} className="relative md:max-h-screen overflow-auto p-3 bg-white">
                    {props.children}
                </div>
                </div>
    </>
}