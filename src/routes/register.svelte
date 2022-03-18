<script>
    import FormLabel from "../lib/components/elements/forms/FormLabel.svelte";
    import FormInput from "../lib/components/elements/forms/FormInput.svelte";
    import PrimaryButton from "../lib/components/elements/buttons/PrimaryButton.svelte";
    import Discord from "../lib/components/sidebar/Discord.svelte";

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
    <div class="relative bg-white flex flex-col w-full border border-slate-200 rounded-xl p-6">
        <form action="/api/register" class="space-y-4" method="POST">
            <div>
                <FormLabel for="name" value="Name" />
                <FormInput id="name" name="name" type="text" bind:value={values.name} autofocus required />
            </div>
            <div>
                <FormLabel for="username" value="Username" />
                <FormInput id="username" name="username" type="text" bind:value={values.username} required />
            </div>
            <div>
                <FormLabel for="email" value="E-Mail" />
                <FormInput id="email" name="email" type="email" bind:value={values.email} required />
            </div>
            <div>
                <FormLabel for="password" value="Password" />
                <FormInput id="password" name="password" type="password" bind:value={values.password} required />
            </div>
            <div>
                <FormLabel for="password_confirmation" value="Password Confirmation" />
                <FormInput id="password_confirmation" name="password_confirmation" type="password"
                           bind:value={values.password_confirmation} required />
            </div>
            <div>
                <PrimaryButton type="submit">Register</PrimaryButton>
            </div>
        </form>
    </div>
</div>
