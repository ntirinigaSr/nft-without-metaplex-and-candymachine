use anchor_lang::prelude::*;

pub mod instructions;
pub mod states;

use instructions::*;


declare_id!("AepCk26p7Q7zjmsnd79QLkbEJxXVQzgNfMAxfrKPwp4B");

#[program]
pub mod nft_without_metaplex_and_candymachine {
    use super::*;
    pub fn init_shit(ctx: Context<InitShit>) -> ProgramResult {
        instructions::init_shit::rpc_handler(ctx)
    }

    pub fn create_nft(
        ctx: Context<CreateNft>,name:String, 
        symbol:String, 
        uri:String,
        mint: Pubkey,
        token_account: Pubkey
    )-> ProgramResult{
        instructions::create_nft::rpc_handler(ctx,name,symbol,uri,mint,token_account)
    }
}



