<script>
	import { Icon, X } from 'svelte-hero-icons';

	export let article;
</script>

<div class="relative overflow-hidden rounded-xl bg-white p-0">
	<a
		sveltekit:prefetch
		href={`/articles/${article.slug}`}
		class="flex w-full flex-col p-6 py-6 sm:flex-row sm:px-4"
	>
		<div
			class="relative mt-0 block h-full w-full flex-shrink-0 overflow-hidden p-0 sm:mr-10 sm:block sm:w-64 sm:rounded-lg"
		>
			<img
				src={article.image}
				class="h-auto w-full rounded-xl object-cover"
				loading="lazy"
				alt={article.name}
			/>
		</div>
		<div class="relative mt-5 w-full px-0 sm:mt-0">
			<h2 class="text-base font-bold text-slate-800 sm:text-xl">{article.name}</h2>
			<span class="mt-2 inline-block text-slate-600 line-clamp-4 sm:text-sm">
				Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut
				omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui
				voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut
				molestiae fugit.
			</span>
		</div>
	</a>
	<div class="flex justify-between border-t border-slate-200 px-6 py-3">
		<div class="flex">
			<a href="/" class="mr-2 h-10 w-10 overflow-hidden rounded-full">
				<img
					src="https://ui-avatars.com/api/?name=Admin&color=7F9CF5&background=EBF4FF"
					class="h-10 w-10"
					alt
				/>
			</a>
			<div class="font-sm flex items-center text-slate-600">
				<a href="/" class="block cursor-pointer">
					<p class="text-sm font-medium leading-5 text-slate-700 group-hover:text-slate-900">
						Admin
					</p>
					<span
						class="inline-block flex pr-1 text-xs font-medium capitalize leading-4 text-slate-500 transition duration-150 ease-in-out group-hover:text-slate-700 group-focus:underline"
					>
						2 days ago
					</span>
				</a>
			</div>
		</div>
		<div class="flex">
			<div class="relative flex items-center justify-center">
				<div
					class="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-slate-100 px-3 py-1 text-slate-600 hover:bg-blue-100"
				>
					<Icon src={X} class="absolute w-4" />
				</div>
			</div>
		</div>
	</div>
</div>
