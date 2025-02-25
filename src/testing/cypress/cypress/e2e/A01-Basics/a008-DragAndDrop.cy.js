// // drag and drop elements

// // https://vishalok12.github.io/jquery-dragarrange/

// describe('My test suite', () => {
//     beforeEach(() => {
//         cy.visit('https://www.w3schools.com/html/html5_draganddrop.asp');
//     });
//     it('should drag and drop an element', () => {
//         // cy.get('#drag1') 
//         //   .drag('#div2');
//         // Add assertions if necessary
        
//         cy.get('#drag1')
//         .trigger('mousedown', { which: 1 }) // Simulate mouse down
//         .trigger('mousemove', { clientX: 100, clientY: 100 }) // Move the element
//         .trigger('mouseup'); // Release the mouse
//     });
// });




// // Install drag-drop plugin if not installed: npm install --save-dev @4tw/cypress-drag-drop
// import '@4tw/cypress-drag-drop';

// describe('Drag and Drop Test', () => {
//     beforeEach(() => {
//         cy.visit('https://vishalok12.github.io/jquery-dragarrange/');
//     });

//     it('should drag and drop an element using the plugin', () => {
//         cy.get('.draggable-element.d-1')
//         //   .first() // Pick the first one
//           .drag('.draggable-element.d-3');
        
//         // Add assertion to check order change
//         cy.get('.draggable-element').eq(2).should('contain.text', 'Drag 1'); 
//     });

//     it('should drag and drop using native events', () => {
//         cy.get('.draggable-element')
//           .first()
//           .trigger('mousedown', { which: 1 })
//           .trigger('mousemove', { clientX: 200, clientY: 200 }) 
//           .trigger('mouseup');

//     });
// });



// Drag and Drop Test

describe('My test suite', () => {

    beforeEach(()=>{cy.visit('https://webdriveruniversity.com/Actions/index.html');}) 
    it('Test case 1', () => {
        cy.get('#draggable').trigger('mousedown', { which: 1 });
        cy.wait(300)
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
        cy.wait(500)
        cy.get('#droppable p').should('have.text', 'Dropped!');
    });


    // Drag and Drop Test
    it('should drag an element and drop it in the target', () => {
        cy.wait(300)
        cy.get('#draggable').trigger('mousedown', { which: 1 });
        cy.wait(300)
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
        cy.get('#droppable p').should('have.text', 'Dropped!');
    });


    // Drag and Drop Test with Positioning
    it('should drag an element and drop it with an offset', () => {
        cy.wait(300)
        cy.get('#draggable')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { pageX: 250, pageY: 200, force: true })
            .trigger('mouseup', { force: true });
        cy.wait(300)
        cy.get('#droppable p').should('have.text', 'Dropped!');
    });


    // Right-Click Context Menu
    it('should display context menu on right-click', () => {
        cy.wait(300)
        cy.get('#double-click').rightclick();
        cy.wait(300)
        cy.get('#double-click').should('have.class', 'div-double-click');
    });


    // Double Click Test
    it('should change the color after double-clicking', () => {
        cy.wait(300)
        cy.get('#double-click').dblclick();
        cy.wait(300)
        cy.get('#double-click').should('have.class', 'div-double-click');
    });


    // Hover and Click Test
    it.only('should display dropdown on hover and allow clicking', () => {
        cy.wait(300)

        // cy.get('.dropdown.hover').should('be.visible').trigger('mouseover');
        // cy.get('.dropdown.hover').trigger('mouseover');
        // cy.get('.dropdown.hover').trigger('mouseover', { force: true });
        cy.get('.dropdown.hover').should('exist').should('be.visible').trigger('mouseover', { force: true });

        cy.wait(300)
        cy.contains('Link 1').click();
        cy.wait(300)
        cy.url().should('include', 'index.html');
    });


    // Click and Hold Test
    it('should change the text while holding click', () => {
        cy.wait(300)
        cy.get('#click-box').trigger('mousedown', { which: 1 });
        cy.wait(300)
        cy.get('#click-box').should('have.css', 'background-color', 'rgb(0, 255, 0)'); // Green color when held
    });
});