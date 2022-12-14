import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

// prop types testing git workflow
HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
