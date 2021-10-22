import "./button.scss";

interface Props {
  icon: string;
  onClick: () => void;
  content: string;
  type: any;
  disabled?: boolean | undefined;
}

const Button = (props: Props) => {
  const { icon, content, disabled } = props;
  return (
    <button className="buttonPrimary" disabled={disabled} {...props}>
      {icon && icon !== "" && (
        <img className="buttonPrimary__icon" src={icon} alt="" />
      )}
      {content}
    </button>
  );
};

export default Button;
