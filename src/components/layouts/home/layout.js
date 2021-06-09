import Header from './header'

export default function Layout(props) {
    return <>
        <Header userString={props.userString} />
                <main>
                    {props.children}
                </main>

    </>
}