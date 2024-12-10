import {Suspense, lazy} from "react";
const Loading = <div>Loading..</div>

const SignUp = lazy(()=>import("../pages/user/SignUpPage"))
const SignIn = lazy(() => import("../pages/user/SignInPage"))
const OwnerSignUp = lazy(() => import("../pages/user/OwnerSignUpPage"))
const UserOrOwner =  lazy(() => import("../pages/user/UserOrOwnerPage"))

const userRouter = () => {
    return [
        {
            path: "signup",
            element : <Suspense fallback={Loading}><UserOrOwner/></Suspense>
        },{
            path: "owner-signup",
            element : <Suspense fallback={Loading}><OwnerSignUp/></Suspense>
        },{
            path: "user-signup",
            element : <Suspense fallback={Loading}><OwnerSignUp/></Suspense>
        },{
            path: "signIn",
            element:<Suspense fallback={Loading}><SignIn/></Suspense>
        }
    ]
}

export default userRouter