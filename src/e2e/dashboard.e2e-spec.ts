import { expect, test } from '@playwright/test'

test('display daily orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação ao dia anterior')).toBeVisible()
})

test('display monthly orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('67', { exact: true })).toBeVisible()
  expect(page.getByText('+18% em relação ao mês')).toBeVisible()
})

test('display monthly canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('4', { exact: true })).toBeVisible()
  expect(page.getByText('-9% em relação ao mês anterior')).toBeVisible()
})

test('display monthly revenue', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 123,11', { exact: true })).toBeVisible()
  expect(page.getByText('+21% em relação ao mês')).toBeVisible()
})
