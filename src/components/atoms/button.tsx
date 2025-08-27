interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
}

export const Button = ({
  onClick,
  children,
  type = "button",
  disabled,
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
  >
    {children}
  </button>
);
