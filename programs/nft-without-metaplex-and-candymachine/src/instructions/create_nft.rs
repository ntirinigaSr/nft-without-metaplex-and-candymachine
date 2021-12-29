use anchor_lang::prelude::*;

use crate::states::*;

#[derive(Accounts)]
pub struct CreateNft<'info>{
    #[account(mut)]
    pub data: Account<'info,Data>,
    pub user: Signer<'info>
}


pub fn rpc_handler(
    ctx: Context<CreateNft>,
    name:String, 
    symbol:String, 
    uri:String,
    mint: Pubkey,
    token_account: Pubkey
) -> ProgramResult{

    let data = &mut ctx.accounts.data.data;

    let payer = ctx.accounts.user.signer_key().unwrap();

    let metadata = Metadata{
        name,
        symbol,
        uri,
        payer: *payer,
        owner: *payer,
        mint,
        token_account
    };

    data.push(metadata);

    Ok(())

}