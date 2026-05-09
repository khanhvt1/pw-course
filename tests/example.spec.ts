import { test, expect } from '@playwright/test';

//Lesson 1 exercises: a. Access website: https://material.playwrightvn.com/
test('access web: https://material.playwrightvn.com/', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Lesson 1 exercises: Check Title contains text "Tài liệu học automation test"
  await expect(page).toHaveTitle(/Tài liệu học automation test/);
});

//Lesson 1 exercises: a. Access website: https://material.playwrightvn.com/
test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  //Lesson 1 exercises: b. Click vào link that has the text: "Bài học 1: Register Page".
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Lesson 1 exercises: c. Verify the website has a heading with content: "User Registration"
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
