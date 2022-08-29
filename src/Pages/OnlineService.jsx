import { Box, Grid } from "@mui/material";
import BasePage from "../BasePage";
import useFetchDataWithPagination from "../utility/useFetchDataWithPagination";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OnlineService = () => {
  const { data } = useFetchDataWithPagination("downloawddoc");
  const [groupeFormulaire, setgroupeFormulaire] = useState(null);

  const { currentLanguage } = useSelector((storeOf) => {
    return { currentLanguage: storeOf.nisys.currentLanguage };
  });

  useEffect(() => {
    if (data?.data) {
      setgroupeFormulaire(data?.data);
    }

    return () => { };
  }, [data]);

  const styleUl = {
    ul: {
      textAlign: "left",
    },
    li: {
      listStyle: "none",
    },
  };

  const titre = {
    title: {
      fr: " Quelques formulaire de déclaration pour ONPR",
      en: "Some declaration forms for ONPR",
    },
  };

  return (
    <BasePage>
      <Box>
        <Grid item xs={12} md={12}>
          <ul style={styleUl.ul} className="group-list">
            <li>
              <h5>
                <h4> {titre.title[currentLanguage.code]} </h4>
              </h5>
            </li>
            <li>
              {groupeFormulaire &&
                groupeFormulaire.map((formulaire) => (
                  <li>
                    {formulaire.title}
                    <ul>
                      {formulaire.documents &&
                        formulaire.documents.map((doc) => (
                          <li>
                            <a href={doc.name} rel="noreferrer" target="_blank">
                              {doc.title}
                            </a>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </li>
          </ul>
        </Grid>
      </Box>
    </BasePage>
  );
};

export default OnlineService;
