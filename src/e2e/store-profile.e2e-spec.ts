import { expect, test } from '@playwright/test'

test('successfully update profile', async ({ page }) => {
  const toast = page.getByText('Perfil atualizado com sucesso')

  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill("Doe's Pizza")
  await page.getByLabel('Descrição').fill('Nova descrição do restaurante')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: "Doe's Pizza" })).toBeVisible()
})

test('unsuccessfully update profile with wrong credentials', async ({
  page,
}) => {
  const toast = page.getByText('Ocorreu um erro ao atualizar o perfil')

  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill("Hurick's Pizza")
  await page.getByLabel('Descrição').fill('Nova descrição do restaurante')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'Pizza Shop' })).toBeVisible()
})
