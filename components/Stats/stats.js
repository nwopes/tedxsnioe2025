import styles from "./stats.module.css";
const Stats = () => {
  return (
    <div className={styles.stats}>
      <img
        className={styles.websitepattern1Icon}
        alt=""
        src="/websitepattern-1@2x.png"
      />
      <div className={styles.attendees}>
        <p className={styles.p}>
          <span>
            <span>650</span>
            <span className={styles.span}>+</span>
          </span>
        </p>
        <p className={styles.attendees1}>Attendees</p>
      </div>
      <div className={styles.attendees2}>
        <p className={styles.p}>
          <span>
            <span>650</span>
            <span className={styles.span}>+</span>
          </span>
        </p>
        <p className={styles.attendees3}>Attendees</p>
      </div>
      <div className={styles.attendees4}>
        <p className={styles.p}>
          <span>
            <span>650</span>
            <span className={styles.span}>+</span>
          </span>
        </p>
        <p className={styles.attendees5}>Attendees</p>
      </div>
      <div className={styles.attendees6}>
        <p className={styles.p}>
          <span>
            <span>650</span>
            <span className={styles.span}>+</span>
          </span>
        </p>
        <p className={styles.attendees7}>Attendees</p>
      </div>
      <div className={styles.statsChild} />
      <div className={styles.statsItem} />
      <div className={styles.statsInner} />
    </div>
  );
};

export default Stats;
