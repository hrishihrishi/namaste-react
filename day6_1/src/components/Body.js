import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard ';
import Shimmer from './Shimmer';
// import fakeAPI from '../utils/fakeAPI';

const filter = (hotels) => hotels?.filter((hotel) => hotel.info.avgRating > 4);

export const Body = () => {
  const [hotels, setHotels] = useState();


  {
    /*call after the component rendered*/
  }
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const response = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=10.1081805&lng=76.3566968');
    const responseJson = await response.json();
    setHotels(responseJson?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    console.log(responseJson?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  };

  if (!hotels){
    return ( <div className="shimmer-container">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>)
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => setHotels(filter(hotels))}
        >
          Top Rated Restaurant
        </button>
      </div>
     
      <div className="res-container">
        {hotels?.map((items) => (
          <RestaurantCard key={items.info.id} data={items} />
        ))}
      </div>
    </div>
  );
};

export default Body;
