import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/clinic-data";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          description="Answers to what patients most often ask before their first consultation."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-14 w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-border/70">
              <AccordionTrigger className="py-6 text-left text-[15px] font-normal hover:no-underline sm:text-base [&>svg]:text-gold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
