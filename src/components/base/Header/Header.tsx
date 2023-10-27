/* eslint-disable @next/next/no-page-custom-font */
type HeaderProps = {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (
        <>
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap" rel="stylesheet"></link>
        </>
    )
}

export default Header;