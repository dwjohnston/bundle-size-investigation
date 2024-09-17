import Image from "next/image";
import styles from "./page.module.css";
import { MyComponent } from "@/Components/MyComponent";

export default function Home() {
  return (
    <div className={styles.page}>
      <MyComponent />
    </div>
  );
}
