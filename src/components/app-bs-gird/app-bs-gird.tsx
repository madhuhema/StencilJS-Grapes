import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-bs-gird',
  styleUrl: 'app-bs-gird.css',
  shadow: true,
})
export class AppBsGird implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
