import React from 'react';
import { httpAddUser } from '../Utility/request';

const AddUser = () => {

  const handleCreateUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const gender = form.gender.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const blood = form.blood.value;
    const address = form.address.value;
    const fieldOfStudy = form.fieldOfStudy.value;

    console.log(name, gender);

    const data = {
      params: {
        name: name,
        gender: gender, // male,female
        email: email,
        phone: phone,
        blood: blood, // A+,B+,AB+,AB-,O+,O-
        address: address,
        field_of_study: fieldOfStudy,
        role: "student", // super-admin,admin,executive,teacher,student
      },
      model: "user",
    };

    console.log(data);
   
    const response = httpAddUser(data);
    console.log(response);

    
  };
    

    return (
      <div>
        <form
          onSubmit={(event) => {
            handleCreateUser(event);
          }}
          className="flex flex-col"
        >
          <div className="p-2">
            <label>Name:</label>
            <input name="name" type="text" placeholder=""></input>
          </div>
          <div className="p-2">
            <label>Gender:</label>
            <select
              name="gender"
              className="select select-bordered w-full max-w-xs"
            >
              <option>male</option>
              <option>female</option>
            </select>
          </div>
          <div className="p-2">
            <label>Email:</label>
            <input name="email" type="email"></input>
          </div>
          <div className="p-2">
            <label>Phone:</label>
            <input name="phone" type="number"></input>
          </div>
          <div className="p-2">
            <label>Blood:</label>
            <input name="blood" type="text"></input>
          </div>
          <div className="p-2">
            <label>Address:</label>
            <input name="address" type="text"></input>
          </div>
          <div className="p-2">
            <label>Field Of Study:</label>
            <input name="fieldOfStudy" type="text"></input>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddUser;