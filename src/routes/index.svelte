<script context="module">
    export async function load({ fetch }) {
        const response = await Promise.all([
            fetch('http://game.test/api/v1/articles/latest'),
        ])

        const articles = await response[0].json();

        return {
            props: {
                articles: articles.data,
            }
        }
    }
</script>

<script>
    import { t } from "$lib/translations";
    import Loading from "../lib/components/elements/Loading.svelte";
    import SingleArticle from "../lib/components/articles/SingleArticle.svelte";
    import SingleShort from "../lib/components/articles/SingleShort.svelte";

    let loading = false;
    export let articles;

    let selected = 'latest';

    async function selectTab(tab) {
        if (tab !== selected) {
            loading = true;

            selected = tab;

            const url = tab === 'shorts' ? 'shorts' : `articles/${tab}`;

            const response = await fetch(`http://game.test/api/v1/${url}`);

            const results = await response.json();

            articles = results.data;

            loading = false;
        }
    }
</script>

<svelte:head>
    <title>{$t('common.home')} - EMSI</title>
</svelte:head>


<div class="space-y-6">
    <div class="overflow-hidden bg-white border mb-5 border-slate-200 rounded-xl">
        <div class="relative z-0 flex divide-x divide-slate-200">
            <button on:click={() => selectTab('latest')}
                    class="transition outline-none relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-slate-900 bg-white group hover:bg-slate-50 focus:z-10">
                <span>{$t('home.latest')}</span>
                <span aria-hidden="true"
                      class="absolute inset-x-0 bottom-0 h-0.5 {selected === 'latest' ? 'bg-blue-500' : 'bg-transparent'}"></span>
            </button>
            <button on:click={() => selectTab('featured')}
                    class="transition outline-none relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-slate-900 bg-white group hover:bg-slate-50 focus:z-10">
                <span>{$t('home.featured')}</span>
                <span aria-hidden="true"
                      class="absolute inset-x-0 bottom-0 h-0.5 {selected === 'featured' ? 'bg-blue-500' : 'bg-transparent'}"></span>
            </button>
            <button on:click={() => selectTab('shorts')}
                    class="transition outline-none relative flex-1 min-w-0 px-4 py-4 overflow-hidden text-sm font-medium text-center text-slate-900 bg-white group hover:bg-slate-50 focus:z-10">
                <span>{$t('home.shorts')}</span>
                <span aria-hidden="true"
                      class="absolute inset-x-0 bottom-0 h-0.5 {selected === 'shorts' ? 'bg-blue-500' : 'bg-transparent'}"></span>
            </button>
        </div>
    </div>

    {#if loading}
        <Loading />
    {:else}
        {#if articles.length > 0}
            {#if selected !== 'shorts'}
                {#each articles as article}
                    <SingleArticle article={article} />
                {/each}
            {:else}
                {#each articles as short}
                    <SingleShort short={short} />
                {/each}
            {/if}
        {:else}
            <div class="text-center">
                {$t('home.missing-content')}
            </div>
        {/if}
    {/if}
</div>
