import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import logo from "../../image/Capture.png";

const navigation = [
  { name: "Projects", href: "/", current: true },
  { name: "Hack", href: "/hack", current: false },
  { name: "Blogs", href: "/blog", current: false },
  { name: "GitHub", href: "/github", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleThemeChange() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  function openModal() {
    setShowModal(!showModal);
  }

  return (
    <Disclosure
      as="nav"
      className=" bg-white dark:bg-[#0F172A] border-b-2 dark:border-gray-600 border-gray-200 z-10 relative "
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8  ">
            {/* <button onClick={handleThemeChange} className="text-black dark:text-white">Theme</button> */}
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black dark:focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-10 w-auto" src={logo} alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => {
                          navigate(item.href);

                          navigation.forEach((item) => {
                            item.current = false;
                          });

                          item.current = true;
                        }}
                        className={classNames(
                          item.current
                            ? "bg-gray-200 text-black dark:bg-gray-800 dark:text-white"
                            : "text-gray-600 hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={handleThemeChange}
                  />
                  <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none  rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white dark:after:bg-gray-300 after:border-gray-300 dark:after:border-gray-600 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:#6366f1 dark:peer-checked:bg-blue-400"></div>
                </label>

                <div>
                  <button
                    type="button"
                    onClick={openModal}
                    className="m-4 relative rounded-full bg-white p-1 text-gray-600 hover:text-black dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div>
                    {showModal && (
                      <div
                        id="default-modal"
                        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                      >
                        <div className="relative p-4 w-full max-w-2xl max-h-full">
                          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white"></h3>
                              <button
                                onClick={openModal}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                              >
                                <svg
                                  className="w-3 h-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>
                            <div className="p-4 md:p-5 space-y-4">
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                I’d love to hear from you! Whether you have a
                                question, suggestion, or just want to discuss
                                something, feel free to reach out. Here’s how
                                you can connect with m
                              </p>
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Phone: You can reach me at <b>071 8843104</b>
                              </p>
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">Email: Feel free to drop an email at <span className="text-blue-500 font-medium ">dananjaya6005@gmail.com</span></p>
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                              LinkedIn: Let’s connect professionally
                                on LinkedIn. Here’s my profile: <a href="https://www.linkedin.com/in/dananjaya6005/"><span className="text-blue-500 font-medium">https://www.linkedin.com/in/dananjaya6005/</span></a>
                              </p>

                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">WhatsApp: You can also message me on
                                WhatsApp at <span className="text-blue-500 font-medium">071 8843104</span> </p>
                            </div>

                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                              <button
                                onClick={openModal}
                                data-modal-hide="default-modal"
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                Okay
                              </button>
                              <button
                                onClick={openModal}
                                data-modal-hide="default-modal"
                                type="button"
                                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                              >
                                Cancle
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={() => {
                    navigate(item.href);

                    navigation.forEach((item) => {
                      item.current = false;
                    });

                    item.current = true;
                  }}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
