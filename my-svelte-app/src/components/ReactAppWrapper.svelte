<script>
  const host = 'http://localhost:3006'
  let scriptId = 'my-react-app'
  fetch(`${host}/asset-manifest.json`)
      .then((res) => res.json())
      .then((manifest) => {
        const script = document.createElement("script");
        script.id = scriptId;
        script.crossOrigin = "";
        script.src = `${host}${manifest.files["main.js"]}`;
        script.onload = () => {
          window[`renderMyReactApp`](`my-react-app-root`);
        };
        document.head.appendChild(script);
      });
</script>

<main id="my-react-app-root">
</main>