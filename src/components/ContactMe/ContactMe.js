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

  const handleSubmit =  () => {
    console.log('Sending')
    let data = {
      name,
      email,
      message
    }
    
  fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setname('');
        setemail('');
        setmessage('');
      }
    }).catch( (e) => console.log("not sent") )
  alert("Your response has been received! 👍")
  }

  return (
    <Section nopadding id="contact-me">
      <SectionTitle main>Contact Me</SectionTitle>
      <Form>
        <WrapperGrid full>
          <Label>Name</Label>
          <Input type="text" value={name} onChange={ (e) => setname(e.target.value) } />
        </WrapperGrid>
        <WrapperGrid full>
          <Label>Email Address</Label>
          <Input type="email" value={email} onChange={ (e) => setemail(e.target.value) }  />
        </WrapperGrid>
        <WrapperGrid full>
          <Label>Message</Label>
          <Textarea name="message" rows="5" value={message} onChange={ (e) => setmessage(e.target.value) } ></Textarea>
        </WrapperGrid>
        <WrapperGrid full>
          <StyledButton onClick={() => handleSubmit()} type="button">Submit</StyledButton>
        </WrapperGrid>
      </Form>
    </Section>
  );
};

export default ContactMe;
