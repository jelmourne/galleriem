import ItemGallery from "../components/ItemGallery";
import Navbar from "../components/Navbar";
import "../index.css";
import { useState } from "react";

function Gallery() {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState();

  function changeImg(src) {
    setOpen(!open);
    setImg(src);
  }

  return (
    <>
      <Navbar />
      <div className="bg-primary flex justify-center items-center p-4 relative">
        <div className="columns-3 mt-3">
          <ItemGallery
            change={changeImg}
            img="https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright.png"
          />
          <ItemGallery
            change={changeImg}
            img="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          />
          <ItemGallery
            change={changeImg}
            img="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          />
          <ItemGallery
            change={changeImg}
            img="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          />
          <ItemGallery
            change={changeImg}
            img="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          />
          <ItemGallery
            change={changeImg}
            img="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
          />
        </div>
        {open && (
          <div
            className=" h-screen w-screen backdrop-blur-sm fixed top-0 flex justify-center items-center"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <img className="scale-[.6]" src={img} />
          </div>
        )}
      </div>
    </>
  );
}

export default Gallery;
