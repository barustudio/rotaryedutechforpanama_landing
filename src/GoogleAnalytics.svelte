<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-MKKD11XZTH"></script>
	<script>
		try {
			if (typeof window !== 'undefined' && window) {
				window.dataLayer = window.dataLayer || [];
				function gtag() {
					dataLayer.push(arguments);
				}
				gtag('js', new Date());
				gtag('config', 'G-MKKD11XZTH');
			}
			console.log('Google analytics setup successfull');
		} catch (err) {
			console.log('Error setting up google analytics ', err);
		}
	</script>
</svelte:head>
