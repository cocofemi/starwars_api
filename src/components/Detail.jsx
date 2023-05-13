import React from "react";
import Starwarssvg from "./Starwarssvg";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { title, description } = location.state;
  return (
    <>
      <Starwarssvg />
      <p>Movie detail: {title}</p>
      <p>{description}</p>
    </>
  );
};

export default Details;
