import React from 'react';
import logo from './logo.svg';
import './index.css';
import * as spl from 'easy-spl';
import {Connection, clusterApiUrl, Keypair, LAMPORTS_PER_SOL} from '@solana/web3.js';
import {Token,TOKEN_PROGRAM_ID} from '@solana/spl-token';




function App() {


  const mintNft = async () => {

    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    const aliceKey = Keypair.generate();
    const alice = spl.Wallet.fromKeypair(connection, aliceKey);

    const bobKey = Keypair.generate();
    const bob = spl.Wallet.fromKeypair(connection, bobKey);

    const airdropSignature = await connection.requestAirdrop(alice.publicKey,LAMPORTS_PER_SOL);

    await connection.confirmTransaction(airdropSignature, "confirmed");
    

    const mint = await spl.Mint.create(connection,0,alice.publicKey,alice);

    let result = await mint.mintTo(bob.publicKey,alice,1);
    console.log(`Result ${result}`);

    await bob.transferToken(mint.key,alice.publicKey, 1);
    
    console.log(`Mint ${mint}`)

    // const aliceKeyPair = Keypair.generate();
    // const bobKeyPair = Keypair.generate();

    // const airdropSignature = await connection.requestAirdrop(aliceKeyPair.publicKey,9 * LAMPORTS_PER_SOL);
    // await connection.confirmTransaction(airdropSignature, "confirmed");

    // const tokenMintAccount = await Token.createMint(connection,aliceKeyPair,aliceKeyPair.publicKey,null,0, TOKEN_PROGRAM_ID);

    // const aliceTokenAccount = await tokenMintAccount.getOrCreateAssociatedAccountInfo(aliceKeyPair.publicKey);  
    
    // await tokenMintAccount.mintTo(
    //   aliceTokenAccount.address,
    //   aliceKeyPair.publicKey,
    //   [],
    //   1
    // );

    // await tokenMintAccount.setAuthority(
    //   tokenMintAccount.publicKey,
    //   null,
    //   "MintTokens",
    //   aliceKeyPair.publicKey,
    //   []
    // );
    
  }

  return (
    <div className="App">
      <div className="flex flex-col pt-10 items-center">
        <div>
          <h3 className="text-center text-gray-900 font-bold text-xl ">Mint token</h3>
        </div>
        <div className="pt-4">
          <button onClick={mintNft} className="text-white text-lg font-semibold bg-green-500 w-64 h-12 rounded-md shadow-md shadow-green-200">Mint</button>
        </div>
      </div>
    </div>
  );
}

export default App;
