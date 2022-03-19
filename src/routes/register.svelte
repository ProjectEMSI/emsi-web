<script>
	import { t } from '$lib/translations';
	import FormLabel from '../lib/components/elements/forms/FormLabel.svelte';
	import FormInput from '../lib/components/elements/forms/FormInput.svelte';
	import PrimaryButton from '../lib/components/elements/buttons/PrimaryButton.svelte';

	let values = {
		name: 'admin',
		username: 'admin',
		email: 'admin@admin.com',
		password: 'password',
		password_confirmation: 'password'
	};
</script>

<svelte:head>
	<title>Register - EMSI</title>
</svelte:head>

<div class="space-y-6">
	<div class="relative flex w-full flex-col rounded-xl border border-slate-200 bg-white p-6">
		<form action="/api/register" class="space-y-4" method="POST">
			<div>
				<FormLabel for="name" value={$t('forms.name')} />
				<FormInput id="name" name="name" type="text" bind:value={values.name} autofocus required />
			</div>
			<div>
				<FormLabel for="username" value={$t('forms.username')} />
				<FormInput
					id="username"
					name="username"
					type="text"
					bind:value={values.username}
					required
				/>
			</div>
			<div>
				<FormLabel for="email" value={$t('forms.email')} />
				<FormInput id="email" name="email" type="email" bind:value={values.email} required />
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
				<FormLabel for="password_confirmation" value={$t('forms.password-confirmation')} />
				<FormInput
					id="password_confirmation"
					name="password_confirmation"
					type="password"
					bind:value={values.password_confirmation}
					required
				/>
			</div>
			<div>
				<PrimaryButton type="submit">Register</PrimaryButton>
			</div>
		</form>
	</div>
</div>
