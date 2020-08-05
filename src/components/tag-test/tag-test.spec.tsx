import { newSpecPage } from '@stencil/core/testing';
import { TagTest } from './tag-test';

describe('tag-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TagTest],
      html: `<tag-test></tag-test>`,
    });
    expect(page.root).toEqualHtml(`
      <tag-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tag-test>
    `);
  });
});
