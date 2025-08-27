interface InputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}

export const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
}: InputProps) => (
  <input
    type={type}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className="border p-2 rounded w-full"
  />
);
