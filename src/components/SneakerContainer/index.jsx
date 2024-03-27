import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ConditionalWrapper from "../ConditionalWrapper";
import "./index.scss";

const SneakerContainer = (props) => {
  const { currency, conversionRate, isOpaque } = useSelector(
    (state) => state.sneaker
  );
  const { lastWorn } = useSelector((state) => state.lastWorn);
  const sneakerImage = props.sneaker.image;
  const sneakerName = props.sneaker.sneakerName;
  const sneakerPrice = props.sneaker.dollarPrice;
  const styleNumber = props.sneaker.styleNumber;
  const storeScroll = props.storeScrollPosition;
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch({
      type: "sneaker/updateSneakerPage",
      payload: props.sneaker,
    });
    storeScroll();
  };

  return (
    <div className="item-container ">
      <ConditionalWrapper
        condition={isOpaque}
        wrapper={children => 
          <Link
            to={"/sneaker"}
            className={"sneaker-link"}
            onClick={handleLinkClick}
          >
            {children}
          </Link>
        }
      >
      <div className="sneaker-list-item">
          <img
            className="sneaker-item-image"
            src={sneakerImage}
            alt="Sneaker not found"
          />
          <div className="sneaker-item-right-panel">
            <label className="sneaker-name">{sneakerName}</label>
            <div className="bottom-details">
              <label className="right-panel-price">
                {sneakerPrice === 0
                  ? "N/A"
                  : `${currency === "USD" ? "$" : "₹"} ${currency === "USD"
                    ? sneakerPrice?.toLocaleString()
                    : Math.trunc(
                      sneakerPrice * conversionRate
                    )?.toLocaleString()
                  }`}
              </label>
              <label className="right-panel-last-worn">
                {lastWorn[styleNumber] === null ? "DS" : lastWorn[styleNumber]}
              </label>
            </div>
          </div>
        </div>
      </ConditionalWrapper>
    </div>
  );
};

export default SneakerContainer;
