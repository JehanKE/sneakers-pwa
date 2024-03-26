import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FloatingMenu from "../../components/FloatingMenu";
import SneakerContainer from "../../components/SneakerContainer";
import SummaryContainer from "../../components/SummaryContainer";
import Tabs from "../../components/Tabs";
import { sneakerConfig } from "../../configs/SneakerConfig";
import { getSortedList } from "../../utils/utils";
import { AutoComplete } from 'antd';
import { motion } from "framer-motion";
import "./index.scss";

const HomePage = () => {
  const { listType, isOpaque, sortType } = useSelector(
    (state) => state.sneaker
  );
  const { lastWorn } = useSelector((state) => state.lastWorn);
  const [sneakerList, setSneakerList] = useState();
  const [options,setOptions] = useState();
  const [searchValue,setSearchValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setSneakerList(
      sneakerConfig.filter((sneaker) => sneaker.status === listType)
    );
    setSearchValue('');
    dispatch({
      type: "sneaker/updateSortType",
      payload: null,
    });
    // eslint-disable-next-line
  }, [listType]);

  useEffect(() => {
    const tempOptions = sneakerList?.map((sneaker) => {
      return ({ value: sneaker.sneakerName })
    });
    setOptions(tempOptions);
  }, [sneakerList])

  useEffect(() => {
    if (sortType !== null) {
      setSneakerList(getSortedList(sortType, sneakerList, lastWorn));
    }
    // eslint-disable-next-line
  }, [sortType]);

  const handleTabChange = (selectedTab) => {
    dispatch({
      type: "sneaker/updateListType",
      payload: selectedTab,
    });
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    if(value !== undefined) {
      setSneakerList(
        sneakerConfig.filter((sneaker) => 
          sneaker.sneakerName?.toUpperCase().includes(value?.toUpperCase())
          && sneaker.status === listType
        )
      );
    } else {
      setSneakerList(
        sneakerConfig.filter((sneaker) => sneaker.status === listType)
      );
    }
  }

  return (
    <>
      <motion.div 
        className={isOpaque ? "opaque-home-container" : "home-container"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 0.7,ease: [0.6, -0.05, 0.01, 0.99]}}
      >
        <div className="home-header">
          <div className="header-title">COLLECTION</div>
          <div className="header-tabs">
            <Tabs
              tabList={["OWNED", "WISH LIST"]}
              selectedTab={listType}
              handleChange={handleTabChange}
            />
          </div>
        </div>
        <div>
          <div className="home-summary-container">
            <SummaryContainer list={sneakerList} />
          </div>
          <div className="sneaker-list-container">
            <div className="sneaker-list-header">
              <label className="sneaker-title">SNEAKERS</label>
              <AutoComplete
                style={{
                  width: "100%",
                  alignSelf: "center"
                }}
                options={options}
                placeholder="Search"
                filterOption={(inputValue, option) =>
                  option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                variant="borderless"
                allowClear={true}
                value={searchValue}
                onChange={handleSearch}
              />
            </div>
            {sneakerList?.map((sneaker, idx) => {
              return <SneakerContainer key={idx} sneaker={sneaker} />;
            })}
          </div>
        </div>
      </motion.div>
      <FloatingMenu />
    </>
  );
};

export default HomePage;
