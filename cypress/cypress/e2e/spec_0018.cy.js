// npm install 'cypress-file-upload'
import 'cypress-file-upload'

describe("File uploads", () => {
  it("single file upload",() => {
    // http://the-internet.herokuapp.com/upload
    cy.visit("http://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").attachFile('C Programming.pdf')
    cy.get("#file-submit").click()
    // cy.get('div[class="example"]>h3').contains("File Uploaded!")
    cy.get("div[class='example']>h3").should('have.text', 'File Uploaded!')
  })


  it("file upload - rename",() => {
    cy.visit("http://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").attachFile({filePath:'C Programming.pdf', fileName:'myfile.pdf'})
    cy.get("#file-submit").click()
    cy.get("div[class='example']>h3").should('have.text', 'File Uploaded!')
  })


  it("file upload - drag and drop",() => {
    cy.visit("http://the-internet.herokuapp.com/upload")
    cy.get("#drag-drop-upload").attachFile('C Programming.pdf', {subjectType:'drag-n-drop'})
    cy.wait(4000)
    cy.get("#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span")
    // cy.get("#file-submit").click()
    // cy.get("div[class='example']>h3").should('have.text', 'File Uploaded!')
  })


  it("file upload - multiple files",() => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile( ["file1.pdf", "file2.pdf", "file3.pdf"] )
    cy.wait(4000)
  })

  it.only("file upload - shodow dom", ()  => {
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.html")
    cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile("file1.pdf");
    cy.wait(4000)

    cy.get('.smart-item-name', {includeShadowDom:true})
    
  })
})