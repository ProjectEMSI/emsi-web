<script>
    export let value;
</script>

<label {...$$props} class="block font-medium text-sm text-gray-700">
    <span>
        <slot>
            {value}
        </slot>
    </span>
</label>
