import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  PrivacyPage,
  ChangePassword,
  BlogPage,
  Cart,
  Categories,
  Certifications,
  ComparePage,
  ConfirmEmail,
  Contact,
  Login,
  Manfacturer,
  ManfacturerDetails,
  NewsPage,
  ProductInfo,
  Profile,
  ProjectsPage,
  RFQ,
  Search,
  Signup,
  SingleBlogPage,
  AllCategories,
  Home,
  VerifiedAccount,
} from "./Pages";
// import ChangePassword from "./components/Profile/subcomponents/ChangePassword";
import ModifyData from "./components/Profile/subcomponents/ModifyData";
import { useSelector } from "react-redux";
import GetLoader from "../../common/GetLoader/Loader";
import TermsPage from "./Pages/TermsConditionPAge/TermsPage";
import ShippingDelivery from "./Pages/ShippingDelivery/ShippingDelivery";
import ReturnPolicyPage from "./Pages/ReturnPolicyPage/ReturnPolicyPage";
import AboutPage from "./Pages/Aboutpage/AboutPage";
import ForgotPassword from "./Pages/Forgotpassword/ForgotPassword";
import ForgotPasswordMessage from "./Pages/ForgotPMessage/ForgotPasswordMessage";
// import { PrivacyPage } from "./Pages";
// const Home = React.lazy(() => import("../User/Pages/Home/index"));
// const AllCategories = React.lazy(() => import("../User/Pages/AllCategories/index"));
// const BlogPage = React.lazy(() => import("../User/Pages/BlogPAge/BlogPage"));
// const Cart = React.lazy(() => import("../User/Pages/Cart/index"));
// const Categories = React.lazy(() => import("../User/Pages/Categories/index.jsx"));
// const Certifications = React.lazy(() => import("../User/Pages/Certifications/index"));
// const ComparePage = React.lazy(() => import("../User/Pages/ComparePage/ComparePage"));
// const ConfirmEmail = React.lazy(() => import("../User/Pages/ConfirmEmail/index"));
// const Contact = React.lazy(() => import("../User/Pages/Contact/index"));
// const Login = React.lazy(() => import("../User/Pages/Login/index"));
// const Manfacturer = React.lazy(() => import("../User/Pages/Manfacturer/index"));
// const ManfacturerDetails = React.lazy(() => import("../User/Pages/Manfacturerdetails/ManfacturerDetails"));
// const NewsPage = React.lazy(() => import("../User/Pages/News/News"));
// const ProductInfo = React.lazy(() => import("../User/Pages/ProductInfo/index"));
// const Profile = React.lazy(() => import("../User/Pages/Profile/index"));
// const ProjectsPage = React.lazy(() => import("../User/Pages/Projects/Projects"));
// const RFQ = React.lazy(() => import("../User/Pages/RFQ/index"));
// const Search = React.lazy(() => import("../User/Pages/Search/Search"));
// const Signup = React.lazy(() => import("../User/Pages/Signup/index"));
// const SingleBlogPage = React.lazy(() => import("../User/Pages/SingleBlogPage/SingleBlogPage"));
function Index() {
  const user = useSelector((state) => state.user.currentUser);
  // console.log(user,"user");
  return (
    <React.Suspense fallback={<GetLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certification" element={<Certifications />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/verify" element={<VerifiedAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories/:name" element={<Categories />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/privacypolicy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/shipping" element={<ShippingDelivery />} />
        <Route path="/resetpassword" element={<ForgotPassword />} />
        <Route path="/forgotpassword" element={<ForgotPasswordMessage />} />
        <Route path="/refund" element={<ReturnPolicyPage />} />
        <Route
          path="/rfq"
          element={user !== undefined || user !== null ? <RFQ /> : <Login />}
        />
        <Route path="/confirmEmail" element={<ConfirmEmail />} />
        {/* http://15.206.128.120:8000/api/v1/verify?id=64861954eccea82048e4ee4a */}
        <Route
          path="/profile"
          element={
            user !== undefined || user !== null ? <Profile /> : <Login />
          }
        />
        <Route
          path="/cart"
          element={user !== undefined || user !== null ? <Cart /> : <Login />}
        />
        <Route path="/News" element={<NewsPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/manfacturer" element={<Manfacturer />} />
        <Route
          path="ManfacturerDetails/:name"
          element={<ManfacturerDetails />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/comparepage" element={<ComparePage />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/updatepassword" element={<ModifyData />} />
      </Routes>
    </React.Suspense>
  );
}

export default Index;
