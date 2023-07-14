import { ethers } from "ethers";
import NFTMinter from "./Nft-Minter.json";

export async function connectWallet() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  // Insert deployed contract link here
  const contract = new ethers.Contract(`0xF33d5A48098847beec0B7E349f759cb2121e3CD8`, NFTMinter.abi, signer);
  
  return { signer, contract };
  }
  
  export async function connectMetaMask (){
    const { signer } = await connectWallet();
    const address = await signer.getAddress();
    const balance = await signer.getBalance();
    const formattedBalance = ethers.utils.formatEther(balance);
    return {address, formattedBalance}
  };
  