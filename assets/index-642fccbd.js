(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function L(){}function Ye(t){return t()}function Ce(){return Object.create(null)}function ge(t){t.forEach(Ye)}function Je(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ve;function se(t,e){return ve||(ve=document.createElement("a")),ve.href=e,t===ve.href}function Ve(t){return Object.keys(t).length===0}const Qe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in Qe;function o(t,e){t.appendChild(e)}function O(t,e,n){t.insertBefore(e,n||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function ke(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function s(t){return document.createElement(t)}function G(t){return document.createTextNode(t)}function $(){return G(" ")}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Xe(t){return Array.from(t.childNodes)}function Ze(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let xe;function de(t){xe=t}const oe=[],Pe=[];let le=[];const Ee=[],et=Promise.resolve();let ye=!1;function tt(){ye||(ye=!0,et.then(Ke))}function $e(t){le.push(t)}const be=new Set;let ae=0;function Ke(){if(ae!==0)return;const t=xe;do{try{for(;ae<oe.length;){const e=oe[ae];ae++,de(e),nt(e.$$)}}catch(e){throw oe.length=0,ae=0,e}for(de(null),oe.length=0,ae=0;Pe.length;)Pe.pop()();for(let e=0;e<le.length;e+=1){const n=le[e];be.has(n)||(be.add(n),n())}le.length=0}while(oe.length);for(;Ee.length;)Ee.pop()();ye=!1,be.clear(),de(t)}function nt(t){if(t.fragment!==null){t.update(),ge(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($e)}}function it(t){const e=[],n=[];le.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),le=e}const _e=new Set;let at;function F(t,e){t&&t.i&&(_e.delete(t),t.i(e))}function te(t,e,n,i){if(t&&t.o){if(_e.has(t))return;_e.add(t),at.c.push(()=>{_e.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ue(t,e){t.d(1),e.delete(t.key)}function fe(t,e,n,i,l,r,c,m,f,g,b,v){let u=t.length,d=r.length,h=u;const _={};for(;h--;)_[t[h].key]=h;const E=[],x=new Map,j=new Map,H=[];for(h=d;h--;){const C=v(l,r,h),y=n(C);let T=c.get(y);T?i&&H.push(()=>T.p(C,e)):(T=g(y,C),T.c()),x.set(y,E[h]=T),y in _&&j.set(y,Math.abs(h-_[y]))}const A=new Set,D=new Set;function U(C){F(C,1),C.m(m,b),c.set(C.key,C),b=C.first,d--}for(;u&&d;){const C=E[d-1],y=t[u-1],T=C.key,N=y.key;C===y?(b=C.first,u--,d--):x.has(N)?!c.has(T)||A.has(T)?U(C):D.has(N)?u--:j.get(T)>j.get(N)?(D.add(T),U(C)):(A.add(N),u--):(f(y,c),u--)}for(;u--;){const C=t[u];x.has(C.key)||f(C,c)}for(;d;)U(E[d-1]);return ge(H),E}const ot=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ot];function ne(t){t&&t.c()}function K(t,e,n,i){const{fragment:l,after_update:r}=t.$$;l&&l.m(e,n),i||$e(()=>{const c=t.$$.on_mount.map(Ye).filter(Je);t.$$.on_destroy?t.$$.on_destroy.push(...c):ge(c),t.$$.on_mount=[]}),r.forEach($e)}function V(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),ge(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(oe.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,i,l,r,c,m=[-1]){const f=xe;de(t);const g=t.$$={fragment:null,ctx:[],props:r,update:L,not_equal:l,bound:Ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:Ce(),dirty:m,skip_bound:!1,root:e.target||f.$$.root};c&&c(g.root);let b=!1;if(g.ctx=n?n(t,e.props||{},(v,u,...d)=>{const h=d.length?d[0]:u;return g.ctx&&l(g.ctx[v],g.ctx[v]=h)&&(!g.skip_bound&&g.bound[v]&&g.bound[v](h),b&&lt(t,v)),u}):[],g.update(),b=!0,ge(g.before_update),g.fragment=i?i(g.ctx):!1,e.target){if(e.hydrate){const v=Xe(e.target);g.fragment&&g.fragment.l(v),v.forEach(R)}else g.fragment&&g.fragment.c();e.intro&&F(t.$$.fragment),K(t,e.target,e.anchor,e.customElement),Ke()}de(f)}class Z{$destroy(){V(this,1),this.$destroy=L}$on(e,n){if(!Je(n))return L;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!Ve(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const st={title:"Partners",description:"This project is made possible through the concerted efforts of our committed partners. These include Rotary clubs, community organizations, and the Ministry of Education, all working together to reshape the educational landscape in Panama.",images:[{src:"images/rotary-chitre.png",alt:"Logo Rotary Club of Chitré"},{src:"images/rotary-cristobal-colon.png",alt:"Logo Rotary Club of Cristobal Colón"},{src:"images/rotary-david.png",alt:"Logo Rotary Club of David"},{src:"images/rotary-la-chorrera.png",alt:"Logo Rotary Club of La Chorrera"},{src:"images/rotary-panama-norte.png",alt:"Logo Rotary Club of Panama Norte"},{src:"images/rotary-playa-coronado.png",alt:"Logo Rotary Club of Playa Coronado"},{src:"images/rotary-santiago.png",alt:"Logo Rotary Club of Santiago"}]},rt={title:"Empowering Panama's Teachers and Students",texts:["The Digital Technologies in Public Education project aims to significantly improve the quality of education in Panama's public schools by integrating digital technologies into teaching practices and providing essential teacher training.","This Rotary-led initiative, supported by a consortium of local clubs, seeks to bridge the digital divide and prepare students for the 21st-century workforce. With an estimated budget of $800,000, the project will impact more than 25,000 students and train over 1,200 teachers across 100 schools in the country.","The Digital Technologies in Public Education project represents a significant step towards improving Panama's public education system, bridging the digital divide, and empowering teachers and students with the tools and skills they need to succeed in the 21st century."],objective:{title:"Objective",description:"Enhance teaching and learning experiences in Panama's public education system by providing digital resources, equipment, and training to teachers and students. This will help reduce educational disparities, promote digital literacy, and equip the students with the necessary skills for thriving in the modern world.",video:"83yaqqkAJm0"},strategies:{title:"Strategies",description:"In our 'Digital Interactive Classrooms' project, we deploy cutting-edge strategies to revolutionize education in Panama. We focus on digital literacy, teacher training, and collaborative learning to bridge the digital divide and empower our educators and students.",items:[{icon:"images/icon-1.png",title:"Infrastructure Development",description:"The project will provide essential digital equipment, such as computers, tablets, projectors, and interactive whiteboards, to selected schools in underprivileged areas. This will ensure that both teachers and students have access to modern educational resources and tools."},{icon:"images/icon-2.png",title:"Teacher Training",description:"The project will offer comprehensive training to over 1,200 teachers, focusing on the effective use of digital technologies in the classroom. Teachers will learn how to incorporate technology into their lesson plans, use online resources, and develop engaging and interactive learning experiences for their students."},{icon:"images/icon-3.png",title:"Curriculum Development",description:"The project will support the development of a technology-enhanced curriculum, integrating digital resources into traditional teaching methods. This will ensure that students gain relevant knowledge and skills, preparing them for future success in the digital age."},{icon:"images/icon-4.png",title:"Monitoring and Evaluation",description:"The project will closely monitor progress and evaluate the impact of the digital technologies and training provided. This will help ensure that the project's objectives are met and that the resources are used effectively."},{icon:"images/icon-4.png",title:"Community Engagement",description:"The project will involve local Rotary clubs, community organizations, and the Ministry of Education (MEDUCA) in the planning, implementation, and evaluation process. This collaboration will help ensure the project's sustainability and long-term success."},{icon:"images/icon-4.png",title:"Advocacy and Awareness",description:"The project will work on raising awareness about the importance of digital technologies in education, showcasing the positive impact on student learning and development. This will encourage more schools, communities, and policymakers to adopt similar approaches and invest in digital resources and teacher training."}]},expectedOutcomes:{title:"Expected Outcomes",description:"The Digital Interactive Classrooms Project envisions transformative outcomes that will shape the future of education in Panama. These aspirations not only focus on equipping students and teachers with digital competencies but also aim to build lasting partnerships that ensure sustainability.",items:[{icon:"images/icon-1.png",title:"Student Empowerment: Advancing digital literacy and workforce readiness.",description:"Improved digital literacy and skills among students, better preparing them for higher education and the workforce."},{icon:"images/icon-2.png",title:"Teacher Excellence: Cultivating innovative, technology-driven teaching practices.",description:"Enhanced teaching practices, with teachers integrating digital technologies and resources into their lessons, leading to more engaging and effective learning experiences for students."},{icon:"images/icon-3.png",title:"Future-Ready Curriculum: Building a relevant, digital-age education system.",description:"A technology-enhanced curriculum that meets the needs of modern students and prepares them for success in the digital age."},{icon:"images/icon-4.png",title:"Sustainable Partnerships: Fostering collaboration for enduring impact and project sustainability.",description:"Increased collaboration and partnerships between Rotary clubs, community organizations, and the Ministry of Education, ensuring the project's sustainability and long-term impact."}]}},ct={title:"Get in touch",description:"Connect with us today and join us in the journey of transforming education in Panama through technology.",contactTitle:"Lets talk about the project",contactText:"Join us in the conversation about this transformative project, aimed at revolutionizing public education in Panama through digital technology. Your input and support could make a substantial difference in shaping a brighter future for Panamanian students.",contactInfo:[{type:"name",icon:"lni-user",text:"Enedelsy Escobar-King"},{type:"phone",icon:"lni-phone-handset",text:"+507 6521-6000"},{type:"mail",icon:"lni-envelope",text:"eescobar_king@hotmail.com"},{type:"mail",icon:"lni-envelope",text:"crpn1996@gmail.com"},{type:"district",icon:"lni-cog",text:"Rotary District 4240"},{type:"address",icon:"lni-map-marker",text:"Panama City, Republic of Panama"}]},dt={navbarItems:[{id:1,name:"HOME",href:"#home",active:!0},{id:2,name:"ABOUT",href:"#about",active:!1},{id:4,name:"PARTNERS",href:"#partners",active:!1},{id:6,name:"CONTACT",href:"#contact",active:!1}],carouselItems:[{id:1,title:"Empowering the future: Transforming education in Panama",backgroundImage:"images/slider-1.jpg",href:"#contact",buttonText:"Join Our Mission"},{id:2,title:"Unlocking potential: Digital tools for a brighter tomorrow",backgroundImage:"images/slider-2.jpg",href:"#contact",buttonText:"Get Involved"},{id:3,title:"Bridging the gap: Quality education for all Panamanian students",backgroundImage:"images/slider-3.jpg",href:"#contact",buttonText:"Transform Lives with Us"}]},ut={sectionTitle:"News & Events",sectionSubtitle:"Upcoming events and recent news articles about the project",categories:["BRANDING","MARKETING","PLANNING","RESEARCH"],items:[{id:1,categories:["branding-3","planning-3"],image:"images/news-1.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"},{id:2,categories:["marketing-3","research-3"],image:"images/news-2.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"},{id:3,categories:["branding-3","marketing-3"],image:"images/news-3.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"},{id:4,categories:["planning-3","research-3"],image:"images/news-4.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"},{id:5,categories:["marketing-3"],image:"images/news-5.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"},{id:6,categories:["planning-3"],image:"images/news-6.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"}]},ft={title:"Testimonials",description:"Hear from students, teachers, and community members about the tangible changes and improvements they've experienced.",items:[{image:"images/author-3.jpg",text:"Since we've incorporated these digital tools in our classrooms, I've seen a significant increase in student engagement and interest. It's like we've unlocked a new way of learning, and the students are thriving.",author:"María Pérez",title:"Teacher"},{image:"images/author-1.jpg",text:"Before, I never really liked school. Now, I can't wait to get to class. Using technology makes learning exciting and interactive. I feel more prepared for the future.",author:"Alberto Rios",title:"Student"},{image:"images/author-2.jpg",text:"I am grateful for the Paul Harris Interactive Classroom in my daughter's school. Now she comes home from school excited to share what she has learned. I see her growing in confidence and knowledge. This initiative is truly transforming education in Panama.",author:"Carmen Rodríguez",title:"Parent"},{image:"images/author-4.jpg",text:"The Paul Harris Interactive Classroom has been a game-changer for our school. We've seen improvements not just in academic performance, but also in student motivation and teacher satisfaction. We're thrilled to be a part of this initiative.",author:"Luis González",title:"School Principal"},{image:"images/author-4.jpg",text:"We are proud to partner with Rotary on this project. Their commitment to improving education and integrating technology in our classrooms aligns perfectly with our mission. Together, we are making a difference in the lives of our students.",author:"Dr. Marta Ortega",title:"Ministry of Education"}]},we={partners:st,about:rt,contact:ct,header:dt,news:ut,testimonials:ft};function gt(t){let e,n,i;return{c(){e=s("div"),n=s("iframe"),se(n.src,i="https://www.youtube.com/embed/"+t[0])||a(n,"src",i),a(n,"width","560"),a(n,"height","315"),a(n,"title","YouTube video player"),a(n,"frameborder","0"),a(n,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),n.allowFullscreen=!0,a(n,"class","svelte-1x4pkex"),a(e,"class","video-responsive svelte-1x4pkex")},m(l,r){O(l,e,r),o(e,n)},p(l,[r]){r&1&&!se(n.src,i="https://www.youtube.com/embed/"+l[0])&&a(n,"src",i)},i:L,o:L,d(l){l&&R(e)}}}function ht(t,e,n){let{videoId:i}=e;return t.$$set=l=>{"videoId"in l&&n(0,i=l.videoId)},[i]}class pt extends Z{constructor(e){super(),X(this,e,ht,gt,Q,{videoId:0})}}function Me(t,e,n){const i=t.slice();return i[5]=e[n],i}function Ae(t,e,n){const i=t.slice();return i[8]=e[n],i}function Le(t,e,n){const i=t.slice();return i[11]=e[n],i}function Se(t){let e,n,i=t[11]+"",l,r;return{c(){e=s("div"),n=s("p"),l=G(i),r=$(),a(n,"class","text wow fadeInUp"),a(n,"data-wow-duration","1s"),a(e,"class","col-lg-4")},m(c,m){O(c,e,m),o(e,n),o(n,l),o(e,r)},p:L,d(c){c&&R(e)}}}function Re(t,e){let n,i,l,r,c,m,f,g,b=e[8].title+"",v,u,d,h=e[8].description+"",_,E;return{key:t,first:null,c(){n=s("div"),i=s("div"),l=s("div"),r=s("img"),m=$(),f=s("div"),g=s("h4"),v=G(b),u=$(),d=s("p"),_=G(h),E=$(),se(r.src,c=e[8].icon)||a(r,"src",c),a(r,"alt","Icon"),a(l,"class","about-icon"),a(g,"class","about-title"),a(d,"class","text"),a(f,"class","about-content media-body"),a(i,"class","single-about d-sm-flex mt-30 wow fadeInUp"),a(i,"data-wow-duration","1s"),a(n,"class","col-lg-6"),this.first=n},m(x,j){O(x,n,j),o(n,i),o(i,l),o(l,r),o(i,m),o(i,f),o(f,g),o(g,v),o(f,u),o(f,d),o(d,_),o(n,E)},p(x,j){e=x},d(x){x&&R(n)}}}function Oe(t,e){let n,i,l,r,c,m,f,g,b=e[5].title+"",v,u,d,h=e[5].description+"",_,E;return{key:t,first:null,c(){n=s("div"),i=s("div"),l=s("div"),r=s("img"),m=$(),f=s("div"),g=s("h4"),v=G(b),u=$(),d=s("p"),_=G(h),E=$(),se(r.src,c=e[5].icon)||a(r,"src",c),a(r,"alt","Icon"),a(l,"class","about-icon"),a(g,"class","about-title"),a(d,"class","text"),a(f,"class","about-content media-body"),a(i,"class","single-about d-sm-flex mt-30 wow fadeInUp"),a(i,"data-wow-duration","1s"),a(n,"class","col-lg-6"),this.first=n},m(x,j){O(x,n,j),o(n,i),o(i,l),o(l,r),o(i,m),o(i,f),o(f,g),o(g,v),o(f,u),o(f,d),o(d,_),o(n,E)},p(x,j){e=x},d(x){x&&R(n)}}}function mt(t){let e,n,i,l,r,c,m,f,g,b,v,u,d,h,_,E,x,j,H,A,D,U,C,y,T,N,I=[],ee=new Map,z,Y,J,B,re,W,ce,p,k=[],M=new Map,he,ie=t[1],q=[];for(let w=0;w<ie.length;w+=1)q[w]=Se(Le(t,ie,w));j=new pt({props:{videoId:t[2].video}});let pe=t[3].items;const Te=w=>w[8].title;for(let w=0;w<pe.length;w+=1){let S=Ae(t,pe,w),P=Te(S);ee.set(P,I[w]=Re(P,S))}let me=t[4].items;const Ie=w=>w[5].title;for(let w=0;w<me.length;w+=1){let S=Me(t,me,w),P=Ie(S);M.set(P,k[w]=Oe(P,S))}return{c(){e=s("section"),n=s("div"),i=s("div"),l=s("div"),r=s("div"),c=s("h4"),c.textContent=`${t[0]}`,m=$(),f=s("div");for(let w=0;w<q.length;w+=1)q[w].c();g=$(),b=s("div"),v=s("div"),u=s("div"),d=s("h4"),d.textContent=`${t[2].title}`,h=$(),_=s("p"),_.textContent=`${t[2].description}`,E=$(),x=s("div"),ne(j.$$.fragment),H=$(),A=s("div"),D=s("div"),U=s("h4"),U.textContent=`${t[3].title}`,C=$(),y=s("p"),y.textContent=`${t[3].description}`,T=$(),N=s("div");for(let w=0;w<I.length;w+=1)I[w].c();z=$(),Y=s("div"),J=s("div"),B=s("h4"),B.textContent=`${t[4].title}`,re=$(),W=s("p"),W.textContent=`${t[4].description}`,ce=$(),p=s("div");for(let w=0;w<k.length;w+=1)k[w].c();a(c,"class","title wow fadeInUp"),a(c,"data-wow-duration","1.5s"),a(r,"class","section-title text-center mt-30 pb-40"),a(l,"class","col-xl-6 col-lg-8"),a(f,"class","row justify-content-center"),a(i,"class","row justify-content-center"),a(d,"class","wow fadeInUp"),a(d,"data-wow-duration","1s"),a(_,"class","text wow fadeInUp"),a(_,"data-wow-duration","1s"),a(u,"class","section-title text-center mt-30 pb-40"),a(v,"class","col-xl-6 col-lg-6"),a(x,"class","col-xl-6 col-lg-6 wow fadeInUp"),a(x,"data-wow-duration","1s"),a(b,"class","row about-subtitle svelte-1ulk18f"),a(U,"class","wow fadeInUp"),a(U,"data-wow-duration","1s"),a(y,"class","text wow fadeInUp"),a(y,"data-wow-duration","1s"),a(D,"class","col-xl-6 col-lg-8"),a(A,"class","row justify-content-center about-subtitle svelte-1ulk18f"),a(N,"class","row"),a(B,"class","wow fadeInUp"),a(B,"data-wow-duration","1s"),a(W,"class","text wow fadeInUp"),a(W,"data-wow-duration","1s"),a(J,"class","col-xl-6 col-lg-8"),a(Y,"class","row justify-content-center about-subtitle svelte-1ulk18f"),a(p,"class","row"),a(n,"class","container"),a(e,"id","about"),a(e,"class","about-area")},m(w,S){O(w,e,S),o(e,n),o(n,i),o(i,l),o(l,r),o(r,c),o(i,m),o(i,f);for(let P=0;P<q.length;P+=1)q[P]&&q[P].m(f,null);o(n,g),o(n,b),o(b,v),o(v,u),o(u,d),o(u,h),o(u,_),o(b,E),o(b,x),K(j,x,null),o(n,H),o(n,A),o(A,D),o(D,U),o(D,C),o(D,y),o(n,T),o(n,N);for(let P=0;P<I.length;P+=1)I[P]&&I[P].m(N,null);o(n,z),o(n,Y),o(Y,J),o(J,B),o(J,re),o(J,W),o(n,ce),o(n,p);for(let P=0;P<k.length;P+=1)k[P]&&k[P].m(p,null);he=!0},p(w,[S]){if(S&2){ie=w[1];let P;for(P=0;P<ie.length;P+=1){const je=Le(w,ie,P);q[P]?q[P].p(je,S):(q[P]=Se(je),q[P].c(),q[P].m(f,null))}for(;P<q.length;P+=1)q[P].d(1);q.length=ie.length}S&8&&(pe=w[3].items,I=fe(I,S,Te,1,w,pe,ee,N,ue,Re,null,Ae)),S&16&&(me=w[4].items,k=fe(k,S,Ie,1,w,me,M,p,ue,Oe,null,Me))},i(w){he||(F(j.$$.fragment,w),he=!0)},o(w){te(j.$$.fragment,w),he=!1},d(w){w&&R(e),ke(q,w),V(j);for(let S=0;S<I.length;S+=1)I[S].d();for(let S=0;S<k.length;S+=1)k[S].d()}}}function vt(t){let{title:e,texts:n,objective:i,strategies:l,expectedOutcomes:r}=we.about;return[e,n,i,l,r]}class _t extends Z{constructor(e){super(),X(this,e,vt,mt,Q,{})}}function wt(t){let e,n;return{c(){e=s("iframe"),e.innerHTML="<p>Your browser does not support iframes.</p>",se(e.src,n="//mautic.clubrotariodedavid.org/form/9")||a(e,"src",n),a(e,"width","500"),a(e,"height","500")},m(i,l){O(i,e,l)},p:L,i:L,o:L,d(i){i&&R(e)}}}class bt extends Z{constructor(e){super(),X(this,e,null,wt,Q,{})}}function De(t,e,n){const i=t.slice();return i[5]=e[n],i}function yt(t){let e=t[5].text+"",n;return{c(){n=G(e)},m(i,l){O(i,n,l)},p:L,d(i){i&&R(n)}}}function $t(t){let e,n=t[5].text+"",i;return{c(){e=s("a"),i=G(n),a(e,"href","tel:"+t[5].text)},m(l,r){O(l,e,r),o(e,i)},p:L,d(l){l&&R(e)}}}function kt(t){let e,n=t[5].text+"",i;return{c(){e=s("a"),i=G(n),a(e,"href","mailto:"+t[5].text)},m(l,r){O(l,e,r),o(e,i)},p:L,d(l){l&&R(e)}}}function Ne(t){let e,n,i,l;function r(f,g){return f[5].type==="mail"?kt:f[5].type==="phone"?$t:yt}let m=r(t)(t);return{c(){e=s("li"),n=s("i"),i=$(),m.c(),l=$(),a(n,"class",t[5].icon)},m(f,g){O(f,e,g),o(e,n),o(e,i),m.m(e,null),o(e,l)},p(f,g){m.p(f,g)},d(f){f&&R(e),m.d()}}}function xt(t){let e,n,i,l,r,c,m,f,g,b,v,u,d,h,_,E,x,j,H,A,D,U,C=t[4],y=[];for(let T=0;T<C.length;T+=1)y[T]=Ne(De(t,C,T));return D=new bt({}),{c(){e=s("section"),n=s("div"),i=s("div"),l=s("div"),r=s("div"),c=s("h3"),c.textContent=`${t[0]}`,m=$(),f=s("p"),f.textContent=`${t[1]}`,g=$(),b=s("div"),v=s("div"),u=s("div"),d=s("h4"),d.textContent=`${t[2]}`,h=$(),_=s("p"),_.textContent=`${t[3]}`,E=$(),x=s("ul");for(let T=0;T<y.length;T+=1)y[T].c();j=$(),H=s("div"),A=s("div"),ne(D.$$.fragment),a(c,"class","title"),a(f,"class","text"),a(r,"class","section-title text-center pb-20"),a(l,"class","col-lg-6"),a(i,"class","row justify-content-center"),a(d,"class","contact-title"),a(_,"class","text"),a(x,"class","contact-info"),a(u,"class","contact-two mt-50 wow fadeIn"),a(u,"data-wow-duration","1.5s"),a(u,"data-wow-delay","0.2s"),a(v,"class","col-lg-6"),a(A,"class","contact-form form-style-one mt-35 wow fadeIn"),a(A,"data-wow-duration","1.5s"),a(A,"data-wow-delay","0.5s"),a(H,"class","col-lg-6"),a(b,"class","row"),a(n,"class","container"),a(e,"id","contact"),a(e,"class","contact-area")},m(T,N){O(T,e,N),o(e,n),o(n,i),o(i,l),o(l,r),o(r,c),o(r,m),o(r,f),o(n,g),o(n,b),o(b,v),o(v,u),o(u,d),o(u,h),o(u,_),o(u,E),o(u,x);for(let I=0;I<y.length;I+=1)y[I]&&y[I].m(x,null);o(b,j),o(b,H),o(H,A),K(D,A,null),U=!0},p(T,[N]){if(N&16){C=T[4];let I;for(I=0;I<C.length;I+=1){const ee=De(T,C,I);y[I]?y[I].p(ee,N):(y[I]=Ne(ee),y[I].c(),y[I].m(x,null))}for(;I<y.length;I+=1)y[I].d(1);y.length=C.length}},i(T){U||(F(D.$$.fragment,T),U=!0)},o(T){te(D.$$.fragment,T),U=!1},d(T){T&&R(e),ke(y,T),V(D)}}}function Tt(t){let{title:e,description:n,contactTitle:i,contactText:l,contactInfo:r}=we.contact;return[e,n,i,l,r]}class It extends Z{constructor(e){super(),X(this,e,Tt,xt,Q,{})}}function Ue(t,e,n){const i=t.slice();return i[2]=e[n],i[4]=n,i}function He(t,e,n){const i=t.slice();return i[2]=e[n],i[4]=n,i}function qe(t,e,n){const i=t.slice();return i[2]=e[n],i[4]=n,i}function Ge(t,e){let n,i,l=e[2].name+"",r,c;return{key:t,first:null,c(){n=s("li"),i=s("a"),r=G(l),c=$(),a(i,"class","page-scroll"),a(i,"href",e[2].href),a(n,"class","nav-item "+(e[2].active?"active":"")),this.first=n},m(m,f){O(m,n,f),o(n,i),o(i,r),o(n,c)},p(m,f){e=m},d(m){m&&R(n)}}}function ze(t,e){let n;return{key:t,first:null,c(){n=s("li"),a(n,"data-target","#carouselOne"),a(n,"data-slide-to",e[4]),a(n,"class",e[4]===0?"active":""),this.first=n},m(i,l){O(i,n,l)},p(i,l){e=i},d(i){i&&R(n)}}}function Be(t,e){let n,i,l,r,c,m,f=e[2].title+"",g,b,v,u,d,h=e[2].buttonText+"",_,E;return{key:t,first:null,c(){n=s("div"),i=s("div"),l=s("div"),r=s("div"),c=s("div"),m=s("h2"),g=G(f),b=$(),v=s("ul"),u=s("li"),d=s("a"),_=G(h),E=$(),a(m,"class","carousel-title"),a(d,"class","main-btn rounded-three"),a(d,"href",e[2].href),a(v,"class","carousel-btn rounded-buttons"),a(c,"class","col-xl-6 col-lg-7 col-sm-10"),a(r,"class","row justify-content-center"),a(l,"class","container"),a(i,"class","carousel-caption"),a(n,"class","carousel-item bg_cover "+(e[4]===0?"active":"")),Ze(n,"background-image","url("+e[2].backgroundImage+")"),this.first=n},m(x,j){O(x,n,j),o(n,i),o(i,l),o(l,r),o(r,c),o(c,m),o(m,g),o(c,b),o(c,v),o(v,u),o(u,d),o(d,_),o(n,E)},p(x,j){e=x},d(x){x&&R(n)}}}function jt(t){let e,n,i,l,r,c,m,f,g,b,v,u,d=[],h=new Map,_,E,x,j,H,A=[],D=new Map,U,C,y=[],T=new Map,N,I,ee,z,Y=t[0];const J=p=>p[2].id;for(let p=0;p<Y.length;p+=1){let k=qe(t,Y,p),M=J(k);h.set(M,d[p]=Ge(M,k))}let B=t[1];const re=p=>p[2].id;for(let p=0;p<B.length;p+=1){let k=He(t,B,p),M=re(k);D.set(M,A[p]=ze(M,k))}let W=t[1];const ce=p=>p[2].id;for(let p=0;p<W.length;p+=1){let k=Ue(t,W,p),M=ce(k);T.set(M,y[p]=Be(M,k))}return{c(){e=s("section"),n=s("div"),i=s("div"),l=s("div"),r=s("div"),c=s("nav"),m=s("a"),m.innerHTML=`<img src="images/favicon.png" alt="Logo of Digital Interactive Classrooms Project, a Rotary initiative." class="svelte-xroov3"/>
                            Digital Interactive Classrooms`,f=$(),g=s("button"),g.innerHTML=`<span class="toggler-icon"></span> 
                            <span class="toggler-icon"></span> 
                            <span class="toggler-icon"></span>`,b=$(),v=s("div"),u=s("ul");for(let p=0;p<d.length;p+=1)d[p].c();_=$(),E=s("div"),x=s("div"),j=s("div"),H=s("ol");for(let p=0;p<A.length;p+=1)A[p].c();U=$(),C=s("div");for(let p=0;p<y.length;p+=1)y[p].c();N=$(),I=s("a"),I.innerHTML='<i class="lni-arrow-left-circle"></i>',ee=$(),z=s("a"),z.innerHTML='<i class="lni-arrow-right-circle"></i>',a(m,"class","navbar-brand svelte-xroov3"),a(m,"href","#"),a(g,"class","navbar-toggler"),a(g,"type","button"),a(g,"data-toggle","collapse"),a(g,"data-target","#navbarEight"),a(g,"aria-controls","navbarEight"),a(g,"aria-expanded","false"),a(g,"aria-label","Toggle navigation"),a(u,"class","navbar-nav ml-auto"),a(v,"class","collapse navbar-collapse sub-menu-bar"),a(v,"id","navbarEight"),a(c,"class","navbar navbar-expand-lg"),a(r,"class","col-lg-12"),a(l,"class","row"),a(i,"class","container"),a(n,"class","navbar-area"),a(H,"class","carousel-indicators"),a(C,"class","carousel-inner"),a(I,"class","carousel-control-prev"),a(I,"href","#carouselOne"),a(I,"role","button"),a(I,"data-slide","prev"),a(z,"class","carousel-control-next"),a(z,"href","#carouselOne"),a(z,"role","button"),a(z,"data-slide","next"),a(j,"id","carouselOne"),a(j,"class","carousel slide"),a(j,"data-ride","carousel"),a(x,"class","bd-example"),a(E,"id","home"),a(E,"class","slider-area"),a(e,"class","header-area")},m(p,k){O(p,e,k),o(e,n),o(n,i),o(i,l),o(l,r),o(r,c),o(c,m),o(c,f),o(c,g),o(c,b),o(c,v),o(v,u);for(let M=0;M<d.length;M+=1)d[M]&&d[M].m(u,null);o(e,_),o(e,E),o(E,x),o(x,j),o(j,H);for(let M=0;M<A.length;M+=1)A[M]&&A[M].m(H,null);o(j,U),o(j,C);for(let M=0;M<y.length;M+=1)y[M]&&y[M].m(C,null);o(j,N),o(j,I),o(j,ee),o(j,z)},p(p,[k]){k&1&&(Y=p[0],d=fe(d,k,J,1,p,Y,h,u,ue,Ge,null,qe)),k&2&&(B=p[1],A=fe(A,k,re,1,p,B,D,H,ue,ze,null,He)),k&2&&(W=p[1],y=fe(y,k,ce,1,p,W,T,C,ue,Be,null,Ue))},i:L,o:L,d(p){p&&R(e);for(let k=0;k<d.length;k+=1)d[k].d();for(let k=0;k<A.length;k+=1)A[k].d();for(let k=0;k<y.length;k+=1)y[k].d()}}}function Ct(t){let{navbarItems:e,carouselItems:n}=we.header;return[e,n]}class Pt extends Z{constructor(e){super(),X(this,e,Ct,jt,Q,{})}}function We(t,e,n){const i=t.slice();return i[3]=e[n],i}function Fe(t){let e,n,i,l,r;return{c(){e=s("div"),n=s("div"),i=s("img"),r=$(),se(i.src,l=t[3].src)||a(i,"src",l),a(i,"alt",t[3].alt),a(n,"class","single-client text-center"),a(e,"class","col-lg-3")},m(c,m){O(c,e,m),o(e,n),o(n,i),o(e,r)},p:L,d(c){c&&R(e)}}}function Et(t){let e,n,i,l,r,c,m,f,g,b,v=t[2],u=[];for(let d=0;d<v.length;d+=1)u[d]=Fe(We(t,v,d));return{c(){e=s("section"),n=s("div"),i=s("div"),l=s("div"),r=s("div"),c=s("h3"),c.textContent=`${t[0]}`,m=$(),f=s("p"),f.textContent=`${t[1]}`,g=$(),b=s("div");for(let d=0;d<u.length;d+=1)u[d].c();a(c,"class","title"),a(f,"class","text"),a(r,"class","section-title text-center pb-20"),a(l,"class","col-lg-6"),a(i,"class","row justify-content-center"),a(b,"class","row client-active"),a(n,"class","container"),a(e,"id","partners"),a(e,"class","partners-area")},m(d,h){O(d,e,h),o(e,n),o(n,i),o(i,l),o(l,r),o(r,c),o(r,m),o(r,f),o(n,g),o(n,b);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(b,null)},p(d,[h]){if(h&4){v=d[2];let _;for(_=0;_<v.length;_+=1){const E=We(d,v,_);u[_]?u[_].p(E,h):(u[_]=Fe(E),u[_].c(),u[_].m(b,null))}for(;_<u.length;_+=1)u[_].d(1);u.length=v.length}},i:L,o:L,d(d){d&&R(e),ke(u,d)}}}function Mt(t){let{title:e,description:n,images:i}=we.partners;return[e,n,i]}class At extends Z{constructor(e){super(),X(this,e,Mt,Et,Q,{})}}function Lt(t){let e;return{c(){e=s("div"),e.innerHTML=`<div class="loader"><div class="ytp-spinner"><div class="ytp-spinner-container"><div class="ytp-spinner-rotator"><div class="ytp-spinner-left"><div class="ytp-spinner-circle"></div></div> 
                  <div class="ytp-spinner-right"><div class="ytp-spinner-circle"></div></div></div></div></div></div>`,a(e,"class","preloader")},m(n,i){O(n,e,i)},p:L,i:L,o:L,d(n){n&&R(e)}}}class St extends Z{constructor(e){super(),X(this,e,null,Lt,Q,{})}}function Rt(t){let e;return{c(){e=s("a"),e.innerHTML='<i class="lni-chevron-up"></i>',a(e,"href","#"),a(e,"class","back-to-top")},m(n,i){O(n,e,i)},p:L,i:L,o:L,d(n){n&&R(e)}}}class Ot extends Z{constructor(e){super(),X(this,e,null,Rt,Q,{})}}function Dt(t){let e,n,i,l,r,c,m,f,g,b,v,u,d;return n=new St({}),l=new Pt({}),c=new _t({}),f=new At({}),b=new It({}),u=new Ot({}),{c(){e=s("div"),ne(n.$$.fragment),i=$(),ne(l.$$.fragment),r=$(),ne(c.$$.fragment),m=$(),ne(f.$$.fragment),g=$(),ne(b.$$.fragment),v=$(),ne(u.$$.fragment)},m(h,_){O(h,e,_),K(n,e,null),o(e,i),K(l,e,null),o(e,r),K(c,e,null),o(e,m),K(f,e,null),o(e,g),K(b,e,null),o(e,v),K(u,e,null),d=!0},p:L,i(h){d||(F(n.$$.fragment,h),F(l.$$.fragment,h),F(c.$$.fragment,h),F(f.$$.fragment,h),F(b.$$.fragment,h),F(u.$$.fragment,h),d=!0)},o(h){te(n.$$.fragment,h),te(l.$$.fragment,h),te(c.$$.fragment,h),te(f.$$.fragment,h),te(b.$$.fragment,h),te(u.$$.fragment,h),d=!1},d(h){h&&R(e),V(n),V(l),V(c),V(f),V(b),V(u)}}}class Nt extends Z{constructor(e){super(),X(this,e,null,Dt,Q,{})}}new Nt({target:document.getElementById("app")});