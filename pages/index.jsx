import Chessboard from "../components/Chessboard";
import Linha from "../components/Linha";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Chessboard />
    </div>
  );
}
