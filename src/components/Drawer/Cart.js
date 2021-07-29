export default ({ items, onRemove, onClose, onClickOrder, isLoading }) => {
  const total = items.reduce((total, { price }) => total += price, 0);
  const percentAmount = total / 100 * 5;
  return (
    <>
      <div className='d-flex justify-between'>
        <h2>Корзина </h2>
        <img src="/img/btn-remove.svg" alt="Remove" className='cu-p' onClick={onClose}/>
      </div>
      <div className='cartItems'>
        {items.map((item) => (
          <div className="d-flex align-center mt-20 cartItem" key={item.id}>
            <img className='mr-20' width={70} height={70} src={`/img/sneakers/${item.imageName}.jpg`} alt="Sneakers"/>
            <div className='mr-20'>
              <p className='mb-5'>{item.name}</p>
              <b>{item.price} руб.</b>
            </div>
            <img className='removeCartItem' src="/img/btn-remove.svg" alt="Remove" onClick={() => onRemove(item.id)}/>
          </div>
        ))}
      </div>
      <div className='cartTotalBlock'>
        <ul>
          <li className='d-flex align-end mb-20'>
            <span>Итого:</span>
            <div/>
            <b>{total} руб.</b>
          </li>
          <li className='d-flex align-end mb-20'>
            <span>Налог 5%:</span>
            <div/>
            <b>{percentAmount} руб. </b>
          </li>
        </ul>
        <button disabled={isLoading} className='greenButton' onClick={onClickOrder}>
          <span>Оформить заказ</span>
          <img src="/img/arrow.svg" alt="Arrow"/>
        </button>
      </div>
    </>
  )
}
