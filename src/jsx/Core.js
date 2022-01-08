import "./css/Core.css";
function App() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-y-6 flex-wrap dark:bg-gray-900 bg-white">
      <h1 className="Header">Welcome to Reactbreeze! 👋</h1>
      <p className="Text">Reactbreeze simplifies the setup of React-based Tailwind applications by having an organized file structure with all the tools that you need, all out-of-the-box. <b>Work more efficiently with Reactbreeze.</b></p>
      <a target="_blank" rel="noreferrer noopener" href="https://github.com/hydrabank/cra-template-reactbreeze.git"><button className="Button">Learn more</button></a>
    </div>
  );
}

export default App;
