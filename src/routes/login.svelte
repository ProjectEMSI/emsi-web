<script context="module">
    export async function load({ session }) {
        if (session.isLoggedIn) {
            return {
                status: 303,
                redirect: '/'
            }
        }

        return {}
    }
</script>

<script>
    import Discord from "../lib/components/sidebar/Discord.svelte";
    import FormLabel from "../lib/components/elements/forms/FormLabel.svelte";
    import FormInput from "../lib/components/elements/forms/FormInput.svelte";
    import PrimaryButton from "../lib/components/elements/buttons/PrimaryButton.svelte";

    let values = {
        email: 'majkie.tros@gmail.com',
        password: 'majkie1143'
    }
</script>

<svelte:head>
    <title>Login - EMSI</title>
</svelte:head>

<div class="relative w-full">
    <div class="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div class="col-span-2 space-y-6">
            <div class="relative bg-white flex flex-col w-full border border-slate-200 rounded-xl p-6">
                <form action="/api/login" class="space-y-4" method="POST">
                    <div>
                        <FormLabel for="email" value="E-Mail" />
                        <FormInput id="email" name="email" type="email" bind:value={values.email} autofocus required />
                    </div>
                    <div>
                        <FormLabel for="password" value="Password" />
                        <FormInput id="password" name="password" type="password" bind:value={values.password} required />
                    </div>
                    <div>
                        <PrimaryButton type="submit">Login</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
        <div class="hidden sm:block sm:col-span-1 space-y-6">
            <Discord />
        </div>
    </div>
</div>
