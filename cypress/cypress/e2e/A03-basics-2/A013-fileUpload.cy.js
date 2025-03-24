
// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';


describe('File Upload Test', () => {
  it('should upload a file successfully', () => {
    // Visit the page with the file upload form
    cy.visit('http://the-internet.herokuapp.com/upload');

    // Select the file to be uploaded
    const fileName = 'example.txt';
    cy.fixture(fileName).then(fileContent => {
      cy.get('input[type="file"]').attachFile({ // <input id="file-upload" type="file" name="file">
        fileContent: fileContent.toString(),
        fileName: fileName,
        mimeType: 'text/plain'
      });
    });

    // Submit the form
    cy.get('form').submit();

    // Verify the file upload was successful
    cy.contains('File Uploaded!').should('be.visible');
  });

  it("Single file upload",()=>{
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get('#file-upload').attachFile("example.pdf");
    cy.get('#file-submit').click();
    cy.wait(3000);
    cy.get('div[class="example"] h3').should('have.text','File Uploaded!');
  })

  it("File upload - rename",()=>{
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get('#file-upload').attachFile({filePath:"example.pdf", fileName:'myfile.pdf'});
    cy.get('#file-submit').click();
    cy.wait(3000);
    cy.get('div[class="example"] h3').should('have.text','File Uploaded!');
  })

  it("File Upload - Drag and Drop",()=>{
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get('#drag-drop-upload').attachFile("example.pdf",{subjectType:'drag-n-drop'});
    cy.wait(3000);
    // cy.get('#file-submit').click();
    cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span").should('have.text','example.pdf');

  })
  it("Multiple file upload",()=>{
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get('input[type="file"]').attachFile(["example.pdf","example.txt"]); // multiple files
    cy.wait(3000);
    cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:');
  })
  it.only("File upload - Shadow DOM",()=>{
    cy.visit("https://www.htmlelements.com/demos/fileupload/show-progress/");
    cy.get('.smart-browse-input',{includeShadowDom: true}).attachFile("example.pdf"); 
    cy.wait(3000);
    cy.get(".smart-item-name",{includeShadowDom:true}).should('have.text','example.pdf');
  })

});