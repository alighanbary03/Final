import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DeleteConfirmation from "../components/shared/DeleteConfirmation";
import data from "../data/data";
import "../Style/pages/Single.css";

function Single() {
  const [fruitName, setFruitName] = useState();
  const [cat, setCat] = useState();
  const [price, setPrice] = useState();
  const [imageUrl, setUrl] = useState();
  const [des, setDes] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`).then((response) => {
      setFruitName(response.data.name);
      setPrice(response.data.price);
      setUrl(response.data.imageUrl);
      setDes(response.data.des);
      setCat(response.data.cat);
      console.log(imageUrl);
      console.log(des);
    });
  }, []);

  const openConfirmDeleteModalHandler = (id) => {
    setShowModal(true);
    setItemToDeleteId(id);
  };

  const hideDeleteModalHandler = () => {
    setShowModal(false);
    setItemToDeleteId(0);
  };

  // const confirmDeleteHandler = () => {
  //   axios
  //     .delete(`http://localhost:5000/fruits/${itemToDeleteId}`)
  //     .then((response) => {
  //       setAllFruits((previousState) => {
  //         return previousState.filter((_) => _.id !== itemToDeleteId);
  //       });
  //       setItemToDeleteId(0);
  //       setShowModal(false);
  //     });
  // };

  return (
    <div className="containeri">
      <div className="single-product">
        <div className="row">
          <div className="col-6">
            <div className="product-image">
              <div className="product-image-main">
                <img src={imageUrl} alt="" id="product-main-image" />
              </div>
              {/* <div className="product-image-slider">
                <img src="img/tshirt-1.png" alt="" className="image-list" />
                <img src="img/tshirt-2.png" alt="" className="image-list" />
                <img src="img/tshirt-3.png" alt="" className="image-list" />
                <img src="img/tshirt-group.png" alt="" className="image-list" />
              </div> */}
            </div>
          </div>
          <div className="col-6">
            <div className="breadcrumb">
              {/* <span>
                <a href="#">Home</a>
              </span> */}
              <span>
                <a href="#">دسته بندی</a>
              </span>
              <span className="active">{cat}</span>
            </div>

            <div className="product" dir="rtl">
              <div className="product-title">
                <h2>{fruitName}</h2>
              </div>
              {/* <div className="product-rating">
                <span>
                  <i className="bx bxs-star"></i>
                </span>
                <span>
                  <i className="bx bxs-star"></i>
                </span>
                <span>
                  <i className="bx bxs-star"></i>
                </span>
                <span>
                  <i className="bx bxs-star"></i>
                </span>
                <span>
                  <i className="bx bxs-star"></i>
                </span>
                <span className="review">{quantity}</span>
              </div> */}
              <div className="product-price">
                <span dir="rtl" className="offer-price">
                  {price} تومان
                </span>
                {/* <span className="sale-price">$129.00</span> */}
              </div>

              <div dir="rtl" className="product-details">
                <h3 dir="rtl">توضیحات</h3>
                <div classNameName="pr" dir="rtl">
                  <p dir="rtl">{des}</p>
                </div>
              </div>
              {/* <div className="product-size">
                <h4>Size</h4>
                <div className="size-layout">
                  <input
                    type="radio"
                    name="size"
                    value="S"
                    id="1"
                    className="size-input"
                  />
                  <label for="1" className="size">
                    S
                  </label>

                  <input
                    type="radio"
                    name="size"
                    value="M"
                    id="2"
                    className="size-input"
                  />
                  <label for="2" className="size">
                    M
                  </label>

                  <input
                    type="radio"
                    name="size"
                    value="L"
                    id="3"
                    className="size-input"
                  />
                  <label for="3" className="size">
                    L
                  </label>

                  <input
                    type="radio"
                    name="size"
                    value="XL"
                    id="4"
                    className="size-input"
                  />
                  <label for="4" className="size">
                    XL
                  </label>

                  <input
                    type="radio"
                    name="size"
                    value="XXL"
                    id="5"
                    className="size-input"
                  />
                  <label for="5" className="size">
                    XXL
                  </label>
                </div>
              </div>
              <div className="product-color">
                <h4>Color</h4>
                <div className="color-layout">
                  <input
                    type="radio"
                    name="color"
                    value="black"
                    className="color-input"
                  />
                  <label for="black" className="black"></label>
                  <input
                    type="radio"
                    name="color"
                    value="red"
                    className="color-input"
                  />
                  <label for="red" className="red"></label>

                  <input
                    type="radio"
                    name="color"
                    value="blue"
                    className="color-input"
                  />
                  <label for="blue" className="blue"></label>
                </div>
              </div> */}
              <span className="divider"></span>

              <div className="product-btn-group">
                <div className="button buy-now">
                  <i className="bx bxs-zap"></i> افزودن به سبد خرید
                </div>
                <div className="button add-cart">
                  <input
                    type="number"
                    className="bx bxs-cart"
                    placeholder="تعداد"
                  />
                </div>
                {/* <div className="button heart">
                  <i className="bx bxs-heart"></i> Add to Wishlist
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Single;

{
  /* <div className="container">
<div className="single-product">
    <div className="row">
        <div className="col-6">
            <div className="product-image">
                <div className="product-image-main">
                    <img src={url} alt="" id="product-main-image">
                </div>
                <div className="product-image-slider">
                    <img src="img/tshirt-1.png" alt=""  className="image-list">
                    <img src="img/tshirt-2.png" alt=""  className="image-list">
                    <img src="img/tshirt-3.png" alt=""  className="image-list">
                    <img src="img/tshirt-group.png" alt=""  className="image-list">
                </div>
            </div>
        </div>
        <div className="col-6">
            <div className="breadcrumb">
                <span><a href="#">Home</a></span>
                <span><a href="#">Product</a></span>
                <span className="active">T-shirt</span>
            </div>

            <div className="product">
                <div className="product-title">
                    <h2>{fruitName}</h2>
                </div>
                <div className="product-rating">
                    <span><i className="bx bxs-star"></i></span>
                    <span><i className="bx bxs-star"></i></span>
                    <span><i className="bx bxs-star"></i></span>
                    <span><i className="bx bxs-star"></i></span>
                    <span><i className="bx bxs-star"></i></span>
                    <span className="review">{quantity}</span>
                </div>
                <div className="product-price">
                    <span className="offer-price">{price}</span>
                    <span className="sale-price">$129.00</span>
                </div>

                <div className="product-details">
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos est magnam quibusdam maiores sit perferendis minima cupiditate iusto earum repudiandae maxime vitae nostrum, ea cumque iste ipsa hic commodi tempore.</p>
                </div>
                <div className="product-size">
                    <h4>Size</h4>
                    <div className="size-layout">
                        <input type="radio" name="size" value="S" id="1" className="size-input">
                        <label for="1" className="size">S</label>

                        <input type="radio" name="size" value="M" id="2" className="size-input">
                        <label for="2" className="size">M</label>

                        <input type="radio" name="size" value="L" id="3" className="size-input">
                        <label for="3" className="size">L</label>

                        <input type="radio" name="size" value="XL" id="4" className="size-input">
                        <label for="4" className="size">XL</label>

                        <input type="radio" name="size" value="XXL" id="5" className="size-input">
                        <label for="5" className="size">XXL</label>
                    </div>
                </div>
                <div className="product-color">
                    <h4>Color</h4>
                    <div className="color-layout">
                        <input type="radio" name="color"  value="black" className="color-input">
                        <label for="black" className="black"></label>
                        <input type="radio" name="color"  value="red" className="color-input">
                        <label for="red" className="red"></label>

                        <input type="radio" name="color"  value="blue" className="color-input">
                        <label for="blue" className="blue"></label>
                    </div>
                </div>
                <span className="divider"></span>

                <div className="product-btn-group">
                    <div className="button buy-now"><i className='bx bxs-zap' ></i> Buy Now</div>
                    <div className="button add-cart"><i className='bx bxs-cart' ></i> Add to Cart</div>
                    <div className="button heart"><i className='bx bxs-heart' ></i> Add to Wishlist</div>
                </div>
            </div>
        </div>
    </div>
</div>
</div> */
}
