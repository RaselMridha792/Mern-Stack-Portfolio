import { useContext } from "react";
import { NavigateContext } from "../../context/NavigateProvider";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactMe = () => {
  const { contactRef } = useContext(NavigateContext);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5qgkts2", "template_sgvs6gf", form.current, {
        publicKey: "7aTSKriYxaHw76s_C",
      })
      .then(
        () => {
            e.target.reset();
            Swal.fire({
                title: "Successful",
                text: "Successfully send the message",
                icon: "success",
                background: "#000000", // Black background
                color: "#ffffff", // White text
                confirmButtonColor: "#4CAF50",
              });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section ref={contactRef} className="bg-zinc-900 px-5 py-10 my-20">
        <h1 className="md:text-5xl text-3xl capitalize text-lime-500 font-bold text-center py-5">
          contact me
        </h1>
        <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
          <div className="flex-1 space-y-2">
            <p className="text-gray-500">Get In Touch</p>
            <h1 className="text-4xl">
              <span className="text-lime-500">Let`s Talk</span> About More
            </h1>
            <p className="pb-10">
              Have questions or want to collaborate? Feel free to reach out!
              Whether you have a project idea, feedback, or just want to say
              hello, I`d love to hear from you. Let`s connect and create
              something amazing together!
            </p>
            <h1 className="text-2xl">Find Me Here:</h1>
            <p>Email: Raselmridha792@gmail.com</p>
            <div className="flex items-center gap-2">
              <p>whatsapp: </p>
              <Link className="btn bg-lime-500 hover:bg-lime-600 text-black text-lg">
                <FaWhatsapp />
                Direct Message
              </Link>
            </div>
            <p className="text-2xl pt-3">Or Social:</p>
            <div className="flex gap-5 py-5">
              <a
                href="https://github.com/RaselMridha792"
                target="blank"
                className="hover:shadow-2xl hover:scale-110 hover:shadow-lime-400 duration-300 rounded-full"
              >
                <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
                  <FaGithub />
                </p>
              </a>
              <a
                href="https://www.facebook.com/rasel.mirdha.397"
                target="blank"
                className="hover:shadow-2xl hover:scale-110 hover:shadow-lime-400 duration-300 rounded-full"
              >
                <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
                  <FaFacebook />
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/raselmridha/"
                target="blank"
                className="hover:shadow-2xl hover:scale-110 hover:shadow-lime-400 duration-300 rounded-full"
              >
                <p className="text-3xl border p-3 rounded-full border-gray-500 text-gray-500">
                  <FaLinkedin />
                </p>
              </a>
            </div>
          </div>
          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail}>
              <div className="md:flex gap-5">
                <label className="form-control w-full  ">
                  <div className="label">
                    <span className="label-text">Full Name</span>
                  </div>
                  <input
                    type="text"
                    name="form_name"
                    required
                    placeholder="write your full name"
                    className="input input-bordered w-full  "
                  />
                </label>{" "}
                <label className="form-control w-full  ">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    type="text"
                    name="form_email"
                    required
                    placeholder="your Valid Email Address"
                    className="input input-bordered w-full  "
                  />
                </label>
              </div>
              <div>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Your Message</span>
                  </div>
                  <textarea
                    name="message"
                    required
                    className="textarea textarea-bordered h-32"
                    placeholder="Write Your Message"
                  ></textarea>
                </label>
              </div>
              <input
                type="submit"
                value="Send"
                className="btn bg-lime-500 hover:bg-lime-600 text-black mt-5"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMe;
