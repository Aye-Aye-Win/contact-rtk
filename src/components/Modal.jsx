import Cookies from "js-cookie";
import React, { useState } from "react";
import { useCreateContactMutation } from "../features/api/contactApi";

const Modal = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const token = Cookies.get("token");
  const [createContact] = useCreateContactMutation();
  const createContactHandler = async (e) => {
    e.preventDefault();
    const contact = { name, email, phone };
    const {data} = await createContact({ contact, token });
    console.log(data);
    if (data?.success) setShow(false);
  };
  return (
    <>
      <button
        className="block text-white bg-gray-700 px-6 py-2 rounded my-2 focus:ring-4 focus:ring-slate-300"
        type="button"
        data-modal-toggle="authentication-modal"
        onClick={() => setShow(true)}
      >
        Add Contact
      </button>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-50 ${
          !show && "hidden"
        } w-full p-4 overflow-x-hidden overflow-y-auto h-modal`}
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
              onClick={() => setShow(false)}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 shadow-lg">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Create New Contact
              </h3>
              <form
                onSubmit={createContactHandler}
                className="space-y-6"
                action="#"
              >
                {/* For Name  */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                  Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
                    placeholder="name"
                    required autoComplete="off" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* For Email  */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                  Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
                    placeholder="name@gmail.com"
                    required autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* For Phone  */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                  Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:outline-none"
                    placeholder="09xxxxxxxxx"
                    required autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;