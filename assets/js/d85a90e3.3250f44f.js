"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8550],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7139:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:5},c="Migrating from v1 to v2",u={unversionedId:"v2-migration",id:"version-3.2/v2-migration",title:"Migrating from v1 to v2",description:"All queue methods have been updating to work on indexes instead of id's. We want this library to support all kinds of apps -- and moving to be index based will allow us to better support applications who have long/endless queues and in the future to allow us to build a performant API around queue management.",source:"@site/versioned_docs/version-3.2/v2-migration.md",sourceDirName:".",slug:"/v2-migration",permalink:"/docs/3.2/v2-migration",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-3.2/v2-migration.md",tags:[],version:"3.2",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"app",previous:{title:"Amazon FireOS Support",permalink:"/docs/3.2/guides/amazon-fire-support"},next:{title:"Migrating from v2 to v3",permalink:"/docs/3.2/v3-migration"}},l={},d=[],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrating-from-v1-to-v2"},"Migrating from v1 to v2"),(0,a.kt)("p",null,"All queue methods have been updating to work on indexes instead of id's. We want this library to support all kinds of apps -- and moving to be index based will allow us to better support applications who have long/endless queues and in the future to allow us to build a performant API around queue management."),(0,a.kt)("p",null,"We recommend using Typescript to have the system alert you of issues."),(0,a.kt)("p",null,"When migrating from v1 to v2, the following has changed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// Methods\n\n- async function add(tracks: Track | Track[], insertBeforeId?: string): Promise<void> {\n+ async function add(tracks: Track | Track[], insertBeforeIndex?: number): Promise<void> {\n\n- async function remove(tracks: string | string[]): Promise<void> {\n+ async function remove(tracks: number | number[]): Promise<void> {\n\n- async function skip(trackId: string): Promise<void> {\n+ function skip(trackIndex: number): Promise<void> {\n\n- async function updateMetadataForTrack(trackId: string, metadata: TrackMetadataBase): Promise<void> {\n+ async function updateMetadataForTrack(trackIndex: number, metadata: TrackMetadataBase): Promise<void> {\n\n- async function getTrack(trackId: string): Promise<Track> {\n+ async function getTrack(trackIndex: number): Promise<Track> {\n\n- async function getCurrentTrack(): Promise<string> {\n+ async function getCurrentTrack(): Promise<number> {\n\n// Imports\n\nimport TrackPlayer, {\n-  STATE_XXX,\n-  CAPABILITY_XXX,\n-  PITCH_ALGORITHM_XXX,\n-  RATING_XXX,\n+  State,\n+  Capability,\n+  PitchAlgorithm,\n+  RatingType,\n+  Event,\n+  RepeatMode\n} from 'react-native-track-player'\n\n// Hooks\n\n- useTrackPlayerProgress\n+ useProgress\n\n// Event Listeners\n// Refrain from using: TrackPlayer.addEventListener() and instead use the provided hooks\n\n+ usePlaybackState\n+ useTrackPlayerEvents\n+ useProgress\n")))}m.isMDXComponent=!0}}]);