import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authservice.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button className="bg-[#640d14] text-white font-bold inline-block px-6 py-2 duration-200 hover:bg-[#8c1c13] rounded-full"
    onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
