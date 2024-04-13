import { eventName } from './FullDay';
import QuestionAndAnswer, { QuestionAndAnswerProps } from './QuestionAndAnswer';
import styles from './FullDay.module.css';

export default function FAQ() {
  const questions: QuestionAndAnswerProps[] = [
    {
      question: <>Is MeetContent {eventName} a free event?</>,
      answer: (
        <div>
          <strong>Yes!</strong> The event is completely free of charge but
          requires registration.
        </div>
      ),
    },
    {
      question: <>Do I have to attend the entire event?</>,
      answer: (
        <div>
          No, you can decide to participate only in the selected workshops or
          presentations. Just remember to register!
        </div>
      ),
    },
    {
      question: <>How can I present a topic at MeetContent {eventName}?</>,

      answer: (
        <div>
          We'd love to hear from you, use this form to propose a presentation or
          a workshop: …
        </div>
      ),
    },
  ];

  return (
    <div className={styles.faqItems}>
      {questions.map((questionAndAnswer, idx) => (
        <QuestionAndAnswer
          {...questionAndAnswer}
          key={idx}
        />
      ))}
    </div>
  );
}
