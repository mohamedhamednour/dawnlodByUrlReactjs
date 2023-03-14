import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";

function Book() {
  const [book, setbook] = React.useState([]);
  const [error, sererror] = React.useState(false);
  const [totalItems, setTotalItems] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10; 
  const [serch, setserch] = React.useState("react js");
  const stateSerch = [
    {id : 1 , name:'javascript'},
    {id : 2 , name:'C++'}

  ]
  React.useEffect(() => {
    handelApi();
  }, [serch, currentPage]);
 
  const handelApi = async () => {
    try {
      await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${serch}&startIndex=${
          (currentPage - 1) * itemsPerPage
        }&maxResults=${itemsPerPage}&&key=AIzaSyAvdmD9fVbBpusvip4X3ee32HxlM4E8PF0`
      )
        .then((results) => results.json())
        .then((data) => {
          setbook(data.items);
          setTotalItems(data.totalItems || 0);
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
  // const changeData = async (item) => {
  //   const { data } = await axios.get(
  //     `https://www.googleapis.com/books/v1/volumes?q=${item}&key=AIzaSyAvdmD9fVbBpusvip4X3ee32HxlM4E8PF0`
  //   );
  //   setbook(data);
  // };
  const handleChange = (e) => {
    if (e.target.value === "") return setserch("react js");
    setserch(e.target.value);
  };
  return (
    <>
     <Helmet>
        <title>serch book</title>
        <meta name="description" content="serch by link youtube" />
      </Helmet>
      <div className="container text-center p-2">
        <div className="row">
          <div className="col-12 divinput m-2 w-75 d-block">
            <input
              onKeyDown={handelApi}
              onChange={handleChange}
              placeholder="serch by name book"
              class="form-control w-100"
              type="text"
              name="name"
            />
          </div>
          {/* <div className="col-sm-12 m-2 ">
           {stateSerch?.map((item)=>
           
           <button key={item.id}
           onClick={() => changeData(item.name)}
           type="button"
           class="btn btn-danger"
         >
          {item.name}
         </button>
           )}
          </div> */}
          <div className="col-sm-12 col-md-12 ">
            <br />

            <div className="row">
              {book?.map((item) => [
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
          <div className="text-center p-2 m-2">
            <button
              className="btn btn-primary w-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>
            <br />
            <span>
              Page {currentPage} of {Math.ceil(totalItems / itemsPerPage)}
            </span>
            <br />
            <button
              className="btn btn-primary w-50"
              disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* <center> {error ? "" : "Not Found"}</center> */}
    </>
  );
}

export default Book;
