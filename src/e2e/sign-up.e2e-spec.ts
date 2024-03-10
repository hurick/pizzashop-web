import { expect, test } from '@playwright/test'

test('navigate to sign in', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})

test('sign up successfully', async ({ page }) => {
  const toast = page.getByText('Restaurante cadastrado com sucesso')

  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('(12) 3456-7890')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  expect(toast).toBeVisible()
})

test('sign up unsuccessfully with wrong credentials', async ({ page }) => {
  const toast = page.getByText('Erro ao cadastrar restaurante')

  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid name')
  await page.getByLabel('Seu nome').fill('John Doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu celular').fill('(12) 3456-7890')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  expect(toast).toBeVisible()
})
