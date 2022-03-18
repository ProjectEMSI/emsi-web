<script context="module">
    export const prerender = true;

    export async function load({ fetch, params }) {
        const { slug } = params;

        const response = await fetch(`http://game.test/api/v1/articles/${slug}`);

        const article = await response.json();

        return {
            props: {
                article
            }
        }
    }
</script>

<script>
    import Discord from "../../lib/components/sidebar/Discord.svelte";

    export let article;
</script>

<svelte:head>
    <title>{article.data.name} - EMSI</title>
    <meta name="description" content={article.data.seo_description}>
</svelte:head>


<div class="space-y-6">
    <div class="relative bg-white flex flex-col w-full border border-slate-200 rounded-xl">
        <div class="relative w-full overflow-hidden mb-5">
            <div class="w-full mx-auto mb-5">
                <img src={article.data.image} class="object-cover w-full h-auto rounded-t-xl" alt />
            </div>
            <div class="relative flex px-5 pb-10 mx-auto sm:px-10 max-w-7xl">
                <div class="flex flex-col items-start w-full text-left">
                    <h1 class="self-start block w-full text-2xl font-bold leading-tight text-slate-900 md:pt-5 lg:text-xl xl:text-2xl 2xl:text-3xl">
                        {article.data.name}
                    </h1>
                </div>
            </div>
            <article class="w-full px-5 sm:px-10 prose lg:prose-lg">
                <p>Title</p>
                <p>What's up</p>
            </article>
        </div>
    </div>
</div>

