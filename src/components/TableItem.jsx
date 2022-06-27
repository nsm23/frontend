import React from "react";
import OrderItem from "./OrderItem";
import '../styles/App.css'

const TableItem = ({orders}) => {
    return (
        <div className="table">
            <table id="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Заказ</th>
                    <th>Стоимость USD</th>
                    <th>Стоимость RUB</th>
                    <th>Дата доставки</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) =>
                    <OrderItem order={order} index={index}/>
                    )}
                </tbody>
            </table>
        </div>
    )
}


export default TableItem;