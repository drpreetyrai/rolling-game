import { useEffect } from "react";
// import { readContract, getContract, getProvider } from '@wagmi/core';
import { ethers } from "ethers";
// import { useContractRead , useProvider } from 'wagmi'
 
import rollingGameABI from "./contract/rollingGameABI.json";

export default function Game(){ 

    useEffect(() => {
 
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const data = new ethers.Contract(
        0x5629C470FE3fFe1be504a46E7c74380bF298dbCC,
        rollingGameABI,
        provider
      );
      console.log(data);
    }, []);
   
    // const handleRollOver = async (e) => {
    //     e.preventDefault();
    //     const data = new FormData(e.target);
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     await provider.send("eth_requestAccounts", []);
    //     const signer = await provider.getSigner();
    //     const rollovertoken = new ethers.Contract(0x5629C470FE3fFe1be504a46E7c74380bF298dbCC, rollingGameABI, signer);
    //    await rollovertoken.transfer(data.get("recipient"), data.get("amount"));
    // };

    // const handleRollUnder = async (e) => {
    //     e.preventDefault();
    //     const data = new FormData(e.target);
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     await provider.send("eth_requestAccounts", []);
    //     const signer = await provider.getSigner();
    //     const rollundertoken = new ethers.Contract(0x5629C470FE3fFe1be504a46E7c74380bF298dbCC, rollingGameABI, signer);
    //    await rollundertoken.transfer(data.get("recipient"), data.get("amount"));
    // };

    const handleTransfer = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const erc20 = new ethers.Contract(0x5629C470FE3fFe1be504a46E7c74380bF298dbCC, rollingGameABI, signer);
        await erc20.transfer(data.get("recipient1"), data.get("amount1"));
      };

      const handleRollUnder = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const erc20 = new ethers.Contract(0x5629C470FE3fFe1be504a46E7c74380bF298dbCC, rollingGameABI, signer);
        await erc20.transfer(data.get("recipient2"), data.get("amount2"));
      };

    return(
     <>
        
        <div>
            <h1> Roll Over</h1>
            <form onSubmit={handleTransfer}>
              <div className="my-3">
                <input
                  type="text"
                  name="recipient1"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Recipient address"
                />
              </div>
              <div className="my-3">
                <input
                  type="text"
                  name="amount1"
                  className="input input-bordered block w-full focus:ring focus:outline-none"
                  placeholder="Amount to transfer"
                />
              </div>
              <footer className="p-4">
                <button
                  type="submit"
                  className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                >
                  RollOver
                </button>
              </footer>
            </form>
        </div>

        <div>
            <h1>Roll Under</h1>
            <form onSubmit={handleRollUnder}>
                 <div className="my-3">
                      <input
                        type="text"
                        name="recipient2"
                        className="input input-bordered block w-full focus:ring focus:outline-none"
                        placeholder="Recipient address"
                      />
                 </div>
                 <div className="my-3">
                    <input
                      type="text"
                      name="amount2"
                      className="input input-bordered block w-full focus:ring focus:outline-none"
                      placeholder="Amount to transfer"
                     />
                </div>
                <footer className="p-4">
                   <button
                      type="submit"
                      className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                   >
                   RollOver
                  </button>
             </footer>
            </form>  



        </div>
            
     </>

    );
}





























































































