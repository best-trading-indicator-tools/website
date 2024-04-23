"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "Can't I just code my own?",
    answer: <div className="space-y-2 leading-relaxed">Sure you can! But will users trust you? By using a WEB 3 third party, you show your users that you're not trying to trick them. If they click on the verified badge, they will be sent on a page that proove the transaction are real. You don't just get a poopup, you get trust.</div>,
  },
  {
    question: "What is SalesPoop?",
    answer: (
      <p>
        SalesPopup is a real-time sales popup that helps you increase your conversion rate. It shows recent sales on your website to create social proof and drive more sales.
      </p>
    ),
  },
  {
    question: "Do I need to code?",
    answer: (
      <p>
        You don't. All you need to do is copy and paste a small code snippet in your website's <strong>head</strong> tag. Wordpress, Shopify, Webflow, Bubble, Wix, etc. are all supported.
      </p>
    ),
  },
  {
    question: "Does SalesPoop work on Mobile?",
    answer: (
      <p>
        Yes! Only one PoopUp will be displayed at a time to avoid cluttering your visitor's screen.
      </p>
    ),
  },
  {
    question: "What can I customize?",
    answer: (
      <p>
        For now you can customize the following:<br /><br />
        <ul>
          <li>- SalesPoop title</li>
          <li>- SalesPoop body</li>
          <li>- SalesPoop Icon</li>
          <li>- When are SalesPoops firing</li>
          <li>- How often are SalesPoops firing</li>
          <li>- How long are SalesPoops displayed</li>
        </ul>
      </p>
    ),
  },
  {
    question: "Can I hide transactions older than X days?",
    answer: (
      <div className="space-y-2 leading-relaxed">Yes, you can specify a number of days to only show transactions that are more recent than that. This way you can keep your poopup fresh and relevant.</div>
    ),
  },
  {
    question: "What if I need help?",
    answer: (
      <div className="space-y-2 leading-relaxed">Ready to help! Contact us through live chat or email at contact@salespoop.com</div>
    ),
  },
];


const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
