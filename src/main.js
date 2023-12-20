//啟動discord bot

import { Client, Events, GatewayIntentBits } from 'discord.js'
import vueInit from '@/core/vue'
import dotenv from 'dotenv'
import { useAppStore } from	'@/store/app'

import {loadSlashCommands, loadEvents} from '@/core/loader'

vueInit() //vue初始化
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const appStore = useAppStore()
appStore.client = client

loadSlashCommands()
loadEvents()

client.login(process.env.TOKEN);