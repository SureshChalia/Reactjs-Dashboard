import { TbSquareKey } from 'react-icons/tb';
import { LuBox } from 'react-icons/lu';
import { BsPersonSquare } from 'react-icons/bs';
import { LiaWalletSolid } from 'react-icons/lia';
import { BsGearWideConnected } from 'react-icons/bs';
import { MdOutlineHelpCenter } from 'react-icons/md';

export const sidebarLinks = [
  {
    id: 1,
    name: "Dashboard",
    path:"/dashboard/dashboard",
    icon: <TbSquareKey/>
  },
  {
    id: 2,
    name: "Product",
    path:"/dashboard/product",
    icon: <LuBox/>
  },
  {
    id: 3,
    name: "Customers",
    path:"/dashboard/customers",
    icon: <BsPersonSquare/>
  },
  {
    id: 4,
    name: "Income",
    path:"/dashboard/income",
    icon: <LiaWalletSolid/>
  },
  {
    id: 5,
    name: "Promote",
    path:"/dashboard/promote",
    icon: <BsGearWideConnected/>
  },
  {
    id: 6,
    name: "Help",
    path:"/dashboard/help",
    icon: <MdOutlineHelpCenter/>
  },
  
];