import Card from "../Card";
import {useContext} from "react";
import AppContext from "../../context";


export default () => {
  const { favorites } = useContext(AppContext);
  return (
    <div className="content p-40">
      <div className='d-flex justify-between align-center mb-40'>
        <h2>{favorites.length ? 'Мои закладки' : 'Мои закладки'}</h2>
      </div>
      <div className='d-flex flex-wrap'>
        {favorites
          .map((card, index) =>
            <Card
              {...card}
              key={index}
              favorited
              isLoading={false}
            />)}
      </div>
    </div>
  )
}
