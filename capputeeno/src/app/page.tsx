import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/header";
import { FilterBar } from "@/components/filter-bar";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar/>
    </main>
  );
}
