use anchor_lang::prelude::*;

use crate::states::*;

#[derive(Accounts)]
pub struct InitShit<'info>{
    #[account(init, payer = signer, space = 9000)]
    pub data: Account<'info,Data>,
    pub signer: Signer<'info>,
    pub system_program : Program<'info, System>,
}

pub fn rpc_handler(_ctx: Context<InitShit>) -> ProgramResult{
    Ok(())
}