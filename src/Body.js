import React from "react";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Body.css";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledWhiteIcon className="body__shuffle"/>
          <FavoriteIcon className="body__fav" fontSize="large"/>
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map(item => (
            <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
