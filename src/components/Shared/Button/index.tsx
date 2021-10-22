import "./button.scss";

interface Props {
  hasIcon: boolean;
  icon: string;
  onClick: () => void;
  content: string;
  type: any;
}

const Button = (props: Props) => {
  const { hasIcon, icon, onClick, content } = props;
  return (
    <button className="buttonPrimary" {...props}>
      {hasIcon && <img className="buttonPrimary__icon" src={icon} alt="" />}
      {content}
    </button>
  );
};

export default Button;
