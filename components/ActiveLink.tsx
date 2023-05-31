import { CSSProperties, FC } from 'react'
import { useRouter } from "next/router"

const style:CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props {
    children?: JSX.Element | JSX.Element[];
    text: string,
    href: string,
  }

export const ActiveLink: FC<Props> = (props) => {
    const { asPath } = useRouter()
    
    return (
        <a style={asPath == props.href ? style : undefined} href={props.href}>{props.text}</a>
    )
}
