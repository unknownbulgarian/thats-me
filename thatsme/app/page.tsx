import Image from "next/image";
import styles from "./page.module.css";

//components
import InputIcon from "./global-components/input-icon/InputIcon";
import ButtonIcon from "./global-components/button-icon/buttonicon";

//icons
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


export default function Home() {

  return (
    <>
      <div className={styles.home}>
        <div className={styles.maininputs}>
          <InputIcon
            backColor="white"
            borderRadius="0.3em"
            width="360px"
            height="35px"
            color="black"
            title="Username"
            titleColor="black"
            type="text"
          >
            <FaUserAlt />
          </InputIcon>

          <InputIcon
            backColor="white"
            borderRadius="0.3em"
            width="360px"
            height="35px"
            color="black"
            title="Password"
            titleColor="black"
            type="password"
          >
            <FaLock />
          </InputIcon>
        </div>
      </div>
    </>
  );
}
