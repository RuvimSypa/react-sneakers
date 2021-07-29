import Card from "../Card";
import {useEffect, useState} from "react";
import axios from "axios";


export default () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('/orders');
        setOrders(data.reduce((prev, order) => [...prev, ...order.items], []));
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    })()
  }, []);
  console.log(orders)
  return (
    <div className="content p-40">
      <div className='d-flex justify-between align-center mb-40'>
        <h2>{orders.length ? 'Мои заказы' : 'Мои закладки'}</h2>
      </div>
      <div className='d-flex flex-wrap'>
        {(isLoading ? [...Array(8)] : orders)
          .map((card, index) =>
            <Card
              {...card}
              key={index}
              isLoading={isLoading}
            />)}
      </div>
    </div>
  )
}
