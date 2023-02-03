import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/api/authApi";
import { removeUser } from "../features/services/authSlice";

const Navbar = () => {
  const user = JSON.parse(Cookies.get("user"));
  const token = Cookies.get("token");
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    const data = await logout(token);
    dispatch(removeUser());
    console.log(data);
    navigate("/login");
  };
  return (
    <nav className="px-2 bg-white border-gray-200 ">
      <div className="container flex  items-center justify-between mx-auto">
        <div>
          <span className="text-xl font-semibold">
            My Contact
          </span>
        </div>
        <div className="">
          <ul className="flex items-center p-4 rounded-lg">
            <li className="inline-flex flex-col mr-5">
              <span>{user?.name}</span><small>{user?.email}</small>
            </li>
            <li>
              <button
                className="bg-slate-300 px-5 py-2 rounded"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;