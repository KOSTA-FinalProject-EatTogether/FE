import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const RestaurantDetail = lazy(()=>import("../pages/restaurantDetails/RestaurantDetailsPage"))
const RestaurantModify = lazy(()=>import("../pages/restaurantDetails/RestaurantModifyPage"))

const restaurantRouter = () =>{
    return [
        {
            path: "detail",
            element : <Suspense fallback={Loading}><RestaurantDetail/></Suspense>
        },{
            path:"modify",
            element : <Suspense fallback={Loading}><RestaurantModify/></Suspense>
        }
    ]
}

export default restaurantRouter