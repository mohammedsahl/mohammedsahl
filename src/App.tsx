import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { RecursivePartial } from "tsparticles/dist/Types/RecursivePartial";
import { IOptions } from "tsparticles/dist/Options/Interfaces/IOptions";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
    // Define card dimensions
    const cardStyle = {
        width: '30em',
        height: '12em',
        margin: 'auto',
    }
    return (
        <div className="App parent">
            <Particles options={particlesOptions as RecursivePartial<IOptions>} />
            <Card style={cardStyle} bg='Light'>
                <Card.Body>
                    <Card.Title style={{ fontSize: '2em' }}><b>Mohammed</b> Sahl</Card.Title>
                    <Card.Subtitle  style={{ padding: '1em' }} className="mb-2 text-muted">
                        Computer Science '23, University of Waterloo
                    </Card.Subtitle>
                    <div className="links">
                        <Card.Link style={{ 'color': 'inherit' }} href="https://www.github.com/mohammedsahl" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="3x" className="fa-button" />
                        </Card.Link>

                        <Card.Link></Card.Link>

                        <Card.Link style={{ 'color': 'inherit' }} href="https://www.linkedin.com/in/mohammed-sahl" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} size="3x" className="fa-button" />
                        </Card.Link>

                        <Card.Link></Card.Link>

                        <Card.Link style={{ 'color': 'inherit' }} href={"resume.pdf"} target="_blank">
                                <FontAwesomeIcon icon={faFilePdf} size="3x" className="fa-button" />
                        </Card.Link>

                        <Card.Link></Card.Link>

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
