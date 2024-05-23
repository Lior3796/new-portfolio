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
    console.log({ name, email, message });
  };
  return [name, email, message, handleInput,handleSubmit];
};

export default useForm;
