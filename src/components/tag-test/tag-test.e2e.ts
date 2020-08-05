import { newE2EPage } from '@stencil/core/testing';

describe('tag-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tag-test></tag-test>');

    const element = await page.find('tag-test');
    expect(element).toHaveClass('hydrated');
  });
});
