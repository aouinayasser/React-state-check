import profilePhoto from './profilePhoto.jpg';
import React from 'react';

class Profile extends React.Component {
    state = {
      Person : {
        fullName : "Yasser Aouina",
        bio : "https://mybio.com",
        imgSrc : profilePhoto,
        profession : "Full Stack Js Developer"
      },
      date : new Date()
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.setState({date: new Date()}),1000)
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

render() {
    return (
        <div>
            <p>{this.state.date.toLocaleTimeString()}</p>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Photo" />
            <h1>{this.state.Person.profession}</h1>
          </div>
    )
}
}

export default Profile