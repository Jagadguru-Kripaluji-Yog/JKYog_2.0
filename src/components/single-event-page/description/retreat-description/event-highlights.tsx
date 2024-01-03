import { FC } from 'react';

export const EventHighlights: FC = () => {
  return (
    <div>
      <h4 className="font-ptserif font-bold text-2xl mb-3">Event Highlights:</h4>
      <ul className="list-disc ml-7">
        <li className="mb-4 text-primary text-lg leading-6 font-satoshi-regular">
          <span className="text-heading font-satoshi-medium">Lecture: </span>
          Swamiji will share his profound wisdom and insights during a captivating lecture. Prepare to be inspired and
          gain a deeper understanding of spiritual principles.
        </li>
        <li className="mb-4 text-primary text-lg leading-6 font-satoshi-regular">
          <span className="text-heading font-satoshi-medium">Book Signing: </span>
          Swamiji will be available for a book signing session. If you have any of his books or wish to acquire one,
          this is a fantastic opportunity to have it personally signed by the author.
        </li>
      </ul>
      <p className="text-primary text-lg leading-6 font-satoshi-regular">
        We look forward to welcoming you to this transformative event with Swamiji. Your presence will undoubtedly add
        to the collective energy of this spiritual gathering. Prepare to be inspired, and spiritually uplifted.
      </p>
    </div>
  );
};
