const {test,expect}=require('@playwright/test');

test("API Header Validation Example",async ({request})=>{
    const response=await request.get("https://restful-booker.herokuapp.com/booking/1");
    const headers=response.headers();
    console.log(headers);
    expect(headers['content-type']).toBe('application/json; charset=utf-8');
    expect(headers['server']).toBe('Heroku');
    console.log("********** Headers Array **********");
    const headersarray=response.headersArray();
    console.log(headersarray);
    expect(headersarray.length).toBe(10);
    headersarray.forEach(header=>{
        console.log(`${header.name} : ${header.value}`);
    });
    

});
