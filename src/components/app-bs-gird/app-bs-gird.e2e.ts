import { newE2EPage } from '@stencil/core/testing';

describe('app-bs-gird', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-bs-gird></app-bs-gird>');

    const element = await page.find('app-bs-gird');
    expect(element).toHaveClass('hydrated');
  });
});
