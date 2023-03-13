    <center className="text-red-600/100 text-2xl">Books</center>
      <center className="div">
        <button onClick={() => handelApi("برمجة ")} className="btn btn-dark">
          برمجة{" "}
        </button>
        <button
          onClick={() => handelApi(" تنمية بشرية")}
          className="btn btn-dark"
        >
          تنمية بشرية
        </button>
        <button onClick={() => handelApi(" روايات")} className="btn btn-dark">
          {" "}
          روايات{" "}
        </button>

        <br />
        <input
          onKeyDown={handelApi}
          onChange={(e) => setserch(e.target.value)}
          placeholder="serch"
          className="w-50"
          type="text"
          name="name"
        />
      </center>
      <div class="d-grid col-6  justify-content-center ">
        {items
          ? items.map((item) => [
              <div key={item.id} className="">
               {items ? <img
                  className="imgbook"
                  src={item.volumeInfo.imageLinks.smallThumbnail}
                  alt=""
                /> : 'loading...'}
                <a className="ankorbook" href={item.saleInfo.buyLink}>dawnlod</a>
              </div>,
            ])
          : ""}
      </div>
