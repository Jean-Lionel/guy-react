import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RouterLinkComponent = ({ route, handleCloseNavMenu }) => {
  const { currentLanguage } = useSelector((storeOf) => ({
    currentLanguage: storeOf.nisys.currentLanguage,
  }));
  return (
    <Link to={route.path}>
      <p>
        <Button
          sx={{ my: 2, color: "white", display: "block" }}
          onClick={() => handleCloseNavMenu}
        >
          {route.icon}
          {route.name[currentLanguage.code]}
        </Button>
      </p>
    </Link>
  );
};

export default RouterLinkComponent;
