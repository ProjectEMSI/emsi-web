<script>
	import { t } from '$lib/translations';
	import { socket } from '$lib/store/socket';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { shorts } from '$lib/store/shorts';

	onMount(() => {
		socket.emit('subscribe', {
			channel: 'shorts'
		});

		socket.on('shorts.updated', (args) => {
			$shorts.unshift(args.short);
			$shorts.pop();
			$shorts = $shorts;
		});
	});
</script>

<div class="overflow-hidden rounded-lg border border-slate-200 bg-white p-3">
	<div class="relative w-full px-0">
		<div class="mb-2 text-xs font-bold uppercase text-slate-500">
			{$t('widgets.shorts.latest-shorts')}
		</div>
		<div class="space-y-1">
			{#each $shorts as short, i (short)}
				<div
					animate:flip={{ duration: 300 }}
					out:fade={{ duration: 250 }}
					in:fade={{ duration: 250 }}
				>
					<h3 class="text-base font-bold text-slate-800">{short.name}</h3>
					<span class="inline-block text-sm text-slate-600">{short.body}</span>
				</div>
			{/each}
		</div>
	</div>
</div>
