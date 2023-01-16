import { useEffect, useContext } from "react";
import Useritem from "./Useritem";
import GithubContext from "../../context/GithubContext";
import SearchForm from "../layouts/Searchform";
import SearchContext from "../../context/SearchContext";

function UserResults(props) {
  const { loading, userdata } = useContext(SearchContext);

  if (loading === true) {
    return (
      <div className="grid h-screen place-items-center">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <>
      <SearchForm />
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {userdata.map((e) => (
          <Useritem key={e.id} login={e.login} imgUrl={e.avatar_url} />
        ))}
      </div>
    </>
  );
}

export default UserResults;
