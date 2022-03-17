<script>
    import { page } from '$app/stores';
    import { Icon } from "svelte-hero-icons";

    export let link;
    export let icon;
</script>

<a sveltekit:prefetch
   href="{link}"
   class="group flex items-center px-2 py-2 text-sm font-semibold rounded-md transition
   {$page.url.pathname === link ? 'bg-slate-100 text-slate-900 hover:bg-slate-50 hover:text-slate-900' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}"
>
    <Icon src="{icon}" class="group-hover:text-slate-600 mr-3 flex-shrink-0 h-6 w-6" />
    <slot></slot>
</a>
