import Logo from "../../../assets/logo.png";
function UHUniNav(props) {
    return (
        <ul className="Uni-Header-NavCluster">
            {props.children}
        </ul>
    );
};

function UHUniNavItem(props) {
    var classes = `Uni-Header-NavItem`;
    if (props.first) classes = `${classes} Uni-Header-NavItemFirst`;
    return (
        <li className={classes}>
            {props.children}
        </li>
    );
};

function UHUniNavLogo(props) {
    return (
        <img src={Logo} width={props.width} height={props.height} className={props.className} alt="MineRIP Logo (Nav)" />
    );
};

export { UHUniNav, UHUniNavItem, UHUniNavLogo };