import React, { useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirnNewPassword, setConfirmNewPassword] = useState(false);
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-10 flex flex-col items-start w-full ">
        <h2 className="mb-5 text-2xl font-bold tracking-wide">
          Change Password
        </h2>
        <div className="relative mb-3">
          <input
            type={oldPassword ? "text" : "password"}
            className="bg-gray-100 w-80 p-3 pl-10 outline-none rounded-lg"
            placeholder="Old Password"
            name="oldpassword" 
          />
          <MdLockOutline
            size={20}
            color="gray"
            className="absolute top-3 left-3"
          />
          {oldPassword ? (
            <RiEyeFill
              size={20}
              color="gray"
              className="absolute top-3 right-3 cursor-pointer "
              onClick={() => setOldPassword((prev) => !prev)}
            />
          ) : (
            <RiEyeOffFill
              size={20}
              color="gray"
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setOldPassword((prev) => !prev)}
            />
          )}
        </div>
        <div className="relative mb-3">
          <input
            type={newPassword ? "text" : "password"}
            className="bg-gray-100 w-80 p-3 pl-10 outline-none rounded-lg"
            placeholder="New Password"
            name="newpassword"
          />
          <MdLockOutline
            size={20}
            color="gray"
            className="absolute top-3 left-3"
          />
          {newPassword ? (
            <RiEyeFill
              size={20}
              color="gray"
              className="absolute top-3 right-3 cursor-pointer "
              onClick={() => setNewPassword((prev) => !prev)}
            />
          ) : (
            <RiEyeOffFill
              size={20}
              color="gray"
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setNewPassword((prev) => !prev)}
            />
          )}
        </div>
        <div className="relative mb-3">
          <input
            type={confirnNewPassword ? "text" : "password"}
            className="bg-gray-100 w-80 p-3 pl-10 outline-none rounded-lg"
            placeholder="Confirm New Password"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            name="confirmnewpassword"
          />
          <MdLockOutline
            size={20}
            color="gray"
            className="absolute top-3 left-3"
          />
          {confirnNewPassword ? (
            <RiEyeFill
              size={20}
              color="gray"
              className="absolute top-3 right-3 cursor-pointer "
              onClick={() => setConfirmNewPassword((prev) => !prev)}
            />
          ) : (
            <RiEyeOffFill
              size={20}
              color="gray"
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setConfirmNewPassword((prev) => !prev)}
            />
          )}
        </div>

        <button
          type="button"
          className="text-center bg-black text-white p-3 w-60 rounded-lg my-2"
        >
          Reset Password
        </button>
      </div>
    </>
  );
};

export default ChangePassword;
