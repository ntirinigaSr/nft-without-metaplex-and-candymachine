use anchor_lang::prelude::*;

use crate::states::Metadata;

#[account]
#[derive(Default)]
pub struct Data{
    pub data: Vec<Metadata>
}