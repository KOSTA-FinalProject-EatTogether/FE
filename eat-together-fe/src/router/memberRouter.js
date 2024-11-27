import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const SignUp = lazy(()=>import("../pages/member/SignUpPage"))

const memberRouter = () => {
    return [
        {
            path: "signup",
            element : <Suspense fallback={Loading}><SignUp/></Suspense>
        }
    ]
}

export default memberRouter