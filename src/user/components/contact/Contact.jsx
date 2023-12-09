import React, { useState, useRef } from 'react';
import styles from "./contact.module.css";
import emailjs from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";
import { GrSend } from "react-icons/gr";

function Contact() {
  const formRef = useRef();
  const [emailInput, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);

  function handleEmailChange(e) {setEmailInput(e.target.value);}

  function isEmailValid() {
    return emailInput.length > 10 && emailInput.includes("@") ? true : false;
  }

  const sendEmail = (e) => {
    if (isEmailValid) {
      e.preventDefault();
      setLoading(true);

      emailjs.sendForm('service_tt4uwfq', 'template_a7f021c', formRef.current, 'O_emiMG-zC22X_eF2')
        .then(() => {
          setLoading(false);
          setEmailInput("");
          alert(`Тепер ви будете отримувати актуальні новини прямо на свою електронну скриньку "${emailInput}"\n\n Дякуємо, Drink&Food!`);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          alert("Упс.. Щось пішло не так, спробуйте знову");
        });
    }
  };


  return (
    <div className={`${styles.main} flex items-center justify-center`}>
      <div className={`${styles.coverContainer}`}>
        <div className={`${styles.details} text-white`}>
          <div className='flex flex-row items-center titleText'>
            <HiOutlineMail />
            <div className='ml-2 w-full'>Розсилка новин</div>
          </div>
          <div className={`pretitleText mb-4 w-full`}>Будьте <span className='font-bold'>першим</span>, хто дізнається про всі наші новини.</div>
        </div>
        <form ref={formRef} onSubmit={sendEmail} className={`${styles.inputsContainer} flex flex-col flex-1 w-full`}>
          <input type="email" name="email" value={emailInput} onChange={handleEmailChange} placeholder='Введіть вашу пошту...' className={`${styles.inputEmail} input max-h-[50px] text-black`} />
          <button type='submit' className={`${styles.submBtn} mt-[15px] pretitleText flex flex-row items-center justify-center`}>
            {loading ? "Надсилається.." : "Відправити"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
