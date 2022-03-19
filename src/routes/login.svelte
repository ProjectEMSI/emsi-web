<script context="module">
	export async function load({ session }) {
		if (session.isLoggedIn) {
			return {
				status: 303,
				redirect: '/'
			};
		}

		return {};
	}
</script>

<script>
	import { t } from '$lib/translations';
	import FormLabel from '../lib/components/elements/forms/FormLabel.svelte';
	import FormInput from '../lib/components/elements/forms/FormInput.svelte';
	import PrimaryButton from '../lib/components/elements/buttons/PrimaryButton.svelte';

	let values = {
		email: 'majkie.tros@gmail.com',
		password: 'majkie1143'
	};
</script>

<svelte:head>
	<title>Login - EMSI</title>
</svelte:head>

<div class="space-y-6">
	<div class="relative flex w-full flex-col rounded-xl border border-slate-200 bg-white p-6">
		<form action="/api/login" class="space-y-4" method="POST">
			<div>
				<FormLabel for="email" value={$t('forms.email')} />
				<FormInput
					id="email"
					name="email"
					type="email"
					bind:value={values.email}
					autofocus
					required
				/>
			</div>
			<div>
				<FormLabel for="password" value={$t('forms.password')} />
				<FormInput
					id="password"
					name="password"
					type="password"
					bind:value={values.password}
					required
				/>
			</div>
			<div>
				<PrimaryButton type="submit">{$t('common.sign-in')}</PrimaryButton>
			</div>
		</form>
	</div>
</div>
