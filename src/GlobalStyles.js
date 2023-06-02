import { createGlobalStyle } from "styled-components";
// css reset and more

//create a root for backgroud colors, 2 differnt font families and text colors
const GlobalStyles = createGlobalStyle`

    :root {
        /* --primary-color: #cc5500; */
        /* --accent-bg-color: rgba(204, 85, 0, 0.1);
        --page-horizontal-padding: 20px;
        --header-height: 50px;
        --max-content-width: 1200px; */
        --logo-font-family: 'Chakra Petch', sans-serif;
        --main-font-family: 'Teko', sans-serif;
        --header-bg-color: rgba(255, 255, 255, 0.8);
        /* --user-img-width: 120px; */
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
    /* font: inherit; */
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
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
    *{
    font-family: var(--main-font-family);
    }
`;

export default GlobalStyles;
