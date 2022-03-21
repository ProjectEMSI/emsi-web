<script>
    export let heading;
    export let text;
</script>

{#if heading === 'h1'}
    <h1>{text}</h1>
{:else if heading === 'h2'}
    <h2>{text}</h2>
{:else}
    <h3>{text}</h3>
{/if}
