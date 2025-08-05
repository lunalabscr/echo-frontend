import { useLocation, useNavigate } from "react-router-dom";

export function useSmoothNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleNav(target: string) {
    if (target.startsWith("#")) {
      // Smooth scroll to section
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (target.includes("#")) {
      // Navigating to same page but different section
      const [path, hash] = target.split("#");
      if (location.pathname !== path) {
        navigate(path, { replace: false });
      }
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Navigate to another page
      navigate(target);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return handleNav;
}
