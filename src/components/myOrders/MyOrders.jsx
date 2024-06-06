import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../redux/actions/order";
import Loader from "../layout/Loader";
import toast from "react-hot-toast";
//css is at table.scss
const MyOrders = () => {
  //const arr = [1, 2, 3, 4];

  const dispatch = useDispatch();

  const { orders, error } = useSelector((state) => state.orders);

  useEffect(() => { 
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    dispatch(getMyOrders());
  }, [dispatch, error]);




  return (
    <section className="tableClass"> 
  
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders &&
              orders.map((i) => (
              <tr key={i._id}>
                <td>{i._id}</td>
                <td>{i._orderStatus}</td>
                <td>{i.orderItems.cheeseBurger.quantity +
                  i.orderItems.vegCheeseBurger.quantity +
                  i.orderItems.burgerWithFries.quantity}
                  </td>
                <td>₹{i.totalAmount}</td>
                <td>{i.paymentMethod}</td>
                <td>
                  <Link to={`/order/${i._id}`}> 
                   
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
