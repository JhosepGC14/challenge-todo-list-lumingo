import "./button.scss";

interface Props {
  icon: string;
  onClick: () => void;
  content: string;
  type: any;
}

const Button = (props: Props) => {
  const { icon, content } = props;
  return (
    <button className="buttonPrimary" {...props}>
      {icon && icon !== "" && (
        <img className="buttonPrimary__icon" src={icon} alt="" />
      )}
      {content}
    </button>
  );
};

export default Button;
