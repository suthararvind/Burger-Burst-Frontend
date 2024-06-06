import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUsers } from "../../redux/actions/admin";

const Users = () => {
  //const arr = [1, 2, 3, 4];
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.admin);


//  console.log(users.map(i => i.name));


  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);


  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>

          <tbody>
          {users &&
            users.map((i) => (
              <tr key={i._id}>
                <td>#{i._id}</td>
                <td>{i.name}</td>
                <td>
                  <img src={i.photo} alt="User" />
                </td>
                <td>{i.role}</td>
                <td>{i.createdAt}</td>
              </tr>
            ))}
        </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
