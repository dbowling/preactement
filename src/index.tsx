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

define('info-area', () => InfoArea, { attributes: InfoArea.attributes });
