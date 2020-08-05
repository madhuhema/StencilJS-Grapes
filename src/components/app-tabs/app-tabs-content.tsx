import {
  Component, Prop, Method,
  State, h
} from '@stencil/core';

import { IAppTabsContentData } from './app-tabs-interfaces';

@Component({
  tag: 'app-tabs-content',
  styleUrl: 'app-tabs-content.scss',
  shadow: true,
})
export class AppTabsContent {

  @Prop()
  name: string;

  @State()
  isSelected: boolean = false;

  @Method()
  async getChild(): Promise<IAppTabsContentData> {
      return Promise.resolve({
        select: this.select.bind(this),
        unselect: this.unselect.bind(this),
        name: this.name
      });       
  }

  unselect() {
      this.isSelected = false;
  }

  select() {
      this.isSelected = true;
  }

  render() {

      const classes = {
          'app-tabs-content': true,
          'app-tabs-content-selected': this.isSelected
      };
          
      return (
          <div class={classes}>
              <slot />
          </div>
      );
  }
}
