import { FC, useState } from 'react';
import Image from 'next/image';

const questions = [
  {
    id: 1,
    question: 'What does the retreat registration fee cover?',
    answer:
      'The retreat registration fee covers stay for 2 nights and meals throughout the retreat. Meals include breakfast, lunch, and dinner. Occupancy will be a shared accommodation with 2 adults per room. Family with at least 2 adults will get a room for themselves. Private room options are available for individuals.',
  },
  {
    id: 2,
    question: 'Who conducts the JKYog Retreats?',
    answer:
      'The retreat registration fee covers stay for 2 nights and meals throughout the retreat. Meals include breakfast, lunch, and dinner. Occupancy will be a shared accommodation with 2 adults per room. Family with at least 2 adults will get a room for themselves. Private room options are available for individuals.',
  },
  {
    id: 3,
    question: 'How many retreats are conducted every year?',
    answer:
      'The retreat registration fee covers stay for 2 nights and meals throughout the retreat. Meals include breakfast, lunch, and dinner. Occupancy will be a shared accommodation with 2 adults per room. Family with at least 2 adults will get a room for themselves. Private room options are available for individuals.',
  },
];

export const Accordion: FC = () => {
  const [activeId, setActiveId] = useState<number>(0);

  const handleOpen = (id: number) => {
    if (activeId === id) {
      setActiveId(0);
      return;
    }

    setActiveId(id);
  };

  return (
    <div className="flex flex-col gap-3 lg:gap-4">
      {questions.map(({ id, answer, question }) => {
        return (
          <AccordionItem
            key={id}
            active={activeId === id}
            question={question}
            answer={answer}
            onClick={() => handleOpen(id)}
          />
        );
      })}
    </div>
  );
};

type AccordionItemProps = {
  question: string;
  answer: string;
  active: boolean;
  onClick: () => void;
};

const AccordionItem: FC<AccordionItemProps> = ({ question, answer, active, onClick }) => {
  return (
    <div className="p-5 lg:px-8 lg:py-6 bg-white rounded-2xl cursor-pointer group " onClick={onClick}>
      <div className="grid grid-cols-[1fr_24px] items-center">
        <h6 className="text-heading text-xl leading-6 font-ptserif font-bold">{question}</h6>
        <Image
          src="/icons/caret-black.svg"
          alt=""
          width={24}
          height={24}
          className={`${active ? 'rotate-180' : ''} `}
        />
      </div>
      <p
        className={`
              ${active ? 'max-h-fit mt-3' : 'max-h-0'}
              text-primary text-base font-satoshi-regular max-w-[761px] overflow-hidden
              `}
      >
        {answer}
      </p>
    </div>
  );
};
