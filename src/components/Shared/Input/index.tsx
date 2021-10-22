import "./input.scss";

interface Props {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
  const { placeholder, type, name, value, onChange } = props;

  return (
    <>
      <input
        className="inputCustom"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
