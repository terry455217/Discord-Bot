import { Events } from "discord.js"

//監聽此事件一次
export const event = {
    name: Events.ClientReady,
    once: false,
}
//觸發interaction事件
export const action = (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
}