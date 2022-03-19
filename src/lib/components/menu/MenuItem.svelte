<script>
	import { page } from '$app/stores';
	import { Icon } from 'svelte-hero-icons';

	export let link;
	export let icon;
</script>

<a
	sveltekit:prefetch
	href={link}
	class="group flex items-center rounded-md px-2 py-2 text-sm font-semibold transition
   {$page.url.pathname === link
		? 'bg-slate-100 text-slate-900 hover:bg-slate-50 hover:text-slate-900'
		: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}"
>
	<Icon src={icon} class="mr-3 h-6 w-6 flex-shrink-0 group-hover:text-slate-600" />
	<slot />
</a>
