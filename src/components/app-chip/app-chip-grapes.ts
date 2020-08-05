import {Block} from '../../grape/grapes';

export const Chip: Block = {
  id: 'chip',
  options: {
    label: `chip`,
    content: `<app-chip image="assets/icon/icon.png" closeable="true" text="hello"></app-chip>`,
    category: 'my blocks',
    attributes: {},
  },
};