// import React from "react";
// import plusbtn from "../../assets/control/plus.png";

// const AddTour = () => {
//   return (
//     <section className="add-section">
//       <div className="main-add">
//         <h6>Add Tour</h6>
//         <form className="form">
//           <div className="upload-img-div label">
//             <label htmlFor="file-input">
//               <img src={plusbtn} alt="" />
//             </label>
//             <input id="file-input" type="file" className="image-type-input" />
//           </div>
//           <div className="form-details-div">
//             <div className="label">
//               <label htmlFor="">Name:</label>
//               <input type="text" />
//             </div>
//             <div className="label">
//               <label htmlFor="">Destination:</label>
//               <input type="text" />
//             </div>
//             <div className="label">
//               <label htmlFor="">Duration:</label>
//               <input type="text" />
//             </div>
//             <div className="label">
//               <label htmlFor="">Seat:</label>
//               <input type="text" />
//             </div>
//             <div className="label">
//               <label htmlFor="">Price:</label>
//               <input type="text" />
//             </div>

//             <button className="upload-btn">Upload</button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default AddTour;

import React, { useEffect, useState } from "react";
import plusbtn from "../../assets/control/plus.png";
import { cloudinaryUpload } from "../../cloudinaryUpload/cloudinaryUpload";
import axios from "axios";
import { baseurl } from "../../BaseUrl";
import { useDispatch, useSelector } from "react-redux";
import { getTours, postTour } from "../../Redux/Features/ToursSlice";
import { ToastContainer } from "react-toastify";
import Ar from "../drop-dwon/Ar";
import { getDestinations } from "../../Redux/Features/DestinationSlice";

const AddTour = () => {
  const dispatch = useDispatch();
  const [imagesPreview, setImagesPreview] = useState([]);

  const [coverimagesPreview, setcoverImagesPreview] = useState([]);

  const [formData, setFormData] = useState({
    TourName: "",

    TourDuration: "",
    Region: "",
    price: "",
    Max_Capacity: "",
    Tour_Description: "",
    Tour_Pictures: [],
    Locations: [""],
    destinationName: "",
    boatName: "",
    coverImage: "",
    Meeting_Point: "",
  });


 
useEffect(()=>{
  dispatch(getDestinations())
 
},[])


  const { AllDestinations, loading, error } = useSelector(
    (state) => state.destinations
  );

  const { success } = useSelector((state) => state.tours);

  console.log(AllDestinations, "HERE");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLocationChange = (index, value) => {
    const updatedLocations = [...formData.Locations];
    updatedLocations[index] = value;
    setFormData({
      ...formData,
      Locations: updatedLocations,
    });
  };

  const handleAddLocation = () => {
    setFormData((prev) => ({
      ...prev,
      Locations: [...prev.Locations, ""],
    }));
  };

  const handleRemoveLocation = (index) => {
    if (formData.Locations.length > 1) {
      const updatedLocations = formData.Locations.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        Locations: updatedLocations,
      });
    }
  };

  const handleFileChange = async (e) => {
    e.preventDefault();
    try {
      const files = Array.from(e.target.files);

      for (const file of files) {
        const image = await cloudinaryUpload(file);
        console.log(image, "Image");
        setImagesPreview((prev) => [...prev, image]);
        // console.log(imagesPreview[0], "imagePreview");
        // Update formData state with the new images
        setFormData((prev) => ({
          ...prev,
          Tour_Pictures: [...prev.Tour_Pictures, image],
        }));
      }
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };

  const handleFileChangeCoverImage = async (e) => {
    e.preventDefault();
    try {
      const files = Array.from(e.target.files);

      for (const file of files) {
        const image = await cloudinaryUpload(file);
        console.log(image, "Image");
        setcoverImagesPreview((prev) => [...prev, image]);
        // console.log(imagesPreview[0], "imagePreview");
        // Update formData state with the new images
        setFormData((prev) => ({
          ...prev,
          coverImage: image,
        }));
      }
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData, "FULL DATA");

    const resultAction = dispatch(postTour(formData));

    console.log(resultAction);

    if (success === true) {
      setFormData({
        TourName: "",
        destination: "",
        TourDuration: "",
        Region: "",
        price: "",
        Max_Capacity: "",
        Tour_Description: "",
        Locations: [""],
        Tour_Pictures: [],
        boatName: "",
        Meeting_Point: "",
      });
      setImagesPreview([""]);
      setcoverImagesPreview([""]);
    } else {
      console.error(resultAction.payload);
    }
  };

  const handleChangeDropdown = (event) => {
    setFormData({
      ...formData,
      ["destinationName"]: event.target.value,
    });
    console.log(`Selected option: ${event.target.value}`);
  };

  return (
    <section className="add-section">
      <ToastContainer />
      <div className="main-add">
        <h6>Add Tour </h6>
        <form className="form addtourform" onSubmit={handleSubmit}>
          <div className="form-details-div">
            <div className="label">
              <label htmlFor="TourName">Tour Name:</label>
              <input
                type="text"
                name="TourName"
                value={formData.TourName}
                onChange={handleInputChange} // Handle text input
              />
            </div>

            <div className="label">
              <label htmlFor="TourName">Destination Name:</label>
              <select
                id="dropdown"
                value={formData.destinationName}
                onChange={handleChangeDropdown}
              >
                <option value="">--Select an option--</option>
                {AllDestinations?.map((e, i) => (
                  <option value={e?.Destination_Name} key={i}>
                    {e?.Destination_Name}
                  </option>
                ))}
              </select>
              {/* <Ar /> */}
            </div>

            <div className="label">
              <label htmlFor="TourDuration">Tour Duration:</label>
              <input
                type="text"
                name="TourDuration"
                value={formData.TourDuration}
                onChange={handleInputChange} // Handle text input
              />
            </div>

            <div className="label">
              <label htmlFor="Max_Capacity">Seats:</label>
              <input
                type="text"
                name="Max_Capacity"
                value={formData.Max_Capacity}
                onChange={handleInputChange} // Handle text input
              />
            </div>

            <div className="label">
              <label htmlFor="Region">Region:</label>
              <input
                type="text"
                name="Region"
                value={formData.Region}
                onChange={handleInputChange} // Handle text input
              />
            </div>

            <div className="label">
              <label htmlFor="Region">Boat Name:</label>
              <input
                type="text"
                name="boatName"
                value={formData.boatName}
                onChange={handleInputChange} // Handle text input
              />
            </div>

            <div className="label">
              <label htmlFor="Locations">Locations:</label>
              {formData.Locations.map((location, index) => (
                <div key={index} className="location-input-group">
                  <input
                    type="text"
                    name={`location-${index}`}
                    value={location}
                    onChange={(e) =>
                      handleLocationChange(index, e.target.value)
                    }
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveLocation(index)}
                    disabled={formData.Locations.length === 1} // disable if only one input left
                  >
                    -
                  </button>
                  {index === formData.Locations.length - 1 && (
                    <button type="button" onClick={handleAddLocation}>
                      +
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="label">
              <label htmlFor="destination">Meeting Point:</label>
              <input
                type="text"
                name="Meeting_Point"
                value={formData.Meeting_Point}
                onChange={handleInputChange} // Handle text input
              />
            </div>

            <div className="label">
              <label htmlFor="Tour_Description">Description:</label>
              {/* <input
                type="text"
                name="Tour_Description"
                value={formData.Tour_Description}
                onChange={handleInputChange} // Handle text input
              /> */}

              <textarea
                type="text"
                name="Tour_Description"
                value={formData.Tour_Description}
                onChange={handleInputChange}
              />
            </div>

            <div className="label">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange} // Handle text input
              />
            </div>

            <div className="label">
              <label htmlFor="TourName">Upload Tour Images:</label>
              <div className="upload-img-div label img-label-ar">
                <img src={plusbtn} alt="Upload" />

                <input
                  type="file"
                  name="Tour_Pictures"
                  className="hello-imge-selet"
                  onChange={handleFileChange}
                  multiple
                />
              </div>
              <div className="main-box-left">
                {imagesPreview.map((image, i) => (
                  <div
                    className="hello-123"
                    style={{ height: "100px", width: "100px" }}
                    key={i}
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="label">
              <label htmlFor="TourName">Upload Tour Cover Image:</label>
              <div className="upload-img-div label img-label-ar">
                <img src={plusbtn} alt="Upload" />

                <input
                  type="file"
                  name="Tour_Pictures"
                  className="hello-imge-selet"
                  onChange={handleFileChangeCoverImage}
                  multiple
                />
              </div>
              <div className="main-box-left">
                {coverimagesPreview.map((image, i) => (
                  <div style={{ height: "100px", width: "100px" }} key={i}>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="upload-btn">
              Upload
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTour;
