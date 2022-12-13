import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import ShareIcon from '@mui/icons-material/Share';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const AdmnistrationWeb = () => {
    return (<Box>
        <div className="list-unstyled d-flex flex-row">

            <div className="p-2">
                <Link to="/add-groupe" > <GroupWorkIcon />  Groupe</Link>
            </div>
            <div className="p-2">
                <Link to="/add-formulaire" className="ml-2 d-block"> <AttachFileIcon /> Formulaire de déclaration</Link>
            </div>
            <div className="m-2">
                <Link to="/admin-article" className="ml-2 d-block"><ArticleIcon />  Articles</Link>
            </div>

            <div className="m-2">
                <Link to="/admin-slides" className="ml-2 d-block"><SlideshowIcon />  Vidéo</Link>
            </div>
            <div className="m-2">
                <Link to="/annonce" className="ml-2 d-block"><ShareIcon />  Annonce</Link>
            </div>
            <div className="m-2">
                <Link to="/information" className="ml-2 d-block">   Information</Link>
            </div>

        </div>

    </Box>);
}
export default AdmnistrationWeb;