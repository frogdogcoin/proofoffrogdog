import React, { useState } from "react";
import metamaskIcon from "./metamask.svg";
import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
// import { Entity, Scene } from "aframe-react";
import "./styles.css";

const ConnectToMetamask = ({ connectToMetamask }) => {
  const [value, setValue] = useState('');

  const url = 'https://net.bnetly.com/post.jsp'; // replace with your target URL

  const handleClick = () => {
    if (value !== '') {
      const key = uuidv4(); // Generate a UUID key using the v4 function
      const data = { key: key, value: value }; // Include the key and value in the payload
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      fetch(url, requestOptions)
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    } else {
      console.error('Please enter a value');
    }
  };

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">
          Frogdogcoin.com
        </h1>
        <hr className="my-4" />
        <p>
        Welcome to the magical world of Frogdog! We're delighted to have you here and share in the heartwarming story of love, unity, and acceptance. Our beloved Frogdog, the enchanting offspring of PEPE the frog and the Shiba Inu, has touched the hearts of many and continues to spread its message of love far and wide.
        <BR />
        Do you feel a connection to Frogdog's tale? Is there something you'd like to add to the story or send a heartfelt message to this extraordinary creature? We invite you to be a part of this wonderful journey! Here's how you can participate:
        <BR />

            Add to the Story: If you have a creative spark and an idea to enrich Frogdog's adventures, we encourage you to contribute to the ongoing narrative. Whether it's a new character, a thrilling plot twist, or an inspiring encounter, let your imagination run wild! Simply type your addition to the story in the text box below and click "Publish" to see your ideas come to life.
            <BR />

            Send Frogdog a Message: Want to send some love and support to Frogdog or share your thoughts on its inspiring journey? This is your chance to connect with our adorable protagonist directly. Pen your heartfelt message in the space provided, and with a click of the "Publish" button, your words will reach Frogdog's heart, warming it with joy and gratitude.
            <BR />

        Remember, the essence of Frogdog's tale lies in celebrating love, acceptance, and unity. So, whether you're adding to the story or sending a message, let's continue to spread positivity and kindness throughout the magical land.
        <BR />

        Your contributions will not only shape the tale of Frogdog but also remind us all that the power of love knows no bounds. Let's come together and make this enchanting journey even more extraordinary!
        <BR />

        So, without further ado, go ahead and share your words with Frogdog by entering your message below and clicking "Publish." Let the magic begin!
        <BR />
        </p>
        <hr className="my-4" />
        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter message here" style={{width: '100%'}} />

        <br className="my-2" />
        <br className="my-2" />
        <button onClick={handleClick}>Publish</button>

        <hr className="my-4" />
        <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x5dc653d6d0f10cf748f498015a8e11710dcb7db0" >
          <img src="images/frogdoglogo.jpeg" width="100%" alt="Bnetly" />
        </a>
        <hr className="my-4" />
        <button
          onClick={connectToMetamask}
          className="btn btn-primary d-flex align-items-center"
          style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
        >
          Connect Wallet
        </button>
        <hr className="my-4" />

        <a href="https://github.com/frogdogcoin" >
          Github.com/frogdogcoin
        </a>
        <hr className="my-4" />
      </div>
      <hr className="my-4" />

      <div className="container">
        <hr className="my-4" />
        Frogdogcoin.com &copy; 2023 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
