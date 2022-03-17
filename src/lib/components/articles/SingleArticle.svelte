<script>
    import { Icon, X } from "svelte-hero-icons";

    export let article;
</script>

<div class="bg-white relative p-0 overflow-hidden rounded-xl">
    <a sveltekit:prefetch href={`/articles/${article.slug}`} class="flex flex-col w-full py-6 sm:px-4 sm:flex-row p-6">
        <div class="relative flex-shrink-0 block w-full h-full p-0 overflow-hidden sm:mr-10 sm:block mt-0 sm:w-64 sm:rounded-lg">
            <img src={article.image} class="object-cover w-full h-auto rounded-xl" loading="lazy" alt={article.name} />
        </div>
        <div class="relative px-0 sm:mt-0 mt-5 w-full">
            <h2 class="text-base font-bold text-slate-800 sm:text-xl">{article.name}</h2>
            <span class="inline-block mt-2 text-slate-600 sm:text-sm line-clamp-4">
                Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut molestiae fugit.
            </span>
        </div>
    </a>
    <div class="flex justify-between px-6 py-3 border-t border-slate-200">
        <div class="flex">
            <a href="/" class="w-10 h-10 mr-2 overflow-hidden rounded-full">
                <img src="https://ui-avatars.com/api/?name=Admin&color=7F9CF5&background=EBF4FF" class="w-10 h-10" alt />
            </a>
            <div class="flex items-center text-slate-600 font-sm">
                <a href="/" class="block cursor-pointer">
                    <p class="text-sm font-medium leading-5 text-slate-700 group-hover:text-slate-900">
                        Admin
                    </p>
                    <span class="flex inline-block pr-1 text-xs font-medium leading-4 text-slate-500 transition duration-150 ease-in-out group-hover:text-slate-700 group-focus:underline capitalize">
                            2 days ago
                    </span>
                </a>
            </div>
        </div>
        <div class="flex">
            <div class="relative flex items-center justify-center">
                <div class="relative flex items-center justify-center w-8 h-8 px-3 py-1 rounded-md cursor-pointer bg-slate-100 hover:bg-blue-100 text-slate-600">
                    <Icon src={X} class="absolute w-4" />
                </div>
            </div>
        </div>
    </div>
</div>

