import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/order.js";

const OrderDetails = () => {

 const params= useParams();

 const { order } = useSelector((state) => state.orders);
 console.log(order.user.name);
 console.log("Data Test"); 
 

 const dispatch = useDispatch();

 useEffect(()=>{
  dispatch(getOrderDetails(params.id));
 },[params.id,dispatch] );


  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
        
    <b>Address:</b>
    
      
        </div>    
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
           {"Arvind kumar"}
          </p>
           <p> <b>Phone</b>
            {"data"}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
           {"data"}
          </p>
          <p>
            <b>Placed At</b>
            
          </p>
          <p>
            <b>Delivered At</b>
            {"24-02-2003"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
           {"data"}
          </p>
          <p>
            <b>Payment Reference</b>
          </p>
          <p>
            <b>Paid At</b>
            {"23-02-2003"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{"data"}
          </p>
          <p>
            <b>Shipping Charges</b>₹{"data"}
          </p>
          <p>
            <b>Tax</b>₹{"data"}
          </p>
          <p>
            <b>Total Amount</b>₹{"data"}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
            <span> {"x} </span> x{" "}
            <span>{"y"}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
            <span>{"z"}</span> x{" "}
            <span>{"z1"}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
            <span>{"z2"}</span> x{" "}
            <span>{"z3"}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{"data"}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
