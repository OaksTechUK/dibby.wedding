<script lang="ts">
</script>

<button class="{$$restProps.class || ''}">
    <slot />
</button>

<style>
    button {
        border: 1px solid rgb(29, 83, 36);
        background: #fff;
        border-radius: 7px;
        padding: 10px 30px 10px 30px;
    }

    button:hover {
        background: rgb(29, 83, 36);
        cursor: pointer;
        color: white;
        transition: 0.2s;
    }
</style>