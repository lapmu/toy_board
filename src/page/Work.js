import React from "react";
import List from "../components/List";

const Work = ({ data }) => {
  return (
    <div>
      {data.map((datas) => (
        <List datas={datas} key={datas.id} />
      ))}
    </div>
  );
};
