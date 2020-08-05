import { newE2EPage } from '@stencil/core/testing';

describe('app-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-chip></app-chip>');

    const element = await page.find('app-chip');
    expect(element).toHaveClass('hydrated');
  });
});
