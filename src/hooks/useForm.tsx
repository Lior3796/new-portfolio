import { useState } from "react";
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
        setMessage(e.currentTarget.value);
        break;
    }
  }

  
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission

    // emailjs.sendForm('service_1r2gfpb', 'template_lv6oc6v', "Hello world", 'YOUR_USER_ID')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };
  return [name, email, message, handleInput,handleSubmit];
};

export default useForm;
