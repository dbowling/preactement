import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import * as PropTypes from 'prop-types';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  alertType: string;
  titleValue: string;
  messageValue: string;
  children: any;
}

/* -----------------------------------
 *
 * Button
 *
 * -------------------------------- */

function InfoArea({ messageValue, titleValue, children }: IProps) {
  const [counter, setCounter] = useState(0);

  return (
    <Fragment>
      <h3 class="title">{titleValue}</h3>
      <button onClick={() => setCounter((state) => state + 1)}>
        Click Me ({counter})
      </button>
      {children}
      <div class="slot">{messageValue}</div>
    </Fragment>
  );
}

/* -----------------------------------
 *
 * Meta
 *
 * -------------------------------- */

InfoArea.tagName = 'info-area';
InfoArea.attributes = ['title-value', 'alert-type'];
InfoArea.propTypes = {
  titleValue: PropTypes.string.isRequired,
};

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { InfoArea };
