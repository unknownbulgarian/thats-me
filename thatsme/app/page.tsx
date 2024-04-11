import Image from "next/image";
import styles from "./page.module.css";

//components
import InputIcon from "./global-components/input-icon/InputIcon";
import { FaUserAlt } from "react-icons/fa";
export default function Home() {




  return (
    <>
      <div className={styles.home}>
        <div className={styles.maininputs}>
          <InputIcon
            backColor="white"
            borderRadius="0.5em"
            width="250px"
            height="35px"
            color="black"
            title="Username"
            titleColor="black"
            type="text"
          >
            <FaUserAlt />
          </InputIcon>
        </div>
      </div>
    </>
  );
}
