import React from "react";
import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { Form, Input, Label, StyledButton, WrapperGrid, Textarea } from "./ContactMeStyles";
import { useState } from "react";


const ContactMe = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState(""); 

  return (
    <Section nopadding id="contact-me">
      <SectionTitle main>Contact Me</SectionTitle>
      <Form name="contact" method="POST" data-netlify="true" >
        <WrapperGrid full>
        <input type="hidden" name="form-name" value="contact" />
          <Label>Name</Label>
          <Input type="text" name="name" value={name} onChange={ (e) => setname(e.target.value) } />
        </WrapperGrid>
        <WrapperGrid full>
          <Label>Email Address</Label>
          <Input type="email" name="email" value={email} onChange={ (e) => setemail(e.target.value) }  />
        </WrapperGrid>
        <WrapperGrid full>
          <Label>Message</Label>
          <Textarea name="message" name="message" rows="5" value={message} onChange={ (e) => setmessage(e.target.value) } ></Textarea>
        </WrapperGrid>
        <WrapperGrid full>
          <StyledButton type="submit">Submit</StyledButton>
        </WrapperGrid>
      </Form>
    </Section>
  );
};

export default ContactMe;
