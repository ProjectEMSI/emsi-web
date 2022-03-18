<script>
    import { fade, fly } from 'svelte/transition';
    import { Icon, X } from "svelte-hero-icons";

    export let menuToggle;
    export let toggleMenu;
</script>

<div class="h-screen flex overflow-hidden">
    {#if menuToggle}
    <div class="fixed inset-0 flex z-40 md:hidden">
        <div on:click={toggleMenu} transition:fade={{ duration: 300 }} class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
        <div transition:fly={{ x: -300, duration: 300, opacity: 1 }} class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
            <div transition:fade={{ duration: 200 }} class="absolute top-0 right-0 -mr-12 pt-2">
                <button on:click={toggleMenu} class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span class="sr-only">Close sidebar</span>
                    <Icon src="{X}" class="h-6 w-6 text-white" />
                </button>
            </div>

            <div class="flex-shrink-0 flex items-center px-4">
                <h1>EMSI</h1>
            </div>

            <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <nav class="px-2 space-y-1">
                    <slot></slot>
                </nav>
            </div>

        </div>

        <div class="flex-shrink-0 w-14" aria-hidden="true"></div>

    </div>
    {/if}

    <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
            <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                    EMSI
                </div>
                <div class="mt-5 flex-grow flex flex-col">
                    <nav class="flex-1 px-2 bg-white space-y-1">
                        <slot></slot>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
