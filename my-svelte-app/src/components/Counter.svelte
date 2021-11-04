<script>
	let count = 0;
</script>

<div>
  <input type=number bind:value={count}>
  <button on:click="{() => count += 1}">count</button>
</div>

<style>
  button {
    background-color: blueviolet;
    color: white;
  }
</style>