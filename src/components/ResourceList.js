import React, { useState } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(res.data);
  };

  return <div>{resources.length}</div>;
};

export default ResourceList;
