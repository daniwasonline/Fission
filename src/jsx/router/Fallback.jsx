export default function Fallback() {
    return (
        <div className="Fallback">
            <h1 style={{ fontSize: "500%", paddingLeft: "10%", paddingRight: "10%" }}>404.</h1>
            <p style={{ fontSize: "150%", paddingLeft: "10%", paddingRight: "10%", marginTop: "-1.5%" }}>The page you were looking for couldn't be found. Try re-entering the URL belonging to the page that you were looking for, or <a href="/">go home</a>.</p>
        </div>
    );
};