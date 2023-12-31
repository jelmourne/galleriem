import "../index.css";
import Navbar from "../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-primary">
        <div className="flex justify-center">
          <Carousel
            className="aspect-auto w-3/4 m-2"
            autoPlay
            infiniteLoop
            centerMode
            showThumbs={false}
            showStatus={false}
            interval={4000}
          >
            <img
              className="aspect-square object-cover"
              src="https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmljZXxlbnwwfHwwfHx8MA%3D%3D"
            ></img>
            <img
              className="aspect-square object-cover"
              src="https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmljZXxlbnwwfHwwfHx8MA%3D%3D"
            ></img>
            <img
              className="aspect-square object-cover"
              src="https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmljZXxlbnwwfHwwfHx8MA%3D%3D"
            ></img>
            <img
              className="aspect-square object-cover"
              src="https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmljZXxlbnwwfHwwfHx8MA%3D%3D"
            ></img>
          </Carousel>
        </div>

        <div className="bg-green flex justify-center">
          <img
            src="./Logo.jpg"
            className="object-scale-down h-96 flex flex-col justify-center"
          ></img>
          <p className="text-white text-4xl font-thin flex flex-col justify-center w-1/2">
            Customized products for weddings, bridal/baby showers,
            bachelor/bachelorettes, anniversaries & more!
          </p>
        </div>
        <div className="p-10 flex justify-center items-center">
          <div className="text-4xl border-separate pb-3 text-green border-b-2 border-black w-1/3 text-center border-opacity-30">
            Gallery
          </div>
          <Link to={"/Gallery"}>
            <div className="flex items-center">
              <p>View More</p>
              <img className="h-6" src="./Link.svg"></img>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
