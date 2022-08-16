import React from 'react';
import { connect } from 'react-redux';
import './language_changer.css';
import ManagerRepo from '../../repositories/managerRepo';
import Internationalisation from '../../providers/internationalisation';
import { copyWith } from '../../logic/nisys_slice';


class LanguageChanger extends React.Component {
    render() {
        return <div className='languageChanger flex'>
            {/* <i className='fa fa-language' /> */}
            <select onChange={(event) => {this.changeLanguage(event.target.value)}} value={this.props.currentLanguage.code}>
                {[...new Internationalisation().languages].map((e, i) => {
                    return <option key={i} value={e.code}>{e.flag} {e[`${this.props.currentLanguage.code}`]}</option>
                })}
            </select>
        </div>
    }


    changeLanguage(code) {
        console.log("Language changed");
        try {
            const managerRepo = new ManagerRepo();
            var newLanguage = managerRepo.onLanguageChanged(new Internationalisation().codeToType(code));
            this.props.dispatch(copyWith({
                currentLanguage: newLanguage,
            }));
        } catch (e) {
            console.log(`An error has occured while changing the app language ${e}`);
        }
    }
}


const mapStateToProps = (storeOf) => ({
    currentLanguage: storeOf.nisys.currentLanguage,
});

export default connect(mapStateToProps)(LanguageChanger);