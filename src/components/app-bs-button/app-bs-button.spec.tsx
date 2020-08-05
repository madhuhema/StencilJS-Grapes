import { newSpecPage } from '@stencil/core/testing';
import { AppBsButton } from './app-bs-button';

describe('app-bs-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppBsButton],
      html: `<app-bs-button></app-bs-button>`,
    });
    expect(page.root).toEqualHtml(`
      <app-bs-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-bs-button>
    `);
  });
});
