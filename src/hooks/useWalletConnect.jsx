import { ethers } from 'ethers';
import { networksConfig } from '../utils/networkConfig';
import { toast } from 'react-toastify';

export const useWalletConnect = () => {
  const { ethereum } = window;
  const switchToHederaNetwork = async ethereum => {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: 0x128 }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainName: `Hedera (${networksConfig.hederaTestnet.chainName})`,
                chainId: networksConfig.hederaTestnet.chainId,
                nativeCurrency: {
                  name: 'HBAR',
                  symbol: 'HBAR',
                  decimals: 18,
                },
                rpcUrls: [networksConfig.hederaTestnet.jsonRpcUrl],
              },
            ],
          });
        } catch (error) {
          console.error(error);
        }
      }
      console.error(error);
    }
  };

  const getProvider = () => {
    if (!ethereum) {
      throw new Error('Metamask is not installed! Go install the extension!');
    }

    return new ethers.providers.Web3Provider(ethereum);
  };

  const connectToMetamask = async () => {
    const provider = getProvider();

    // keep track of accounts returned
    let accounts = [];

    try {
      await switchToHederaNetwork(ethereum);
      accounts = await provider.send('eth_requestAccounts', []);
    } catch (error) {
      if (error.code === 4001) {
        toast.warn('Please connect to Metamask.');
      } else {
        console.error(error);
      }
    }

    return accounts;
  };

  return { switchToHederaNetwork };
};
