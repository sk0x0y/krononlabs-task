interface InputProps {
  label: string;
  defaultValue: string;
  unit: string;
}
export default function Input(props: InputProps) {
  const { label, defaultValue, unit } = props;

  return (
    <div className="flex items-center gap-2 w-full h-[40px] pl-2 pr-3 border border-input-border rounded-lg">
      <label className="font-medium text-third-text">{label}</label>

      <input
        type="text"
        defaultValue={defaultValue}
        className="flex-1 border-none outline-none bg-transparent font-medium text-end appearance-none"
      />

      <span className="font-medium">{unit}</span>
    </div>
  );
}
