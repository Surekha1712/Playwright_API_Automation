const {test, expect} = require('@playwright/test');
test("Update a new post", async ({ request }) => {
    const response=await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',},
            data: {
                id: 1,
                title: 'Updated Title',
                body: 'Updated Body',
                userId: 1,
            }
        })
    expect(response.status()).toBe(200);
    console.log(await response.text());
    console.log(await response.status());

    //Validating Response Body
    const responseData=await response.json();
    expect(responseData.title).toBe('Updated Title');
    expect(responseData.body).toBe('Updated Body');
    expect(responseData.userId).toBe(1);
    console.log(responseData);

    //Creating Header
    const headers=response.headers();
    expect(headers['content-type']).toContain('application/json');
    
    

})