import { newE2EPage } from '@stencil/core/testing';

describe('app-tabs-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-tabs-content></app-tabs-content>');

    const element = await page.find('app-tabs-content');
    expect(element).toHaveClass('hydrated');
  });
});
