import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Consultation des cotisations pour les affiliés",
    url: "/client-consultation-cotisation-afilier",
    icon: "",
  },
  {
    title: "Consultation des cotisations pour les détaches",
    url: "/client-consultation-cotisation-detaches",
    icon: "",
  },
  {
    title: "Déclaration d'accident",
    url: "/client-declaration",
    icon: "",
  },
];
const BaseLeftSideCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { md: "80vh", xs: "auto" },
        bgcolor: "background.paper",
        border: "2px solid green",
        borderRadius: "6px",
      }}
      aria-label="contacts"
    >
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          textAlign: "left",
        }}
      >
        {data.map((element, index) => (
          <p key={index}>
            <Typography variant="a">
              <Link to={element.url}>{element.title}</Link>
            </Typography>
          </p>
        ))}
      </Grid>
    </Box>
  );
};

export default BaseLeftSideCard;
