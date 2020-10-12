import React from 'react';
import {useState} from 'react';
import {Layout} from '../shared/layout';
import axios from 'axios';

//Himani 5: Declaring state value to store dynamic values.
export const Fibonacci = () => {
    const [number, setNumber] = useState(''); // Setting the number entered by the user
    const [fibonacci, setFibonacci] = useState(0);
    const url= 'http://localhost:3001/api/math/fibonacci/'+ number
// Himani 6: Function to call the api and store the response
     const fibvalue = async function fetchfibdata ()
     {
      console.log(url)
      const factvalue = await axios.get(url,
      )
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setFibonacci(response.data.result)
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
        <Layout pageId="fibonacci">
            <p>
                TODO: Calculate n-th Fibonacci number - Fib(n)
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate Fib(n) via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <h1>Enter number 'N' to calculate Fibonacci </h1>
                <input id='fibinput' type='number' placeholder='Enter a number ' onChange={e => {setNumber(e.target.value);}} value={number}/>
                <button id='fibbutton' onClick={fibvalue}>Calculate</button>
                <p>
                <output id='fiboutput'>Fibonacci(n) of {number} is {fibonacci} </output>
                </p>
        </Layout>
    );
};