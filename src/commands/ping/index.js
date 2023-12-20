import { ALLOWED_SIZES, SlashCommandBuilder } from "discord.js";

//定義指定長怎樣 - upload
export const command = new SlashCommandBuilder()
.setName('ping')
.setDescription('ping Command')

//執行指定的功能function
export const action = async (ctx) =>{
    ctx.reply('pong !')
}