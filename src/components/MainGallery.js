import React from "react";
import "../Style/components/MainGallery.css";
import { useNavigate } from "react-router-dom";

function MainGallery() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="px-lg-5">
        <div className="row py-5">
          <div className="col-lg-12 mx-auto">
            <div
              className="text-white p-5 shadow-sm rounded banner  "
              dir="rtl"
            >
              <h1
                className="display-4 right top"
                dir="rtl"
                style={{ fontFamily: "BNazanin" }}
              >
                بهترین ها را از ما بخواهید
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

        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1616715623022-65d18f0042ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a
                    href="#"
                    className="text-dark right"
                    style={{ fontFamily: "BNazanin" }}
                    onClick={() => navigate("/fall")}
                  >
                    کالکشن پاییزه
                  </a>
                </h5>
                <p className="small text-muted mb-0">انواع ست های پاییزی</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <i className="fa fa-picture-o mr-2"></i>
                    <span className="font-weight-bold">خاص پسند</span>
                  </p>
                  <div className="badge badge-danger px-3 rounded-pill font-weight-normal">
                    جدیدترین
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1552256552-e8149de77b98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a
                    style={{ fontFamily: "BNazanin" }}
                    href="#"
                    onClick={() => navigate("/winter")}
                    className="text-dark right"
                  >
                    کالکشن زمستانه
                  </a>
                </h5>
                <p className="small text-muted mb-0">
                  !زمستان سخت در راه است آماده باشید
                </p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <i className="fa fa-picture-o mr-2"></i>
                    <span className="font-weight-bold">زمستانی</span>
                  </p>
                  <div className="badge badge-primary px-3 rounded-pill font-weight-normal">
                    پرطرفدار
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a
                    style={{ fontFamily: "BNazanin" }}
                    href="#"
                    onClick={() => navigate("/bahar")}
                    className="text-dark right"
                  >
                    کالکشن بهاری
                  </a>
                </h5>
                <p className="small text-muted mb-0">
                  بهار را با ما تجربه کنید
                </p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <i className="fa fa-picture-o mr-2"></i>
                    <span className="font-weight-bold">بهاره</span>
                  </p>
                  <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">
                    پیشنهادی
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1605389170783-bcb01d8a57dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a
                    style={{ fontFamily: "BNazanin" }}
                    href="#"
                    onClick={() => navigate("/summer")}
                    className="text-dark right"
                  >
                    کالکشن تابستانه
                  </a>
                </h5>
                <p className="small text-muted mb-0">یک تابستان داغ</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <i className="fa fa-picture-o mr-2"></i>
                    <span className="font-weight-bold">تابستانه</span>
                  </p>
                  <div className="badge badge-success px-3 rounded-pill font-weight-normal">
                    خاص پسند
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1584486483122-af7d49cf2992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a
                    style={{ fontFamily: "BNazanin" }}
                    href="#"
                    onClick={() => navigate("/men")}
                    className="text-dark right"
                  >
                    ست مردانه
                  </a>
                </h5>
                <p className="small text-muted mb-0">با ما شیک پوش باشید</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <i className="fa fa-picture-o mr-2"></i>
                    <span className="font-weight-bold">مردانه</span>
                  </p>
                  <div className="badge badge-primary px-3 rounded-pill font-weight-normal">
                    به روز
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1589400363677-81704324e25b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a
                    style={{ fontFamily: "BNazanin" }}
                    href="#"
                    onClick={() => navigate("/woman")}
                    className="text-dark right"
                  >
                    ست زنانه
                  </a>
                </h5>
                <p className="small text-muted mb-0">
                  از ست های زنانه جذاب ما دیدن کنید
                </p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <i className="fa fa-picture-o mr-2"></i>
                    <span className="font-weight-bold">زنانه</span>
                  </p>
                  <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">
                    منحصر به فرد
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
              <img
                src="https://media.istockphoto.com/id/1325207890/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B0%D1%80%D0%B0-%D0%BC%D0%B5%D0%B4%D0%B8%D1%82%D0%B8%D1%80%D1%83%D0%B5%D1%82-%D0%B2-%D1%83%D1%8E%D1%82%D0%BD%D0%BE%D0%B9-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9-%D1%81%D0%BE-%D1%81%D0%B2%D0%BE%D0%B8%D0%BC-%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%B8%D0%BC-%D1%80%D0%B5%D0%B1%D0%B5%D0%BD%D0%BA%D0%BE%D0%BC-%D1%81%D0%B8%D0%B4%D1%8F-%D0%B4%D1%80%D1%83%D0%B3-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4-%D0%B4%D1%80%D1%83%D0%B3%D0%BE%D0%BC.jpg?s=2048x2048&w=is&k=20&c=p6t6AteWnSMG2QGCJlsPpcdv2E7FtjjoSYUVcqp3VDY="
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a
                    style={{ fontFamily: "BNazanin" }}
                    onClick={() => navigate("/baby")}
                    href="#"
                    className="text-dark right"
                  >
                    ست بچگانه
                  </a>
                </h5>
                <p className="small text-muted mb-0">
                  پوشاک کودک خود را به ما بسپارید
                </p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <i className="fa fa-picture-o mr-2"></i>
                    <span className="font-weight-bold"></span>
                  </p>
                  <div className="badge badge-info px-3 rounded-pill font-weight-normal">
                    جذاب و دوست داشتنی
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div className="bg-white rounded shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a
                    href="#"
                    style={{ fontFamily: "BNazanin" }}
                    className="text-dark right"
                    onClick={() => navigate("/sport")}
                  >
                    کالکشن اسپرت
                  </a>
                </h5>
                <p className="small text-muted mb-0">مناسب برای همه سلیقه ها</p>
                <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                  <p className="small mb-0">
                    <i className="fa fa-picture-o mr-2"></i>
                    <span className="font-weight-bold">پرفروش</span>
                  </p>
                  <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">
                    همه پسند
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="py-5 text-right">
          <a href="#" className="btn btn-dark px-5 py-3 text-uppercase">
            Show me more
          </a>
        </div> */}
      </div>
    </div>
  );
}
export default MainGallery;
