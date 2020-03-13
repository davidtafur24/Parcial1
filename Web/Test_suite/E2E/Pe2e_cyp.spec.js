describe('Todoist under e2e test', function() {
    it('visits localhost and performs e2e', function() {
        cy.visit('https://todoist.com/Users/showLogin?mini=1&success_page=/app&lang=es');
        cy.wait(2000);
//---------------Login----------------//
        cy.get('#email').type('myemail@example.com');
        cy.get('#password').type('asdeunaAF#');
        cy.get('.submit_btn').click();
        cy.wait(5000);

//---------------Main Filters---------------//

        cy.get('#filter_inbox > .item_content').click();
        cy.wait(1000);
        cy.get('#filter_today > .item_content').click();
        cy.wait(1000);
        cy.get('#filter_7days > .item_content').click();
        cy.wait(1000); 

//---------------Proyectos--------------//

        cy.get('.expansion_panel--expanded > .expansion_panel__header > .expansion_panel__toggle').click();
        cy.wait(1000);         

//---------------Labels---------------//
        
        cy.get(':nth-child(3) > .expansion_panel__header > .expansion_panel__toggle').click();
        cy.wait(2000);
        cy.get('.close > div > span > svg').click();
        cy.wait(2000);

//---------------Filters---------------//

        cy.get(':nth-child(4) > .expansion_panel__header > .expansion_panel__toggle').click();
        cy.wait(2000);

//---------------Settings---------------//

        cy.get('#gear_holder').click();

//---------------Logout---------------//
        
        cy.get('.usermenu__container > :nth-child(18)').click();

    })
})