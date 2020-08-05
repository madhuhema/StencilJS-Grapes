import {
  Component, h, Prop, Method, Event, EventEmitter, State
} from '@stencil/core';

import { IAppTabsHeaderData } from './app-tabs-interfaces';
import { generateId } from '../../utils/functions';

@Component({
  tag: 'app-tabs-header',
  styleUrl: 'app-tabs-header.scss',
  shadow: true,
})
export class AppTabsHeader {

  id: string = generateId();

  @Prop()
  name: string;

  @Event()
  onSelect: EventEmitter;

  @State()
  isSelected: boolean = false;

  @Method()
  async getChild(): Promise<IAppTabsHeaderData> {
      return Promise.resolve({
          select: this.select.bind(this),
          unselect: this.unselect.bind(this),
          name: this.name,
          id: this.id
      });
  }

  unselect() {
      this.isSelected = false;
  }

  select() {
      this.isSelected = true;
  }

  onClick() {
      this.onSelect.emit(this.getChild());
  }

  render() {

      const classes = {
          'app-tabs-header': true,
          'app-tabs-header-selected': this.isSelected 
      };

      return [
          <div class={classes} onClick={this.onClick.bind(this)}>
              <slot />
          </div>,
      ];
  }
}
