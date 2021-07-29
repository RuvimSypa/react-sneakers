export default ({ onClose }) => (
  <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
    <img className='mb-20' width='120px' height='120px' src="/img/empty-cart.jpg" alt="Empty cart"/>
    <h2>Корзину пустая</h2>
    <p className='opacity-6'>Добавьте хотя бы одну пару кроссовок, чтоы сделать заказ</p>
    <button className='greenButton' onClick={onClose}>
      <img src="/img/arrow.svg" alt="Arrow"/>
      <span>Вернуться назад</span>
    </button>
  </div>
)
