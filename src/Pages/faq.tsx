
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewComponent from "./components/review";

const faqs = [
  {
    question: "What makes Red Oak Ranch beef different?",
    answer:
      "At Red Oak Ranch, we believe great beef starts with how the cattle are raised. We focus on responsible ranching, quality care, and carefully selected beef cuts to bring exceptional flavor from our ranch to your table.",
  },
  {
    question: "Where does Red Oak Ranch beef come from?",
    answer:
      "Our beef comes from cattle raised on Red Oak Ranch. We take pride in maintaining high standards of animal care, ranch management, and product quality throughout the journey from pasture to table.",
  },
  {
    question: "What types of beef do you offer?",
    answer:
      "Our selection includes popular cuts such as steaks, ground beef, roasts, ribs, and other ranch favorites. Availability may vary depending on the season and current inventory.",
  },
  {
    question: "How do I order beef from Red Oak Ranch?",
    answer:
      "Browse our online shop, choose your favorite cuts, add them to your cart, and complete your order through checkout. If you need help selecting cuts or building an order, our team is happy to assist.",
  },
  {
    question: "Do you ship your beef?",
    answer:
      "Yes. We offer shipping and delivery options for eligible orders. Beef is carefully packaged to help maintain quality during transit. Available shipping options and delivery times are shown during checkout.",
  },
  {
    question: "How is the beef packaged for shipping?",
    answer:
      "Our beef is packaged with care and prepared for safe transportation. Depending on the product and shipping method, orders may be shipped frozen or properly chilled to help maintain freshness and quality.",
  },
  {
    question: "How should I store my beef when it arrives?",
    answer:
      "Place refrigerated beef in the refrigerator as soon as possible after delivery. Beef intended for longer storage can be frozen. Always follow the storage instructions included with your order and use appropriate food-safety practices.",
  },
  {
    question: "Can I freeze my Red Oak Ranch beef?",
    answer:
      "Absolutely. Freezing is a convenient way to keep your beef for later meals. Keep products properly sealed and frozen, and follow recommended food-storage guidelines for the best quality.",
  },
  {
    question: "What is your return and refund policy?",
    answer:
      "Because beef is a perishable food product, we generally cannot accept traditional returns. If your order arrives damaged, incorrect, or in an unacceptable condition, contact us promptly with your order details so we can review the situation and determine the appropriate solution.",
  },
  {
    question: "How can I get the best flavor from my beef?",
    answer:
      "Great beef does not need to be complicated. Proper seasoning, appropriate cooking temperatures, and allowing the meat to rest after cooking can help bring out its natural flavor. Different cuts require different cooking methods, so we recommend following preparation guidance for each cut.",
  },
  {
    question: "Does Red Oak Ranch offer bulk orders?",
    answer:
      "Yes. Bulk orders may be available for families, gatherings, events, restaurants, and other customers looking to purchase larger quantities. Contact our team to discuss available options and current inventory.",
  },
  {
    question: "Can I visit Red Oak Ranch?",
    answer:
      "Ranch access may be limited because of daily ranch operations and animal-safety considerations. If you are interested in visiting or learning more about the ranch, contact our team to ask about available opportunities.",
  },
];

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="p-8 bg-gray-100 min-h-screen">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-red-600 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            Red Oak Ranch
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-luxe">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-7">
            Have questions about our beef, ordering, shipping, storage, or
            life on the ranch? Find answers to some of our most frequently
            asked questions below.
          </p>

        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 mb-4 bg-white rounded-xl shadow-sm overflow-hidden"
            >

              {/* Question */}
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center gap-6 p-5 text-left cursor-pointer transition duration-300 hover:bg-gray-50"
                aria-expanded={activeIndex === index}
              >

                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>

                <motion.div
                  className="text-gray-500 flex-shrink-0"
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.div>

              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    className="px-5 pb-5 text-gray-600 leading-7"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <div className="border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>
      </div>

      {/* Customer Reviews */}
      <ReviewComponent />
    </>
  );
};

export default FAQAccordion;