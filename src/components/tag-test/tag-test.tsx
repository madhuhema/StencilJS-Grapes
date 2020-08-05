import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'tag-test',
  styleUrl: 'tag-test.css',
  shadow: true,
})
export class TagTest implements ComponentInterface {

  render() {
    return (
      <div id="grapes"></div>
    );
  }

}
