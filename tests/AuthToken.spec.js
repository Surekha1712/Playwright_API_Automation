const {test, expect} = require('@playwright/test');
let token
test.beforeAll("Basic Auth Token Generation and Validation", async ({ request }) => { 
    const tokenresponse = await request.post('https://restful-booker.herokuapp.com/auth', {          
        data: {
    "username" : "admin",
    "password" : "password123"  
    }
});
token=(await tokenresponse.json()).token;
});
test("Authentication of put call using basic auth", async ({ request }) => { 
    const response = await request.put('https://restful-booker.herokuapp.com/booking/1', {
        headers: {
            'Cookie': "token="+token
        },
        data:
        {
    "firstname" : "James",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
        })
expect(response.status()).toBe(200);
});


// test("Auth Token Generation and Validation", async ({ request }) => { 
//     const response = await request.post('https://restful-booker.herokuapp.com/auth', {
//         headers: {
//             'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
//         },
//         data: {
//     "firstname" : "James",
//     "lastname" : "Brown",
//     "totalprice" : 111,
//     "depositpaid" : true,
//     "bookingdates" : {
//         "checkin" : "2018-01-01",
//         "checkout" : "2019-01-01"
//     },
//     "additionalneeds" : "Breakfast"
// }
// })
// expect(response.status()).toBe(200);
// const responseBody = await response.json();
// console.log(responseBody);
// //expect(responseBody).toHaveProperty('token');


// });