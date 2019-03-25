import { ClientFunction, Selector } from 'testcafe';

fixture('Signup Page').page('http://localhost:3000/register');

test('should direct you to the login page when login button is clicked', async (browser) => {
  await browser.click('.login-btn');
  const PageUrl = ClientFunction(() => window.location.href);
  await browser.expect(PageUrl()).contains('/');
});

test('should fill in data correctly enable the submit button', async (browser) => {
  await browser
    .typeText('#firstName', 'Kelvin')
    .typeText('#lastName', 'Kariuki')
    .typeText('#password', 'password')
    .typeText('#confirmPassword', 'password')
    .expect(Selector('.signup-button.enabled').innerText).eql('Get Started');
});
