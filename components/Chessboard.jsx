import Linha from "./Linha";
import styles from "../styles/Chessboard.module.css";

export default function Chessboard() {
  return (
    <div className={styles.chessboard}>
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
    </div>
  );
}
