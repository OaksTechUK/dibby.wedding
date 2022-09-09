<svelte:head>
	<title>Dan & Libby | Arnos Vale {formattedDate}</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<script lang="ts">
	import { format } from 'date-fns';
	import { ceremonyTime } from './utils/times';
	import enLocale from 'date-fns/locale/en-GB';
	import Countdown from "./components/Countdown.svelte";
	import Button from "./components/Button.svelte"
	import { onDestroy } from 'svelte';
	let backgroundImages = ["Northumbria2019", "Anniversary2022", "LandsEnd2017", "London2018", "Slamdunk2022"];
	let backgroundImage: string = "Northumbria2019";
	let eventDate: Date = new Date(2023, 6, 27, 14, 30);
	let y: number;
	let clientHeight: number;
	let backgroundFrame: number;

	let location = {
		Country: "UK",
		City: "Bristol",
		AddressLine1: "Arnos Vale",
		AddressLine2: "Bath Road",
		Postcode: "BS4 3EW"
	}

	let formattedDate = format(eventDate, "PPPP", {
		locale: enLocale
	});

	(function setBackgroundImage() {
		backgroundFrame = requestAnimationFrame(setBackgroundImage);
		let breakpoint = clientHeight / backgroundImages.length - 1;
		backgroundImage = backgroundImages[Math.trunc(y / breakpoint)];
	})();

	onDestroy(() => {
		cancelAnimationFrame(backgroundFrame);
	});
</script>

<main bind:clientHeight>
	<div class="fixed-panel" style:background-image="url('static/img/{backgroundImage || backgroundImages[0]}.jpg">
		<div class="subtitle great-vibes">
			<p class="couple-name color-white fs-3 w-100 m-0" style="margin-bottom:40px;">Dan & Libby</p>
			<Countdown 
				eventDate={ceremonyTime}
				suffix={"until we get married!"} 
			/>
		</div>
	</div>
	<div class="scroll-panel">
		<article id="event-info" class="page event-info">
			<div class="ta-center">
				<p class="ta-center">{formattedDate}</p>
				<h1 class="great-vibes">{location.City}, {location.Country}</h1>
				<Countdown 
					eventDate={ceremonyTime}
					includeSeconds={false}
				/>
				<Button class="mt-2">RSVP</Button>
			</div>
		</article>
		<article id="story" class="page">
			<div>
				<h1 class="title">Story</h1>
				<p class="p-sides-1 bold-first">
					Hello! In case you didn't know, we were students together at Plymouth University, where a certain introduction occurred which we will save for the speeches so you have something to look forward to - it's a goodun! We had known each other for little over a year before we began dating after being really great friends which we think makes a great foundation for an amazing relationship.
				</p>
				<p class="p-sides-1">
					We moved in together fairly early on in our relationship, and since then it's been jokes and farts around the clock to keep us giggling way in to the night.
				</p>
			</div>
		</article>
		<article id="tidbits" class="page">
			<div>
				<h1 class="title">Tidbits</h1>
			</div>
		</article>
		<article id="schedule" class="page">
			<div>
				<h1 class="title">Schedule</h1>
			</div>
		</article>
		<article id="travel" class="page">
			<div>
				<h1 class="title">Travel</h1>
				<h2>Getting In</h2>
				<p>Those traveling from abroad, we recommend landing in to Bristol Airport.</p>
			</div>
		</article>
		<article id="q-and-a" class="page">
			<div>
				<h1 class="title">Q & A</h1>
			</div>
		</article>
		<article id="wedding-party" class="page">
			<div>
				<h1 class="title">Wedding Party</h1>
			</div>
		</article>
	</div>
</main>

<style lang="scss">
	#event-info::before{
		content: "";
		position: absolute;
		top: 0; 
		left: 0;
		width: 100%; 
		height: 100%;  
		opacity: .15; 
		z-index: -1;
		background-image: url('/static/img/ArnosVale.jpeg');
		background-size: cover;
		background-position: center;
	}
	main {
		display:flex;
		flex-direction: row;
		align-items: center;
		min-height: 100vh;
	}

	.fixed-panel {
		top: 0;
		position: fixed;
		height: 100vh;
		width: 50vw;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;

		.subtitle {
			width: 100%;
			text-align: center;
			font-size: 2rem;
			color: #eee;
		}
	}

	.scroll-panel {
		margin-left: 50vw;
		width: 50vw;

		.page {
			width: 100%;
			min-height: 100vh;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid #eee;
			flex-direction: column;

			p {
				text-align:left;
			}

			h1 {
				margin: 0;

				&.title {
					font-family: Great Vibes;
					font-size: 4em;
					text-align: center;
					margin: 0 0 70px 0;
				}
			}
		}
	}
</style>