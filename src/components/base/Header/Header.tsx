type HeaderProps = {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return (<title>{title}</title>)
}

export default Header;