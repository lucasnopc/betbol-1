import Header from './header'
import Footer from './footer'

export default function Layout(props) {
    return <div className="min-h-screen overflow-visible bg-gray-100">
        <Header userString={props.userString} />
                <main className="bg-cover h-full ">
                    {props.children}
                </main>
        <Footer />
    </div>
}