import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicBodyLayout from '../../../layouts/common/BasicBodyLayout';
import RestaurantNewsModifyComponent from '../../../components/restaurant/restaurantNews/RestaurantNewsModifyComponent';

const RestaurantNewsModifyPage = () => {
    return(
        <div>
            <RestaurantNewsModifyComponent/>
        </div>
    )

};

export default RestaurantNewsModifyPage;