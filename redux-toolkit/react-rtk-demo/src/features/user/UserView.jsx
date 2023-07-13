import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of users</h2>
      {userList.map((e) => {
        return <h1 key={e.id}>{e.name}</h1>;
      })}
    </div>
  );
};

export default UserView;
