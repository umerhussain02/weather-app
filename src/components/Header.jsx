import { useState } from "react";
import { useWeather } from "../context/Context";

const Header = () => {
  const x = useWeather();
  const [search, setSearch] = useState("");

  const handleOnSearch = () => {
    if (!search) {
      return alert("City is required");
    }
    x.fetchData(search);
    setSearch("");
  };
  return (
    <>
      <div className="container-fluid px-5 py-3">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
              <h3 className="text-light ps-3">Weather Forcast</h3>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center gap-3 w-100 py-2 px-3">
              <input
                type="text"
                value={search}
                placeholder="City Name"
                onChange={(e) => setSearch(e.target.value)}
                required
                className="search-input w-100"
              />
              <button onClick={() => handleOnSearch()} className="search-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
