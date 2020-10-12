import React from 'react';
import {useState} from 'react';
import {Layout} from '../shared/layout';
import axios from 'axios';


//Himani 5: Declaring state value to store dynamic values.
export const Factorial = () => {
    const [number, setNumber] = useState(''); // Setting the number entered by the user
    const [factorial, setFactorial] = useState(0); // Setting the response.data.result in factorial : dynamically
    const url= 'http://localhost:3001/api/math/factorial/'+ number
// Himani 6: Function to call the api and store the response
     const factvalue1 = async function fetchfactdata1 ()
     {
      console.log(url)
      const factvalue = await axios.get(url,
      )
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setFactorial(response.data.result)
        var resultfact = response.data.result;
        console.log(resultfact);
        console.log(`Status code: ${response.status}`);
        return resultfact;
      })
      .catch(function (error) {
        console.log(error);
      });
     }
     

     // Himani 2 : In return function inputBox, Button, & Output has been added
    return (
        <Layout pageId="factorial">
            <p>
                TODO: Calculate n!
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate n! via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <h1 id='TitleFact'>Enter number 'N' to calculate Factorial </h1>
                <input id='factinput' type='number' placeholder='Enter a number ' onChange={e => {setNumber(e.target.value);}} value={number}/>
                <button id='factbutton' onClick={factvalue1}>Calculate</button>
                <p>
                <output id='factoutput'>Factorial of {number} is {factorial} </output>
                </p>
        </Layout>
    );
};