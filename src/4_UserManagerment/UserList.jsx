import React from 'react'

function UserList({users, onDeleteUser,onSelectUser }) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.Name}</td>
              <td>{user.Type}</td>
              <td>{user.Description}</td>
              <td>
                <img src={user.Image} alt="img" width="50px" />
              </td>
              <td>{user.Price}</td>
              <td>
                <button className='btn btn-warning' onClick={() => onSelectUser(user)}>Edit</button>
                <button className='btn btn-danger' onClick={() => onDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UserList