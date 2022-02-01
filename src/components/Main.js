import React, {useEffect, useState} from 'react';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";
import "./Main.css";

const Main = ({ selectedPunk, punkListData }) => {

  const [activePunk, setActivePunk] = useState(punkListData[0]);

    useEffect(() => {
      setActivePunk(punkListData[selectedPunk]);
    }, [selectedPunk, punkListData]);  



  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image_url} />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} alt="" />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameHandle">
              <div>{activePunk.owner_address}</div>
              <div className="ownerHandle">1904430@kiit.ac.in</div>
            </div>
            <div className="ownerlink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerlink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerlink">
              <img src={moreLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
