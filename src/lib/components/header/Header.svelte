<script>
	import { Icon, MenuAlt2 } from 'svelte-hero-icons';
	import { session } from '$app/stores';
	import { t } from '$lib/translations';
	import { connected } from '$lib/store/socket';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';

	export let toggleMenu;

	let playerCount = tweened(0, { duration: 700, easing: linear, delay: 0 });
	connected.subscribe((value) => {
		playerCount.set(value);
	});
</script>

<header class="relative z-10 flex h-16 flex-shrink-0 bg-white shadow">
	<button
		on:click={toggleMenu}
		class="border-r border-slate-200 px-4 text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
	>
		<span class="sr-only">Open sidebar</span>
		<Icon src={MenuAlt2} class="h-6 w-6" />
	</button>

	<div class="flex flex-1 justify-between px-4">
		<div class="flex items-center space-x-4">
			<span class="relative hidden lg:inline-flex">
				<span class="flex h-3 w-3">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"
					/>
					<span class="relative inline-flex h-3 w-3 rounded-full bg-rose-500" />
				</span>
			</span>
			<span class="hidden lg:inline-flex">
				{Math.round($playerCount)}
			</span>
		</div>
		<div class="flex items-center space-x-4">
			{#if $session.isLoggedIn}
				<form action="/api/logout?_method=DELETE" method="post">
					<button type="submit">Logout</button>
				</form>
			{:else}
				<a
					sveltekit:prefetch
					href="/login"
					class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					{$t('common.sign-in')}
				</a>
				<a
					sveltekit:prefetch
					href="/register"
					class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					{$t('common.sign-up')}
				</a>
			{/if}
		</div>
	</div>
</header>
