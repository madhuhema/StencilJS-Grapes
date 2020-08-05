import { newSpecPage } from '@stencil/core/testing';
import { AppChip } from './app-chip';

describe('app-chip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppChip],
      html: `<app-chip></app-chip>`,
    });
    expect(page.root).toEqualHtml(`
      <app-chip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-chip>
    `);
  });
});
