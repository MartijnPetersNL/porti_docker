import "../App.css";

export default function SideBar(props) {
  const { handleDisplayModal, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleDisplayModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data.title}</h2>
        <div className="desciptionContainer">
          <p>{data?.date}</p>
          <p>{data.explanation}</p>
          <br />

          <button onClick={handleDisplayModal}>
            <i className="fa-solid fa-arrow-right terugknop"></i>
          </button>
          <h1>Maak je eigen Nasa Open API project met:</h1>
          <a className="link-light" href="https://api.nasa.gov/">
            NASA open API
          </a>
          <br />
        </div>
      </div>
    </div>
  );
}
