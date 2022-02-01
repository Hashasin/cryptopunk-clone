import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x67a427e0f961cDE2a5DDBB3d78A76FF01962a1F5&order_direction=asc"
      );
      // storing data
      setPunkListData(openseaData.data.assets);
      console.log(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          {/*  its(traits) an array with an object inside it */}
          <PunkList punkListData={punkListData} selectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  )
}

export default App;
