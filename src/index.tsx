import { define } from 'preactement';

import 'preact/debug';

/* -----------------------------------
 *
 * Assets
 *
 * -------------------------------- */

import '@/styles.scss';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { InfoArea } from '@/components/infoArea.component';
import { Footer } from './components/footer.component';

/* -----------------------------------
 *
 * Define
 *
 * -------------------------------- */

define(InfoArea.tagName, () => InfoArea, { attributes: InfoArea.attributes });
define(Footer.tagName, () => Footer, { attributes: Footer.attributes });
