interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header = (props: HeaderProps) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);

Header.defaultProps = {
    title: "Default title",
};

export default Header;
