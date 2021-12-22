import React from "react";
import "./Artist.css";
import StarIcon from "@mui/icons-material/Star";

function Artist({ artist }) {
  const ratingStars = () => {
    let rating = (artist.popularity * 5) / 100;
    rating = parseInt(rating);
    let array = [];
    for (var i = 0; i < rating; i++) {
      array.push(<StarIcon />);
    }
    return (
      <>
        {array.map((_, key) => (
          <StarIcon key={key} />
        ))}
      </>
    );
  };

  return (
    <div className="artist">
      <img
        src={
          artist.images.length
            ? artist.images[1].url
            : "https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg"
        }
        alt=""
      />
      <div className="artist__info">
        <p>{artist.name}</p>
        <small>
          {artist.followers.total} <span>followers</span>
        </small>
        <div className="artist__rating">{ratingStars()}</div>
      </div>
    </div>
  );
}

export default Artist;
