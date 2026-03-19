import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is the duration of the certification program?",
      answer: "The introductory webinar lasts for approximately 90 minutes, followed by a detailed 2-day intensive certification course for those who wish to proceed."
    },
    {
      question: "Is this certification recognized by relevant authorities in Singapore?",
      answer: "Yes, the SmartPlanner certification is recognized within our ecosystem and aligns with the best practices for estate planning in Singapore's legal framework."
    },
    {
      question: "Are there any prerequisites for attending the webinar?",
      answer: "There are no strict prerequisites for the introductory webinar. It is open to anyone interested in professional estate planning, though a background in finance or law is helpful."
    },
    {
      question: "Will there be a recording available if I cannot attend live?",
      answer: "Yes, registered participants will receive a link to the recording within 24 hours after the live session concludes. However, live attendance is recommended for the Q&A session."
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[44px] md:leading-[1.1] font-bold tracking-tight text-[#ab0f0f] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 mx-auto bg-[#ab0f0f] rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="text-left text-xl font-bold py-6 hover:no-underline hover:text-[#ab0f0f] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-lg pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
