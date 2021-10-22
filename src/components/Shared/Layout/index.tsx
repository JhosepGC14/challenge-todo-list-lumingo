//styles
import "./layout.scss";

interface Props {
  children: JSX.Element| JSX.Element[] ;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <main className="generalContainer">
      {children}
    </main>
  )
}

export default Layout
