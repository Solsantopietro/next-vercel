import { CSSProperties, FC } from 'react'
import { useRouter } from "next/router"

const style:CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface Props {
    children?: JSX.Element | JSX.Element[];
    text: string | JSX.Element;
    href: string;
  }

export const ActiveLink: FC<Props> = ({href, text}) => {
    const { asPath } = useRouter()
    
    return (
        <a style={asPath == href ? style : undefined} href={href}>{text}</a>
    )
}
