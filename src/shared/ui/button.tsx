interface ButtonProps {
  label: string;
  className: string;
}
export default function Button(props: ButtonProps) {
  const { label, className } = props;

  return (
    <button
      type="button"
      className={`h-[36px] rounded-lg ${className} font-medium
  hover:opacity-80`}
    >
      {label}
    </button>
  );
}
