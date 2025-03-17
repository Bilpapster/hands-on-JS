<script>
	import { setupIonicBase } from 'ionic-svelte';

	/* Call Ionic's setup routine. */
	setupIonicBase();

	/* Import all components. (You can selectively import components instead; see below.) */
	import 'ionic-svelte/components/all';

	/* Theme variables */
	import '../theme/variables.css';

	/*
		This part - import 'ionic-svelte/components/all'; - loads all components at once. Importing this way adds 80 components and >800kb (uncompressed) to your bundle.

		Alternately, you can choose to import only the components you want to use.

		Doing selective imports in this file is recommended because you only have to do such imports once.
		If you like to code-split differently, you are free to import whereever you like.

		Example: If you replace the line import 'ionic-svelte/components/all'; with the imports below, the resulting bundle becomes much smaller.

		import 'ionic-svelte/components/ion-app';
		import 'ionic-svelte/components/ion-card';
		import 'ionic-svelte/components/ion-card-title';
		import 'ionic-svelte/components/ion-card-subtitle';
		import 'ionic-svelte/components/ion-card-header';
		import 'ionic-svelte/components/ion-card-content';
		import 'ionic-svelte/components/ion-button';
		import 'ionic-svelte/components/ion-item';
		import 'ionic-svelte/components/ion-label';

		To see the full list of possible imports, click ionic-svelte-components-all-import above.

		When you decide to do selective imports, ion-app must be imported in this file like this:

	    import 'ionic-svelte/components/ion-app';

		Report issues here - https://github.com/Tommertom/svelte-ionic-npm/issues
		Want to know more about what is happening? Follow me on X! - https://x.com/Tommertomm
		Discord channel on Ionic server - https://discordapp.com/channels/520266681499779082/1049388501629681675
	*/
</script>

<ion-app>
	<slot />
</ion-app>