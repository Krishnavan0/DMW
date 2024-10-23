import React from 'react';
import Base from '../../components/Base/Base';
import "./order.css";

const order_data = [
  { id: 1, username: "John", orderdate: "2024-10-22", company: "Toyota", model: "Corolla", year: "2022", quantity: "3", price: "$52", delivery_date: "2024-11-01", address: "123 Main Street, Springfield" },
  { id: 2, username: "Alice", orderdate: "2024-10-20", company: "Ford", model: "Focus", year: "2021", quantity: "2", price: "$45", delivery_date: "2024-10-30", address: "456 Oak Avenue, Metropolis" },
  { id: 3, username: "Bob", orderdate: "2024-10-21", company: "Honda", model: "Civic", year: "2023", quantity: "1", price: "$35", delivery_date: "2024-10-29", address: "789 Pine Road, Smalltown" },
  { id: 4, username: "Eva", orderdate: "2024-10-19", company: "Nissan", model: "Altima", year: "2020", quantity: "5", price: "$50", delivery_date: "2024-11-02", address: "321 Maple Street, Big City" },
  { id: 5, username: "Liam", orderdate: "2024-10-18", company: "Chevrolet", model: "Malibu", year: "2022", quantity: "4", price: "$48", delivery_date: "2024-11-03", address: "654 Cedar Lane, Anytown" },
  { id: 6, username: "Mia", orderdate: "2024-10-17", company: "Subaru", model: "Impreza", year: "2023", quantity: "2", price: "$55", delivery_date: "2024-11-04", address: "987 Birch Boulevard, Oldtown" },
  { id: 7, username: "Noah", orderdate: "2024-10-15", company: "Hyundai", model: "Elantra", year: "2022", quantity: "3", price: "$40", delivery_date: "2024-11-05", address: "135 Spruce Street, New Village" },
  { id: 8, username: "Olivia", orderdate: "2024-10-14", company: "Kia", model: "Forte", year: "2021", quantity: "1", price: "$38", delivery_date: "2024-11-06", address: "246 Willow Way, Riverside" },
  { id: 9, username: "James", orderdate: "2024-10-13", company: "Volkswagen", model: "Jetta", year: "2023", quantity: "3", price: "$47", delivery_date: "2024-11-07", address: "357 Elm Street, Seaside" },
  { id: 10, username: "Sophia", orderdate: "2024-10-12", company: "Mazda", model: "3", year: "2022", quantity: "2", price: "$42", delivery_date: "2024-11-08", address: "468 Oak Drive, Hilltown" },
  { id: 11, username: "William", orderdate: "2024-10-11", company: "BMW", model: "3 Series", year: "2023", quantity: "1", price: "$70", delivery_date: "2024-11-09", address: "579 Chestnut Court, Lakeview" },
  { id: 12, username: "Isabella", orderdate: "2024-10-10", company: "Mercedes-Benz", model: "C-Class", year: "2022", quantity: "2", price: "$75", delivery_date: "2024-11-10", address: "680 Birch Grove, Foxtown" },
  { id: 13, username: "Elijah", orderdate: "2024-10-09", company: "Audi", model: "A4", year: "2021", quantity: "4", price: "$65", delivery_date: "2024-11-11", address: "791 Maple Lane, Springdale" },
  { id: 14, username: "Ava", orderdate: "2024-10-08", company: "Lexus", model: "IS", year: "2023", quantity: "3", price: "$85", delivery_date: "2024-11-12", address: "902 Pine Street, Eastside" },
  { id: 15, username: "Logan", orderdate: "2024-10-07", company: "Tesla", model: "Model 3", year: "2022", quantity: "1", price: "$90", delivery_date: "2024-11-13", address: "123 Willow Drive, West End" },
  { id: 16, username: "Mason", orderdate: "2024-10-06", company: "Jaguar", model: "XE", year: "2023", quantity: "2", price: "$80", delivery_date: "2024-11-14", address: "234 Cedar Street, Midtown" },
]

const Order = () => {
  return (
    <>
      <Base>
        <div className="order">
          <div className="order_title">Orders</div>
          <div className="order_items">
            {order_data.map((item) => {
              // console.log('order', item)
              return (
                <div className="order_box" key={item.id}>
                  <div className="order_item">
                    <div className="order_name">
                      <strong>Username: </strong></div>
                    <span id="order-date">{item.username}</span>
                  </div>
                  <div className="order_item">
                    <div className="order_name">
                      <strong>Order Date: </strong></div>
                    <span id="order-date">{item.orderdate}</span>
                  </div>
                  <div className="order_item">
                    <div className="order_name">
                      <strong>Company: </strong>
                    </div>
                    <span id="order-date">{item.company}</span>

                  </div>
                  <div className="order_item">
                    <div className="order_name">
                      <strong>Model Name: </strong></div>
                    <span id="order-date">{item.model}</span>
                  </div>
                  <div className="order_item">
                    <div className="order_name">
                      <strong>Year: </strong></div>
                    <span id="order-date">{item.year}</span>
                  </div>

                  <div className="order_item">
                    <div className="order_name">
                      <strong>Quantity: </strong></div>
                    <span id="order-date">{item.quantity}</span>
                  </div>
                  <div className="order_item">
                    <div className="order_name">
                      <strong>Price: </strong></div>
                    <span id="order-date">{item.price}</span>
                  </div>
                  <div className="order_item">
                    <div className="order_name">
                      <strong>Delivery Date: </strong></div>
                    <span id="order-date">{item.delivery_date}</span>
                  </div>
                  <div className="order_item">
                    <div className="order_name">
                      <strong>Delivery Address: </strong></div>
                    <span id="order-date">{item.address}</span>
                  </div>
                  <div className="order_item">
                    <div className="order_name">
                      <strong>Parts: </strong>
                    </div>
                    {/* {item.parts.map((item) => { */}
                      <span id="order-date">Break Shoe</span>
                      {/* <span id="order-date">Break Shoe</span> */}
                    {/* })} */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Base>
    </>
  )
}

export default Order
