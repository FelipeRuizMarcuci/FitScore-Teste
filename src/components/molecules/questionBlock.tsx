import { Question } from "./question";

interface QuestionBlockProps {
  title: string;
  questions: { text: string; value: number }[];
  onChange: (index: number, value: number) => void;
}

export const QuestionBlock = ({
  title,
  questions,
  onChange,
}: QuestionBlockProps) => (
  <fieldset className="mb-8 p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
    <legend className="font-extrabold text-lg mb-4 text-gray-700">
      {title}
    </legend>
    <div className="space-y-4">
      {questions.map((q, i) => (
        <Question
          key={i}
          question={q.text}
          value={q.value}
          onChange={(v) => onChange(i, v)}
        />
      ))}
    </div>
  </fieldset>
);
