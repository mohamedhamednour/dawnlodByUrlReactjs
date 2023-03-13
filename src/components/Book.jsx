import React from "react";
import "../App.css";

import axios from "axios";

function Book() {
  const [book, setbook] = React.useState([]);
  const [error, sererror] = React.useState(false);

  const [serch, setserch] = React.useState("react js");
  console.log("ss", book);

  const { items } = book;
  React.useEffect(() => {
    handelApi();
  }, [serch]);

  const handelApi = async () => {
    try {
      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${serch}&key=AIzaSyAvdmD9fVbBpusvip4X3ee32HxlM4E8PF0`
      )
        .then((results) => results.json())
        .then((data) => {
          setbook(data);
          sererror(true);
        });
    } catch (err) {
      sererror(false);
      if (err.response.status === 400) {
        sererror(false);

      } else {
        console.log(err.message);
      }
    }
  };
  const changeData = async (cat) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${cat}&key=AIzaSyAvdmD9fVbBpusvip4X3ee32HxlM4E8PF0`
    );
    setbook(data);
  };
  const handleChange = (e) => {
    if (e.target.value === "") return setserch("react js");
    setserch(e.target.value);
  };
  return (
    <>
      <div className="container text-center p-2">
        <div className="row">
          <div className="col-sm-12 col-md-3 d-block">
            <div>
              <div
                class="btn-group p-2 "
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  onClick={() => changeData("روايات")}
                  type="button"
                  class="btn btn-danger"
                >
                  روايات
                </button>
                <button
                  onClick={() => changeData("برمجة")}
                  type="button"
                  class="btn btn-warning"
                >
                  برمجة
                </button>
                <button
                  onClick={() => changeData("تنمية بشرية")}
                  type="button"
                  class="btn btn-success"
                >
                  تنمية بشرية
                </button>
                <br />
              </div>

              <div
                class="btn-group p-2"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  onClick={() => changeData("علم نفس")}
                  type="button"
                  class="btn btn-danger"
                >
                  علم نفس
                </button>
                <button
                  onClick={() => changeData("تاريخ")}
                  type="button"
                  class="btn btn-warning"
                >
                  تاريخ
                </button>
                <button
                  onClick={() => changeData("ضحك")}
                  type="button"
                  class="btn btn-success"
                >
                  ضحك
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-9 ">
            <br />
            <div>
              <input
                onKeyDown={handelApi}
                onChange={handleChange}
                placeholder="serch by name book"
                class="form-control w-75"
                type="text"
                name="name"
              />
            </div>
            <div className="row">
              {items?.map((item) => [
                <div
                  key={item.id}
                  className="col-sm-12 divimg  p-2  border border-primary col-md-6 col-xl-4"
                >
                  {
                    <img
                      className="imgbook"
                      src={item?.volumeInfo?.imageLinks?.smallThumbnail}
                      alt=""
                    />
                  }
                  <a
                    className="ankorbook btn btn-success"
                    href={item.saleInfo.buyLink ? item.saleInfo.buyLink : "#"}
                  >
                    Read
                  </a>
                </div>,
              ])}
            </div>
          </div>
        </div>
      </div>
      <center> {error ? "" : "Not Found"}</center>
    </>
  );
}

export default Book;
