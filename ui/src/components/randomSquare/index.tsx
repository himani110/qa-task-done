import React from 'react';
import {useState} from 'react';
import {Layout} from '../shared/layout';
import axios from 'axios';

//Himani 5: Declaring state value to store dynamic values.
export const RandomSquare = () => {
    const [number, setNumber] = useState(''); // Setting the number entered by the user
    const [randomSq, setRandomSqr] = useState(0);
    const url= 'http://localhost:3001/api/math/random-square/'+ number
// Himani 6: Function to call the api and store the response
     const randomSqr = async function fetchfibdata ()
     {
      console.log(url)
      const randomsqrvalue = await axios.get(url,
      )
      .then(function (response) {
        setRandomSqr(response.data.result)
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
        <Layout pageId="randomSquare">
            <p>
                TODO: Calculate random square (i.e. rand(0, n)^2), where random number is between 0 and n.
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate rand(0, n)^2 via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <h1>Enter number 'N' to calculate Random-Square </h1>
                <input id='rsqrinput' type='number' placeholder='Enter a number ' onChange={e => {setNumber(e.target.value);}} value={number}/>
                <button id='rsqrbutton' onClick={randomSqr}>Calculate</button>
                <p>
                <output id='rsqroutput'>Random Square Calculate is {randomSq} </output>
                </p>

        </Layout>
    );
};