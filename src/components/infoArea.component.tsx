import { h, Fragment } from 'preact';
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
  return (
    <Fragment>
      <h3 class="title">{titleValue}</h3>
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

InfoArea.tagName = 'cf-post';
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
