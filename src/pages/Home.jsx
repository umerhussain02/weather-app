import { useWeather } from "../context/Context";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import Loader from "../components/Loader";

const Home = () => {
  const x = useWeather();

  return (
    <>
      <div className="container-fluid px-5">
        <div className="row align-items-center gap-4 gap-lg-0">
          <div className="col-12 col-lg-5">
            <div className="box-1 d-flex justify-content-center align-items-center w-100 bg-light bg-opacity-10 rounded p-3">
              {x.tempC ? <LeftSide /> : <Loader />}
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="box-1 d-flex justify-content-center align-items-center w-100 bg-light bg-opacity-10 rounded p-3">
              {x.tempC ? <RightSide /> : <Loader />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
