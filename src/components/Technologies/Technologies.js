import React from 'react';
import { DiFirebase, DiReact, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider/>
  
    <SectionTitle main>
      Skills
    </SectionTitle>
    <SectionText>
      I have worked with a number of technologies in web development world.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React JS <br/>
            HTML5, CSS3, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="5rem" />
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node JS and Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="5rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Mongodb, MySQL,Firebase Firestore
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
 
  
</Section>
);

export default Technologies;
