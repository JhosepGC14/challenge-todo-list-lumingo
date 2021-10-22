import "./button_secondary.scss";

interface Props {
  icon: string;
  onClick: () => void;
}

const ButtonSecondary = (props: Props) => {
  const { icon } = props;

  return (
    <button className="buttonSecondary" {...props}>
      <img className="buttonSecondary__icon" src={icon} alt="icon" />
    </button>
  );
};

export default ButtonSecondary;
