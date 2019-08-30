import { storiesOf } from '@storybook/html';
import { renderer } from 'storypug';
import Buttons from './buttons.pug';
import mdButtons from './buttons.md';

const { html } = renderer();

storiesOf('UI | Buttons', module).add('buttons', () => html(Buttons), {
  notes: { markdown: mdButtons },
});
