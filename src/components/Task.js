import React from "react";
import PropTypes from "prop-types";

function Task({ rank, suit, onClick }) {
  const handleClick = () => {
    onClick({ rank, suit });
  };

  return (
    <div
      onClick={handleClick}
      data-rank={rank}
      data-suit={suit}
      style={{ backgroundColor: suit, height: 75, width: 53 }}
      className="border-solid border border-black rounded cursor-pointer"
    >
      <span>{rank}</span>
    </div>
  );
}

Task.propTypes = {
  onClick: PropTypes.func,
  rank: PropTypes.string,
  suit: PropTypes.string,
};

Task.defaultProps = {
  onClick: () => {},
};

export default Task;
