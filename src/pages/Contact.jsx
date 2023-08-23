import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {motion} from "framer-motion"

export default function Contact() {
    //Email Functions
    const form = useRef();

    // Function to show toast notification
    const notifySuccess = () => {
      toast.success("Email sent successfully!", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
      });
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs
        .sendForm(
          "service_b49i52f",
          "template_dbj0gog",
          form.current,
          "g3ShUZPhcjLjaPsm_"
        )
        .then(
          (result) => {
            console.log(result.text);
            notifySuccess();
            resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    //Function to reset form
    const resetForm = () => {
      form.current.reset()
    }

  return (
    <>
      <div className="center-screen">
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
        
        className="contact-form bg-lilac rounded-lg p-8 ">
        <h2 className="text-3xl font-bold text-lilac text-center">Send an Email!</h2>
        <form ref={form} onSubmit={sendEmail}>
        <div className=" mt-8  text-1xl">
          <div className="flex flex-col gap-6 m-4">
            <label className="block mt-4 mb-4">
              <span className="text-lilac">Full name</span>
              <input
                type="text"
                required
                name="from_name"
                className="
                    mt-1
                    w-full
                    block
                    rounded
                    border-gray-300
             
                    focus:border-primary focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder="John Doe"
              />
            </label>
            <label className="mt-4 pb-4">
              <span className="text-lilac">Email address</span>
              <input
              name="user_email"
                type="email"
                className="
                    mt-1
                    block
                    w-full
                    border-gray-300
                    focus:border-lilac focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder="john@example.com"
              />
            </label>
            <label className="mt-4">
              <span className="text-lilac">Message</span>
              <textarea
              name="message"
              type="text"
                className="
                    mt-1
                    block
                    border-gray-300
                    w-full
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                rows="3"
              ></textarea>
            </label>
            <div>
            <button className="send-btn mt-4" type="submit" >Send</button>
            </div>
          </div>
        </div>
        </form>
     
        </motion.div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}
