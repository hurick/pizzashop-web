import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  const toast = page.getByText(
    'Confira seu e-mail para continuar com sua autenticação',
  )

  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('E-mail').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  await expect(toast).toBeVisible()
})

test('sign in unsuccessfully with wrong credentials', async ({ page }) => {
  const toast = page.getByText('Credenciais inválidas')

  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('E-mail').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  await expect(toast).toBeVisible()
})

test('navigate to sign up restaurant', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
})
