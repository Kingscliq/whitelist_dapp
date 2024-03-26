import { createContext, useState } from 'react';
import { contractABI, contractAddress } from '../../utils/constants';

import { ethers } from 'ethers';
import { toast } from 'react-toastify';

export const WhiteListContext = createContext(null);

const { ethereum } = window;

// Get Ethereum Contract
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  return transactionContract;
};

export const WhiteListProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  // Check if Wallet is Connected
  const isWalletConnected = async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    // fetchAllTransactions();
    if (accounts.length > 0) {
      setCurrentAccount(accounts[0]);
    } else return;
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

      //   setTransactions(formattedTransactions);
    } catch (error) {
      console.log(error);
    }
  };

  // Connect to Wallet
  const connectToWallet = async () => {
    try {
      if (!ethereum) return toast('Please connect to a Metamask');
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      toast.error('No account found');
    }
  };

  // Send Transaction
  const whiteListAccount = async data => {
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
        transactions,
      }}
    >
      {children}
    </WhiteListContext.Provider>
  );
};
