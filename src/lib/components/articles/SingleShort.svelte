<script>
    export let short;

    let link;
    if (short.url) {
        link = short.url;
    } else if (short.article) {
        link = `/articles/${short.article.slug}`;
    } else {
        null
    }
</script>

{#if link !== null}
    <a href={link} class="block relative p-0 overflow-hidden">
        <div class="flex flex-col w-full bg-white py-6 sm:px-4 sm:flex-row p-6 rounded-xl">
            <div class="relative px-0 w-full">
                <h2 class="text-base font-bold text-slate-800 sm:text-xl">{short.name}</h2>
                <span class="inline-block mt-2 text-xs text-slate-600 sm:text-sm">
                    {short.body}
                </span>
            </div>
        </div>
    </a>
{:else}
    <div class="relative p-0 overflow-hidden">
        <div class="flex flex-col w-full bg-white py-6 sm:px-4 sm:flex-row p-6 rounded-xl">
            <div class="relative px-0 w-full">
                <h2 class="text-base font-bold text-slate-800 sm:text-xl">{short.name}</h2>
                <span class="inline-block mt-2 text-xs text-slate-600 sm:text-sm">
                    {short.body}
                </span>
            </div>
        </div>
    </div>
{/if}
