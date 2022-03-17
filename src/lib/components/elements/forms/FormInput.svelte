<script>
    export let type, value;

    function typeAction(node) {
        node.type = type;
    }
</script>

<input use:typeAction bind:value class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm border mt-1 block w-full" {...$$props}>
