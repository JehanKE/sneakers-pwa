import { AiOutlineShopping } from "react-icons/ai";
import { SiJordan } from "react-icons/si";
import { TbColorFilter } from "react-icons/tb";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { FaRegCalendarAlt } from "react-icons/fa";

const MenuOptions = [
    {
        icon: <AiOutlineShopping />,
        title: "Date"
    },
    {
        icon: <LiaMoneyBillWaveSolid />,
        title: "Price"
    },
    {
        icon: <TbColorFilter />,
        title: "Color"
    },
    {
        icon: <SiJordan />,
        title: "Brand"
    },
    {
        icon: <FaRegCalendarAlt />,
        title: "Worn"
    }
]

export { MenuOptions }
