import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { Form, Input, Label, StyledButton, WrapperGrid, Textarea } from "./ContactMeStyles";

const ContactMe = () => {
  return (
    <Section nopadding id="contact-me">
      <SectionTitle main>Contact Me</SectionTitle>
      <Form>
        <WrapperGrid full>
          <Label>Name</Label>
          <Input type="text" name="name" />
        </WrapperGrid>
        <WrapperGrid full>
          <Label>Email Address</Label>
          <Input type="email" name="email" />
        </WrapperGrid>
        <WrapperGrid full>
          <Label>Message</Label>
          <Textarea name="message" rows="5"></Textarea>
        </WrapperGrid>
        <WrapperGrid full>
          <StyledButton>Submit</StyledButton>
        </WrapperGrid>
      </Form>
    </Section>
  );
};

export default ContactMe;
