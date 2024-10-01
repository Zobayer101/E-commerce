import { useState } from "react";
import { json } from "react-router-dom";

const Dashbord = () => {
  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) return alert("file is not found");
    const formData = new FormData();
    formData.append("image", image);


    const requst = await fetch(
      "  http://localhost:3300/route/api/product/new",
      {
        method: "post",
        body: formData,
      }
    );
    const result = await requst.json();
    console.log(result);
  };

  return (
    <>
      <div>
        <h2>Upload Image</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
};
export default Dashbord;
