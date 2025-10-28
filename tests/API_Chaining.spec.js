//API Chaining means we will be extracting a value from one API response and passing that value to the other APi's
const {test,expect}=require('@playwright/test')

test("API Chaining Example",async ({request})=>{
    //Get all the posts
    const postResponse=await request.get("https://jsonplaceholder.typicode.com/posts")
    expect(postResponse.status()).toBe(200)

    //parse response body to json

    const Body=await  postResponse.json();
    const firstId=Body[2]; 
    console.log(firstId);
    


//get comments from the selecr post
    const commentsResponse=await request.get(`https://jsonplaceholder.typicode.com/posts/${firstId.id}/comments`);
    expect(postResponse.status()).toBe(200);

    const comments=await commentsResponse.json();
    expect(comments.length).toBeGreaterThan(0);
    expect(comments[2].postId).toBe(firstId.id);
    console.log(comments[2].body);
})