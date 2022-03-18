<script>
    import { socket } from "$lib/store/socket";
    import { onMount } from "svelte";
    import { slide } from 'svelte/transition';

    export let shorts = [];

    onMount(() => {
        socket.emit('subscribe', {
            channel: 'shorts'
        })

        socket.on('shorts.updated', args => {
            shorts.unshift(args.short);
            shorts.pop()
            shorts = shorts;
        })
    })
</script>

<div class="p-3 overflow-hidden border rounded-lg bg-white border-slate-200">
    <div class="relative px-0 w-full">
        <div class="mb-2 font-bold uppercase text-xs text-slate-500">
            Latest shorts
        </div>
        <div class="space-y-1">
            {#if shorts.length > 0}
                {#each shorts as short (short)}
                    <div transition:slide|local>
                        <h3 class="text-base font-bold text-slate-800">{short.name}</h3>
                        <span class="inline-block text-slate-600 text-sm">{short.body}</span>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</div>
