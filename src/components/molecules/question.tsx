interface QuestionProps {
  question: string;
  value: number;
  onChange: (v: number) => void;
  max?: number;
}

export const Question = ({
  question,
  value,
  onChange,
  max = 10,
}: QuestionProps) => (
  <div className="mb-4">
    <label className="block mb-1">{question}</label>
    <input
      type="range"
      min={0}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full"
    />
    <span>{value}</span>
  </div>
);
