import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const AboutAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-xl mx-auto">
      <AccordionItem value="who-am-i">
        <AccordionTrigger>Who am I?</AccordionTrigger>
        <AccordionContent>
          <p>
            I'm Vincent, an Electrical Engineering student who loves learning.
            Besides my formal study, all sorts of things capture my interest!
            For example:
          </p>
          <div className="mt-4 mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm marker:text-xs marker:text-[var(--colour-primary)] dark:marker:text-[var(--colour-primary-dark)]">
              <li>Maths</li>
              <li>Data science</li>
              <li>Hardware</li>
              <li>Software</li>
              <li>
                Languages
                <ul className="list-disc pl-5 mt-1 space-y-1 marker:text-[var(--colour-primary)] dark:marker:text-[var(--colour-primary-dark)] text-xs">
                  <li>日本語</li>
                  <li>한국어</li>
                  <li>中文</li>
                </ul>
              </li>
            </ul>
          </div>
          <p>
            And a few other things that I'm starting to look into (e.g. finance,
            trading).
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="what-do-i-do">
        <AccordionTrigger>What do I do?</AccordionTrigger>
        <AccordionContent>
          When I'm not working towards my EEE degree, I go to the gym, attend
          university club events, industry events, go on walks, and work on side
          projects like this website. I'm also a tutor at MyTuition!
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="goals">
        <AccordionTrigger>What are my goals?</AccordionTrigger>
        <AccordionContent>
          To contribute to impactful projects, grow as a multidisciplinary
          engineer, and get an internship this year where I can learn from the
          best.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export { AboutAccordion };
