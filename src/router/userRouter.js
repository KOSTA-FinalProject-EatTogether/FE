import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const SignUp = lazy(()=>import("../pages/member/SignUpPage"))
const SignIn = lazy(() => import("../pages/member/SignInPage"))

const userRouter = () => {
    return [
        {
            path: "signup",
            element : <Suspense fallback={Loading}><SignUp/></Suspense>
        },{
            path: "signIn",
            element:<Suspense fallback={Loading}><SignIn/></Suspense>
        }
    ]
}

export default userRouter