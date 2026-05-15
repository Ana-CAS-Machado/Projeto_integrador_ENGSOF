type InputProps = {
  label: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
};

export default function Input({
  label,
  type = "text",
  placeholder,
  autoComplete,
}: InputProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-base text-[#010101]">{label}</span>

      <input type={type} placeholder={placeholder} autoComplete={autoComplete} className="h-12 rounded-lg border border-[#d9d9d9] bg-white px-4 text-sm text-[#010101] outline-none transition placeholder:text-[#9a9a9a] focus:border-[#67912F] focus:ring-4 focus:ring-[#A9BE71]/20"/>
    </label>
  );
}