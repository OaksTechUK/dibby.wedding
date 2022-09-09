<script lang="ts">
	import { onDestroy } from 'svelte';
    import { distanceToNow } from '../utils/times';
    export let suffix: string = '';
    export let includeSeconds: boolean = true;
    export let eventDate: Date;
    
	let countdownText: string;
	let frame: number;

	(function update() {
		frame = requestAnimationFrame(update);
		countdownText = distanceToNow(eventDate, includeSeconds);

        if (suffix != '' && suffix != undefined) {
            countdownText = `${countdownText} ${suffix}`
        }
	})();

	onDestroy(() => {
		cancelAnimationFrame(frame);
	});
</script>

<p aria-label={countdownText}>{countdownText}</p>

<style>
    p {
        padding: 0;
        margin: 0;
    }
</style>