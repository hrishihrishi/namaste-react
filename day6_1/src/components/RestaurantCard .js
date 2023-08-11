import { CARD_URL } from "../utils/constants";


const RestaurantCard = ({data}) => {
  
  return (
      <div className="res-card" >
        <img src={CARD_URL +data.info.cloudinaryImageId} className='company-logo' />
      <h1>{data.info.name}</h1>
      <h2>{data.info.cuisines.join(' ')}</h2>
      <div><span>{data.info.avgRating}</span> | <span>{data.info.sla.deliveryTime} mints</span></div>
      </div>
    );
  };

  export default RestaurantCard;