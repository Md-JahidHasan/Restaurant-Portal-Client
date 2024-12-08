import { FaAd, FaBars, FaBook, FaCalendar, FaCashRegister, FaEnvelope, FaHome, FaMailBulk, FaShoppingCart } from "react-icons/fa";
import { FaLetterboxd, FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {

  const [cart] = useCart()
  

  // TODO: get admin value from the database
  const isAdmin = true;

    return (
      <div className="flex h-full">

        {/* ========================
                Dashboard Side Bar
        =============================*/}
        <div className="w-64 min-h-screen bg-orange-800">
          <ul className="menu text-white">
            <li className="mb-2">
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>
                User Home
              </NavLink>
            </li>

            <li className="mb-2">
              <NavLink to="/dashboard/reservation">
                <FaCalendar></FaCalendar>
                Reservation
              </NavLink>
            </li>

            <li className="mb-2">
              <NavLink to="/dashboard/paymentHistory">
                <FaCashRegister></FaCashRegister>
                Payment History
              </NavLink>
            </li>

            <li className="mb-2">
              <NavLink to="/dashboard/cart">
                <FaShoppingCart></FaShoppingCart>
                My cart ({cart.length})
              </NavLink>
            </li>

            <li className="mb-2">
              <NavLink to="/dashboard/review">
                <FaAd></FaAd>
                Add Review
              </NavLink>
            </li>

            <li className="mb-2">
              <NavLink to="/dashboard/myBoooking">
                <FaBook></FaBook>
                My Booking
              </NavLink>
            </li>



            {/* ===============================
                  Shared Nav Links
            ================================= */}
            <div className="divider my-4 divider-neutral"></div>

            <li className="mb-2">
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>

            <li className="mb-2">
              <NavLink to="/dashboard/myBoooking">
                <FaBars></FaBars>
                Menu
              </NavLink>
            </li>

            <li className="mb-2">
              <NavLink to="/dashboard/myBoooking">
                <FaShop></FaShop>
                Shop
              </NavLink>
            </li>

            <li className="mb-2">
              <NavLink to="/dashboard/myBoooking">
                <FaEnvelope></FaEnvelope>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>


        {/* ===================
        Dashboard outlet
        =====================*/}
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;