<script>
	export let type, value;

	function typeAction(node) {
		node.type = type;
	}
</script>

<input
	use:typeAction
	bind:value
	class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
	{...$$props}
/>
