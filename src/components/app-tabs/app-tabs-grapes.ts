import {Block} from '../../grape/grapes';

export const Tab: Block = {
  id: 'tab',
  options: {
    label: `tab`,
    content: `<app-tabs> 
    <app-tabs-header slot="header" name="tab1">Tab 1</app-tabs-header>
    <app-tabs-header slot="header" name="tab2">Tab 2</app-tabs-header>
    <app-tabs-content slot="content" name="content1">Content 1</app-tabs-content>
    <app-tabs-content slot="content" name="content2">Content 2</app-tabs-content>
    </app-tabs>`,
    category: 'my blocks',
    attributes: {},
  },
};
