import { Events } from "discord.js";
import { useAppStore } from '@/store/app';

const event = {
    name: Events.InteractionCreated,
    once: false,
    };

    async function action(interaction) {
    // 過濾交互指令
    if(!interaction.isChatInputCommand()) return;
    const appStore = useAppStore();
    const commandAction = appStore.commandsActionMap.get(interaction.commandName);

    if (commandAction) {
        await commandAction(interaction);
    }
}

export { event, action };
