import { useDispatch } from "react-redux";
import { addUser } from "./usersSlice";

export default function AddUser() {
  const dispatch = useDispatch();

  function onAddUser(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    dispatch(addUser(data.get("name")));
  }

  return (
    <form onSubmit={onAddUser}>
      <input type="text" name="name" />
      <button>Add</button>
    </form>
  );
}
