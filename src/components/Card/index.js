import styles from './Card.module.scss'
import {useContext, useState} from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

const Card = ({
  id,
  name,
  imageName,
  price,
  favorited = false,
  isLoading = true,
}) => {
  const { isItemAdded, onAddToFavorites, onAddToCart } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const item = { name, imageName, price, parentId: id, id };
  const onClickFavorite = () => {
    onAddToFavorites(item);
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img src={`img/heart-${isFavorite ? 'liked' : 'unliked'}.svg`} onClick={onClickFavorite} alt="Liked"/>
          </div>
          <img width={133} height={112} src={`img/sneakers/${imageName}.jpg`} alt=""/>
          <h5>{name}</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <img
              className={styles.button}
              src={`img/btn-${isItemAdded(id) ? 'checked' : 'plus'}.svg`}
              alt="Plus"
              onClick={() => onAddToCart(item)}
            />
          </div>
        </>
        )}
    </div>
  )
}

export default Card;
