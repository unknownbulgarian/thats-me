import styles from "./page.module.css";
import type { Metadata } from 'next'

import LoginForm from "./forms/login";

export const metadata: Metadata = {
  title: 'ThatsMe Login Page',
  description: 'Log in to your account...',
  openGraph: {
    images: 'https://i.ibb.co/TvcQFDF/Screenshot-2024-05-11-111715.png'
  }
}


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
