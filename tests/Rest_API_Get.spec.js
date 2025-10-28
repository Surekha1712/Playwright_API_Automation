const {test,expect}=require('@playwright/test')

test("Testing Rest API with Get Method",async ({request})=>{
    const url="https://jsonplaceholder.typicode.com/posts/1"
    const response=await request.get(url)
    expect(response.status()).toBe(200)
    console.log(await response.text())

    const body=await response.json()
    expect(body.userId).toBe(1);
    expect(body.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    console.log(body.title)

})