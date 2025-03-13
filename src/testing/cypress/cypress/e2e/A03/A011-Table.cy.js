describe("Testing tables", ()=>{
    beforeEach('login',()=>{
        cy.visit("https://demo.opencart.com/admin/index.php", {failOnStatusCode: false})
        cy.wait(30000);
        
        cy.get('#input-username').type('demo');
        cy.get("#input-password").type('demo');
        cy.get('button[type="submit"]').click();

        cy.get(".btn-close").click();

        cy.get("#menu-customer>a").click();
        cy.get('#menu-customer>ul>li:first-child').click();
    })
    it('check number rows & column',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
        cy.get("table[class='table table-bordered table-hover']>tbody>tr>td").should('have.length','7');
    })
    it('check cell data from specific row & column',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains('rs@yopmail.com');
    })
    it('Read all the rows and columns data in the first page',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col,index,$cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })
    it('Pagination',()=>{
        cy.get(".col-sm-6.text-end").then((e)=>{
            let mytext = e.text();
            totalPages = myText.substring(mytext.indexOf("(")+1,mytext,indexOf('Pages')-1);
            cy.log("Total number of pages in a table => "+totalPages)
        })
    })
    it('Pagination',()=>{
        let totalPages = 5;
        for(let p = 1;p<=totalPages;p++){
            if(totalPages>1) {
                cy.log("Active page is === "+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000);

                cy.get("table[class='table table-bordered table-hover]>tbody>tr")
                .each(($row, index, $rows) => {
                    cy.get('td:nth-child(3)').then((e)=>{
                        cy.log(e.text()); // email
                    })
                })
            }
        }
    })
})