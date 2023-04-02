import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import axios from "axios";
import Search from "./Search";


function UserManagement() {
  //state quản lý danh sách User
  const [users, setUsers] = useState([]);
  //state quản lý user đang được chọn
  const [selectedUser, setSelectedUser] = useState({});

    //State quản lý giá trị tìm kiếm
    const [searchByName, setSearchByName] = useState("");

  //Viết hàm call API để lấy danh sách users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://6427bab446fd35eb7c44aba6.mockapi.io/user"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  
  //viết hàm xử lý nhận vào object user và thêm hoặc cập nhập user

  const handleSubmit = async (user) => {
    const { id, ...payload } = user;
    try {
      if (id) {
        //Cập nhập
        await axios.put(
          `https://6427bab446fd35eb7c44aba6.mockapi.io/user/${id}`,
          payload
        );
      } else {
        //Thêm mới
        await axios.post(
          "https://6427bab446fd35eb7c44aba6.mockapi.io/user",
          payload
        );
      }
      //gọi hàm khi call API create/update
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  //viết hàm xử lý nhận vào object user,thêm vào state user
  // const handleSubmit = (user, type) => {
  //   if(type === "create") {
  //     const id = Math.floor(Math.random()*100)
  //     setUsers([...users, {...user, id}]);
  //   } else if(type === "update") {
  //     const newUsers = users.map(item => {
  //       if(item.id=== user.id) {
  //         return user;
  //       }
  //       return item
  //     });
  //     setUsers(newUsers);
  //   }

  // };

  //Viết hàm xử lý nhận vào userId, xóa user có id bằng userId khỏi state users
  // const handleDeleteUser = (userId) => {
  //   const newUsers = users.filter((user) => user.id !== userId);
  //   setUsers(newUsers);
  // }

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://6427bab446fd35eb7c44aba6.mockapi.io/user/${userId}`
      );
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  //Viết hàm xử lý nhận vào object use và lưu state selectUser
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleSearch = (searchString) => {
    setSearchByName(searchString);
  };

  useEffect(() => {
    fetchUsers();
  }, [searchByName]);

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary">User Management</h1>
      <div className="card">
        <div className="card-header bg-dark text-white">User Form</div>
        <div className="card-body">
          <UserForm
            onReset={() => selectedUser({})}
            onSubmit={handleSubmit}
            user={selectedUser}
          />
        </div>
      </div>

      <div className="mt-4">
        <Search onSearch={handleSearch}/>
      </div> 


      <div className="mt-4">
        <UserList
          users={users}
          onDeleteUser={handleDeleteUser}
          onSelectUser={handleSelectUser}
        />
      </div>
    </div>
  );
}

export default UserManagement;
