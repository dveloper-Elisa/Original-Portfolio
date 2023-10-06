import { FaRegUser } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Batton from "../componets/button";
import { useEffect, useState } from "react";

let contact = "Send Message";
let color = "bg-blue-500";

const ContactForm = () => {
  const [users, setUsers] = useState("");
  const [uname, setUname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [localUsers, setLocalUsers] = useState("");

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("user")) || [];
    setLocalUsers(local);
  }, []);

  return (
    <>
      <div className="bg-slate-300  -mt-4">
        <div className="text-center ">
          <h4 className="uppercase text-blue-600 my-4">
            for any Query don not heistate to contact us here
          </h4>
        </div>
        <div className="text-black grid lg:grid-cols-2 gap-5 rounded-xl bg-slate-500 mx-16 p-1">
          <div className="flex justify-center items-center flex-col ">
            <i className="fa fa-phone text-black text-[100px]">
              <FaRegUser />
            </i>
            <p>
              {`This is Elisa Kwizera, here is on my portforial'contact form, if
            have any opinion or questions, fell free to reach out me, we are
            here to help. i wiil be the for you.`}

              <p className="flex justify-center text-center pt-5">
                <p className="text-[50px]">Lets Goo!!!</p>

                <i className="text-[80px] text-blue-600 ">
                  <BsArrowUpRight />
                </i>
              </p>
            </p>
          </div>
          <form
            action="#"
            className="text-black my-4 font-mono grid border rounded-xl p-4"
          >
            <h3 className="text-blue-600 text-center text-[20px] capitalize">
              get in touch
            </h3>
            <input
              type="text"
              value={uname}
              onChange={(e) => {
                setUname(e.target.value);
              }}
              className="text-[15px] first-letter:uppercase font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
              placeholder="Name..."
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="text-[15px] first-letter:uppercas font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
              placeholder="+250 7..."
            />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="text-[15px] first-letter:uppercase font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
              placeholder="Email Address"
            />
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              cols="10"
              rows="3"
              className="text-[15px] first-letter:uppercase font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
              placeholder="Message..."
            ></textarea>
            <Batton
              color={color}
              contact={contact}
              onClick={(e) => {
                e.preventDefault();

                setUsers({
                  name: uname,
                  email: email,
                  phone: phone,
                  message: message,
                });

                localUsers.push(users);
                localStorage.setItem("user", JSON.stringify(localUsers));
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
