import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const RestaurantDetail = lazy(()=>import("../pages/restaurantDetails/RestaurantDetailsPage"))
const RestaurantModify = lazy(()=>import("../pages/restaurantDetails/RestaurantModifyPage"))
const RestaurantPreviewPage = lazy(()=>import("../pages/restaurantPreview/RestaurantPreviewPage"))
const restaurantRouter = () =>{
    return [
        {
            path: "preview",
            element : <Suspense fallback={Loading}><RestaurantPreviewPage/></Suspense>
        },{
            path: "detail",
            element : <Suspense fallback={Loading}><RestaurantDetail/></Suspense>
        },{
            path:"modify",
            element : <Suspense fallback={Loading}><RestaurantModify/></Suspense>
        }
    ]
}

export default restaurantRouter