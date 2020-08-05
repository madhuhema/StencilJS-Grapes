import { newSpecPage } from '@stencil/core/testing';
import { AppBsGird } from './app-bs-gird';

describe('app-bs-gird', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppBsGird],
      html: `<app-bs-gird></app-bs-gird>`,
    });
    expect(page.root).toEqualHtml(`
      <app-bs-gird>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-bs-gird>
    `);
  });
});
