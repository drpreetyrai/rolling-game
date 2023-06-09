// import './App.css';
// import React from 'react'; 
// import Game from './Game';
// import Profile from './Profile';
// import { WagmiConfig, createClient } from 'wagmi'
// import { getDefaultProvider } from 'ethers'

// const client = createClient({
//   autoConnect: true,
//   provider: getDefaultProvider(),
// })

// function App() {
//   return (
//     <WagmiConfig client={client}>
//       <Profile />
//       <Game />
//     </WagmiConfig>
//   )
// }

// export default App;






// code code 









import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi'
 
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
 
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import Profile from './Profile';
import Game from './Game';
import { SendTransaction } from './SendTransaction'
 
// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()],
)
 
// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '...',
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})
 
// Pass client to React Context Provider
function App() {
  return (
   <> 
    <WagmiConfig client={client}>
      <Profile />
      <SendTransaction />
      <Game />
    </WagmiConfig>
   </>
  )
}

export default App;




























