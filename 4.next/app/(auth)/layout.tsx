interface Props{
    children : React.ReactNode
}
export default function Layout(props:Props){
    return <div>
        <div>These are authenticated pages </div>
        {props.children}
    </div>
}