import { FaRegUser } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import Batton from "../componets/button";

let contact = "Send Message";
let color = "bg-blue-500";
const ContactForm = () => {
  return (
    <>
      <div className="text-center ">
        <h4 className="uppercase text-blue-600 my-4">
          for any Query don not heistate to contact us here
        </h4>
      </div>
      <div className="text-black grid lg:grid-cols-2 bg-transparent">
        <div className="flex justify-center items-center flex-col">
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
          className="text-white my-4 font-mono grid border rounded-xl p-4"
        >
          <input
            type="text"
            //   value=""
            className="text-[15px] first-letter:uppercase text-gray-500 font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
            placeholder="Name..."
          />
          <input
            type="text"
            //   value=""
            className="text-[15px] first-letter:uppercase text-gray-500 font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
            placeholder="+250 7..."
          />
          <input
            type="email"
            //   value=""
            className="text-[15px] first-letter:uppercase text-gray-500 font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
            placeholder="Email Address"
          />
          <textarea
            name=""
            id=""
            cols="10"
            rows="3"
            className="text-[15px] first-letter:uppercase text-gray-500 font-mono outline-none border-b-2 p-1 bg-transparent tracking-wider my-4"
            placeholder="Message..."
          ></textarea>
          <Batton color={color} contact={contact} />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
