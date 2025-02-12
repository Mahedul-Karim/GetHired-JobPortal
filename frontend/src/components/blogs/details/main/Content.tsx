import React, { useEffect } from "react";

import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css';
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-aspnet";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-solidity";
import "prismjs/components/prism-json";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-r";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-go";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-mongodb";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";



const Content = () => {

  const text= `<p><strong>This is bold text.</strong></p>
<ul>
  <li>Bullet point 1</li>
  <li>Bullet point 2</li>
</ul>
<ol>
  <li>Bullet point 1</li>
  <li>Bullet point 2</li>
</ol>
<pre><code class="language-javascript">
const x = 10;
console.log(x);
</code></pre>
        <p>I'm trying to get&nbsp;<a href="https://en.wikipedia.org/wiki/Server-side_scripting#Server-side_rendering" rel="noreferrer">SSR</a>&nbsp;working in my app, but I get the error:</p>
<blockquote>
<p>Hydration failed because the initial UI does not match what was rendered on the server.</p>
</blockquote>
<p>Live demo code is&nbsp;<a href="https://stackblitz.com/edit/react-j94bwy" rel="noreferrer">here</a>.</p>
<p>Live demo of problem is&nbsp;<a href="https://react-j94bwy.stackblitz.io/" rel="noreferrer">here</a> (open dev tools console to see the errors):</p>
<pre class="language-javascript"><code>import React from "react";

  class App extends React.Component {

  head() {
    return (
      &lt;head&gt;
        &lt;meta charSet="utf-8" /&gt;
        &lt;meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /&gt;
        &lt;meta name="theme-color" content="#000000" /&gt;
        &lt;title&gt;React App&lt;/title&gt;
      &lt;/head&gt;
    );
  }

  body() {
    return (
      &lt;body&gt;
        &lt;div className="App"&gt;
          &lt;h1&gt;Client says Hello World&lt;/h1&gt;
        &lt;/div&gt;
      &lt;/body&gt;
    );
  }

  render() {
    return (
      &lt;React.Fragment&gt;
        {this.head()}
        {this.body()}
      &lt;/React.Fragment&gt;
    )
  }
}
export default App;</code></pre>
        `
  
  useEffect(() => {
    
    Prism.highlightAll();
  }, []);

  return (
    <section className="mt-8" >
      <div className="blog-details" dangerouslySetInnerHTML={{__html:text}}></div>
    </section>
  );
};

export default Content;
