import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import axios from "axios";

type Prop = {
  name: string;
  email: string;
  subject: string;
  content: string;
};
const Contact = () => {
  const [data, setData] = useState<Prop>({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const { name, email, subject, content } = data;
    if (name && email && subject && content) {
      try {
        await axios
          .get(`${import.meta.env.VITE_DOMAIN}`)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            throw new Error(err.message);
          });
      } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
      }
    }
  };
  return (
    <div
      id="contact"
      className="flex flex-col lg:h-screen justify-center items-center"
    >
      <p className="font-bold text-3xl mb-5">Get In Touch</p>
      <p className="text-center mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quasi nobis reiciendis corrupti, ipsum voluptates animi praesentium,
        officia eveniet deleniti dicta fuga ex neque aliquam? Et similique
        doloribus unde quia.
      </p>
      <div className="bg-white flex flex-col lg:flex-row p-4 md:w-4/5 lg:h-[500px] rounded-xl">
        <div className="flex-1 h-full bg-background px-7 py-10 rounded-xl">
          <p className="font-bold text-xl">Contact Information</p>
          <p className="mb-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            dignissimos, optio illo distinctio esse impedit rerum qui.
          </p>
          <div className="flex items-center gap-3 mb-5">
            <FaPhone className="text-primary" />
            <p>09217108178</p>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineMail className="text-primary" />
            <p>renzvanni.dev@gmail.com</p>
          </div>
        </div>
        <div className="flex-1 h-full">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 h-full px-7 py-10"
          >
            <div className="flex flex-col md:flex-row md:space-x-2">
              <div className="relative md:mb-10">
                <input
                  type="text"
                  id="inputField"
                  className="peer h-10 w-full bg-transparent border-b-2 border-background text-gray-900 placeholder-transparent outline-none"
                  placeholder="Enter text"
                  value={data.name}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <label
                  // for="inputField"
                  className="absolute left-0 -top-3.5 text-background text-sm transition-all transform peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-background peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-[12px] "
                >
                  Your Name
                </label>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  id="inputField"
                  className="peer h-10 w-full bg-transparent border-b-2 border-background text-gray-900 placeholder-transparent outline-none"
                  placeholder="Enter text"
                  value={data.email}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <label
                  // for="inputField"
                  className="absolute left-0 -top-3.5 text-background text-sm transition-all transform peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-background peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-[12px] "
                >
                  Your Email
                </label>
              </div>
            </div>
            <div className="relative mb-10">
              <input
                type="text"
                id="inputField"
                className="peer h-10 w-full bg-transparent border-b-2 border-background text-gray-900 placeholder-transparent outline-none"
                placeholder="Enter text"
                value={data.subject}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, subject: e.target.value }))
                }
              />
              <label
                // for="inputField"
                className="absolute left-0 -top-3.5 text-background text-sm transition-all transform peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-background peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-[12px] "
              >
                Your Subject
              </label>
            </div>
            <div className="flex flex-col flex-1 ">
              <label htmlFor="" className="text-background">
                Message
              </label>
              <textarea
                name=""
                id=""
                className="flex-1 text-background resize-none focus:border-b-2 border-background bg-transparent outline-none"
                value={data.content}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, content: e.target.value }))
                }
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-background text-primary font-semibold rounded-md py-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
