import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillBagFill } from "react-icons/bs";
import { mapBrandToIcon } from "../../utils/utils";
import { useEffect } from "react";
import { DatePicker } from 'antd';
import dayjs from "dayjs";
import "./index.scss";

const SneakerPage = () => {
  const { sneakerPage } = useSelector((state) => state.sneaker);
  const { lastWorn } = useSelector((state) => state.lastWorn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "sneaker/updateSortType",
      payload: null,
    });
  });

  const handleDateChange = (event) => {
    const day = event['$D'];
    const formattedDay = day > 9 ? day : `0${day}`;
    const month = event['$M']+1;
    const formattedMonth = month > 9 ? month : `0${month}`;
    const year = event['$y'];
    const date = `${formattedDay}-${formattedMonth}-${year}`;
    const sneakerToUpdate = sneakerPage.styleNumber;
    dispatch({
      type: "lastWorn/updateLastWorn",
      payload: { sneakerToUpdate, date },
    });
  };

  return (
    <div className="sneaker-page-container">
      <div className="sneaker-page-header">
        <Link to="/" className="back-link">
          <IoIosArrowBack className="back-icon" style={{color:sneakerPage.iconHex}}/>
        </Link>
        <label className="brand-icon" style={{color:sneakerPage.iconHex}}>
          {mapBrandToIcon(sneakerPage.brand)}
        </label>
        <a href={sneakerPage.URL} target="_blank" rel="noreferrer" className="buy-link">
          <BsFillBagFill className="buy-icon" style={{color:sneakerPage.iconHex}}/>
        </a>
      </div>
      <div className="sneaker-page-image-container">
        <img
          src={sneakerPage.image}
          alt="Sneaker not found"
          className="sneaker-page-image"
        />
      </div>
      <div className="details-conatiner">
        <label className="details-label">DETAILS</label>
        <div className="sneaker-details">
          <div className="detail-wrapper">
            <label className="detail-title">NAME</label>
            <label className="detail-content" style={{color:sneakerPage.detailHex}}>{sneakerPage.sneakerName}</label>
          </div>
          <div className="detail-wrapper">
            <label className="detail-title">PRICE</label>
            <label className="detail-content price">
              {sneakerPage.dollarPrice === 0
                ? "N/A"
                : `$${sneakerPage.dollarPrice}`}
            </label>
          </div>
          <div className="detail-wrapper">
            <label className="detail-title">PURCHASE LOCATION</label>
            <label className="detail-content" style={{color:sneakerPage.detailHex}}>
              {sneakerPage.purchaseLocation}
            </label>
          </div>
          <div className="detail-wrapper">
            <label className="detail-title">STYLE NUMBER</label>
            <label className="detail-content" style={{color:sneakerPage.detailHex}}>{sneakerPage.styleNumber}</label>
          </div>
          <div className="detail-wrapper">
            <label className="detail-title">RELEASE DATE</label>
            <label className="detail-content" style={{color:sneakerPage.detailHex}}>{sneakerPage.releaseDate}</label>
          </div>
          <div className="detail-wrapper">
            <label className="detail-title">LAST WORN</label>
            <label className="detail-content" style={{color:sneakerPage.detailHex}}>
              <DatePicker 
                onChange={handleDateChange}
                defaultValue=
                  {lastWorn[sneakerPage.styleNumber] === null 
                    ? null 
                    : dayjs(lastWorn[sneakerPage.styleNumber], "DD-MM-YYYY")
                  } 
                allowClear={false} 
                format={"DD-MM-YYYY"}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SneakerPage;
