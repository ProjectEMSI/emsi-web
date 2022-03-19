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
		};
	}
</script>

<script>
	import Discord from '../../lib/components/sidebar/Discord.svelte';

	export let article;
</script>

<svelte:head>
	<title>{article.data.name} - EMSI</title>
	<meta name="description" content={article.data.seo_description} />
</svelte:head>

<div class="space-y-6">
	<div class="relative flex w-full flex-col rounded-xl border border-slate-200 bg-white">
		<div class="relative mb-5 w-full overflow-hidden">
			<div class="mx-auto mb-5 w-full">
				<img src={article.data.image} class="h-auto w-full rounded-t-xl object-cover" alt />
			</div>
			<div class="relative mx-auto flex max-w-7xl px-5 pb-10 sm:px-10">
				<div class="flex w-full flex-col items-start text-left">
					<h1
						class="block w-full self-start text-2xl font-bold leading-tight text-slate-900 md:pt-5 lg:text-xl xl:text-2xl 2xl:text-3xl"
					>
						{article.data.name}
					</h1>
				</div>
			</div>
			<article class="prose w-full px-5 sm:px-10 lg:prose-lg">
				<p>Title</p>
				<p>What's up</p>
			</article>
		</div>
	</div>
</div>
