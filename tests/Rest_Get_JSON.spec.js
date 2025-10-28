const {test,expect}=require('@playwright/test')

test("Asserting Complex JSON Responses",async ({page})=>
{
    const url="https://jsonplaceholder.typicode.com/posts";
    const response=await page.request.get(url);
    await expect(response).toBeOK();
    console.log(await response.text());
    const users=await response.json();
    await expect(users.length).toBeGreaterThan(0);
    await expect(users[0].id).toBe(1)
    console.log(users[5].title);
})