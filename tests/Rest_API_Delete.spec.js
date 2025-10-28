const {test, expect} = require('@playwright/test');

test("Deleting  Method ", async ({request}) => {

    const response=await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
    console.log(await response.text());
    console.log(await response.status());

    const headers=response.headers();
    expect(headers['content-type']).toContain('application/json');
    

})