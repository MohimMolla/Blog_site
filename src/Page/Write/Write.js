import React, { useState } from "react";
import "./Write.css";

import axios from 'axios';

export default function Write() {
  const [formValues, setFormValues] = useState({
    title: '',
    file: null,
    author: '',
    description: ''
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormValues({ ...formValues, file });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

  const formData = new FormData();
  formData.append('title', formValues.title);
  formData.append('file', formValues.file);
  formData.append('description', formValues.description);
  formData.append('author', formValues.author);
  formData.append('sub', "submit");
  //
  axios.post('http://localhost/Mahim_53/React/Project/Blog-site-final/Api/create.php', formData)
    .then(response => {
      // Handle successful response
      console.log(response);
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });
  //
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      {console.log(formValues)}
      <form className="writeForm" onSubmit={handleSubmit}>

        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            // style={{ display: "none" }}
            onChange={(e) => handleFileChange(e)}
          />

        </div>
        <div className="writeFormGroup">
        <label htmlFor="title">
            Title
          </label>
          <input
            className="writeInput"
            placeholder="Title"
            name="title"
            type="text"
            autoFocus={true}
            value={formValues.title}
            onChange={(e) => handleInputChange(e)}
          />

        </div>
        <div className="writeFormGroup">
        <label htmlFor="author">
            Author Name
          </label>
          <input
            className="writeInput"
            placeholder="author name"
            type="text"
            name="author"
            autoFocus={true}
            value={formValues.author}
            onChange={(e) => handleInputChange(e)}
          />

        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            name="description"
            autoFocus={true}
            value={formValues.description}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
