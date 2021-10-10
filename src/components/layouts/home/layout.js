import Header from './header'
import Footer from './footer'

export default function Layout(props) {
    return <div className="max-h-screen overflow-visible">
        <Header userString={props.userString} />
                <main className="bg-cover h-full bg-gray-100">
                    {props.children}
                </main>
        <Footer />
    </div>
}