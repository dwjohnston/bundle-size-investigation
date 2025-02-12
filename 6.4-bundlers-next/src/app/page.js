import Image from "next/image";
import styles from "./page.module.css";
import { LazyLoadingPolyfills } from "../LazyLoadingPolyfills";
export default function Home() {
  return (
    <div className={styles.page}>
      <LazyLoadingPolyfills />
    </div>
  );
}
