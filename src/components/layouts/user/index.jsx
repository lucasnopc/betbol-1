import Header from '../home/header'
import Footer from '../home/footer'

export default function LayoutUser(props) {
    return <div className="min-h-screen">
        <Header userString={props.userString} />
        <main className="">
            <div className="page">
                <div className="bg-white scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-white">
                    <div className="w-10/12 mx-auto">
                        {props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        </main>
    </div>
}