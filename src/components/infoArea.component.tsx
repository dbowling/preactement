import { h, Fragment } from 'preact';

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

InfoArea.tagName = 'cf-post';
InfoArea.propTypes = {
  title: 'String',
};
InfoArea.attributes = ['title-value', 'alert-type'];

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { InfoArea };
