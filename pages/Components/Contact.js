import styles from "@/styles/Components/Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <section className={styles.title}>
        <h3>DO YOU HAVE ANY QUESTION?</h3>
      </section>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          className={`${styles.form_input} ${styles.name}`}
        />
        <input
          type="text"
          placeholder="Message"
          className={`${styles.form_input} ${styles.message}`}
        />
        <div>
          <a href="/" className={styles.send_button}>
            SEND
          </a>
        </div>
      </form>
    </div>
  );
}
