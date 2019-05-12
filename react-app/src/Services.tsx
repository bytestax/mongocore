import React, {Component} from 'react';
import './Services.css';

class Services extends Component {

    render(){
        return(
            <div className="services">
                <h3>services</h3>
                <h2>what we offer</h2>
                <div className="row">
                    <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description}/>
                    <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description}/>
                    <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description}/>
                    <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description}/>
                </div>
            </div>
        );
    }
}

const iconObj = [
    {
        icon: <i className="fas fa-mobile-alt"></i>,
        title: 'Responsive',
        description:'Looks great on my screen size!'
    },
    {
        icon: <i className="fas fa-pencil-alt"></i>,
        title: 'Redesigned',
        description:'Freshly redesigned for Bootstrap 4.!'
    },
    {
        icon: <i className="far fa-thumbs-up"></i>,
        title: 'Favorites',
        description:'Millions of users <i className="fas fa-heart"></i> Start Bootstrap!'
    },
    {
        icon: <i className="fas fa-question"></i>,
        title: 'Question',
        description:'I mustache you a question...'
    }
];

class Icons extends Component<{myIcon: object, myTitle: string, myDescription: string}> {
    render() {
        return (
            <div>
                <span>
                    {this.props.myIcon}
                </span>
                <h4>{this.props.myTitle}</h4>
                <p>{this.props.myDescription}</p>
            </div>
        );
    }
}
export default Services;