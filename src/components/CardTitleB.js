import React from "react";
import { render } from "react-dom";
import "../App.css";
function CatTitleB() {
  return (
    <div className="row py-5">
      <div className="col-lg-12 mx-auto">
        <div className="text-white p-5 shadow-sm rounded banner  " dir="rtl">
          <h1
            className="display-4 right top"
            dir="rtl"
            style={{ fontFamily: "BNazanin" }}
          >
            از کالکشن بچگانه ما دیدن کنید
          </h1>
          {/* <p className="lead " dir="rtl">
          گالری های مختلف
        </p>
        <p className="lead" dir="rtl">
          برای دیدن بیشتر{" "}
          <a
            dir="rtl"
            href="https://bootstrapious.com/snippets"
            className="text-reset"
          >
            اینجا کلیک کنید
          </a>
          , انواع لباس{" "}
          <a dir="rtl" href="https://unsplash.com" className="text-reset">
            در اینجا
          </a>
          .
        </p> */}
        </div>
      </div>
    </div>
  );
}

export default CatTitleB;
