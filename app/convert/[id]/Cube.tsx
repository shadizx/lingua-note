import styles from "./cube.module.scss";

export default function Cube() {
  const topStyle = [styles.face, styles.top].join(" ");
  const leftStyle = [styles.face, styles.left].join(" ");
  const rightStyle = [styles.face, styles.right].join(" ");

  return (
    <main className="p-20">
      <div className={styles.container}>
        <div className={styles.h1Container}>
          <div
            className={[styles.cube, styles.h1, styles.w1, styles.l1].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h1, styles.w1, styles.l2].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h1, styles.w1, styles.l3].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h1, styles.w2, styles.l1].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h1, styles.w2, styles.l2].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h1, styles.w2, styles.l3].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h1, styles.w3, styles.l1].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h1, styles.w3, styles.l2].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h1, styles.w3, styles.l3].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>
        </div>

        <div className={styles.h2Container}>
          <div
            className={[styles.cube, styles.h2, styles.w1, styles.l1].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h2, styles.w1, styles.l2].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h2, styles.w1, styles.l3].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h2, styles.w2, styles.l1].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h2, styles.w2, styles.l2].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h2, styles.w2, styles.l3].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h2, styles.w3, styles.l1].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h2, styles.w3, styles.l2].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h2, styles.w3, styles.l3].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>
        </div>

        <div className={styles.h3Container}>
          <div
            className={[styles.cube, styles.h3, styles.w1, styles.l1].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h3, styles.w1, styles.l2].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h3, styles.w1, styles.l3].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h3, styles.w2, styles.l1].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h3, styles.w2, styles.l2].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h3, styles.w2, styles.l3].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h3, styles.w3, styles.l1].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h3, styles.w3, styles.l2].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>

          <div
            className={[styles.cube, styles.h3, styles.w3, styles.l3].join(" ")}
          >
            <div className={topStyle}></div>
            <div className={leftStyle}></div>
            <div className={rightStyle}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
