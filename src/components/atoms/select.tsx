interface SelectProps {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

export const Select = ({ options, value, onChange }: SelectProps) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="border p-2 rounded"
  >
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);
