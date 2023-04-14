import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --color-black: #0B0B0B;
    --color-white: #FFFFFF;
    --color-orange: #FF9601;
    --color-light-orange: #FFC470;
    --color-gray-1: #1C1C1E;
    --color-gray-2: #2C2C2E;
    --color-gray-3: #3A3A3C;
    --color-gray-4: #9A9A9A;
    --color-gray-5: #CACACA;
    --color-gray-6: #F1F1F1;
}

.title{
    font-weight: 700;
    font-size: 2.5rem;
    font-family: 'Roboto Condensed', sans-serif;
}

.text{
    font-weight: 400;
    font-size: 1rem;
    color: #000000;
}

.price{
    font-weight: 700;
    font-size: 1.5rem;
    color: #000000;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
    font-family: 'Inter', sans-serif;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;
