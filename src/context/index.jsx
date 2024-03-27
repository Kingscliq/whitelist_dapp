import React, { createContext, useState } from 'react';

import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import { contractAbi, contractAddress } from '../utils/constants';
import { useWalletConnect } from '../hooks/useWalletConnect';

export const WhiteListContext = createContext(null);

const { ethereum } = window;

// Get Ethereum Contract
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );
  return transactionContract;
};

export const WhiteListProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [loading, setLoading] = useState(false);

  const walletConnect = useWalletConnect();

  // Check if Wallet is Connected
  const isWalletConnected = async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    // fetchAllTransactions();
    if (accounts.length > 0) {
      return true;
    } else return false;
  };

  // Check if transactions Exist
  const verifyWhiteListedAccounts = async () => {
    if (!ethereum) return toast('Please connect to a Metamask');
    try {
      const transactionContract = getEthereumContract();
      // Get All Transactions
      //   const transactions = await transactionContract.fetchAllTransactions();
      //   const formattedTransactions = transactions.map((t: any) => {
      //     return {
      //       addressTo: t.reciever,
      //       addressFrom: t.sender,
      //       amount: parseInt(t.amount._hex) / 10 ** 18,
      //       message: t.message,
      //       timestamp: new Date(t.timestamp.toNumber() * 1000).toLocaleString(),
      //       keyword: t.keyword,
      //     };
      //   });

      //   setTransactions(formattedTransactions)
    } catch (error) {
      console.log(error);
    }
  };

  // Connect to Wallet
  const connectToWallet = async () => {
    console.log('Clicked');
    const accounts = await walletConnect.connectToMetamask();
    setCurrentAccount(accounts[0]);
    console.log('Clicked');
    console.log(accounts);
  };

  // Send Transaction
  const whiteListAccount = async data => {
    console.log(data);
    setLoading(true);
    if (!ethereum) {
      return toast('Please connect to a Metamask');
    } else {
      try {
        // const transactionContract = getEthereumContract();
        // const { amount, address, keyword, message } = data;
        // const parsedAmount = ethers.utils.parseEther(amount);
        // await ethereum.request({
        //   method: 'eth_sendTransaction',
        //   params: [
        //     {
        //       from: currentAccount,
        //       to: address,
        //       gas: '0x5208', // 21000 GWEI
        //       value: parsedAmount._hex, // Converted Amount to Hex before sending
        //     },
        //   ],
        // });
        // Add Transaction to Blockchain
        // const transactionHash = await transactionContract.makeTransfer(
        //   address,
        //   parsedAmount,
        //   keyword,
        //   message
        // );
        // Await transaction to be mined
        // await transactionHash.wait();
        // setLoading(false);
        // toast.success('Transaction Successfully sent to:', address as any);
      } catch (error) {
        toast.error('Transaction Failed');
        setLoading(false);
      }
    }
  };

  return (
    <WhiteListContext.Provider
      value={{
        connectToWallet,
        currentAccount,
        loading,
        isWalletConnected,
        verifyWhiteListedAccounts,
        whiteListAccount,
      }}
    >
      {children}
    </WhiteListContext.Provider>
  );
};

export const useWhiteListsContext = () => {
  const context = React.useContext(WhiteListContext);

  if (context === undefined) {
    throw new Error('WhiteListContext must be used within a WhiteListProvider');
  }

  return context;
};
