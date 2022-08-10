import React, { Component } from 'react'
import { connect } from 'react-redux';


//NB: 
//fr = french 
//en = english

// fr and en should always be written in small letter as with this example



// class Component
class HowToUseThisInternationalisationInClassComponent extends Component {

    internationalisation = {
        title: {
            fr: "Assistance et Aide",
            en: "Help and Support",
        },
        message: {
            fr: "Lorem ipsum est malade",
            en: "Lorem ipsum is sick",
        }

    }

    render() {
        const code = this.props.currentLanguage.code;
        const multiLanguage = this.internationalisation;
        return (
            <div>
                <h1>{multiLanguage.title[code]}</h1>
                <p>{multiLanguage.message[code]}</p>
            </div>
        )
    }

    // Voila, we this component will update itself if the language of the app change
}


// this take store values as props
const mapStateToProps = (storeOf) => ({
    currentLanguage: storeOf.nisys.currentLanguage,
});


// this connect your component to the store so that it can be rebuild on state change and access store values
export default connect(mapStateToProps)(HowToUseThisInternationalisationInClassComponent);