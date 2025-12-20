import { useEffect, useState } from "react";
import styles from "./Layer0.module.css";
import hiddenLinks from "../../data/hiddenLinks.json";

export default function Layer0() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>LAYER 0</p>

      <h1 className={styles.title}>The Quiet Room Beyond Design</h1>

      <p className={styles.subtitle}>Choose a door.</p>

      <div
        className={styles.doorList}
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(8px)",
          transition: "all 0.8s ease",
        }}
      >
        {hiddenLinks.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.doorButton}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
