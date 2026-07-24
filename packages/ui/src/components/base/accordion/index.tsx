import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion';

export type AccordionProps = {
  title: string;
  content: string;
  value: string;
};

interface AccordionPrimaryProps {
  items: AccordionProps[];
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

export const AccordionPrimary = ({
  items,
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
}: AccordionPrimaryProps) => {
  return (
    <Accordion className={className}>
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className={itemClassName}
        >
          <AccordionTrigger className={triggerClassName}>
            {item.title}
          </AccordionTrigger>

          <AccordionContent className={contentClassName}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
