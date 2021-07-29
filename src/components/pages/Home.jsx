import Card from "../Card";
import {useContext} from "react";
import AppContext from "../../context";

export default ({ searchInput, setSearchInput, onChangeInputSearch, isLoading }) => {
  const { items } = useContext(AppContext)
  const renderItems = () => {
    const filteredItems = items.filter(({ name }) => name.toLowerCase().includes(searchInput.toLowerCase()));

    return (isLoading ? [...Array(10)] : filteredItems)
      .map((card, index) =>
        <Card
          {...card}
          key={index}
          isLoading={isLoading}
        />)
  }
  return (
    <div className="content p-40">
      <div className='d-flex justify-between align-center mb-40'>
        <h2>{searchInput ? `Поиск по запросу: ${searchInput}` : 'Все кроссовки'}</h2>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search"/>
          {searchInput && <img className='clear' src="/img/btn-remove.svg" alt="Clear" onClick={() => setSearchInput('')}/>}
          <input type="text" placeholder='Поиск...' onChange={onChangeInputSearch} value={searchInput}/>
        </div>
      </div>
      <div className='d-flex flex-wrap'>
        {renderItems()}
      </div>
    </div>
  )
}
