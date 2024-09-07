import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:yashchamoli1234@gmail.com">my Mail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/yash-chamoli-a85b36227/">LinkedIN</a>
        </li>
        <li className={styles.link}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAONSURBVHgB7ZlLSFVBGMe/m6/KZySKBmVREm1yVS2lVgUSQUVEC4uWUiRBZES1aJPVLsplURDtKoiQUrKgIiqi7EUPlUwDix6mpuHXfzonuM6dM4/rHG1xf/DjXs6c+Wa+c8/MOTOXKEOGDDoS5BFmnomPVbAGVsMyWAKz4CAcgK9gJ+xIJBLf6H8Bnc+BW+BlOMz2jMEOuBMW0nSBxnPhbviBJ89XeASW0FSCBmvhG/ZPP9xIcYNGsuAxOM7xcpaD8RZLEgWwlaeO+7CUfBImcZennifekuFgVrrJ08c9mGfq5wyLXJrh6oiy0/A6/EnpMwpvwZNwRFG+MmwnfXAl1nL0wH6ZdF4hbIRf2J4hDqbcuUlxOjTnr6d0QMXZsEcT+KKiTjls4+Bh9xhegi2h4vtD+Au+gNWK+uc07fXCAnIFlfaznpaIejnJV1lRLiaOooiyM4Y2m6LizogIOAsfjaRHWRfvT2Pwc1QllA3C7xHFWaRnL/qWT7adAVuhadorJ/+Y2pwD7Z/8yPoGm+kmzyBml0W77bbBijgYrCb2kGcQc5dFu6Ns87bMwZRrQjykvK5lktpvt2i/Tq6nGiPLycxhDFimeDhkcU5KH1WJLCE9vbCV4uM2NI2/pfIBVSJlpEcsUccpJsJf+o7htAr5gCqRYtLTRfHTYyhPeaCqEonr3vdJrnxAlcgw6VlA8VNlKB+SD6gS6SM9Yr1uepVImzB2reG0fvmAKpG3pKeSXF4T3NlMisEs8Z5M4Iqss3ggiVfqSvIMYs4LY5vYZhOsmIPXABNiPT2fPIFYFWFMGxbaBm2zDOhlH0rECGPZ0OkSeDu7IbZu6tlh65OD5XF9WNeFJpdE8uGAFOAK3AEfaRoRt2S9RfwGtrt9ZUbYdWyiwgEpyG94FOZx9HrlGlu8FXOwb/yU3WkhVzj4VbqlQGJHZQUshR8VDdU4xN/AbvzgdGdKVKzj1O2g42GZSOhT0nHz3D4xdl7YOVsmt5BDgFNSwHcwOywTv0xD6DJyBHUe2OXw91a22UzUNibuZ3k6tp859LHbLZIQF87b/m8JT5wmxe0mBn4xTQKLRPrgYvIJB5sS8t8KYjp8Bp/Dq+SIIREx0VRTHCBwNjzB6v1gu20askpEHI9j3yylA2vg6xgSEX+m7uMYlwmqTvz7M7THQyLiYXseVtF0ESa0CR4kR1DnAmyGiyhDhgwZbPgDeZo0Py9W4vMAAAAASUVORK5CYII=" alt="Github icon" />
          <a href="https://github.com/CHAMOLI07yash">github</a>
        </li>
      </ul>
    </footer>
  );
};