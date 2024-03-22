import { useEffect, useState } from "react";
import { PiSneakerFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

const SummaryContainer = (props) => {
  const { currency, conversionRate } = useSelector((state) => state.sneaker);
  const sneakerList = props.list;
  const [totalVal, setTotalVal] = useState();
  const [sneakerCount, setSneakerCount] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const totalUSDValue = sneakerList?.reduce(function (prev, current) {
      return prev + +current.dollarPrice;
    }, 0)
    setTotalVal(
      currency === "USD" ? totalUSDValue : Math.trunc(totalUSDValue * conversionRate)
    );
    setSneakerCount(
      sneakerList?.reduce(function (prev) {
        return prev + +1;
      }, 0)
    );
    // eslint-disable-next-line
  }, [sneakerList]);

  const handleCurrencyChange = async () => {
    let convRate;
    if(conversionRate === null) {
      const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
      const data = await response.json();
      convRate = data.usd.inr;
    } else {
      convRate = conversionRate;
    }
    if (convRate !== null) {
      setTotalVal(
        currency === "USD"
          ? Math.trunc(totalVal * convRate)
          : sneakerList?.reduce(function (prev, current) {
              return prev + +current.dollarPrice;
            }, 0)
      );
      dispatch({
        type: "sneaker/updateConversionRate",
        payload: convRate,
      });
      dispatch({
        type: "sneaker/updateCurrency",
        payload: currency === "USD" ? "INR" : "USD",
      });
    }
  }

  return (
    <div className="summary-container" onClick={handleCurrencyChange}>
      <div className="summary-value-div">
        <label className="total-val-label">TOTAL VALUE</label>
        <label className="total-amount-label">
          {currency === "USD" ? "$" : "₹"} {totalVal?.toLocaleString()}
        </label>
      </div>
      <div className="summary-shoe-count-container">
        <div className="shoe-count-icon">
          <PiSneakerFill />
        </div>
        <div className="shoe-count-text">
          <label className="count-text-header">SNEAKERS</label>
          <label className="count-text-number">
            {sneakerCount} in your collection.
          </label>
        </div>
      </div>
    </div>
  );
};

export default SummaryContainer;
