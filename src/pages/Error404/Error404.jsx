import styles from "./Error404.module.css";

// Components
import img404 from "../../assets/404.png";
import Const from "../../components/CodeTexts/Const";
import Method from "../../components/CodeTexts/Method";
import If from "../../components/CodeTexts/If";
import Constant from "../../components/CodeTexts/Constant";

// Moodules
import { useMediaQuery } from "react-responsive";

const Error404 = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={styles.ErrorPage}>
      <div className={styles.ContentColumn}>
        <img
          src={img404}
          alt="404 Not Found"
          width={isMobile ? 292 : 312}
          className={styles.ErrorImage}
        />
      </div>
      <div className={styles.ContentColumn}>
        {isMobile ? (
          <>
            <ul className={styles.ErrorTextList}>
              <li className={styles.ErrorTextItem}>
                <p style={{ display: "flex" }}>
                  <Constant value={"throw"} />
                  <Constant value={"new"} />
                  <Method
                    value={["Error"]}
                    text={"404: PageNotFoundError 😢"}
                  />
                </p>
              </li>
              <li className={styles.ErrorTextItem}></li>
              <li className={styles.ErrorTextItem}>
                <p style={{ display: "flex", gap: 10 }}>
                  <a href="../" className={styles.Link}>
                    <Method value={["goBack"]} />
                  </a>
                  <span>||</span>
                  <a href="/" className={styles.Link}>
                    <Method value={["goHome"]} />
                  </a>
                </p>
              </li>
            </ul>
          </>
        ) : (
          <ul className={styles.ErrorTextList}>
            <li className={styles.ErrorTextItem}>
              <Const value={"page"}>
                <Method value={["findPage"]} text={"you-were-looking-for"} />
              </Const>
            </li>
            <li className={styles.ErrorTextItem}> </li>
            <li className={styles.ErrorTextItem}>
              <If value={"!page"} />
            </li>
            <li className={styles.ErrorTextItemIframe}>
              <Method
                value={["console", "log"]}
                text={"But hey, since you're here..."}
              />
            </li>
            <li className={styles.ErrorTextItemIframe}>
              <Method
                value={["console", "log"]}
                text={"🔍 Go back to the homepage and explore more cool stuff!"}
              />
            </li>
            <li className={styles.ErrorTextItemIframe}>
              <Method
                value={["console", "log"]}
                text={"Oops! Looks like you took a wrong turn in the codebase."}
              />
            </li>
            <li className={styles.ErrorTextItemIframe}>
              <p style={{ display: "flex" }}>
                <Constant value={"throw"} />
                <Constant value={"new"} />
                <Method value={["Error"]} text={"404: PageNotFoundError 😢"} />
              </p>
            </li>
            <li className={styles.ErrorTextItem}>{"}"}</li>
            <li className={styles.ErrorTextItem}></li>
            {/* /* Suggestions: * - Check the URL for typos * - Use the site
          navigation * - Or hit CMD+Z in real life 😅 */}
            <li className={styles.ErrorTextItem}>{"/* Suggestions: "}</li>
            <li className={styles.ErrorTextItem}>
              * - Check the URL for typos
            </li>
            <li className={styles.ErrorTextItem}>
              * - Use the site navigation
            </li>
            <li className={styles.ErrorTextItem}>
              * - Or hit CMD+Z in real life 😅
            </li>
            <li className={styles.ErrorTextItem}>{"*/"}</li>
            <li className={styles.ErrorTextItem}></li>
            <li className={styles.ErrorTextItem}>
              <a href="/" className={styles.Link}>
                <Method value={["redirect"]} text={"home"} />
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Error404;
