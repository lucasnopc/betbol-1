import Header from './header'

export default function Layout(props) {
    return(
        <div>
        <Header />
        <div className="page">
        {props.children}
        </div>
        
        </div>
    )
}