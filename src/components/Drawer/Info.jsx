import {useContext} from "react";
import AppContext from "../../context";

export default ({ title, description, imageUrl }) => {
  const { setOpenCart } = useContext(AppContext)
  return (
    <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
      <img className='mb-20' width='120px' height='120px' src={imageUrl} alt={title}/>
      <h2>{title}</h2>
      <p className='opacity-6'>{description}</p>
      <button className='greenButton' onClick={() => setOpenCart(false)}>
        <img src="/img/arrow.svg" alt="Arrow"/>
        <span>Вернуться назад</span>
      </button>
    </div>
  )
}
