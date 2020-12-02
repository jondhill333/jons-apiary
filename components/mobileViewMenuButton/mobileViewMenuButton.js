import styles from "./mobileViewMenuButton.module.css";

export default function MenuButton() {
  const { button } = styles;
  return (
    <>
      <div className={button}></div>
    </>
  );
}
