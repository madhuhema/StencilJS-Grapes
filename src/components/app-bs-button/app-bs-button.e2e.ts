import { newE2EPage } from '@stencil/core/testing';

describe('app-bs-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-bs-button></app-bs-button>');

    const element = await page.find('app-bs-button');
    expect(element).toHaveClass('hydrated');
  });
});
