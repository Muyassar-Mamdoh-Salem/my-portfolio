import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // كل ما يتغير الـ route يتسجل pageview
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
};

export default usePageTracking;
