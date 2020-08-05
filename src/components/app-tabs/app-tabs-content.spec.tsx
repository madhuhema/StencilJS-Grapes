import { newSpecPage } from '@stencil/core/testing';
import { AppTabsContent } from './app-tabs-content';

describe('app-tabs-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppTabsContent],
      html: `<app-tabs-content></app-tabs-content>`,
    });
    expect(page.root).toEqualHtml(`
      <app-tabs-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-tabs-content>
    `);
  });
});
