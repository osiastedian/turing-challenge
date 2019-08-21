import { getGreeting } from '../support/app.po';

describe('react-store-front', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to react-store-front!');
  });
});
