import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { useMemo, useState } from "react";
import { useCardsData } from "./utils/hooks/useCardsData";

function App() {
  const [searchText, setSearchText] = useState("");

  const cardData = useCardsData();

  const filterData = useMemo(() => {
    console.log("render");
    if (searchText.trim() === "") {
      return cardData;
    } else {
      return cardData.filter((data) =>
        data?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }, [searchText, cardData]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <Header
        setSearchText={setSearchText}
        searchText={searchText}
        handleChange={handleChange}
      />
      <Body searchText={searchText} cardData={filterData} />
      <Footer />
    </>
  );
}

export default App;
