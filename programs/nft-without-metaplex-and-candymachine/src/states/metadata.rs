use anchor_lang::prelude::*;

#[derive(Default,Debug,Clone,AnchorDeserialize, AnchorSerialize)]
pub struct Metadata{
    pub name: String,
    pub symbol: String,
    pub uri: String,
    pub payer: Pubkey,
    pub owner: Pubkey,
    pub mint: Pubkey,
    pub token_account: Pubkey
}