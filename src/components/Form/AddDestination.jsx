import React, { useState } from "react";
import plusbtn from "../../assets/control/plus.png";
import { useDispatch } from "react-redux";
import { postDestination } from "../../Redux/Features/DestinationSlice";
import { cloudinaryUpload } from "../../cloudinaryUpload/cloudinaryUpload";

const AddDestination = ({ onsuccess }) => {
  const dispatch = useDispatch();
  const [imagesPreview, setImagesPreview] = useState([]);
  const [formData, setFormData] = useState({
    Destination_Name: "",
    image: "",
    total_boats: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = async (e) => {
    e.preventDefault();
    try {
      const files = Array.from(e.target.files); // Convert FileList to array

      for (const file of files) {
        const img = await cloudinaryUpload(file); // Upload each file
        console.log(img, "Image");
        setImagesPreview((prev) => [...prev, img]);
        console.log(imagesPreview[0], "imagePreview");
        // Update formData state with the new images
        setFormData((prev) => ({
          ...prev,
          image: [...prev.image, img],
        }));
      }
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(postDestination(formData));
    if (postDestination.fulfilled.match(resultAction)) {
      setFormData({
        Destination_Name: "",
        image: "",
        total_boats: "",
      });
      setImagesPreview([]);
      onsuccess();
    } else {
      console.error(resultAction.payload);
    }
  };
  return (
    <section className="add-section">
      <div className="main-add">
        <h6>Add Destination</h6>
        <form className="form" onSubmit={handleSubmit}>
          <div className="upload-img-div label">
            <label
              className={`${imagesPreview.length > 0 ? "no-padding" : ""}`}
              htmlFor="file-input"
            >
              {imagesPreview.length === 0 && <img src={plusbtn} alt="Upload" />}
            </label>
            <input
              id="file-input"
              type="file"
              name="image"
              onChange={handleFileChange}
              className="image-type-input"
            />
            {imagesPreview.length > 0 && (
              <img src={imagesPreview[0]} alt="Preview" className="pls-btn" />
            )}
          </div>
          <div className="form-details-div">
            <div className="label">
              <label htmlFor="">Name</label>
              <input
                onChange={handleInputChange}
                name="Destination_Name"
                value={formData.Destination_Name}
                type="text"
              />
            </div>
            <div className="label">
              <label htmlFor="">Total Boats</label>
              <input
                onChange={handleInputChange}
                value={formData.total_boats}
                name="total_boats"
                type="text"
              />
            </div>

            <button className="upload-btn">Upload</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddDestination;
