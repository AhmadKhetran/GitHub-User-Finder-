import { createContext, useEffect, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [userdata, setUserData] = useState([]);
  const [loading, setLooding] = useState(false);
  const [userInput, setUserInput] = useState();

  const inputValue = (event) => {
    const enteredValue = event.target.value;
    setUserInput(enteredValue);
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${userInput}`,
      {
        headers: { Authorization: `${GithubTOKEN}` },
      }
    );
    setLooding(true);
    const data = await response.json();
    console.log(data.items);
    setUserData(data.items);
    setLooding(false);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
    fetchData();
  };

  const GithubURL = "https://api.github.com";
  const GithubTOKEN = "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";

  return (
    <SearchContext.Provider
      value={{ inputValue, searchHandler, userdata, loading }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
