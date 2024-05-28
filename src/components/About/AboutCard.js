import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Subhajit Pal </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            I am currently employed as a senior software developer at Tech
            Mahindra.
            <br />
            My current focus revolves around leveraging the latest React.js
            features to build scalable and maintainable frontend architectures.
            I'm enthusiastic about staying abreast of industry trends,
            continuously learning, and applying innovative solutions to enhance
            user experiences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventure and Treakking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Nature PhotoGraphy
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Subhajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
