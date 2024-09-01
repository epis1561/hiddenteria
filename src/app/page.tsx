import Image from "next/image";
import styles from "./page.module.css";
import CafeSearch from "../components/CafeSearch"
export default function Home() {
  return (
    <div>
      <CafeSearch/>
    </div>
  );
}
