import React from "react";
import useFetch from "../../../hooks/datafetch";
import AdminTop from "../../../components/adminTop/AdminTop";

const Users = () => {
  let title = "Users";
  let { data, loading, error } = useFetch(`/users`);
  let userData = data?.users.map((user) => {
    return (
      <tr className="table__row" key={user.id}>
        <td className="table__img">
          <img src={user.image} alt="" />
        </td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.maidenName}</td>
        <td>{user.username}</td>
      </tr>
    );
  });
  return (
    <div className="container">
      <AdminTop title={title} />
      <div className="Users">
        <div className="user">
          <table className="table">
            <thead className="table__head">
              <tr className="table__row">
                <th>Owner</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>email</th>
                <th>maidenName</th>
                <th>username</th>
              </tr>
            </thead>
            <tbody className="table__body">{userData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
