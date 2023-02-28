import { h, Fragment } from 'preact';

interface IProps {
  parent: HTMLElement;
  copyright: string;
  children: any;
}

function Footer({ parent, copyright, children }: IProps) {
  return (
    <Fragment>
      <h3 class="title">MSL Footer</h3>
      {children}
      <div class="slot">&copy; {copyright}</div>
    </Fragment>
  );
}

Footer.tagName = 'msl-footer';
Footer.attributes = ['copyright'];

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Footer };
