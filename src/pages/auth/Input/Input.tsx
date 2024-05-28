export const Input = ({
  error,
  field,
  register,
  type = "text",
  placeholder,
}: {
  error?: string;
  field: string;
  register: any;
  type?: string;
  placeholder?: string;
}) => {
  return (
    <div className=" w-full max-w-[625px] flex flex-col gap-2">
      <input
        type={type}
        className="text-sm md:text-xl px-6 py-3 bg-white rounded-[6px] md:rounded-[15px] md:px-[54px] md:py-[20px]"
        placeholder={placeholder}
        {...register(field)}
      />
      {error && <span className="text-sm md:text-xl text-brown">{error}</span>}
    </div>
  );
};
