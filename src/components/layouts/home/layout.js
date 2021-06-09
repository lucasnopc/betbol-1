import Header from './header'
import ListMenu from './listMenu'

export default function Layout(props) {
    return(
        <div>
        <Header userString={props.userString} />
        <div className="page grid grid-cols-7">
            <div className="col-span-1 mt-3 ml-3 border border-gray-200 rounded-md">
                <ListMenu />
            </div>
            <div className="col-span-6">
                {props.children}
            </div>
        </div>
        
        </div>
    )
}