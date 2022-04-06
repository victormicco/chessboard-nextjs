import Subdivisao from "../components/Subdivisao";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Subdivisao preta />
      <Subdivisao />
      <Subdivisao preta />
    </div>
  );
}
