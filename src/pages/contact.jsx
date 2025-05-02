import ContactFormulier from "../components/ContactForm";
import DarkModeToggler from "../components/DarkModeToggler";
import SignInFormulier from "../components/SigninForm";

import { ThemeProvider } from "../context/ThemeContext.jsx";

import "../Tailwind.css";
export function Contactpagina() {
  return (
    <ThemeProvider>
      <img src="banner-contact.webp" alt="banner ContactPagina" />
      <div className="flex flex-col items-center content-center">
        <br />
        <h1 className=" text-8xl mb-4 mt-5"> Contact details</h1>
        <ContactFormulier />
        <br />
        <DarkModeToggler />
        <br />

        <div>
          <SignInFormulier
          // initialValues={{ name: "your text here" }}
          // onSubmit={onSubmit}
          />
        </div>
        <div>
          <a href="https://leetcode.com/u/martijn1998/">Leetcode</a>
          <p className="text-4xl">
            My prefered contact method is E-mail for none website issues
          </p>
          <p>
            E-mail:{" "}
            <a
              href="mailto:martijnpeters2010@live.nl"
              className="dark:text-blue-100 light:text-blue-800"
            >
              martijnpeters2010@live.nl
            </a>
          </p>
          <br />
          <a
            href="https://linktr.ee/martijnpetersnl?utm_source=linktree_admin_share"
            className="text-blue-500 text-3xl"
          >
            Link Tree
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/martijn-peters-3190a1168/"
            className="text-blue-500 text-3xl"
          >
            {" "}
            LinkedIn
          </a>
          <h2 className="text-red-600">
            Report website problems to my LinkedIn
          </h2>
        </div>
      </div>
    </ThemeProvider>
  );
}
