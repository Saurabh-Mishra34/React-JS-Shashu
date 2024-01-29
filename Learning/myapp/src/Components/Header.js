import "./Header.css"

const Header = () => {
    const headerStyle = {
        border: "2px solid red",
        padding: "4vmax",
    };

    return (
        <nav style={headerStyle}>Here is a new header component!</nav>
    )
}

export default Header;