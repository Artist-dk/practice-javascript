describe('Alerts',()=>{
  // 1) Javascript Alert: It will have some text and an 'OK' button

  it ("JS alert",()=> {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click();
    cy.on('window:alert',(t)=>{
      expect(t).to.contains('I am a JS Alert');
    })
    // alert window automatically closed by cypress

    cy.get("#result").should('have.text','You successfully clicked an alert')
  })
  // 2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons

  it('Js confirm alert',()=>{
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get('button[onclick="jsConfirm()"]').click();
    cy.on('window:confirm',(t)=>{
      expect(t).to.contains('I am JS confirm');
    })
    cy.get('#result').should('have.text','You clicked: Ok')
  })
  // 3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK'

  // 4) Authenticated Alert
})

// https://the-internet.herokuapp.com/javascript_alerts