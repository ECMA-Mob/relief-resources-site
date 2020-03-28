import React from "react";

import Featured  from "./featured"
import { Link } from "gatsby";

const Description = () => {

  return (
    <div>
      <p className="text-lg mb-6">
        This is a directory of the Relief Resources projects from around the world. Each directory promotes local organizations that are helping our neighbors affected by the COVID-19 health crisis around the world. 
      </p>
      <p className="text-lg mb-6">
        We aim to both help those who need help and make sure those able to give help support established efforts.
      </p>
      <p className="text-lg mb-6">
        Each site was created and is supported by a local advocate.
      </p>
      <div className="mb-6">
        <Link 
          to="/start" 
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Build Your Own Directory
        </Link>
      </div>
      <div className="mb-6">
        <Featured />
      </div>
    </div>
  );
};

export default Description;