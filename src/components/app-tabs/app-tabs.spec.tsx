import { newSpecPage } from '@stencil/core/testing';
import { AppTabs } from './app-tabs';

describe('app-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppTabs],
      html: `<app-tabs></app-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <app-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-tabs>
    `);
  });
});
