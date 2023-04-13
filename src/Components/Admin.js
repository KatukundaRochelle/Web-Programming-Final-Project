// import React, { useState, useEffect } from "react";
// // import axios from "axios";
// import "./Admin.css";

// function Admin() {
//   const [users, setUsers] = useState([]);
//   const [editingUser, setEditingUser] = useState(null);

//   useEffect(() => {
//     axios.get("/api/users").then((res) => {
//       setUsers(res.data);
//     });
//   }, []);

//   const handleEdit = (user) => {
//     setEditingUser(user);
//   };

//   const handleSave = (user) => {
//     axios.put(`/api/users/${user.id}`, user).then((res) => {
//       setEditingUser(null);
//       setUsers((prevUsers) =>
//         prevUsers.map((u) => (u.id === user.id ? user : u))
//       );
//     });
//   };

//   const handleCancelEdit = () => {
//     setEditingUser(null);
//   };

//   return (
//     <div className="admin-container">
//       <h2>Users</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>
//                 <button onClick={() => handleEdit(user)}>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {editingUser && (
//         <div className="edit-form">
//           <h3>Edit User</h3>
//           <form onSubmit={(e) => e.preventDefault()}>
//             <div>
//               <label htmlFor="username">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={editingUser.username}
//                 onChange={(e) =>
//                   setEditingUser({
//                     ...editingUser,
//                     username: e.target.value,
//                   })
//                 }
//               />
//             </div>
//             <div>
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="text"
//                 id="email"
//                 value={editingUser.email}
//                 onChange={(e) =>
//                   setEditingUser({
//                     ...editingUser,
//                     email: e.target.value,
//                   })
//                 }
//               />
//             </div>
//             <div className="buttons">
//               <button onClick={() => handleSave(editingUser)}>Save</button>
//               <button onClick={handleCancelEdit}>Cancel</button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Admin;

import React, { useState, useEffect } from "react";
import "./Admin.css";

function Admin() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // Mock API call that returns sample data
    const fetchUsers = async () => {
      const data = [
        { id: 1, username: "JohnDoe", email: "john.doe@example.com" },
        { id: 2, username: "JaneDoe", email: "jane.doe@example.com" },
        { id: 3, username: "BobSmith", email: "bob.smith@example.com" },
      ];
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = (user) => {
    // Mock API call that returns a success response
    const saveUser = async () => {
      setEditingUser(null);
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? user : u))
      );
    };

    saveUser();
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="admin-container">
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingUser && (
        <div className="edit-form">
          <h3>Edit User</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={editingUser.username}
                onChange={(e) =>
                  setEditingUser({
                    ...editingUser,
                    username: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                value={editingUser.email}
                onChange={(e) =>
                  setEditingUser({
                    ...editingUser,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="buttons">
              <button onClick={() => handleSave(editingUser)}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Admin;
