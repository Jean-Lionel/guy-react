import {
  Switch,
  Route,
} from "react-router-dom";
import BasePage from "../BasePage";
import AddGroupe from "../blog/components/AddGroupe";
import AddFormulaireDeclaration from "../blog/components/addgroupe/AddFormulaireDeclaration";
import AnnonceAdd from "../components/admin/annonce/AnnonceAdd";
import AnnonceTrasuction from "../components/admin/annonce/AnnonceTrasuction";
import TraduireArticle from "../components/admin/articles/TraduireArticle";
import Home from "../Home";
import AddUserToInstution from "../Pages/AddUserToInstution";
import Admin from "../Pages/Admin";
import AjoutConenue from "../Pages/Admin/AjoutConenue";
import ArticleAdd from "../Pages/Admin/articles/ArticleAdd";
import Article from "../Pages/Admin/articles/Articles";
import Cotisation from "../Pages/Admin/contisation/Cotisation";
import DetailDeclaration from "../Pages/Admin/DetailDeclaration";
import Institution from "../Pages/Admin/institution/Institution";
import InstitutionAdd from "../Pages/Admin/institution/InstitutionAdd";
import RicievedDeclaration from "../Pages/Admin/message/RicievedDeclaration";
import ShowDetailArticle from "../Pages/Admin/ShowDetailArticle";
import Slides from "../Pages/Admin/Slides/Slides";
import Users from "../Pages/Admin/Users";
import UserAdd from "../Pages/Admin/users/UserAdd";
import Annonce from "../Pages/Annonce";
import AnnonceCommunique from "../Pages/AnnonceCommunique";
import AnnonceCommuniqueDetail from "../Pages/AnnonceCommuniqueDetail";
import ArticleSearch from "../Pages/ArticleSearch";
import ConsultationCotisation from "../Pages/ConsultationCotisation";
import ConsultationCotisationDetataches from "../Pages/ConsultationCotisationDetataches";
import DeclarationFormulaire from "../Pages/DeclarationFormulaire";
import DetailBlog from "../Pages/DetailBlog";
import EditInstution from "../Pages/EditInstution";
import Information from "../Pages/Information";
import InformationAdd from "../Pages/Admin/InformationAdd";
import Login from "../Pages/Login";
import MessageSent from "../Pages/MessageSent";
import OnlineService from "../Pages/OnlineService";
import RecievedMessageDetail from "../Pages/RecievedMessageDetail";
import RicievedMessage from "../Pages/RicievedMessage";
import TestComponent from "../Pages/TestComponent";
import UserEdit from "../Pages/UserEdit";
import WebAdmin from "../Pages/WebAdmin";
import ProtectedRoute from "../utility/ProtectedRouter";
import InformationDetail from "../components/web/InformationDetail";
import Contact from "../blog/Contact";
import ContactList from "../components/admin/contacts/ContactList";
import UpdateInformation from "../components/admin/information/UpdateInformation";
import SignIn from "../Pages/Signup";

const RouteComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/informations" component={Information} />
      <Route exact path="/contacts" component={Contact} />
       <Route exact path="/informations/:id" component={InformationDetail} />
      <Route exact path="/detail/:id" component={DetailBlog} />
      <Route exact path="/institution_edit/:id" component={EditInstution} />
      <Route exact path="/article-search/:id" component={ArticleSearch} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={SignIn} />
      <Route exact path="/detail" component={BasePage} />
      <Route exact path="/annonce-communique" component={AnnonceCommunique} />
      <Route exact path="/annonce-communique/:id" component={AnnonceCommuniqueDetail} />
      <Route exact path="/online-service" component={OnlineService} />
      <Route exact path="/client-consultation-cotisation-afilier" component={ConsultationCotisation} />
      <Route exact path="/client-consultation-cotisation-detaches" component={ConsultationCotisationDetataches} />
      <Route exact path="/client-declaration" component={DeclarationFormulaire} />
      <ProtectedRoute exact path="/admin" component={Admin} />
      <ProtectedRoute exact path="/users" component={Users} />
      <ProtectedRoute exact path="/contact-create" component={ContactList} />
      <ProtectedRoute exact path="/admin-article" component={Article} />
      <ProtectedRoute exact path="/admin-article-add" component={ArticleAdd} />
      <ProtectedRoute name="add_user" exact path="/admin-add-user" component={UserAdd} />
      <ProtectedRoute name="admin-slides" exact path="/admin-slides" component={Slides} />
      <ProtectedRoute exact path="/test-compontent" component={TestComponent} />
      <ProtectedRoute exact path="/institution" component={Institution} />
      <ProtectedRoute exact path="/cotisations" component={Cotisation} />
      <ProtectedRoute exact path="/message-sent" component={MessageSent} />
      <ProtectedRoute exact path="/institutions/add" component={InstitutionAdd} />
      <ProtectedRoute exact path="/web" component={WebAdmin} />
      <ProtectedRoute exact path="/add-groupe" component={AddGroupe} />
      <ProtectedRoute exact path="/information" component={InformationAdd} />
      <ProtectedRoute exact path="/ricieved-message" component={RicievedMessage} />
      <ProtectedRoute exact path="/ricieved-declaration" component={RicievedDeclaration} />
      <ProtectedRoute exact path="/ricieved-message/:id" component={RecievedMessageDetail} />
      <ProtectedRoute exact path="/add-user-to-institution/:id" component={AddUserToInstution} />
      <ProtectedRoute exact path="/show-detail-declaration/:id" component={DetailDeclaration} />
      <ProtectedRoute exact path="/edit-user/:id" component={UserEdit} />
      <ProtectedRoute exact path="/update-information/:id" component={UpdateInformation} />
      <ProtectedRoute exact path="/ajouter-contenu/:id" component={AjoutConenue} />
      <ProtectedRoute exact path="/admin/articles/:id" component={ShowDetailArticle} />
      <ProtectedRoute exact path="/admin/articles/traductions/:id" component={TraduireArticle} />

      <ProtectedRoute exact path="/add-formulaire" component={AddFormulaireDeclaration} />
      <ProtectedRoute exact path="/annonce" component={Annonce} />

      <ProtectedRoute exact path="/annonce-translate/:id" component={AnnonceTrasuction} />
      <ProtectedRoute exact path="/annonce-add" component={AnnonceAdd} />
    </Switch>
  );
}

export default RouteComponent;