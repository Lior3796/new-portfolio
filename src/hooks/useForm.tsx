import { useState } from "react";
import emailjs from 'emailjs-com';
type UseFormType = [
    string,
    string,
    string,
    (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    (e: React.FormEvent<HTMLFormElement>) => void
  ];

const useForm = (): UseFormType => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  


  function handleInput(
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "email":
        setEmail(e.currentTarget.value);
        break;
      case "message":
        console.log(
          "Inside the message block"
        )
        setMessage(e.currentTarget.value);
        break;
    }
  }

  
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID ?? "DEFAULT";
  const TEMPLATE_ID = process.env.TEMPLATE_ID ?? "DEFAULT_TEMPLATE_ID";
  const USER_ID = process.env.REACT_APP_USER_ID ?? "DEFAULT_USER_ID";

  console.log(SERVICE_ID,TEMPLATE_ID,USER_ID);
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget,USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return [name, email, message, handleInput,handleSubmit];
};

export default useForm;
