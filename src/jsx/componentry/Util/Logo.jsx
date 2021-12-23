import Logo from "../../../assets/logo.png";

export default function UHLogo(props) {
    return (
        <img src={Logo} width={props.width} height={props.height} className={props.className} alt="MineRIP Logo" />
    );
};