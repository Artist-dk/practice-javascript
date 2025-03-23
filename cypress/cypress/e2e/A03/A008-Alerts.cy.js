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
      expect(t).to.contains('I am a JS Confirm');
    })
    cy.get('#result').should('have.text','You clicked: Ok')
  })
  it('Js confirm alert - cancel',()=>{
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get('button[onclick="jsConfirm()"]').click();
    cy.on('window:confirm',()=>false)
    cy.get('#result').should('have.text','You clicked: Cancel')
  })
  // 3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK'

  
  it('Js prompt alert',()=>{
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.window().then((win)=>{
      cy.stub(win,'prompt').returns('welcome');
    })
    cy.get('button[onclick="jsPrompt()"]').click();
    cy.get("#result").should('have.text','You entered: welcome')
  })
  
  // it.only('Js prompt alert - cancel',()=>{
  //   cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
  //   cy.window().then((win)=>{
  //     cy.stub(win,'prompt').returns('welcome');
  //   })
  //   cy.get('button[onclick="jsPrompt()"]').click();
  //   cy.on('window:prompt',()=>false)
  //   cy.get("#result").should('have.text','You entered: null')
  // })

  // 4) Authenticated Alert

  // approach 1
  it('Authenticated alert',()=>{
    cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth: {username: "admin", password: "admin"}})
    cy.get('.example p').should('have.contain','Congratulations!')
  })

  // approach 2
  it.only('Authenticated alert',()=>{
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    cy.get('div.example p').should('have.contain','Congratulations!')
  })

})

// https://the-internet.herokuapp.com/javascript_alerts