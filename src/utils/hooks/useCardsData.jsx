import { useEffect, useState } from "react";
import { CARDS_API } from "../constants";

export const useCardsData = () => {
  const [cardData, setCardData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(CARDS_API);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();

      const restrauntsData =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setCardData(restrauntsData);
    } catch (error) {
      console.log(error, "Error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return cardData;
};
