import{_ as r,a as l,b as a,c as s,d as n}from"./fs-kmp-webcanvas-architecture.drawio-2659deec.js";import{_ as u,M as c,p as d,q as p,R as e,N as i,t as o,a1 as m}from"./framework-5866ffd3.js";const g={},h=e("h1",{id:"application-multiplateforme-et-fullstack-codelab-60min",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#application-multiplateforme-et-fullstack-codelab-60min","aria-hidden":"true"},"#"),o(" Application multiplateforme et Fullstack Codelab (60min)")],-1),f=e("h2",{id:"tp-application-multiplateforme-kmm-kmp-pour-android-ios-et-ordinateur-de-bureau",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tp-application-multiplateforme-kmm-kmp-pour-android-ios-et-ordinateur-de-bureau","aria-hidden":"true"},"#"),o(" TP : Application multiplateforme + KMM + KMP pour Android, iOS et ordinateur de bureau")],-1),b=e("p",null,"En combinant KMP, KMM et Compose, il est possible de développer des applications mobiles et de bureau multiplateformes en utilisant uniquement Kotlin.",-1),v={href:"https://worldline.github.io/learning-kotlin-multiplatform/",target:"_blank",rel:"noopener noreferrer"},k=e("img",{src:r,alt:"kmp codelab",loading:"lazy"},null,-1),_={href:"https://worldline.github.io/learning-kotlin-multiplatform/",target:"_blank",rel:"noopener noreferrer"},q=m('<h2 id="pw-ajouter-une-application-serveur-ktor" tabindex="-1"><a class="header-anchor" href="#pw-ajouter-une-application-serveur-ktor" aria-hidden="true">#</a> PW : Ajouter une application serveur Ktor</h2><p>Nous allons étendre l&#39;application précédente avec un serveur Ktor et un client web React. Le projet aura l&#39;architecture suivante (❗ Ce choix d&#39;architecture peut être sujet à discussion, mais nous nous en tiendrons à cela pour l&#39;instant)</p><p><img src="'+l+'" alt="architecture" loading="lazy"></p><ul><li>Ajouter un module dans le projet appelé <strong>sharedFullStack</strong> qui contiendra : <ul><li>Dans <em>commonMain</em> : Du code partagé qui sera utilisé par le projet <strong>shared</strong>.</li><li>Dans <em>jvmMain</em> : Un serveur Ktor qui sert une API Rest pour fournir les <em>questions</em> et héberge quelques fichiers HTML. L&#39;un des fichiers HTML chargera une application react qui sera développée en Kotlin/JS.</li><li>Dans <em>jsMain</em> : Un client web react. Cette cible ne générera que le code JS, la page HTML qui le charge sera fournie par le serveur Ktor comme expliqué plus haut.</li><li>💡 Avec IntelliJ vous pouvez faire un clic droit sur les dossiers <strong>xxxMain/kotlin</strong> et <strong>xxxMain/resources</strong> et utiliser <strong>Mark Directory as</strong> pour obtenir plus de support de la part de l&#39;IDE.</li></ul></li><li>Mettez à jour le fichier de construction de ce nouveau module comme suit : <ul><li>plugins : <code>multiplatform</code>, <code>serialilzation</code> et <code>application</code>. Ce dernier sera utilisé pour spécifier le fichier principal du serveur qui sera exécuté avec la tâche <code>run</code>.</li><li>Ajoutez le plugin <code>kotlin(&quot;multiplatform&quot;)</code> et ciblez toutes les plateformes possibles (web, desktop, jvm et mobile) pour être complet.</li><li>Les dépendances devraient être les suivantes : <ul><li><em>commonMain</em> : client kotr (puisque nous voulons ajouter le client API dans le code partagé)</li><li><em>jvmMain</em> : serveur ktor + sérialisation json + cors (pour que le html puisse charger le JS)</li><li><em>jsMain</em> : Kotlin React</li></ul></li><li>Nous devons ajouter deux tâches, la première produit l&#39;application JS React et l&#39;autre copie dans les ressources du serveur Ktor.</li><li>Définir la classe principale du plugin <code>application</code>.</li><li>Le fichier devrait [ressembler à ce qui suit] (https://github.com/worldline/learning-kotlin/blob/main/material/kmm-fullstack-demo/sharedFullStack/build.gradle.kts)</li></ul></li><li>Déplacer le modèle API et les fichiers clients de <strong>shared</strong> vers <strong>sharedFullStack</strong> (<code>Anwser</code>, <code>Quiz</code>, <code>Question</code>, <code>QuizAPI</code> et <code>QuizRepository</code>)</li><li>⚠️ Quelques points à noter : <ul><li>Dans le fichier de construction d&#39;android, ajoutez <strong>io.netty.versions.properties</strong> et <strong>INDEX.LIST</strong> au fichier de construction d&#39;android.</li><li>Notre tâche globale de nettoyage peut entrer en conflit avec celle de Kotlin/JS, si c&#39;est le cas, nous pouvons corriger cela en renommant notre tâche de nettoyage dans la racine <strong>build.gradle.kts</strong> packagingOptions exclues.</li></ul></li><li>Ecrivez le code nécessaire pour le serveur et le client. Le serveur doit fournir ces points de terminaison : <ul><li>Un GET sur <code>/</code> fournit un fichier html qui charge <strong>sharedFullStack.js</strong> parce que c&#39;est le nom du JS qui est généré.</li><li>Un GET sur <code>/quiz</code> fournit un JSON de <code>Quiz</code> généré par le serveur</li><li>Un GET sur <code>/quiz.html</code> sert une page HTML générée par le serveur en utilisant le HTML DSL.</li></ul></li><li>Changez la classe <code>QuizAPI</code> pour qu&#39;elle appelle notre serveur local <em>http://localhost:8081/quiz</em> et supprimez les arguments de la méthode json ci-dessus puisque le serveur met en place les bons headers.</li><li>Lancer la tâche gradle &quot;application -&gt; run&quot; du module <strong>sharedFullStack</strong>, qui copiera le JS généré dans le dossier ressources du serveur Ktor.</li><li>Ouvrez <em>http://localhost:8081</em> pour exécuter l&#39;application react</li></ul><p><img src="'+a+'" alt="kmm-fs-react-demo" loading="lazy"></p><ul><li>Exécutez l&#39;application de bureau qui récupère le quiz sur le serveur local.</li></ul><p><img src="'+s+'" alt="" loading="lazy"></p><ul><li>Le test sur mobile est un peu plus complexe parce que localhost peut être mappé à une autre adresse et que le HTTP non sécurisé est bloqué par défaut.</li></ul><p>Le projet final est [disponible ici] (https://github.com/worldline/learning-kotlin/tree/main/material/kmm-fullstack-demo) dans le module <strong>sharedFullStack</strong>.</p><h2 id="pw-ajouter-une-cible-compose-for-web-canvas-experimental" tabindex="-1"><a class="header-anchor" href="#pw-ajouter-une-cible-compose-for-web-canvas-experimental" aria-hidden="true">#</a> PW : Ajouter une cible Compose for Web Canvas (expérimental)</h2><p>Compose for Web Canvas permet d&#39;utiliser la même surface d&#39;API que Compose Desktop et Android. Ajoutons un autre module pour l&#39;expérimenter.</p><p><img src="'+n+'" alt="architecture web canvas" loading="lazy"></p><ul><li>Dans la racine <strong>settings.gradle.kts</strong>, ajoutez ce dépôt maven <code>maven(&quot;https://maven.pkg.jetbrains.space/public/p/compose/dev&quot;)</code> qui a les dépendances de Compose for Web Canvas.</li><li>Dans <strong>gradle.properties</strong>, ajoutez cette ligne <code>org.jetbrains.compose.experimental.jscanvas.enabled=true</code>.</li><li>Dans le fichier de construction du module <strong>shared</strong>, ajoutez une cible <code>js(IR) { browser() }</code> et un sourceSet <strong>jsMain</strong> avec ces dépendances : <code>compose.web.core</code>, <code>compose.ui</code> et <code>compose.material3</code>. <ul><li>Implémentez le fichier <code>Platform</code> et fournissez un composable pour l&#39; <code>App</code>. Voici un [exemple d&#39;implémentation] (https://github.com/worldline/learning-kotlin/tree/main/material/kmm-fullstack-demo/shared/src/jsMain/kotlin/com/devoxxfr2023/km)</li></ul></li><li>Ajoutez un module nommé <strong>composeWebCanvasApp</strong> et définissez</li></ul>',13);function j(x,z){const t=c("ExternalLinkIcon");return d(),p("div",null,[h,f,b,e("p",null,[e("a",v,[k,i(t)])]),e("p",null,[o("Ce labo à un codelab dédié "),e("a",_,[o("qui accessible depuis ce lien"),i(t)])]),q])}const S=u(g,[["render",j],["__file","index.html.vue"]]);export{S as default};
