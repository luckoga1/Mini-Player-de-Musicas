import "./style.css";

const Card = ({ profileImage, title, description }) => {
  return (
    <div className="card">
      <li>
        <img
          className="img-card"
          // onClick={() => {
          //   setCurrentMusic(card);
          //   handlePlayPause();
          // }}
          src={profileImage}
          alt="foto do album"
        />
      </li>
      <li className="rubik size-20 weight-70 color-white">{title}</li>
      <li className="rubik size-16 weight-40 color-secondary">{description}</li>
    </div>
  );
};
export default Card;
