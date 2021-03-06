import { newE2EPage } from '@stencil/core/testing';

describe('app-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-tabs></app-tabs>');

    const element = await page.find('app-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
