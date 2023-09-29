import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useCart from "../hooks/useCart";


const Dashboard = () => {
  const [cart] = useCart();

  //load data from server to have dynamic isAdmin based on Data
  const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full text-base-content">
           {
            isAdmin? <>
                  <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
          <li><NavLink to="/dashboard/reservations"><FaUtensils></FaUtensils>Add items</NavLink></li>
          <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet>Manage Items</NavLink></li>
          <li><NavLink to="/dashboard/payment"><FaBook></FaBook>Manage Bookings</NavLink></li>
          <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>All Users</NavLink></li>
            
            </>
            :
            <>
               <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
          <li><NavLink to="/dashboard/reservations"><FaCalendar></FaCalendar>Reservation</NavLink></li>
          <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet>Payment History</NavLink></li>
            <li><NavLink to="/dashboard/mycart"> <FaShoppingCart></FaShoppingCart>My Cart
            <span className="badge badge-secondary">+{cart?.length || 0}</span>
            </NavLink></li>
            </>
           }
       
            <div className="divider"></div>
            <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
            <li><NavLink to="/menu"><FaHome></FaHome>Our Menu</NavLink></li>
            <li><NavLink to="/order/salad"><FaHome></FaHome>Order Food</NavLink></li>
          
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;