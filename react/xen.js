import React, { useState, useContext, useEffect, useRef } from 'react'
import { ethers } from 'ethers'

import './Xen.css'

import logo from '../assets/xen.dark.jpeg'
import ethereum_logo from '../assets/ethereum-logo.png'
import bsc_logo from '../assets/bsc-logo.svg'
import polygon_logo from '../assets/polygon-logo.png'
import avalanche_logo from '../assets/avalanche-logo.png'
import ethpow_logo from '../assets/ethpow-logo.png'
import moonbeam_logo from '../assets/moonbeam-logo.png'
import evmos_logo from '../assets/evmos-logo.png'
import fantom_logo from '../assets/fantom-logo.svg'
import dogechain_logo from '../assets/dogechain-logo.png'
import okx_logo from '../assets/okx-logo.svg'
import pulse_logo from '../assets/pulse-chain-logo.png'
import x1_logo from '../assets/x1-logo.png'

function Xen() {
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        <img src={logo} className="rounded-md inline" /> Xen Ecosystem
      </h2>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <div className="relative min-w-0 p-4 bg-white border border-gray-300 dark:border-none rounded shadow-xs dark:bg-gray-800">
          <h4 className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
            XEN
          </h4>

          <button type="button"
            className="absolute top-4 right-4 px-2 py-2 bg-blue-600 rounded-md text-white outline-none shadow-lg transform active:scale-[.8] transition-transform">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          <div className="contract_address text-gray-700 dark:text-gray-400 block text-sm mt-4">
            <div className="m-2 mb-4">
              <img src={ethereum_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/ethereum/0x2a9d2ba41aba912316d16742f259412b681898db" target="_blank"
                className="align-bottom">
                {`0x06450dEe7FD2Fb8E39061434BAbCFC05599a6Fb8`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={bsc_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/bsc/0xaaa77f0acdc01cbe71e74f177efd38697b5a7feb" target="_blank"
                className="align-bottom">
                {`0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={polygon_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/polygon/0x97ffb2574257280e0fb2fa522345f0e81faae711" target="_blank"
                className="align-bottom">
                {`0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={avalanche_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/avalanche/0x55e41d322a6da698137b4557431f2754d7e6ea5e" target="_blank"
                className="align-bottom">
                {`0xC0C5AA69Dbe4d6DDdfBc89c0957686ec60F24389`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={ethpow_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/ethereumpow/0x7fee6a68a09cf4592a04a3ae02cc6db0af6e6e34" target="_blank"
                className="align-bottom">
                {`0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={moonbeam_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/moonbeam/0x43a094dc0fb493fae9955c32e88d6ef839c5df7e" target="_blank"
                className="align-bottom">
                {`0xb564A5767A00Ee9075cAC561c427643286F8F4E1`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={evmos_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/evmos/0xf4ac0c589d8d0b196cf194026c646d00b1d40a76" target="_blank"
                className="align-bottom">
                {`0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e`}
              </a>
            </div>
            
            <div className="m-2 mb-4">
              <img src={fantom_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/fantom/0xab3738d7671a50e5c49d8c17b0e1f5051cbc4aad" target="_blank"
                className="align-bottom">
                {`0xeF4B763385838FfFc708000f884026B8c0434275`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={dogechain_logo} className="w-6 mr-2 inline bg-blend-darken" />
              <span
                className="line-through align-bottom">
                {`0x948eed4490833D526688fD1E5Ba0b9B35CD2c32e`}
              </span>
            </div>

            <div className="m-2 mb-4">
              <img src={okx_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/okc/0x698e2966d6f38da1803e21fb04858f17bb1e5d3d" target="_blank"
                className="align-bottom">
                {`0x1cC4D981e897A3D2E7785093A648c0a75fAd0453`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={pulse_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/pulsechain/0x9194fe03e648e1220fa8267d699cef1a20a6ac88" target="_blank"
                className="align-bottom">
                {`0x8a7FDcA264e87b6da72D000f22186B4403081A2a`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={x1_logo} className="w-6 mr-2 inline" />
              <span
                className="align-bottom">
                {`0xD342D63466B520d8D331CaFF863900d402Aa5b00`}
              </span>
            </div>
          </div>

          <p id="hextonumber" className="my-4 pt-4 dark:text-white">- - -</p>

        </div>
        <div className="min-w-0 p-4 text-white bg-purple-400 rounded shadow-xs">
          <h4 className="mb-4 font-semibold">
            DXN
          </h4>

          <div className="contract_address text-gray-700 dark:text-gray-900 block text-sm mt-4">
            <div className="m-2 mb-4">
              <img src={ethereum_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/ethereum/0x7f808fd904ffa3eb6a6f259e6965fb1466a05372" target="_blank"
                className="align-bottom">
                {`0x80f0C1c49891dcFDD40b6e0F960F84E6042bcB6F`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={bsc_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/bsc/0xe0f166b714726efb679ad48ba58e8b1403e363ea" target="_blank"
                className="align-bottom">
                {`0xCcd09b80453335aa914f5d9174984b6586c315EC`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={polygon_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/polygon/0x5ddf65bdc8c4b981b9e9b864e9f67d07d9b1201d" target="_blank"
                className="align-bottom">
                {`0x47DD60FA40A050c0677dE19921Eb4cc512947729`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={avalanche_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/avalanche/0x0c1ad4dfbe5a53e2689d5abccc82e1fb8eb34980" target="_blank"
                className="align-bottom">
                {`0x80f0C1c49891dcFDD40b6e0F960F84E6042bcB6F`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={ethpow_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/ethereumpow/0xa248f12d2a3690561a2b5c41ef36e4006f04d611" target="_blank"
                className="align-bottom">
                {`0xc418B123885d732ED042b16e12e259741863F723`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={moonbeam_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/moonbeam/0xc5ede6f445a2cda6c05dd2161f6dd7667d6bcfad" target="_blank"
                className="align-bottom">
                {`0xc418B123885d732ED042b16e12e259741863F723`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={evmos_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/evmos/0xf4ac0c589d8d0b196cf194026c646d00b1d40a76" target="_blank"
                className="align-bottom">
                {`0xc418B123885d732ED042b16e12e259741863F723`}
              </a>
            </div>
            
            <div className="m-2 mb-4">
              <img src={fantom_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/fantom/0xa700b87d19cc1bb914569127fc11455bc0d2b0d3" target="_blank"
                className="align-bottom">
                {`0xc418B123885d732ED042b16e12e259741863F723`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={dogechain_logo} className="w-6 mr-2 inline bg-blend-darken" />
              <span
                className="line-through align-bottom">
                {`0xc418B123885d732ED042b16e12e259741863F723`}
              </span>
            </div>

            <div className="m-2 mb-4">
              <img src={okx_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/okc/0x25f4ec6040f4d9a938c3291428571bf3675254dd" target="_blank"
                className="align-bottom">
                {`0xc418B123885d732ED042b16e12e259741863F723`}
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <div className="min-w-0 p-4 bg-white border border-gray-300 dark:border-none rounded shadow-xs dark:bg-gray-800">
          <h4 className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
            FENIX
          </h4>

          <div className="contract_address text-gray-700 dark:text-gray-400 block text-sm mt-4">
            <div className="m-2 mb-4">
              <img src={ethereum_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/ethereum/0x4a8c81a8e7b41838923273e64baecdcd35bdfd96" target="_blank"
                className="align-bottom">
                {`0xC3e8abfA04B0EC442c2A4D65699a40F7FcEd8055`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={bsc_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/bsc/0xaaa77f0acdc01cbe71e74f177efd38697b5a7feb" target="_blank"
                className="align-bottom">
                {`0xC3e8abfA04B0EC442c2A4D65699a40F7FcEd8055`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={polygon_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/polygon/0xe820318dc391b84d8305ad836ce998660f116b43" target="_blank"
                className="align-bottom">
                {`0xC3e8abfA04B0EC442c2A4D65699a40F7FcEd8055`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={avalanche_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/avalanche/0x55e41d322a6da698137b4557431f2754d7e6ea5e" target="_blank"
                className="align-bottom">
                {`0xC0C5AA69Dbe4d6DDdfBc89c0957686ec60F24389`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={ethpow_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/ethereumpow/0x7fee6a68a09cf4592a04a3ae02cc6db0af6e6e34" target="_blank"
                className="align-bottom">
                {`0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={moonbeam_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/moonbeam/0x43a094dc0fb493fae9955c32e88d6ef839c5df7e" target="_blank"
                className="align-bottom">
                {`0xb564A5767A00Ee9075cAC561c427643286F8F4E1`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={evmos_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/evmos/0xf4ac0c589d8d0b196cf194026c646d00b1d40a76" target="_blank"
                className="align-bottom">
                {`0x2AB0e9e4eE70FFf1fB9D67031E44F6410170d00e`}
              </a>
            </div>
            
            <div className="m-2 mb-4">
              <img src={fantom_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/fantom/0xab3738d7671a50e5c49d8c17b0e1f5051cbc4aad" target="_blank"
                className="align-bottom">
                {`0xeF4B763385838FfFc708000f884026B8c0434275`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={dogechain_logo} className="w-6 mr-2 inline bg-blend-darken" />
              <span
                className="line-through align-bottom">
                {`0x948eed4490833D526688fD1E5Ba0b9B35CD2c32e`}
              </span>
            </div>

            <div className="m-2 mb-4">
              <img src={okx_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/okc/0x698e2966d6f38da1803e21fb04858f17bb1e5d3d" target="_blank"
                className="align-bottom">
                {`0x1cC4D981e897A3D2E7785093A648c0a75fAd0453`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={pulse_logo} className="w-6 mr-2 inline" />
              <a href="https://dexscreener.com/pulsechain/0x9194fe03e648e1220fa8267d699cef1a20a6ac88" target="_blank"
                className="align-bottom">
                {`0x8a7FDcA264e87b6da72D000f22186B4403081A2a`}
              </a>
            </div>

            <div className="m-2 mb-4">
              <img src={x1_logo} className="w-6 mr-2 inline" />
              <span
                className="align-bottom">
                {`0xD342D63466B520d8D331CaFF863900d402Aa5b00`}
              </span>
            </div>
          </div>

          <p id="hextonumber" className="my-4 pt-4 dark:text-white">- - -</p>

        </div>
        <div className="min-w-0 p-4 text-white bg-purple-400 rounded shadow-xs">
          <h4 className="mb-4 font-semibold">
            DXN
          </h4>

        </div>
      </div>

    </>
  )
}

export default Xen