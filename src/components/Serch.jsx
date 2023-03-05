import axios from "axios";
import React from "react";
import '../App.css'

function Serch() {
  const [post, setpost] = React.useState();
  const [text, textresul] = React.useState();

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
      textresul('Result')
    } catch (err) {
      if (err.response.status === 404) {
        console.log("Resource could not be found!");
      } else {
        console.log(err.message);
      }
    }
  };

  return (
<>
<div className="m-2 forms justify-content-cente">
      <form  className="w-75 d-block border border-primary text-center p-3" onSubmit={postdata}>
        <div className="mb-3">
          <label  for="exampleInputEmail1" className="form-label fs-1">
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
  <div class="card-header">
    {text} 
  </div>
  <div class="card-body">
    <img src={result.thumb} alt="" />
    <center>{result.url ? 'quality' : ''}</center>
    <div  className="row">
<h1 className="ankor">    {result.url ? result.url.slice(0,5).map((el)=> <a href={el.url} className=""> {el.quality}</a>) : ''}
</h1>
    </div>
  </div>
  <div class="card-footer text-muted">
   devolpe By mohamedhamed #M.H
  </div>
</div></h1>
          </>

  );
}

export default Serch;
