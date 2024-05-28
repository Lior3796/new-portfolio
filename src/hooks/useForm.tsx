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

    emailjs.sendForm('service_1r2gfpb', 'template_52y2ijh', e.currentTarget,"786EpJXcoKptmTNTX")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return [name, email, message, handleInput,handleSubmit];
};

export default useForm;
