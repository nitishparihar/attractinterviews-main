import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop

//Scroll to top works when every time the url path (i.e. route) changes and we scroll to the top of the page.
//We can also add behavior: "instant", just below the left: 0 in useEffect  for animation