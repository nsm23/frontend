import React from "react"


const OrderItem = ({order, index}) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{order.order}</td>
            <td>{order.cost_usd}$</td>
            <td>{order.cost_rub}rub</td>
            <td>{order.delivery_date}</td>
        </tr>
    )

}


export default OrderItem;