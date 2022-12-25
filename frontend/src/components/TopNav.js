import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import decode from "jwt-decode";
import * as actionType from "../redux/constants/actionTypes";

import Button from "./forms/Button";

const UserBadge = ({ user, onLogout }) => {
  return (
    <div className="flex flex-row gap-3">
      <div className="flex flex-row gap-2 items-center bg-emerald-800 rounded-full">
        <div className="bg-blue-200 w-[30px] h-[30px] rounded-full flex items-center justify-center">
        {user?.result.name.charAt(0)}
        </div>
        <div className="text-gray-200 pr-3 text-sm">{user?.result.name}</div>
      </div>
      <button
        type="button"
        onClick={onLogout}
        className="bg-red-600 p-2 rounded-md text-gray-100 text-sm hover:bg-red-700 hover:shadow-sm transition-all ease-in-out"
      >
        Logout
      </button>
    </div>
  );
};

function TopNav() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth/login");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="px-3 py-2 bg-gray-500 flex flex-row justify-between shadow-md">
      <div className="font-bold text-lg text-gray-200 flex items-center" onClick={() => history.push("/")}>
        SAMPLE
      </div>
      <div>
        {user?.result ? (
          <UserBadge user={user} onLogout={() => logout()} />
        ) : (
          <div className="flex flex-row gap-3">
            <Button name="Login" onClick={() => history.push("/auth/login")} />

            <Button name="Signup" onClick={() => history.push("/auth/signup")} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TopNav;
