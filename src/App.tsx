import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { RecursivePartial } from "tsparticles/dist/Types/RecursivePartial";
import { IOptions } from "tsparticles/dist/Options/Interfaces/IOptions";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function App() {
    const cardStyle = {
        width: '18em',
        margin: 'auto',
        display: 'block',
    }
    return (
        <div className="App parent">
            <Particles options={particlesOptions as RecursivePartial<IOptions>} />
            <Card style={cardStyle} bg='Light'>
                <Card.Body>
                    <Card.Title size="2x"><b>Mohammed</b> Sahl</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Computer Science '23, University of Waterloo</Card.Subtitle>
                    <div className="links">
                        <Card.Link style={{ 'color': 'inherit' }} href="https://www.github.com/mohammedsahl">
                            <FontAwesomeIcon icon={faGithub} size="3x" className="fa-button" />
                        </Card.Link>

                        <Card.Link style={{ 'color': 'inherit' }} href="https://www.linkedin.com/in/mohammed-sahl">
                            <FontAwesomeIcon icon={faLinkedinIn} size="3x" className="fa-button" />
                        </Card.Link>

                        <Card.Link style={{ 'color': 'inherit' }} href="mailto:mskably@uwaterloo.com">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" className="fa-button" />
                        </Card.Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default App;