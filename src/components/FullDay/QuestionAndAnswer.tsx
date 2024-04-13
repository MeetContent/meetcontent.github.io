import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

export type QuestionAndAnswerProps = {
  question: JSX.Element;
  answer: JSX.Element;
};

export default function QuestionAndAnswer({
  question,
  answer,
}: QuestionAndAnswerProps) {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography
          variant="h3"
          sx={{ fontSize: '1.25rem' }}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{answer}</AccordionDetails>
    </Accordion>
  );
}
