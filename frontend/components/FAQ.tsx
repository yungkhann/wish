"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is Women's Hack Day?",
    answer:
      "WHD is an annual three-round team competition in mathematics, competetive programming, and product design. Each team should consists of 3 to 4 members.",
  },
  {
    question: "Who can participate?",
    answer: "Female high school and university students aged 16 to 20.",
  },
  {
    question: "What if I don't have a team?",
    answer: "You can find team members in our Women`s Hack Day chat. *link*",
  },
  {
    question: "Do I need to be a professional?",
    answer: "No, it's beginner-friendly competition.",
  },
  {
    question: "Can I participate online?",
    answer: "No, Women's Hack Day 2025 is fully offline.",
  },
  {
    question: "How can I participate?",
    answer:
      "Assemble a team, register, and come to Nazarbayev University on the 25th of October 2025. Please note that the application for participation is filled out only by the captain of the team.",
  },
  {
    question: "Will participants receive certificates or prizes? ",
    answer:
      "Yes, every participant will receive certificate of participation, winners will receive cash prize and merch. Also, there is a welcome package for 100 people, and coffee break.",
  },
  {
    question: "I didn't find an answer to my question. What should I do?",
    answer:
      "Join our Telegram chat and ask your questions. Or you can contact us via email: acm_w@nu.edu.kz",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-16 text-white">
      <h2 className="mb-14 text-center font-['Montserrat'] text-4xl font-semibold sm:text-5xl md:mb-12 md:text-6xl">
        FAQs
      </h2>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-start md:justify-center">
        <div className="flex-1 space-y-6">
          {faqs
            .filter((_, i) => i % 2 === 0)
            .map((faq, index) => {
              const actualIndex = index * 2;
              return (
                <div key={actualIndex} className="space-y-2">
                  <div className="rounded-2xl bg-[#27272A] p-2 pl-6 shadow-md">
                    <button
                      className="flex w-full items-center justify-between text-left font-['Poppins'] text-xl font-light"
                      onClick={() =>
                        setOpenIndex(
                          openIndex === actualIndex ? null : actualIndex,
                        )
                      }
                    >
                      {faq.question}
                    </button>
                  </div>

                  {openIndex === actualIndex && (
                    <div className="rounded-2xl bg-[#18181B] p-2 pl-6 shadow-md">
                      <p className="flex w-full items-center justify-between text-left font-['Poppins'] text-xl font-light">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        <div className="flex-1 space-y-6">
          {faqs
            .filter((_, i) => i % 2 !== 0)
            .map((faq, index) => {
              const actualIndex = index * 2 + 1;
              return (
                <div key={actualIndex} className="space-y-2">
                  <div className="rounded-2xl bg-[#27272A] p-2 pl-6 shadow-md">
                    <button
                      className="flex w-full items-center justify-between text-left font-['Poppins'] text-xl font-light"
                      onClick={() =>
                        setOpenIndex(
                          openIndex === actualIndex ? null : actualIndex,
                        )
                      }
                    >
                      {faq.question}
                    </button>
                  </div>

                  {openIndex === actualIndex && (
                    <div className="rounded-2xl bg-[#18181B] p-2 pl-6 shadow-md">
                      <p className="flex w-full items-center justify-between text-left font-['Poppins'] text-xl font-light">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-10 text-center text-sm text-xl text-[#BB046C]">
        <div className="mb-4 flex flex-wrap justify-center gap-36">
          <a
            href="https://www.instagram.com/nuacmsc/"
            className="font-['Montserrat'] hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://t.me/nuacmsc"
            className="font-['Montserrat'] hover:underline"
          >
            Telegram
          </a>
          <a
            href="https://www.youtube.com/@nuacmsc"
            className="font-['Montserrat'] hover:underline"
          >
            Youtube
          </a>
          <a
            href="mailto:acm_w@nu.edu.kz"
            className="font-['Montserrat'] hover:underline"
          >
            Email
          </a>
        </div>
        <p className="font-['Poppins'] text-2xl text-[#6C6C6C] italic">
          © 2025 NU ACM-W SC All rights reserved.
        </p>
      </footer>
    </section>
  );
}
