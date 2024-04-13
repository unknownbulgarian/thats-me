import styles from "./page.module.css";


import LoginForm from "./forms/login";


export default function Home() {

  return (
    <>
      <div className={styles.home}>
        <div className={styles.logo}>
          <img className={styles.thelogo} src="/logo/logo.png"></img>
        </div>
        <h1 className={styles.title}>Welcome to <span className="purple">ThatsMe</span></h1>
        <LoginForm />
      </div>
    </>
  );
}
