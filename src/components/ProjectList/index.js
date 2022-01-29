import React, { useState } from "react";
import Modal from "../Modal";

function PhotoList({ category }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: "Interactive Frontend",
      category: "project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Full-Stack Web Application",
      category: "project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Menu Hunt",
      category: "project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Sweat Moments",
      category: "project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Weather Dashboard",
      category: "homeworks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Resume",
      category: "resume",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Workday Scheduler",
      category: "homeworks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "MVC Tech Blog",
      category: "homeworks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Pug smile",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Quiz Challenge",
      category: "homeworks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    
]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const [currentPhoto, setCurrentPhoto] = useState();
  const toggleModal = (image, i) => {
    // current photo
    setCurrentPhoto({ ...image, index: i });
    // setIsModalOpen(true);
    setIsModalOpen(!isModalOpen);
  };
  return (
    // <div>
    //   <img src={photo} alt="Commercial Example" />
    // </div>
    <div>
      {/* <Modal currentPhoto={currentPhoto} /> */}
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
