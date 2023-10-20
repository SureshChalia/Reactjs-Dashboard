import {FaHandHoldingUsd} from 'react-icons/fa';
import { PiNotepad } from 'react-icons/pi';
import { LiaWalletSolid } from 'react-icons/lia';
import { FaBagShopping } from 'react-icons/fa6';


export const selldata = [
  {
    icon: <FaHandHoldingUsd/>,
    title: "Earning",
    value: 198,
    changeInValue: 37.8,
    changeDuration: "this month",
    backgroundColor: '#9AF4F9 ',
    iconColor: '#08B58C '
  },
  {
    icon: <PiNotepad/>,
    title: "Orders",
    value: 2.4,
    changeInValue: -2,
    changeDuration: "this month",
    backgroundColor: "#C8AFEF ",
    iconColor: '#7F069B'
  },
  {
    icon: <LiaWalletSolid/>,
    title: "Balance",
    value: 2.4,
    changeInValue: -2,
    changeDuration: "this month",
    backgroundColor: "#6BBBDB ",
    iconColor: '#30069B'
  },
  {
    icon: <FaBagShopping/>,
    title: "Total Sales",
    value: 89,
    changeInValue: 11,
    changeDuration: "this week",
    backgroundColor: "#F371E9 ",
    iconColor: '#A5056A'
  }
];