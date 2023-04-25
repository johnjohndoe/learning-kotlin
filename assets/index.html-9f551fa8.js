import{_ as i,M as c,p as l,q as o,R as n,t as e,N as s,a1 as t}from"./framework-5866ffd3.js";const p={},u=n("h1",{id:"advanced-and-other-kotlin-features",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#advanced-and-other-kotlin-features","aria-hidden":"true"},"#"),e(" Advanced and other Kotlin features")],-1),r=n("h2",{id:"delegated-properties",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#delegated-properties","aria-hidden":"true"},"#"),e(" Delegated properties")],-1),g=n("p",null,[e("Kotlin allows to delegate the getter and setter of a property to another object, which is called a delegate. It is a class that defines the "),n("code",null,"getValue"),e(" and "),n("code",null,"setValue"),e(" methods.")],-1),d=n("p",null,"Kotlin provides standard delegates such lazy properties and observable properties.",-1),I={href:"https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS43LjEwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiaW1wb3J0IGtvdGxpbi5yYW5kb20uUmFuZG9tXG5pbXBvcnQga290bGluLnByb3BlcnRpZXMuRGVsZWdhdGVzXG5pbXBvcnQga290bGluLnJlZmxlY3QuS1Byb3BlcnR5XG5cbmNsYXNzIFN1cGVySGVybyB7XG4gICAgdmFsIHJhbmRvbVN0cmVuZ3RoOiBJbnQgYnkgbGF6eSB7XG4gICAgICAgIHByaW50bG4oXCJjb21wdXRlZFwiKVxuICAgICAgICBSYW5kb20ubmV4dEludCg1MCwgMTAwKVxuICAgIH1cbiAgICBcbiAgICB2YXIgcG93ZXJOYW1lOiBTdHJpbmcgYnkgRGVsZWdhdGVzLm9ic2VydmFibGUoXCJMYXNlclwiKSB7IF8sIG9sZCwgbmV3IC0+XG4gICAgICAgIHByaW50bG4oXCJDaGFuZ2VkIHBvd2VyIGZyb20gJG9sZCB0byAkbmV3XCIpXG4gICAgfVxuICAgIFxuICAgIHZhciBjb2RlTmFtZTogU3RyaW5nIGJ5IENhcGl0YWxpemVEZWxlZ2F0ZSgpXG59XG5cbmNsYXNzIENhcGl0YWxpemVEZWxlZ2F0ZXtcbiAgICB2YXIgdXBwZXJjYXNlZCA9IFwiXCJcbiAgICBvcGVyYXRvciBmdW4gZ2V0VmFsdWUodGhpc1JlZjogQW55PywgcHJvcGVydHk6IEtQcm9wZXJ0eTwqPik6IFN0cmluZyB7XG4gICAgICAgIHByaW50bG4oXCIkdGhpc1JlZiwgdGhhbmsgeW91IGZvciBkZWxlZ2F0aW5nICcke3Byb3BlcnR5Lm5hbWV9JyB0byBtZSFcIilcbiAgICAgICAgcmV0dXJuIHVwcGVyY2FzZWRcbiAgICB9XG5cbiAgICBvcGVyYXRvciBmdW4gc2V0VmFsdWUodGhpc1JlZjogQW55PywgcHJvcGVydHk6IEtQcm9wZXJ0eTwqPiwgdmFsdWU6IFN0cmluZykge1xuICAgICAgICBwcmludGxuKFwiJyR2YWx1ZScgaGFzIGJlZW4gYXNzaWduZWQgdG8gJyR7cHJvcGVydHkubmFtZX0nIGluICR0aGlzUmVmLlwiKVxuICAgICAgICB1cHBlcmNhc2VkID0gdmFsdWUudXBwZXJjYXNlKClcbiAgICB9XG59XG5cbmZ1biBtYWluKCkge1xuICAgdmFsIHN1cGVyTGFuZGVyID0gU3VwZXJIZXJvKClcbiAgIHByaW50bG4oc3VwZXJMYW5kZXIucmFuZG9tU3RyZW5ndGgpXG4gICBwcmludGxuKHN1cGVyTGFuZGVyLnJhbmRvbVN0cmVuZ3RoKVxuICAgXG4gICBzdXBlckxhbmRlci5wb3dlck5hbWUgPSBcInNwZWVkXCJcbiAgICBcbiAgICBzdXBlckxhbmRlci5jb2RlTmFtZSA9IFwic3VwZXJsYW5kZXJcIlxuICAgIHByaW50bG4oc3VwZXJMYW5kZXIuY29kZU5hbWUpXG59In0=",target:"_blank",rel:"noopener noreferrer"},b=t('<h2 id="concurrency-and-coroutines" tabindex="-1"><a class="header-anchor" href="#concurrency-and-coroutines" aria-hidden="true">#</a> Concurrency and Coroutines</h2><p>Kotlin provides a high level concurrency model called <em>Coroutines</em>. The developer can delegated the management of threads to the compiler and runtime and using higher level constructs than threads to express asynchronous operations.</p><p>Coroutines in Kotlin revolve around these concepts:</p><ul><li>A coroutine is an instance of suspendable computation. <ul><li>Kotlin has many methods for creating a coroutine such as <code>launch</code>.</li></ul></li><li>A coroutine must exist within a coroutine scope. <ul><li>For example <code>runBlocking</code> creates a coroutine scope whithin which coroutines can be launched.</li></ul></li><li>A coroutine can run suspend functions which can suspend the coroutine but do not block the thread. <ul><li>For example: the <code>delay</code> suspend the coroutine but does not block the thread on which it is running.</li><li>Suspend functions are operations that may take time such http requests and file system calls.</li></ul></li><li>The <code>suspend</code> qualifier defines a suspend function. It runs within a coroutine and can call other suspend functions.</li><li><code>Flow</code> allows to generate a list of asynchronous values.</li><li><code>Deferred</code> and <code>Channel</code> transfer a single value and a stream of values, respectively, between coroutines.</li></ul>',4),h={href:"https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS43LjEwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiaW1wb3J0IGtvdGxpbnguY29yb3V0aW5lcy4qXG5cbnN1c3BlbmQgZnVuIHJ1blNvbWV0aGluZygpIHtcbiAgICBwcmludGxuKFwic3RhcnRpbmdcIilcbiAgICBkZWxheSg1MDApXG4gICAgcHJpbnRsbihcImZpbmlzaGVkXCIpXG59XG5cbi8vIHJ1bkJsb2NraW5nIGNyZWF0ZXMgYSBDb3JvdXRpbmVTY29wZVxuZnVuIG1haW4oKSA9IHJ1bkJsb2NraW5nIHsgXG4gICAgLy8gbGF1bmNoIGEgbmV3IGNvcm91dGluZVxuICAgIGxhdW5jaCB7IFxuICAgICAgICAvLyBTdXNwZW5kIHRoZSBjb3JvdXRpbmUgYnV0IGRvZXMgbm90IGJsb2NrIHRoZSB0aHJlYWRcbiAgICAgICAgZGVsYXkoMTAwMEwpIFxuICAgICAgICBwcmludGxuKFwiV29ybGQhXCIpIFxuICAgIH1cbiAgICAgICAgXG4gICAgLy8gbWFpbiBjb3JvdXRpbmUgY29udGludWVzIHdoaWxlIGEgcHJldmlvdXMgb25lIGlzIGRlbGF5ZWRcbiAgICBwcmludGxuKFwiSGVsbG9cIikgXG4gICAgXG4gICAgdmFsIGpvYiA9IGxhdW5jaCB7XG4gICAgICAgIHJ1blNvbWV0aGluZygpXG4gICAgfVxuICAgIGpvYi5qb2luKClcbiAgICBydW5Tb21ldGhpbmcoKVxuICAgIFxufSJ9",target:"_blank",rel:"noopener noreferrer"},m={href:"https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS43LjEwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiaW1wb3J0IGtvdGxpbnguY29yb3V0aW5lcy4qXG5pbXBvcnQga290bGlueC5jb3JvdXRpbmVzLmZsb3cuKlxuXG5mdW4gZ2VucmF0ZUFzeW5jUmFuZG9tVmFsdWVzKCk6IEZsb3c8SW50PiA9IGZsb3cgeyBcbiAgICBwcmludGxuKFwiRmxvdyBzdGFydGVkXCIpXG4gICAgZm9yIChpIGluIDAuLjEwKSB7XG4gICAgICAgIGRlbGF5KDEwMClcbiAgICAgICAgZW1pdChpKVxuICAgIH1cbn1cblxuLy8gVGhpcyBjYW4gY2F1c2UgcHJvYmxlbXMgaW4gbm90IGhhbmRsZWRlZCBjb3JyZWN0bHlcbmZ1biBnZW5yYXRlQXN5bmNSYW5kb21WYWx1ZXNJbmZpbml0ZSgpOiBGbG93PEludD4gPSBmbG93IHsgXG4gICAgcHJpbnRsbihcIkZsb3cgc3RhcnRlZFwiKVxuICAgIHZhciBpID0gMFxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGRlbGF5KDEwMClcbiAgICAgICAgZW1pdChpKVxuICAgICAgICBpICs9IDFcbiAgICB9XG59XG5cblxuXG4vLyBydW5CbG9ja2luZyBjcmVhdGVzIGEgQ29yb3V0aW5lU2NvcGVcbmZ1biBtYWluKCkgPSBydW5CbG9ja2luZzxVbml0PiB7XG4gICAgbGF1bmNoe1xuICAgICAgICBnZW5yYXRlQXN5bmNSYW5kb21WYWx1ZXMoKS5jb2xsZWN0IHtcbiAgICAgICBcdFx0cHJpbnRsbihcIjFzdCBmbG93OiBHb3QgJGl0XCIpXG4gICBcdFx0fVxuICAgIH1cbiAgIFxuICAgbGF1bmNoe1xuICAgICAgIHdpdGhUaW1lb3V0T3JOdWxsKDEwMDApe1xuICAgICAgICAgICBnZW5yYXRlQXN5bmNSYW5kb21WYWx1ZXMoKS5jb2xsZWN0IHtcbiAgICAgICAgICAgcHJpbnRsbihcIjJuZCBmbG93OiBHb3QgJGl0XCIpXG4gICAgICAgICB9XG4gICAgICAgfVxuICAgfVxufSJ9",target:"_blank",rel:"noopener noreferrer"},G={href:"https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS43LjEwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiaW1wb3J0IGtvdGxpbnguY29yb3V0aW5lcy4qXG5pbXBvcnQga290bGlueC5jb3JvdXRpbmVzLmNoYW5uZWxzLipcblxuZnVuIG1haW4oKSA9IHJ1bkJsb2NraW5nIHtcbiAgICBcbiAgICAvLyBhc3luYyBsYXVuY2hlcyBhIGNvcm91dGluZXMgYW5kIHJldHVybnMgYSBEZWZlcnJlZDxJbnQ+XG4gICAgdmFsIGRlZmVycmVkID0gYXN5bmMge1xuICAgICAgICA0MlxuICAgIH1cbiAgICBwcmludGxuKGRlZmVycmVkLmF3YWl0KCkpXG5cbiAgICB2YWwgY2hhbm5lbCA9IENoYW5uZWw8SW50PigpXG4gICAgbGF1bmNoIHtcbiAgICAgICAgLy8gdGhpcyBtaWdodCBiZSBoZWF2eSBDUFUtY29uc3VtaW5nIGNvbXB1dGF0aW9uIG9yIGFzeW5jIGxvZ2ljLCB3ZSdsbCBqdXN0IHNlbmQgZml2ZSBzcXVhcmVzXG4gICAgICAgIGZvciAoeCBpbiAxLi41KSBjaGFubmVsLnNlbmQoeCAqIHgpXG4gICAgfVxuICAgIC8vIGhlcmUgd2UgcHJpbnQgZml2ZSByZWNlaXZlZCBpbnRlZ2VyczpcbiAgICByZXBlYXQoNSkgeyBwcmludGxuKGNoYW5uZWwucmVjZWl2ZSgpKSB9XG4gICAgcHJpbnRsbihcIkRvbmUhXCIpXG5cbn0ifQ==",target:"_blank",rel:"noopener noreferrer"},C=t(`<h2 id="function-literal-with-receiver-and-type-safe-builders" tabindex="-1"><a class="header-anchor" href="#function-literal-with-receiver-and-type-safe-builders" aria-hidden="true">#</a> Function literal with receiver and Type-safe builders</h2><p>As seen previously, function extension add behavior to existing classes. Inside the definition of the function extension, we can reference the <strong>extension receiver</strong> (or this) implicitly.</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">fun</span> String<span class="token punctuation">.</span><span class="token function">countCharacters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> length <span class="token comment">// or this.length</span>
<span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">.</span><span class="token function">countCharacters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// prints 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>We can define this extension with a function literal (or lambda) in instead of a named function (declared with <code>fun</code>).</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">var</span> extFn<span class="token operator">:</span> String<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> Int
extFn <span class="token operator">=</span> <span class="token punctuation">{</span> length <span class="token punctuation">}</span> <span class="token comment">// extFn is a function literal</span>
<span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">.</span><span class="token function">extFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// prints 5</span>
<span class="token function">println</span><span class="token punctuation">(</span><span class="token function">extFn</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// prints 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>extFn</code> <strong>is a function literal</strong> (lambda) that has access to the <strong>receiver</strong> (this). That&#39;s why it&#39;s called a <strong>function literal with receiver</strong>.</p><p><code>extFn(&quot;hello&quot;)</code> or <code>extFn(&quot;hello&quot;)</code> call the extension as expected from extension functions.</p><p>The type of a function literal with receiver is <code>funName: ReceiverType.(arg1Type, arg2Type, etc.) -&gt; ReturnType</code> and is called with <code>funName(receiverValue, arg1Value, etc.)</code> or <code>receiverValue.funName(arg1Value, etc.)</code>. However, this is not the interesting aspect.</p>`,8),Z=n("code",null,"extFn = { length }",-1),X=n("code",null,"extFn",-1),A={href:"https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS43LjEwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiaW1wb3J0IGtvdGxpbi5yYW5kb20uUmFuZG9tXG5cbmZ1biBtYWluKCkge1xuICAgIC8vIGZuIGlzIGEgZnVuY3Rpb24gbGl0ZXJhbHMgd2l0aCByZWNlaXZlciB0aGF0IHJldHVybnMgYW4gaW50XG4gICAgZnVuIGRvU29tZXRoaW5nV2l0aFJhbmRvbUludChmbjogSW50LigpIC0+IEludCk6IEludCB7XG4gICAgXHR2YWwgcmFuZG9tSW50ID0gUmFuZG9tLm5leHRJbnQoMzIsIDk4KVxuICAgIFx0cmV0dXJuIHJhbmRvbUludC5mbigpXG5cdH1cbiAgICAgXG4gICAgdmFsIHJlc3VsdCA9IGRvU29tZXRoaW5nV2l0aFJhbmRvbUludCB7XG4gICAgICAgIC8vIFRoZSByZWNlaXZlciBpcyBpbXBsaWNpdGx5IGF2YWlsYWJsZSBpbiB0aGlzIGxhbWJkYVxuICAgICAgICBwcmludGxuKFwidGhpczogJHRoaXNcIilcbiAgICAgICAgcHJpbnRsbihcInBsdXM6ICR7cGx1cygxMDApfVwiKVxuICAgICAgICBtaW51cyg1MDApXG4gICAgfVxuICAgIHByaW50bG4oXCJyZXN1bHQgOiAkcmVzdWx0XCIpXG59In0=",target:"_blank",rel:"noopener noreferrer"},k={href:"https://kotlinlang.org/docs/type-safe-builders.htmlhttps://kotlinlang.org/docs/type-safe-builders.html",target:"_blank",rel:"noopener noreferrer"},W=n("strong",null,"Type-safe builders",-1),x={class:"custom-container tip"},y=n("p",{class:"custom-container-title"},"Builder pattern",-1),v={href:"https://refactoring.guru/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"},B=t(`<div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">// StirngBuilder uses the builder pattern</span>
<span class="token keyword">val</span> text <span class="token operator">=</span> <span class="token function">StringBuilder</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Temp&quot;</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;friend&quot;</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),V={href:"https://play.kotlinlang.org/#eyJ2ZXJzaW9uIjoiMS43LjEwIiwicGxhdGZvcm0iOiJqYXZhIiwiYXJncyI6IiIsIm5vbmVNYXJrZXJzIjp0cnVlLCJ0aGVtZSI6ImlkZWEiLCJjb2RlIjoiY2xhc3MgTWlsa3tcbiAgICB2YXIgYnJhbmQ6IFN0cmluZyA9IFwiXCJcbiAgICB2YXIgcXVhbnRpdHk6IEludCA9IDBcbiAgICBmdW4gYnJhbmQoaGFuZGxlcjogTWlsay4oKS0+IFN0cmluZyl7XG4gICAgICAgIGJyYW5kID0gaGFuZGxlcigpXG4gICAgfVxuICAgIGZ1biBxdWFudGl0eShoYW5kbGVyOiBNaWxrLigpLT5JbnQpe1xuICAgICAgICBxdWFudGl0eSA9IGhhbmRsZXIoKVxuICAgIH1cbiAgICBvdmVycmlkZSBmdW4gdG9TdHJpbmcoKSA9IFwiJHF1YW50aXR5IEwgb2YgbWlsayBmcm9tICRicmFuZFwiXG59XG5cbi8vIHR5cGVzYWZlIGJ1aWxkZXIgZW50cnkgcG9pbnRcbmZ1biBwcm9kdWNlTWlsayhpbml0OiBNaWxrLigpIC0+IFVuaXQpOiBNaWxrIHtcbiAgICB2YWwgbWlsayA9IE1pbGsoKVxuICAgIG1pbGsuaW5pdCgpXG4gICAgcmV0dXJuIG1pbGtcbn1cblxuZnVuIG1haW4oKXtcbiAgICB2YWwgbWlsayA9IHByb2R1Y2VNaWxrIHtcbiAgICAgICAgYnJhbmQgeyBcIlN1cGVyIG1pbGtcIiB9XG4gICAgICAgIHF1YW50aXR5IHsgMTAwIH1cbiAgICB9XG4gICAgcHJpbnRsbihtaWxrKVxufSJ9",target:"_blank",rel:"noopener noreferrer"},J={href:"https://kotlinlang.org/docs/type-safe-builders.html",target:"_blank",rel:"noopener noreferrer"},w=t('<h2 id="exercises" tabindex="-1"><a class="header-anchor" href="#exercises" aria-hidden="true">#</a> Exercises</h2><h3 id="exercise-1" tabindex="-1"><a class="header-anchor" href="#exercise-1" aria-hidden="true">#</a> Exercise 1</h3><ol><li>open the <strong>java-integration-exercise</strong> projects in the <strong>materials</strong> folder.</li><li>Have a look at the Java class we provided you in the <code>src/main/java/com/worldline/learning/kotlin/java2kotlin</code> package. <em>(yes, that&#39;s the Pokemon class)</em></li><li>Convert that Java class in Kotlin using IntelliJ&#39;s awesome copy-pasta tool! <em>(just copy paste the java code in a kotlin file, one is provided at <code>src/main/kotlin/com/worldline/learning/kotlin/java2kotlin</code>)</em></li><li>Have a look at the generated Kotlin code, and note the major differences you spot!</li></ol>',3);function f(F,Y){const a=c("ExternalLinkIcon");return l(),o("div",null,[u,r,g,d,n("p",null,[n("a",I,[e("▶️ this code"),s(a)]),e(" illustrates delegate properties.")]),b,n("p",null,[n("a",h,[e("▶️ this code"),s(a)]),e(" show how to create a coroutine and suspend function and how to use them.")]),n("p",null,[n("a",m,[e("▶️ this code"),s(a)]),e(" illustrated flows.")]),n("p",null,[n("a",G,[e("▶️ this code"),s(a)]),e(" illustrates channels and deferred.")]),C,n("p",null,[e("The important part is "),Z,e(" which can be put as a function argument in a higher order function. The developer that calls the higher order function must define "),X,e(", which in turn has access to the receiver. This allows for a nice style of programming. "),n("a",A,[e("▶️ this code"),s(a)]),e(" shows an example.")]),n("p",null,[n("a",k,[W,s(a)]),e(" combine well-named builder functions and functions literals with receiver to create type-safe, statically typed builders in Kotlin.")]),n("div",x,[y,n("p",null,[n("a",v,[e("The builder pattern"),s(a)]),e(" is a way to construct complex objects.")]),B]),n("p",null,[n("a",V,[e("This code shows"),s(a)]),e(" a basic type-safe builder.")]),n("p",null,[n("a",J,[e("Kotlin docs"),s(a)]),e(" provides an example of an advanced type-safe builder that builds an HTML page.")]),w])}const R=i(p,[["render",f],["__file","index.html.vue"]]);export{R as default};