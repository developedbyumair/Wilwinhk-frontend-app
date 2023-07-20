import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../Store/Features/loaderSlice";
function GetLoader() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showLoader());
    return () => {
      setTimeout(() => {
        dispatch(hideLoader());
      }, 1000);
    };
  }, [dispatch]);
  return null;
}

export default GetLoader;
