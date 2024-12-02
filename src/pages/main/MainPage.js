import React from 'react';
import Banner from '../../components/main/Banner';
import Categories from '../../components/main/Categories';
import Destination from '../../components/main/Destination';
import BasicBodyLayout from "../../layouts/common/BasicBodyLayout";

const MainPage = () => {
  return (
      <>
              <div className="main-page">
                  <Banner/>
                  <Categories/>
                  <Destination/>
              </div>
      </>

  );
};

export default MainPage;
