import { REST, Routes, Collection } from 'discord.js';
import fg from 'fast-glob';
import { useAppStore } from '@/store/app';

const updateSlashCommands = async (commands) => {
    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    
    // 這裡應該直接調用 Routes.applicationGuildCommands 函數
    try {
        const result = await rest.put(
            Routes.applicationGuildCommands(process.env.APPLICATION_ID, '903835172363972678'),
            { body: commands }
        );
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

export const loadSlashCommands = async () => {
    const appStore = useAppStore()
    const commands = [];
    const actions = new Collection();

    const files = await fg('./src/commands/**/index.js');

    for (const file of files) {
        const cmd = await import(file);
        commands.push(cmd.command);
        actions.set(cmd.command.name, cmd.action);
    }

    // 現在 updateSlashCommands 是異步的，這裡需要等待它完成
    await updateSlashCommands(commands);
    appStore.commandsActionMAP = actions

    console.log(appStore.commandsActionMAP)
};

export const loadEvents = async() => {
    const appStore = useAppStore()
    const client = appStore.client
    const files = await fg('./src/events/**/index.js');

    for (const file of files) {
        const eventFile = await import(file)

        if(eventFile.event.once) {
            client.once(
                eventFile.event.name,
                eventFile.action
            )
        }
        else{
            client.on(
                eventFile.event.name,
                eventFile.action
            )
        }
    }
}