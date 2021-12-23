import Logo from "../Util/Logo.jsx";
export default function Mobile() {
    return (
        <div className="Mobile">
            <Logo height="200vh" />
            <h1 className="Header">Sorry.</h1>
            <p style={{ paddingLeft: "5%", paddingRight: "5%" }}>MineRIP's website does not support mobile browsers at this time due to limitations with screen real estate on mobile devices. <br /> <br /> If you have a mobile device that can comfortably access desktop versions of websites, or if you would otherwise like to access mine.rip (knowing the risks), feel free to enable desktop mode for mine.rip.</p>
        </div>
    );
};