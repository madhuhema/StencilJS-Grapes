import { newSpecPage } from '@stencil/core/testing';
import { AppTabsHeader } from './app-tabs-header';

describe('app-tabs-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppTabsHeader],
      html: `<app-tabs-header></app-tabs-header>`,
    });
    expect(page.root).toEqualHtml(`
      <app-tabs-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-tabs-header>
    `);
  });
});
