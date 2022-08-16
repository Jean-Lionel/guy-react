import CellTowerIcon from "@mui/icons-material/CellTower";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BlenderIcon from "@mui/icons-material/Blender";

const useMenuRoutes = () => {
  const routes = [
    {
      name: {
        fr: "Web",
        en: "Web",
      },
      path: "/web",
      icon: <CellTowerIcon />,
      isAdmin: true,
      isRisqueProfessionnel: false,
      isEmployeur: false,
      isWebAdministrator: true,
    },
    {
      name: {
        fr: "Utilisateurs",
        en: "Users",
      },
      path: "/users",
      icon: <PeopleOutlineIcon />,
      isAdmin: true,
      isRisqueProfessionnel: false,
      isEmployeur: false,
      isWebAdministrator: false,
    },
    {
      name: {
        fr: "Institution",
        en: "Institution",
      },
      path: "/institution",
      icon: <AdminPanelSettingsIcon />,
      isAdmin: true,
      isRisqueProfessionnel: false,
      isEmployeur: false,
      isWebAdministrator: false,
    },

    {
      name: {
        fr: "Déclaration",
        en: "Declaration",
      },
      path: "/cotisations",
      icon: <BlenderIcon />,
      isAdmin: false,
      isRisqueProfessionnel: false,
      isEmployeur: true,
      isWebAdministrator: false,
    },
  ];

  return {
    routes,
  };
};

export default useMenuRoutes;
