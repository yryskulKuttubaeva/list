import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "./usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const output = users.map((user) => <li key={user.id}>{user.name}</li>);

  return <ul className="Users">{output}</ul>;
}