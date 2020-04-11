import siteList from '../fixtures/siteList';

describe('Homepage', () => {
  beforeEach(() => {
    cy.server();
    cy.visit('/');
    cy.route('GET', '/sites', 'fixture:siteList').as('getSites');
    cy.route('GET', '/sites/*', 'fixture:siteHTML').as('scrapeSite');
  });

  it('Displays basic components of homepage', () => {
    cy.getByTestId('Header-root');
    cy.getByTestId('Table-root');
    cy.getByTestId('Footer-root');
  });

  it('Displays a working table', () => {
    cy.getByTestId('Table-root');
    cy.getByTestId('Table-head');
    cy.wait('@getSites');
    siteList.forEach(({ name, url }) => {
      cy.getByTestId(`TableRow-root-${name}`);
      cy.getByTestId(`TableRow-name-${name}`).should('have.text', name);
      cy.getByTestId(`TableRow-url-${name}`).should('have.text', url);
      const button = cy.getByTestId(`TableRow-downloadButton-${name}`);
      button.should('be.enabled');
      button.click();
      cy.wait('@scrapeSite');
      cy.getByTestId('Snackbar-root-success');
      cy.getByTestId('Snackbar-closeButton').click();
      cy.getByTestId('Snackbar-root-success').should('not.exist');
    });
  });
});
