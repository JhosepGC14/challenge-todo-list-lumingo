import "./loader.scss";

interface Props {
  show: boolean;
}

const Loader = (props: Props) => {
  const { show } = props;

  return (
    <>
      {show && (
        <div className="loaderBackdrop">
          <div className="loaderBackdrop__loader"></div>
        </div>
      )}
    </>
  );
};

export default Loader;
