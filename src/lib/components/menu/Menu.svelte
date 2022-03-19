<script>
	import { fade, fly } from 'svelte/transition';
	import { Icon, X } from 'svelte-hero-icons';

	export let menuToggle;
	export let toggleMenu;
</script>

<div class="flex h-screen overflow-hidden">
	{#if menuToggle}
		<div class="fixed inset-0 z-40 flex md:hidden">
			<div
				on:click={toggleMenu}
				transition:fade={{ duration: 300 }}
				class="fixed inset-0 bg-gray-600 bg-opacity-75"
				aria-hidden="true"
			/>
			<div
				transition:fly={{ x: -300, duration: 300, opacity: 1 }}
				class="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4"
			>
				<div transition:fade={{ duration: 200 }} class="absolute top-0 right-0 -mr-12 pt-2">
					<button
						on:click={toggleMenu}
						class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					>
						<span class="sr-only">Close sidebar</span>
						<Icon src={X} class="h-6 w-6 text-white" />
					</button>
				</div>

				<div class="flex flex-shrink-0 items-center px-4">
					<h1>EMSI</h1>
				</div>

				<div class="mt-5 h-0 flex-1 overflow-y-auto">
					<nav class="space-y-1 px-2">
						<slot />
					</nav>
				</div>
			</div>

			<div class="w-14 flex-shrink-0" aria-hidden="true" />
		</div>
	{/if}

	<div class="hidden md:flex md:flex-shrink-0">
		<div class="flex w-64 flex-col">
			<div
				class="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4"
			>
				<div class="flex flex-shrink-0 items-center px-4">EMSI</div>
				<div class="mt-5 flex flex-grow flex-col">
					<nav class="flex-1 space-y-1 bg-white px-2">
						<slot />
					</nav>
				</div>
			</div>
		</div>
	</div>
</div>
