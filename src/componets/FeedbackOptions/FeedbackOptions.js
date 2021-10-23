import PropTypes from "prop-types";

import styles from "./FeedbackOptions.module.css";

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      className={styles.button}
      type="button"
      data-feedback={feedback}
      key={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) =>
    FeedbackButton({ feedback: option, onLeaveFeedback })
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// const FeedbackOptions = ({ feedback, onLeaveFeedback }) => {
//   return (
//     <ul className={styles.list}>
//       {Object.keys(feedback).map((btnName) => {
//         return (
//           <li className={styles.item} key={btnName}>
//             <button
//               className={styles.button}
//               type="button"
//               onClick={onLeaveFeedback}
//             >
//               {btnName}
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
// FeedbackOptions.propTypes = {
//   options: PropTypes.object.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

// export default FeedbackOptions;
