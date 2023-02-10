import { define } from 'preactement';

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

/* -----------------------------------
 *
 * Define
 *
 * -------------------------------- */

define(InfoArea.tagName, () => InfoArea, { attributes: InfoArea.attributes });
