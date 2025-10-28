const {test, expect} = require('@playwright/test');
test("POST Request and Response Validation", async ({ request }) => {
    const response=await request.post('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        data: {
            title: 'This is new post',
            body: 'Body of the new post',
            userId: 1,
        },
    })
    expect(response.status()).toBe(201);
    const responseData=await response.json();
    expect(responseData.title).toBe('This is new post');
    expect(responseData.body).toBe('Body of the new post');
    expect(responseData.userId).toBe(1);
    console.log(responseData);

    //Creating Header
    const headers=response.headers();
    expect(headers['content-type']).toContain('application/json');
   // console.log(headers);
})
