import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Useritem(props) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={props.imgUrl} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{props.login}</h2>
          <Link
            className="text-base-content text-opacity-400"
            to={`/users/${props.login}`}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Useritem;
