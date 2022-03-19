<script>
	export let value;
</script>

<label {...$$props} class="block text-sm font-medium text-gray-700">
	<span>
		<slot>
			{value}
		</slot>
	</span>
</label>
