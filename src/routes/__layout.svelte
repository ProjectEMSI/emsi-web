<script context="module">
	import { locale, loadTranslations } from '$lib/translations';
	import { fetchShorts } from "../lib/store/shorts.js";

	export async function load({ url }) {
		const { pathname } = url;

		const defaultLocale = 'cs'; // get from cookie, user session, ...

		const initLocale = locale.get() || defaultLocale; // set default if no locale already set

		await fetchShorts();

		await loadTranslations(initLocale, pathname); // keep this just before the `return`

		return {};
	}
</script>

<script>
	import '../app.css';
	import 'nprogress/nprogress.css';

	import { navigating } from "$app/stores";
	import { t } from '$lib/translations';
	import NProgress from "nprogress";
	import Menu from "../lib/components/menu/Menu.svelte";
	import MenuItem from "../lib/components/menu/MenuItem.svelte";
	import { Fire, Home, InformationCircle } from "svelte-hero-icons";
	import Header from "../lib/components/header/Header.svelte";
	import Notifications from "../lib/components/elements/Notifications.svelte";
	import Shorts from "../lib/components/sidebar/Shorts.svelte";
	import Discord from "../lib/components/sidebar/Discord.svelte";

	NProgress.configure({
		minimum: 0.3,
		easing: 'ease',
		speed: 800,
		showSpinner: false
	})

	$: {
		if ($navigating) {
			NProgress.start();
		}

		if (!$navigating) {
			NProgress.done();
		}
	}

	let menuToggle = false;
</script>

<div class="h-screen flex overflow-hidden">

	<Menu menuToggle={menuToggle} toggleMenu={() => menuToggle = false}>
		<MenuItem link="/" icon="{Home}">
			{$t('common.home')}
		</MenuItem>
		<MenuItem link="/pages/join-us" icon={Fire}>
			{$t('common.join-us')}
		</MenuItem>
		<MenuItem link="/pages/about-us" icon="{InformationCircle}">
			{$t('common.about-us')}
		</MenuItem>
	</Menu>

	<div class="flex flex-col w-0 flex-1 overflow-hidden">

		<Header toggleMenu={() => menuToggle = true} />

<!--		<Notifications />-->

		<main class="flex-1 relative overflow-y-auto focus:outline-none">
			<div class="py-6">
				<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
					<div class="relative w-full">
						<div class="grid gap-6 grid-cols-1 lg:grid-cols-3">
							<div class="col-span-full sm:col-span-2">
								<slot />
							</div>
							<div class="hidden sm:block sm:col-span-1 space-y-6">
								<slot name="sidebar">
									<Shorts />
									<Discord />
								</slot>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</div>
