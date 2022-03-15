import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
  --color-primary: #272B55;
  --color-primary-50: #4A5292;
  --color-secondary: #545CB7;
  
  --black: #13191B;
  --white: #C9CCD5;

  --purple-4: #4C526B;
  --purple-3: #5C5B74;
  --purple-2: #626879;
  --purple-1: #839EAC;

  --fontsize-h1: 30px;
  --fontsize-h2: 30px;
  --fontsize-h3: 30px;
  --headline: 0.75rem;
  --content-body: 1rem;

  --fontfamily-poppins: "Poppins", sans-serif;
  --fontfamily-noto-serif: "Noto Serif", sans-serif;
  
}
`