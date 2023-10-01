// Custom components
// Reference: https://dev.to/anuradha9712/create-reusable-web-components-in-html-1llc
// In .html that use this, add:
// <script src="custom_components.js"></script>
// Top Bar
const topbarTemplate = document.createElement('template');
topbarTemplate.innerHTML = `
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<link rel="stylesheet" href="assets/css/main.css" />
	<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	<header id="header">
		<h1 id="logo"><a href="index.html">Home</a></h1>
		<nav id="nav">
			<ul>
				<li>
					<li><a href="machine_learning.html">Machine Learning</a></li>
					<li><a href="computer_graphics.html">Computer Graphics</a></li>
					<li><a href="art.html">Art & Design</a></li>
					<li><a href="experience.html">Professional Experience</a></li>
				</li>
			</ul>
		</nav>
	</header>
	`
class Topbar extends HTMLElement { // NO caps besides first letter!
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(topbarTemplate.content);
    }
}
customElements.define('top-bar', Topbar);