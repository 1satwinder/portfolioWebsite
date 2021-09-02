import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hi, I'm Satwinder. <br/>
       I build things for Web.
     </SectionTitle>
     <SectionText>
       I'M A WEB DEVELOPER & PROGRAMMER WITH EXPERIENCE IN DEVELOPING WEB APPLICATIONS PRIMARILY USING JAVASCRIPT.
     </SectionText>
   </LeftSection>
   <Img src="/images/Satwinder.jpg"/>
 </Section>
);

export default Hero;