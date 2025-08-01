import AccordionItem from "../AccordionItem";
import faqItems from "../../../data/faqs";

const Faqs = () => {
  return (
    <div className="w-full flex flex-col justify-center pt-14 mb-20">
      <h2 className="font-bold text-3xl mb-8 text-center">
        Frequently Asked Questions
      </h2>
      {faqItems.map((item) => (
        <div key={item.id}>
          <AccordionItem title={item.title} content={item.content} />
        </div>
      ))}
    </div>
  );
};

export default Faqs;
