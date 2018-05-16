 import React from 'react';

// {
//     "general": {
//         "firstName": "Liana",
//             "lastName": "Crooks",
//                 "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
//     },
//     "job": {
//         "company": "Ledner, Johnson and Predovic",
//             "title": "Investor Functionality Coordinator"
//     },
//     "contact": {
//         "email": "Gerry_Hackett77@gmail.com",
//             "phone": "(895) 984-0132"
//     },
//     "address": {
//         "street": "1520 Zemlak Cove",
//             "city": "New Devon",
//                 "zipCode": "42586-7898",
//                     "country": "Guinea-Bissau"
//     }
// },
 
 class CreateUser extends React.Component {
     render() {
        return (
            <div>
                <form>
                    <p>First name: <input type="text" /></p>
                    <p>Last name: <input type="text" /></p>
                    <p>Avatar cink: <input type="text" /></p>
                    <p>Job company: <input type="text" /></p>
                    <p>Title of job<input type="text" /></p>
                    <p>Your email<input type="text" /></p>
                    <p>Your phone<input type="text" /></p>
                    <p>Street Adress<input type="text" /></p>
                    <p>Siti name<input type="text" /></p>
                    <p>Your personaliti zip Code<input type="text" /></p>
                    <p>Country name<input type="text" /></p>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateUser;