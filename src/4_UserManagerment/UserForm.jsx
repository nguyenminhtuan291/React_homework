import React, {useState, useEffect} from 'react'

function UserForm({user, onSubmit, onReset }) {
  const [values, setValues] = useState({
    id: user.id,
    Name: user.Name,
    Type: user.Type,
    Description: user.Description,
    Image: user.Image,
    Price: user.Price,
  });

  useEffect(() => {
    setValues(user);
  }, [user]);

  const handleChange = (evt) => {
    const {value, name} = evt.target
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    //chặn hành vi submit mặc định của form
    evt.preventDefault();

    //tạo object từ các giá trị của input
    // const user = {...values, id:Math.floor(Math.random()*100)}

    //gọi prop onSubmit và truyền vào object user và tham số để xác định thêm mới hay cập nhập 
    onSubmit(values, values.id ? "update" : "create");

    //gọi handleResetForm để reset lại giá trị form
    handleResetForm();

  };

  const handleResetForm = () => {
    setValues({
      Name: "",
      Type: "",
      Description: "",
      Image: "",
      Price: "",
    });
    onReset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className='form-label'>Name</label>
        <input type="text" className='form-control'
          value={values.Name}
          onChange={handleChange}
          name="Name" />
      </div>
      <div className="mb-3">
        <label className='form-label'>Type</label>
        <input type="text" className='form-control'
        value={values.Type}
        onChange={handleChange}
        name = "Type"
         />
      </div>
      <div className="mb-3">
        <label className='form-label'>Description</label>
        <input type="text" className='form-control'
                value={values.Description}
                onChange={handleChange}
                name = "Description" />
      </div>
      <div className="mb-3">
        <label className='form-label'>Image</label>
        <input type="text" className='form-control'
                value={values.Image}
                onChange={handleChange}
                name = "Image" />
      </div>
      <div className="mb-3">
        <label className='form-label'>Price</label>
        <input type="text" className='form-control'
                value={values.Price}
                onChange={handleChange}
                name = "Price"/>
      </div>

      <button className='btn btn-success me-2' type="submit">Submit</button>
      <button className='btn btn-secondary' type="button" onClick={handleResetForm}>Reset</button>

    </form>
  )
}

export default UserForm