import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
      redirectPage: true,
    },
    {
      title: "About",
      path: "#about",
      redirectPage: false,
    },
    {
      title: "Category",
      path: "#category",
      redirectPage: false,
    },
    {
      title: "Recipie",
      path: "/recipie",
      redirectPage: true,
    },
  ];
  return (
    <>
      <footer className="mt-10 w-full bg-primary text-white py-5 bottom-0">
        <div className="flex flex-col justify-between gap-10 sm:flex-row mx-auto container px-4 max-w-[1200px] flex-wrap">
          <Link className="text-5xl font-alisson">Exotic</Link>
          <div className="flex flex-col space-y-4">
            <p className="font-semibold">Quick Links</p>
            {navItems.map((item, index) => (
              <>
                {item.redirectPage === true ? (
                  <>
                    {" "}
                    <Link to={item.path} className="opacity-70">
                      {item.title}
                    </Link>
                  </>
                ) : (
                  <a key={index} href={item.path} className="opacity-70">
                    {item.title}
                  </a>
                )}
              </>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <p className="font-semibold">Developers Tool</p>
            <a href="https://www.themealdb.com/api.php" className="opacity-70">
              API Link
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <p className="font-semibold">Social Links</p>
            <div className="flex items-center space-x-10 opacity-85">
              <a href="" className="">
                <FaFacebook className="text-2xl " />
              </a>
              <a href="" className="">
                <FaTwitter className="text-2xl" />
              </a>

              <a href="" className="">
                <FaLinkedin className="text-2xl" />
              </a>

              <a href="" className="">
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
