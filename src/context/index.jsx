import React, { createContext, useState } from 'react';

import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import { contractAbi, contractAddress } from '../utils/constants';
import { useWalletConnect } from '../hooks/useWalletConnect';

export const WhiteListContext = createContext(null);

const { ethereum } = window;

// Get Ethereum Contract
const getEthereumContract = async () => {
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = await provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  return transactionContract;
};

export const WhiteListProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [whiteListing, setWhiteListing] = useState(false);
  const [verifyingAccount, setVerifyingAccount] = useState(false);
  const [accountStatusModal, setAccountStatusModal] = useState(true);

  const walletConnect = useWalletConnect();

  // Check if Wallet is Connected
  const isWalletConnected = async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

    if (accounts.length > 0) {
      return true;
    } else return false;
  };

  // Connect to Wallet
  const connectToWallet = async () => {
    const accounts = await walletConnect.connectToMetamask();
    setCurrentAccount(accounts[0]);
  };

  const whiteListAccount = async data => {
    setWhiteListing(true);
    if (!ethereum) {
      return toast('Please connect to Metamask');
    } else {
      const transactionContract = await getEthereumContract();
      const { address } = data;

      const trxHashPromise = transactionContract.whitelist(address);
      trxHashPromise
        .then(async trxHash => {
          await trxHash.wait();
          const message = await transactionContract.message();
          setWhiteListing(false);
          toast.success(String(message));
        })
        .catch(error => {
          toast.error(
            typeof error === 'string'
              ? error
              : 'Failed to whitelist account, something went wrong!!'
          );
          setWhiteListing(false);
        });
    }
  };

  return (
    <WhiteListContext.Provider
      value={{
        connectToWallet,
        currentAccount,
        verifyingAccount,
        setVerifyingAccount,
        whiteListing,
        setWhiteListing,
        isWalletConnected,
        // verifyWhiteListedAccounts,
        whiteListAccount,
        accountStatusModal,
        setAccountStatusModal,
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
