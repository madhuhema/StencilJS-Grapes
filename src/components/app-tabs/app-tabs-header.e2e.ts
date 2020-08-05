import { newE2EPage } from '@stencil/core/testing';

describe('app-tabs-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-tabs-header></app-tabs-header>');

    const element = await page.find('app-tabs-header');
    expect(element).toHaveClass('hydrated');
  });
});
