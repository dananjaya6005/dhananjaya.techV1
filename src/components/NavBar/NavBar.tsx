import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon,  XMarkIcon,PhoneIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import logo from '../../image/Capture.png';

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
    <Disclosure as="nav" className=" bg-white dark:bg-[#0F172A] border-b-2 dark:border-gray-600 border-gray-200 z-10 relative ">
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
                  <img
                    className="h-10 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
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
                <input type="checkbox" value="" className="sr-only peer" onClick={handleThemeChange} />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none  rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white dark:after:bg-gray-300 after:border-gray-300 dark:after:border-gray-600 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:#6366f1 dark:peer-checked:bg-blue-400">

                </div>
            </label>
            



                <button
                  type="button"
                  onClick={openModal}
                  className="m-4 relative rounded-full bg-white p-1 text-gray-600 hover:text-black dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <PhoneIcon className="h-6 w-6" aria-hidden="true" />
                </button>

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
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
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
