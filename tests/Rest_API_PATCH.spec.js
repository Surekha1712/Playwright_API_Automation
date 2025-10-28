const {test, expect} = require('@playwright/test');
const { title } = require('process');
test("PATCH Validation", async ({ page }) => {
    const response=await page.request.patch('https://jsonplaceholder.typicode.com/posts/1', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',},    
            data: {
                title: 'Patched Title',
            }       
        })
    expect(response.status()).toBe(200);
    console.log(await response.text());
    console.log(await response.status());

    //Response Body 
    const responseData=await response.json();
    expect(responseData.title).toBe('Patched Title');
    console.log(responseData);  
    //Creating Header
    const headers=response.headers();
    expect(headers['content-type']).toContain('application/json');
    

})