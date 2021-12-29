import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { NftWithoutMetaplexAndCandymachine } from '../target/types/nft_without_metaplex_and_candymachine';

describe('nft-without-metaplex-and-candymachine', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.NftWithoutMetaplexAndCandymachine as Program<NftWithoutMetaplexAndCandymachine>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
