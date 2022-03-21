<script context="module">
    export const prerender = true;

    export async function load({ fetch, params }) {
        const { slug } = params;

        const response = await fetch(`http://game.test/api/v1/articles/${slug}`);

        const article = await response.json();

        return {
            props: {
                article: article.data
            }
        };
    }
</script>

<script>
    import Heading from "$lib/components/articles/Blocks/Heading.svelte";

    export let article;
</script>

<svelte:head>
    <title>{article.name} - EMSI</title>
    <meta name="description" content={article.seo_description} />
</svelte:head>

<div class="space-y-6">
    <div class="relative flex w-full flex-col rounded-xl border border-slate-200 bg-white">
        <div class="relative mb-5 w-full overflow-hidden space-y-6">
            <div class="mx-auto mb-5 w-full">
                <img src="http://game.test/{article.image}" class="h-auto w-full rounded-t-xl object-cover" alt />
            </div>
            <div class="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 mx-5">
                <div class="flex items-center flex-wrap text-neutral-700 text-left text-sm leading-none flex-shrink-0">
                    <div class="flex items-center space-x-2">
                        <img src={article.author.profile_photo_url} class="w-10 h-10 rounded-full" alt>
                    </div>
                    <div class="ml-3">
                        <div class="flex items-center">
                            <span class="block font-semibold">{article.author.name}</span>
                        </div>
                        <div class="text-xs mt-1">
                            <span class="text-neutral-700">{article.created_at}</span>
                            <span class="mx-2 font-semibold">·</span>
                            <span class="text-neutral-700">1 minute reading</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mx-5">
                {#each article.tags as tag}
                    <span class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-xl dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300">
                        {tag.name.en}
                    </span>
                {/each}
            </div>
            <div class="flex mx-5">
                <div class="flex w-full flex-col items-start text-left space-y-2">
                    <h1 class="block w-full self-start text-2xl font-bold leading-tight text-slate-900 lg:text-xl xl:text-2xl 2xl:text-3xl">
                        {article.name}
                    </h1>
                    <div class="text-neutral-700">
                        {article.description}
                    </div>
                </div>
            </div>
            <article class="prose prose-sm max-w-none lg:max-w-none lg:prose mx-5 prose-slate">
                {#each article.content as block}
                    {#if block.type === 'heading'}
                        <Heading heading={block.data.heading} text={block.data.text} />
                    {:else if block.type === 'text'}
                        {@html block.data.content}
                    {:else if block.type === 'image'}
                        <figure>
                            <img src="http://game.test/{block.data.image}" alt={block.data.caption ?? null} />
                            {#if block.data.caption}
                                <figcaption>{block.data.caption}</figcaption>
                            {/if}
                        </figure>
                    {/if}
                {/each}
            </article>
        </div>
    </div>
</div>
