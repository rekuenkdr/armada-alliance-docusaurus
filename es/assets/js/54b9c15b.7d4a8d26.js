"use strict";(self.webpackChunkarmada_alliance_docusaurus=self.webpackChunkarmada_alliance_docusaurus||[]).push([[6311],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return t?n.createElement(h,o(o({ref:a},c),{},{components:t})):n.createElement(h,o({ref:a},c))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(7294);function i(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:i},a)}},9877:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(7462),i=t(7294),r=t(2389),o=t(5979),l=t(6010),d="tabItem_LplD";function s(e){var a,t,r,s=e.lazy,c=e.block,u=e.defaultValue,p=e.values,m=e.groupId,h=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:v.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),f=(0,o.lx)(k,(function(e,a){return e.value===a.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(a=null!=u?u:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,i.useState)(g),T=w[0],O=w[1],_=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=N[m];null!=x&&x!==T&&k.some((function(e){return e.value===x}))&&O(x)}var E=function(e){var a=e.currentTarget,t=_.indexOf(a),n=k[t].value;n!==T&&(C(a),O(n),null!=m&&y(m,n))},j=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=_.indexOf(e.currentTarget)+1;t=_[n]||_[0];break;case"ArrowLeft":var i=_.indexOf(e.currentTarget)-1;t=_[i]||_[_.length-1]}null==(a=t)||a.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},k.map((function(e){var a=e.value,t=e.label,r=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return _.push(e)},onKeyDown:j,onFocus:E,onClick:E},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":T===a})}),null!=t?t:a)}))),s?(0,i.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function c(e){var a=(0,r.Z)();return i.createElement(s,(0,n.Z)({key:String(a)},e))}},1011:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),o=t(9877),l=t(8215),d=["components"],s={},c="Static Build",u={unversionedId:"stake-pool-guides/updating-a-cardano-node/static-build",id:"stake-pool-guides/updating-a-cardano-node/static-build",title:"Static Build",description:"Current Official Cardano Node Version: 1.34.1",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/stake-pool-guides/updating-a-cardano-node/static-build.md",sourceDirName:"stake-pool-guides/updating-a-cardano-node",slug:"/stake-pool-guides/updating-a-cardano-node/static-build",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/updating-a-cardano-node/static-build",editUrl:"https://github.com/rekuenkdr/armada-alliance-docusaurus/edit/master/docs/stake-pool-guides/updating-a-cardano-node/static-build.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic Build",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/updating-a-cardano-node/using-dynamic-build"},next:{title:"CNCLI Leader Logs \ud83d\udcd1",permalink:"/armada-alliance-docusaurus/es/docs/stake-pool-guides/leader-logs"}},p={},m=[{value:"Current Official Cardano Node Version: 1.34.1",id:"current-official-cardano-node-version-1341",level:4},{value:"Overview \ud83d\uddd2",id:"overview-",level:3},{value:"Download the cardano-node &amp; cli",id:"download-the-cardano-node--cli",level:2},{value:"Static binaries and Cardano node configuration files are provided by [ZW3RK] pool\ud83d\ude4f and can be found at our Github repository.",id:"static-binaries-and-cardano-node-configuration-files-are-provided-by-zw3rk-pool-and-can-be-found-at-our-github-repository",level:3},{value:"Check if cardano-node is running already",id:"check-if-cardano-node-is-running-already",level:3},{value:"Replace the old binaries and config files with the new ones",id:"replace-the-old-binaries-and-config-files-with-the-new-ones",level:2},{value:"Check your cardano-node version",id:"check-your-cardano-node-version",level:3},{value:"Output:",id:"output",level:4},{value:"Check your cardano-cli version",id:"check-your-cardano-cli-version",level:3},{value:"Output:",id:"output-1",level:4},{value:"Download &amp; Replace the Cardano node configuration files (Optional)",id:"download--replace-the-cardano-node-configuration-files-optional",level:3},{value:"Restart the Cardano Node",id:"restart-the-cardano-node",level:2}],h={toc:m};function v(e){var a=e.components,t=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"static-build"},"Static Build"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"This guide follows the same setup as our ",(0,r.kt)("a",{parentName:"h5",href:"../pi-pool-tutorial/"},"Pi-Node guide and image")," so you may need to adjust sections based on your node's environment and setup. :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("h4",{id:"current-official-cardano-node-version-1341"},"Current Official Cardano Node Version: 1.34.1"),(0,r.kt)("p",null,":::"),(0,r.kt)("h3",{id:"overview-"},"Overview \ud83d\uddd2"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Download Cardano Node Static build & configuration file"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Extract the file's content"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check if you already have Cardano Node service running",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Safely shutdown your Cardano node if it is running"))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Replace the old binaries with the new cardano-node and cardano-cli"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check cardano-node and cli version is updated to the current version"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Replace old configuration files with new ones (if needed)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Restart your Cardano Node"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check that node has started properly")),(0,r.kt)("h2",{id:"download-the-cardano-node--cli"},"Download the cardano-node & cli"),(0,r.kt)("h3",{id:"static-binaries-and-cardano-node-configuration-files-are-provided-by-zw3rk-pool-and-can-be-found-at-our-github-repository"},"Static binaries and Cardano node configuration files are provided by ",(0,r.kt)("a",{parentName:"h3",href:"https://armada-alliance.com/identities/zw3rk"},"[","ZW3RK","]")," pool\ud83d\ude4f and can be found at our ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/armada-alliance/cardano-node-binaries/tree/main/static-binaries"},"Github repository"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"wget -O 1_34_1.zip https://github.com/armada-alliance/cardano-node-binaries/blob/main/static-binaries/1_34_1.zip?raw=true\n")),(0,r.kt)("p",null,"Extract the content from the zip file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"unzip 1_34_1.zip\n")),(0,r.kt)("h3",{id:"check-if-cardano-node-is-running-already"},"Check if cardano-node is running already"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),(0,r.kt)("strong",{parentName:"h5"},"Now we need to make sure we do not have a cardano-node already running. If we do we must shut it down before proceeding.")," :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can check if you have a cardano-node process already running a few ways like using ",(0,r.kt)("inlineCode",{parentName:"p"},"htop")," or by checking your systemd service."),(0,r.kt)("p",{parentName:"div"},"If you have been following our ",(0,r.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," you can check your cardano-node status and stop it using the following commands."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service status\ncardano-service stop\n")))),(0,r.kt)("h2",{id:"replace-the-old-binaries-and-config-files-with-the-new-ones"},"Replace the old binaries and config files with the new ones"),(0,r.kt)("p",null,"If you are using the ",(0,r.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," and your cardano-node & cli in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.local/bin")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"mv cardano-node/* ~/.local/bin\n")),(0,r.kt)("h3",{id:"check-your-cardano-node-version"},"Check your cardano-node version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-node --version\n")),(0,r.kt)("h4",{id:"output"},"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-node 1.34.1 - linux-aarch64 - ghc-8.10\ngit rev 0000000000000000000000000000000000000000\n")),(0,r.kt)("h3",{id:"check-your-cardano-cli-version"},"Check your cardano-cli version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-cli --version\n")),(0,r.kt)("h4",{id:"output-1"},"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-cli 1.34.1 - linux-aarch64 - ghc-8.10\ngit rev 0000000000000000000000000000000000000000\n")),(0,r.kt)("h3",{id:"download--replace-the-cardano-node-configuration-files-optional"},"Download & Replace the Cardano node configuration files (Optional)"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"This step is not needed every time you update your node, typically you only need to update/replace config files after hard fork events when moving into new eras of the ",(0,r.kt)("a",{parentName:"h5",href:"https://roadmap.cardano.org/en/"},"Cardano blockchain"),". :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Mainnet",label:"Mainnet",default:!0,mdxType:"TabItem"}," ",(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_FILES\nwget https://hydra.iohk.io/build/7370192/download/1/mainnet-config.json\nwget https://hydra.iohk.io/build/7370192/download/1/mainnet-byron-genesis.json\nwget https://hydra.iohk.io/build/7370192/download/1/mainnet-shelley-genesis.json\nwget https://hydra.iohk.io/build/7370192/download/1/mainnet-alonzo-genesis.json\nwget https://hydra.iohk.io/build/7370192/download/1/mainnet-topology.json\n")),"  "),(0,r.kt)(l.Z,{value:"Testnet",label:"Testnet",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cd $NODE_FILES\nwget https://hydra.iohk.io/build/7370192/download/1/testnet-config.json\nwget https://hydra.iohk.io/build/7370192/download/1/testnet-byron-genesis.json\nwget https://hydra.iohk.io/build/7370192/download/1/testnet-shelley-genesis.json\nwget https://hydra.iohk.io/build/7370192/download/1/testnet-alonzo-genesis.json\nwget https://hydra.iohk.io/build/7370192/download/1/testnet-topology.json\n")),"  ")),(0,r.kt)("h2",{parentName:"div",id:"download-database-snapshot"},"Download Database snapshot"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},'cd $NODE_HOME && rm -rf db\nwget -r -np -nH -R "index.html*" -e robots=off https://$NODE_CONFIG.adamantium.online/db/\n')),(0,r.kt)("h2",{id:"restart-the-cardano-node"},"Restart the Cardano Node"),(0,r.kt)("p",null,"Now we just need to restart our cardano-node service if you are using our ",(0,r.kt)("a",{parentName:"p",href:"../pi-pool-tutorial/"},"Pi-Node guide")," use this command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service start\n")),(0,r.kt)("p",null,"Wait a few seconds or so then check the status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=">_ Terminal"',title:'">_','Terminal"':!0},"cardano-service status\n")))}v.isMDXComponent=!0}}]);