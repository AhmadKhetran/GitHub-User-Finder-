import React from "react";
import { createContext, useState } from "react";

const GithubContext = createContext();

const GithubURL = "https://api.github.com";
const GithubTOKEN = "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";

export const GithubProvider = ({ children }) => {
  // const [userdata, setUserData] = useState([]);
  // const [loading, setLooding] = useState(true);

  // const fetchData = async () => {
  //   const response = await fetch(`${GithubURL}/users`, {
  //     headers: { Authorization: `${GithubTOKEN}` },
  //   });
  //   const data = await response.json();
  //   setUserData(data);
  //   setLooding(false);
  // };

  return <GithubContext.Provider>{children}</GithubContext.Provider>;
};

export default GithubContext;
