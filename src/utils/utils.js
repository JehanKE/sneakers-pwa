import { SiJordan, SiPuma, SiNike } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";

const sortByLastWorn = (list) => {
  const itemsWithLastWornNull = list.filter(item => item.lastWorn === null);
  const itemsWithLastWornNotNull = list.filter(item => item.lastWorn !== null);
  const sortedLastWornNotNull = itemsWithLastWornNotNull.sort((a, b) => {
    let dateA = new Date(
        a.lastWorn.split('-').reverse().join('-')
    );
    let dateB = new Date(
        b.lastWorn.split('-').reverse().join('-')
    );
    return dateA - dateB;
});
  const sortedList = [...itemsWithLastWornNull, ...sortedLastWornNotNull];
  return sortedList;
};

const getSortedList = (sortType, list, lastWornList) => {
  const tempList = [...list];
  switch (sortType) {
    case "Date":
      return tempList?.sort((a, b) =>
        a.purchaseOrder > b.purchaseOrder ? 1 : -1
      );
    case "Price":
      return tempList?.sort((a, b) => (a.dollarPrice > b.dollarPrice ? 1 : -1));
    case "Color":
      return tempList?.sort((a, b) => (a.color > b.color ? 1 : -1));
    case "Brand":
      return tempList?.sort((a, b) => (a.brand > b.brand ? 1 : -1));
    case "Worn":
      const modifiedList = tempList?.map(sneaker => {
        const lastWornAddVal = lastWornList[sneaker.styleNumber];
        return {...sneaker, lastWorn: lastWornAddVal};
      });
      const sortedList = sortByLastWorn(modifiedList);
      sortedList?.forEach(sneaker => {
        delete sneaker['lastWorn'];
      });
      return sortedList;
    default:
      return tempList;
  }
};

const mapBrandToIcon = (brand) => {
  switch (brand) {
    case "Jordan":
      return <SiJordan />;
    case "Nike":
      return <SiNike />;
    case "Adidas":
      return <CgAdidas />;
    case "Puma":
      return <SiPuma />;
    default:
      break;
  }
};

const getTodaysDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return (yyyy+'-'+mm+'-'+dd);
}

export { getSortedList, mapBrandToIcon, getTodaysDate };
