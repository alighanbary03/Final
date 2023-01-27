import React from "react";
import "../Style/components/MainGallery.css";

function MainGallery() {
  return (
    <div className="container-fluid">
      <div className="px-lg-5">
        <div className="row py-5">
          <div className="col-lg-12 mx-auto">
            <div
              className="text-white p-5 shadow-sm rounded banner  "
              dir="rtl"
            >
              <h1 className="display-4 right top" dir="rtl">
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
                src="https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a href="#" className="text-dark right">
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
                src="https://bootstrapious.com/i/snippets/sn-gallery/img-2.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a href="#" className="text-dark right">
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
                src="https://bootstrapious.com/i/snippets/sn-gallery/img-3.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a href="#" className="text-dark right">
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
                src="https://bootstrapious.com/i/snippets/sn-gallery/img-4.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a href="#" className="text-dark right">
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
                src="https://bootstrapious.com/i/snippets/sn-gallery/img-5.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a href="#" className="text-dark right">
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
                src="https://bootstrapious.com/i/snippets/sn-gallery/img-6.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a href="#" className="text-dark right">
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
                src="https://bootstrapious.com/i/snippets/sn-gallery/img-7.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a href="#" className="text-dark right">
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
                src="https://bootstrapious.com/i/snippets/sn-gallery/img-8.jpg"
                alt=""
                className="img-fluid card-img-top"
              />
              <div className="p-4">
                <h5>
                  {" "}
                  <a href="#" className="text-dark right">
                    کالکشن ترکیبی
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
