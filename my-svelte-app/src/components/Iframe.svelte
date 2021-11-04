<script>
  import { onMount } from 'svelte';

  let frame;
  let width = 500;
  onMount(() => {
    frame.addEventListener('load', onLoad());
  })
  function onLoad() {
    console.log('load Iframe')
  }
</script>

<div>
  <iframe bind:this={frame} src="http://localhost:3006" title="preview"/>
</div>
<!-- <iframe bind:this={frame} src="http://localhost:3030" title="preview" /> -->