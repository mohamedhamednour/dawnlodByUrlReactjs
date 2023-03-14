import axios from "axios";
import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Serch() {
  const [post, setpost] = React.useState();
  const [text, textresul] = React.useState();
  const [message, setMessage] = React.useState('');
  function handleButtonClick(text) {
    setMessage('download ');
    toast.success(text, { position: toast.POSITION.TOP_RIGHT });
  }


  const [result, setresult] = React.useState({});
  console.log(result);
  const postdata = async (event) => {
    event.preventDefault();
    try {
      await axios({
        method: "POST",
        url: "https://save-from.net/api/convert",
        data: {
          url: post,
        },
      }).then((res) => setresult(res.data));
      textresul("Result");
    } catch (err) {
      if (err.response.status === 404) {
        console.log("Resource could not be found!");
      } else {
        console.log(err.message);
      }
    }
  };
  React.useEffect(() => {
    // axios.post('http://127.0.0.1:4000/useradd', { name : 'moka', email :'hameds@gmail.com', department_id : '640f6493de4173d92473f8de' })
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error.response.data);
    //   });
    // axios.delete('http://127.0.0.1:4000/deleteuser/640fac90556f9be07dafce57').then((re)=>console.log(re , 'idx'))
    // const updateUser = async (data) => {
    //   try {
    //     const result = await axios.put(`http://localhost:4000/userupdate/640f64b6de4173d92473f8e1`, data);
    //     console.log(result.data , 'update');
    //   } catch (e) {
    //     console.error(e);
    //   }
    // };
    // updateUser({ name: 'mohamedhamednour', email: 'mohamedhamednour@example.com', department_id: '640f6493de4173d92473f8e0' });
  }, []);

  return (
    <>
      <Helmet>
        <title>serch by link</title>
        <meta name="description" content="serch by link youtube" />
      </Helmet>
      <div className="m-2 forms justify-content-cente">
        <form
          className="w-75 d-block border border-primary text-center p-3"
          onSubmit={postdata}
        >
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label fs-1">
              url video
            </label>
            <input
              onChange={(e) => setpost(e.target.value)}
              type="url"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <h1 className="text-center">
        <div class="card text-center">
          <div class="card-header">{text}</div>
          <div class="card-body">
            <img src={result.thumb} alt="" />
            <center>{result.url ? "quality" : ""}</center>
            <div className="row">
              <h1 className="ankor">
                {" "}
                {result.url
                  ? result.url.slice(0, 5).map((el) => (
                      <a  onClick={el.downloadable ? ()=>handleButtonClick('download ') : ()=>handleButtonClick('watch just')} href={el.url} className="">
                        {" "}
                        {el.quality} {el.downloadable ? "download" : "watch"}
                      </a>
                    ))
                  : ""}
              </h1>
            </div>
          </div>
      <ToastContainer />
          <div class="card-footer text-muted">devolpe By mohamedhamed #M.H</div>
        </div>
      </h1>
    </>
  );
}

export default Serch;
