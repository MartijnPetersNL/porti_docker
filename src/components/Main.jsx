import "../App.css";

export default function Main(props) {
  const { data } = props;

  function getVideoId(url) {
    const regExp =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  }

  const videoId = getVideoId(data.url);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="videoContainer">
        <h1 className="scifi" id="indextitel">
          APOD API
        </h1>
        <img
          src="./public/nasa-logo.png"
          alt="nasa-logo"
          className="logo-footer"
        />
        <br />
        <br />

        <h2 className="scifi">{data.date}</h2>
        {videoId ? (
          <iframe
            className="videodisplay w-140 pl-8 pr-8 pt-8 "
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={data.title || "YouTube Video"}
          ></iframe>
        ) : (
          <p className="scifi">Invalid video URL</p>
        )}
        <p className="scifi"> {data.explanation}</p>
      </div>
      <div className="mainImage flex items-center justify-center">
        <img
          src={data.hdurl}
          className="achtergrondafbeelding w-140 pl-8 pr-8 pt-8 "
          alt={
            `${data.title} ${data.copyright}` || "afbeelding niet beschikbaar"
          }
        />
        <br />
        <br />
      </div>
    </div>
  );
}
