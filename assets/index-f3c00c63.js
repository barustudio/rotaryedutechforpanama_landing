(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function P(){}function Re(n){return n()}function ve(){return Object.create(null)}function ie(n){n.forEach(Re)}function De(n){return typeof n=="function"}function z(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let le;function X(n,e){return le||(le=document.createElement("a")),le.href=e,n===le.href}function Ue(n){return Object.keys(n).length===0}const He=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in He;function a(n,e){n.appendChild(e)}function L(n,e,t){n.insertBefore(e,t||null)}function M(n){n.parentNode&&n.parentNode.removeChild(n)}function fe(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function l(n){return document.createElement(n)}function G(n){return document.createTextNode(n)}function T(){return G(" ")}function o(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function qe(n){return Array.from(n.childNodes)}function Ge(n,e,t,i){t==null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}let ge;function ee(n){ge=n}const V=[],_e=[];let Q=[];const we=[],ze=Promise.resolve();let de=!1;function Be(){de||(de=!0,ze.then(Ne))}function ue(n){Q.push(n)}const ce=new Set;let K=0;function Ne(){if(K!==0)return;const n=ge;do{try{for(;K<V.length;){const e=V[K];K++,ee(e),Fe(e.$$)}}catch(e){throw V.length=0,K=0,e}for(ee(null),V.length=0,K=0;_e.length;)_e.pop()();for(let e=0;e<Q.length;e+=1){const t=Q[e];ce.has(t)||(ce.add(t),t())}Q.length=0}while(V.length);for(;we.length;)we.pop()();de=!1,ce.clear(),ee(n)}function Fe(n){if(n.fragment!==null){n.update(),ie(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(ue)}}function We(n){const e=[],t=[];Q.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),Q=e}const re=new Set;let Ye;function U(n,e){n&&n.i&&(re.delete(n),n.i(e))}function W(n,e,t,i){if(n&&n.o){if(re.has(n))return;re.add(n),Ye.c.push(()=>{re.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}function te(n,e){n.d(1),e.delete(n.key)}function ne(n,e,t,i,s,r,d,w,h,m,_,p){let f=n.length,u=r.length,$=f;const c={};for(;$--;)c[n[$].key]=$;const g=[],v=new Map,j=new Map,D=[];for($=u;$--;){const I=p(s,r,$),k=t(I);let y=d.get(k);y?i&&D.push(()=>y.p(I,e)):(y=m(k,I),y.c()),v.set(k,g[$]=y),k in c&&j.set(k,Math.abs($-c[k]))}const A=new Set,N=new Set;function R(I){U(I,1),I.m(w,_),d.set(I.key,I),_=I.first,u--}for(;f&&u;){const I=g[u-1],k=n[f-1],y=I.key,b=k.key;I===k?(_=I.first,f--,u--):v.has(b)?!d.has(y)||A.has(y)?R(I):N.has(b)?f--:j.get(y)>j.get(b)?(N.add(y),R(I)):(A.add(b),f--):(h(k,d),f--)}for(;f--;){const I=n[f];v.has(I.key)||h(I,d)}for(;u;)R(g[u-1]);return ie(D),g}const Je=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Je];function Y(n){n&&n.c()}function H(n,e,t,i){const{fragment:s,after_update:r}=n.$$;s&&s.m(e,t),i||ue(()=>{const d=n.$$.on_mount.map(Re).filter(De);n.$$.on_destroy?n.$$.on_destroy.push(...d):ie(d),n.$$.on_mount=[]}),r.forEach(ue)}function q(n,e){const t=n.$$;t.fragment!==null&&(We(t.after_update),ie(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ke(n,e){n.$$.dirty[0]===-1&&(V.push(n),Be(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function B(n,e,t,i,s,r,d,w=[-1]){const h=ge;ee(n);const m=n.$$={fragment:null,ctx:[],props:r,update:P,not_equal:s,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:ve(),dirty:w,skip_bound:!1,root:e.target||h.$$.root};d&&d(m.root);let _=!1;if(m.ctx=t?t(n,e.props||{},(p,f,...u)=>{const $=u.length?u[0]:f;return m.ctx&&s(m.ctx[p],m.ctx[p]=$)&&(!m.skip_bound&&m.bound[p]&&m.bound[p]($),_&&Ke(n,p)),f}):[],m.update(),_=!0,ie(m.before_update),m.fragment=i?i(m.ctx):!1,e.target){if(e.hydrate){const p=qe(e.target);m.fragment&&m.fragment.l(p),p.forEach(M)}else m.fragment&&m.fragment.c();e.intro&&U(n.$$.fragment),H(n,e.target,e.anchor,e.customElement),Ne()}ee(h)}class F{$destroy(){q(this,1),this.$destroy=P}$on(e,t){if(!De(t))return P;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Ue(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ve={title:"Partners",description:"This project is made possible through the concerted efforts of our committed partners. These include Rotary clubs, community organizations, and the Ministry of Education, all working together to reshape the educational landscape in Panama.",images:[{src:"images/rotary-chitre.png",alt:"Logo Rotary Club of Chitré"},{src:"images/rotary-cristobal-colon.png",alt:"Logo Rotary Club of Cristobal Colón"},{src:"images/rotary-david.png",alt:"Logo Rotary Club of David"},{src:"images/rotary-la-chorrera.png",alt:"Logo Rotary Club of La Chorrera"},{src:"images/rotary-panama-norte.png",alt:"Logo Rotary Club of Panama Norte"},{src:"images/rotary-playa-coronado.png",alt:"Logo Rotary Club of Playa Coronado"},{src:"images/rotary-santiago.png",alt:"Logo Rotary Club of Santiago"},{src:"images/partner-meduca.jpg",alt:"Logo Ministry of Education"}]},Qe={title:"Empowering Panama's Teachers and Students",texts:["The Digital Technologies in Public Education project aims to significantly improve the quality of education in Panama's public schools by integrating digital technologies into teaching practices and providing essential teacher training.","This Rotary-led initiative, supported by a consortium of local clubs, seeks to bridge the digital divide and prepare students for the 21st-century workforce. With an estimated budget of $800,000, the project will impact more than 25,000 students and train over 1,200 teachers across 100 schools in the country.","The Digital Technologies in Public Education project represents a significant step towards improving Panama's public education system, bridging the digital divide, and empowering teachers and students with the tools and skills they need to succeed in the 21st century."],objective:{title:"Objective",description:"Enhance teaching and learning experiences in Panama's public education system by providing digital resources, equipment, and training to teachers and students. This will help reduce educational disparities, promote digital literacy, and equip the students with the necessary skills for thriving in the modern world.",video:"83yaqqkAJm0"},strategies:{title:"Strategies",description:"In our 'Digital Interactive Classrooms' project, we deploy cutting-edge strategies to revolutionize education in Panama. We focus on digital literacy, teacher training, and collaborative learning to bridge the digital divide and empower our educators and students.",items:[{icon:"images/icon-infrastructure.png",title:"Infrastructure Development",description:"The project will provide essential digital equipment, such as computers, tablets, projectors, and interactive whiteboards, to selected schools in underprivileged areas. This will ensure that both teachers and students have access to modern educational resources and tools."},{icon:"images/icon-training.png",title:"Teacher Training",description:"The project will offer comprehensive training to over 1,200 teachers, focusing on the effective use of digital technologies in the classroom. Teachers will learn how to incorporate technology into their lesson plans, use online resources, and develop engaging and interactive learning experiences for their students."},{icon:"images/icon-cv.png",title:"Curriculum Development",description:"The project will support the development of a technology-enhanced curriculum, integrating digital resources into traditional teaching methods. This will ensure that students gain relevant knowledge and skills, preparing them for future success in the digital age."},{icon:"images/icon-monitoring.png",title:"Monitoring and Evaluation",description:"The project will closely monitor progress and evaluate the impact of the digital technologies and training provided. This will help ensure that the project's objectives are met and that the resources are used effectively."},{icon:"images/icon-community.png",title:"Community Engagement",description:"The project will involve local Rotary clubs, community organizations, and the Ministry of Education (MEDUCA) in the planning, implementation, and evaluation process. This collaboration will help ensure the project's sustainability and long-term success."},{icon:"images/icon-advocacy.png",title:"Advocacy and Awareness",description:"The project will work on raising awareness about the importance of digital technologies in education, showcasing the positive impact on student learning and development. This will encourage more schools, communities, and policymakers to adopt similar approaches and invest in digital resources and teacher training."}]},expectedOutcomes:{title:"Expected Outcomes",description:"The Digital Interactive Classrooms Project envisions transformative outcomes that will shape the future of education in Panama. These aspirations not only focus on equipping students and teachers with digital competencies but also aim to build lasting partnerships that ensure sustainability.",items:[{icon:"images/outcome-student-empowerment.png",title:"Student Empowerment: Advancing digital literacy and workforce readiness.",description:"Improved digital literacy and skills among students, better preparing them for higher education and the workforce."},{icon:"images/outcome-teacher-excellence.png",title:"Teacher Excellence: Cultivating innovative, technology-driven teaching practices.",description:"Enhanced teaching practices, with teachers integrating digital technologies and resources into their lessons, leading to more engaging and effective learning experiences for students."},{icon:"images/outcome-future-ready-cv.png",title:"Future-Ready Curriculum: Building a relevant, digital-age education system.",description:"A technology-enhanced curriculum that meets the needs of modern students and prepares them for success in the digital age."},{icon:"images/outcome-sustainable-partnerships.png",title:"Sustainable Partnerships: Fostering collaboration for enduring impact and project sustainability.",description:"Increased collaboration and partnerships between Rotary clubs, community organizations, and the Ministry of Education, ensuring the project's sustainability and long-term impact."}]}},Xe={title:"Get in touch",description:"Connect with us today and join us in the journey of transforming education in Panama through technology.",contactTitle:"Lets talk about the project",contactText:"Join us in the conversation about this transformative project, aimed at revolutionizing public education in Panama through digital technology. Your input and support could make a substantial difference in shaping a brighter future for Panamanian students.",contactInfo:[{type:"name",icon:"lni-user",text:"Enedelsy Escobar-King"},{type:"phone",icon:"lni-phone-handset",text:"+507 6521-6000"},{type:"mail",icon:"lni-envelope",text:"eescobar_king@hotmail.com"},{type:"mail",icon:"lni-envelope",text:"crpn1996@gmail.com"},{type:"district",icon:"lni-cog",text:"Rotary District 4240"},{type:"address",icon:"lni-map-marker",text:"Panama City, Republic of Panama"}]},Ze={navbarItems:[{id:1,name:"HOME",href:"#home",active:!0},{id:2,name:"ABOUT",href:"#about",active:!1},{id:4,name:"PARTNERS",href:"#partners",active:!1},{id:6,name:"CONTACT",href:"#contact",active:!1}],carouselItems:[{id:1,title:"Empowering the future: Transforming education in Panama",backgroundImage:"images/slider-1.jpg",href:"#contact",buttonText:"Join Our Mission"},{id:2,title:"Unlocking potential: Digital tools for a brighter tomorrow",backgroundImage:"images/slider-2.jpg",href:"#contact",buttonText:"Get Involved"},{id:3,title:"Bridging the gap: Quality education for all Panamanian students",backgroundImage:"images/slider-3.jpg",href:"#contact",buttonText:"Transform Lives with Us"}]},et={sectionTitle:"News & Events",sectionSubtitle:"Upcoming events and recent news articles about the project",categories:["BRANDING","MARKETING","PLANNING","RESEARCH"],items:[{id:1,categories:["branding-3","planning-3"],image:"images/news-1.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"},{id:2,categories:["marketing-3","research-3"],image:"images/news-2.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"},{id:3,categories:["branding-3","marketing-3"],image:"images/news-3.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"},{id:4,categories:["planning-3","research-3"],image:"images/news-4.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"},{id:5,categories:["marketing-3"],image:"images/news-5.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"},{id:6,categories:["planning-3"],image:"images/news-6.png",title:"Graphics Design",description:"Short description for the ones who look for something new. Awesome!"}]},tt={title:"Testimonials",description:"Hear from students, teachers, and community members about the tangible changes and improvements they've experienced.",items:[{image:"images/author-3.jpg",text:"Since we've incorporated these digital tools in our classrooms, I've seen a significant increase in student engagement and interest. It's like we've unlocked a new way of learning, and the students are thriving.",author:"María Pérez",title:"Teacher"},{image:"images/author-1.jpg",text:"Before, I never really liked school. Now, I can't wait to get to class. Using technology makes learning exciting and interactive. I feel more prepared for the future.",author:"Alberto Rios",title:"Student"},{image:"images/author-2.jpg",text:"I am grateful for the Paul Harris Interactive Classroom in my daughter's school. Now she comes home from school excited to share what she has learned. I see her growing in confidence and knowledge. This initiative is truly transforming education in Panama.",author:"Carmen Rodríguez",title:"Parent"},{image:"images/author-4.jpg",text:"The Paul Harris Interactive Classroom has been a game-changer for our school. We've seen improvements not just in academic performance, but also in student motivation and teacher satisfaction. We're thrilled to be a part of this initiative.",author:"Luis González",title:"School Principal"},{image:"images/author-4.jpg",text:"We are proud to partner with Rotary on this project. Their commitment to improving education and integrating technology in our classrooms aligns perfectly with our mission. Together, we are making a difference in the lives of our students.",author:"Dr. Marta Ortega",title:"Ministry of Education"}]},Z={partners:Ve,about:Qe,contact:Xe,header:Ze,news:et,testimonials:tt};function ye(n,e,t){const i=n.slice();return i[1]=e[t],i}function be(n,e){let t,i,s,r,d,w,h,m,_=e[1].title+"",p,f,u,$=e[1].description+"",c,g;return{key:n,first:null,c(){t=l("div"),i=l("div"),s=l("div"),r=l("img"),w=T(),h=l("div"),m=l("h4"),p=G(_),f=T(),u=l("p"),c=G($),g=T(),X(r.src,d=e[1].icon)||o(r,"src",d),o(r,"alt","Icon"),o(s,"class","about-icon"),o(m,"class","about-title"),o(u,"class","text"),o(h,"class","about-content media-body"),o(i,"class","single-about d-sm-flex mt-30 wow fadeInUp"),o(i,"data-wow-duration","1s"),o(t,"class","col-lg-6"),this.first=t},m(v,j){L(v,t,j),a(t,i),a(i,s),a(s,r),a(i,w),a(i,h),a(h,m),a(m,p),a(h,f),a(h,u),a(u,c),a(t,g)},p(v,j){e=v},d(v){v&&M(t)}}}function nt(n){let e,t,i,s,r,d,w,h,m,_,p=[],f=new Map,u=n[0].items;const $=c=>c[1].title;for(let c=0;c<u.length;c+=1){let g=ye(n,u,c),v=$(g);f.set(v,p[c]=be(v,g))}return{c(){e=l("section"),t=l("div"),i=l("div"),s=l("div"),r=l("div"),d=l("h3"),d.textContent=`${n[0].title}`,w=T(),h=l("p"),h.textContent=`${n[0].description}`,m=T(),_=l("div");for(let c=0;c<p.length;c+=1)p[c].c();o(d,"class","title"),o(h,"class","text"),o(r,"class","section-title text-center pb-20"),o(s,"class","col-lg-6"),o(i,"class","row justify-content-center"),o(_,"class","row"),o(t,"class","container"),o(e,"id","about-outcomes"),o(e,"class","about-outcomes-area svelte-1u3re5r")},m(c,g){L(c,e,g),a(e,t),a(t,i),a(i,s),a(s,r),a(r,d),a(r,w),a(r,h),a(t,m),a(t,_);for(let v=0;v<p.length;v+=1)p[v]&&p[v].m(_,null)},p(c,[g]){g&1&&(u=c[0].items,p=ne(p,g,$,1,c,u,f,_,te,be,null,ye))},i:P,o:P,d(c){c&&M(e);for(let g=0;g<p.length;g+=1)p[g].d()}}}function it(n){let{expectedOutcomes:e}=Z.about;return[e]}class ot extends F{constructor(e){super(),B(this,e,it,nt,z,{})}}function $e(n,e,t){const i=n.slice();return i[1]=e[t],i}function ke(n,e){let t,i,s,r,d,w,h,m,_=e[1].title+"",p,f,u,$=e[1].description+"",c,g;return{key:n,first:null,c(){t=l("div"),i=l("div"),s=l("div"),r=l("img"),w=T(),h=l("div"),m=l("h4"),p=G(_),f=T(),u=l("p"),c=G($),g=T(),X(r.src,d=e[1].icon)||o(r,"src",d),o(r,"alt","Icon"),o(s,"class","about-icon"),o(m,"class","about-title"),o(u,"class","text"),o(h,"class","about-content media-body"),o(i,"class","single-about d-sm-flex mt-30 wow fadeInUp"),o(i,"data-wow-duration","1s"),o(t,"class","col-lg-6"),this.first=t},m(v,j){L(v,t,j),a(t,i),a(i,s),a(s,r),a(i,w),a(i,h),a(h,m),a(m,p),a(h,f),a(h,u),a(u,c),a(t,g)},p(v,j){e=v},d(v){v&&M(t)}}}function at(n){let e,t,i,s,r,d,w,h,m,_,p=[],f=new Map,u=n[0].items;const $=c=>c[1].title;for(let c=0;c<u.length;c+=1){let g=$e(n,u,c),v=$(g);f.set(v,p[c]=ke(v,g))}return{c(){e=l("section"),t=l("div"),i=l("div"),s=l("div"),r=l("div"),d=l("h3"),d.textContent=`${n[0].title}`,w=T(),h=l("p"),h.textContent=`${n[0].description}`,m=T(),_=l("div");for(let c=0;c<p.length;c+=1)p[c].c();o(d,"class","title"),o(h,"class","text"),o(r,"class","section-title text-center pb-20"),o(s,"class","col-lg-6"),o(i,"class","row justify-content-center"),o(_,"class","row"),o(t,"class","container"),o(e,"id","about-strategies"),o(e,"class","about-strategies-area svelte-v1rwow")},m(c,g){L(c,e,g),a(e,t),a(t,i),a(i,s),a(s,r),a(r,d),a(r,w),a(r,h),a(t,m),a(t,_);for(let v=0;v<p.length;v+=1)p[v]&&p[v].m(_,null)},p(c,[g]){g&1&&(u=c[0].items,p=ne(p,g,$,1,c,u,f,_,te,ke,null,$e))},i:P,o:P,d(c){c&&M(e);for(let g=0;g<p.length;g+=1)p[g].d()}}}function st(n){let{strategies:e}=Z.about;return[e]}class lt extends F{constructor(e){super(),B(this,e,st,at,z,{})}}function rt(n){let e,t,i;return{c(){e=l("div"),t=l("iframe"),X(t.src,i="https://www.youtube.com/embed/"+n[0])||o(t,"src",i),o(t,"width","560"),o(t,"height","315"),o(t,"title","YouTube video player"),o(t,"frameborder","0"),o(t,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),t.allowFullscreen=!0,o(t,"class","svelte-1x4pkex"),o(e,"class","video-responsive svelte-1x4pkex")},m(s,r){L(s,e,r),a(e,t)},p(s,[r]){r&1&&!X(t.src,i="https://www.youtube.com/embed/"+s[0])&&o(t,"src",i)},i:P,o:P,d(s){s&&M(e)}}}function ct(n,e,t){let{videoId:i}=e;return n.$$set=s=>{"videoId"in s&&t(0,i=s.videoId)},[i]}class dt extends F{constructor(e){super(),B(this,e,ct,rt,z,{videoId:0})}}function xe(n,e,t){const i=n.slice();return i[3]=e[t],i}function Te(n){let e,t,i=n[3]+"",s,r;return{c(){e=l("div"),t=l("p"),s=G(i),r=T(),o(t,"class","text wow fadeInUp"),o(t,"data-wow-duration","1s"),o(e,"class","col-lg-4")},m(d,w){L(d,e,w),a(e,t),a(t,s),a(e,r)},p:P,d(d){d&&M(e)}}}function ut(n){let e,t,i,s,r,d,w,h,m,_,p,f,u,$,c,g,v,j,D,A,N,R,I,k=n[1],y=[];for(let b=0;b<k.length;b+=1)y[b]=Te(xe(n,k,b));return j=new dt({props:{videoId:n[2].video}}),A=new lt({}),R=new ot({}),{c(){e=l("section"),t=l("div"),i=l("div"),s=l("div"),r=l("div"),d=l("h4"),d.textContent=`${n[0]}`,w=T(),h=l("div");for(let b=0;b<y.length;b+=1)y[b].c();m=T(),_=l("div"),p=l("div"),f=l("div"),u=l("h4"),u.textContent=`${n[2].title}`,$=T(),c=l("p"),c.textContent=`${n[2].description}`,g=T(),v=l("div"),Y(j.$$.fragment),D=T(),Y(A.$$.fragment),N=T(),Y(R.$$.fragment),o(d,"class","title wow fadeInUp"),o(d,"data-wow-duration","1.5s"),o(r,"class","section-title text-center mt-30 pb-40"),o(s,"class","col-xl-6 col-lg-8"),o(h,"class","row justify-content-center"),o(i,"class","row justify-content-center"),o(u,"class","wow fadeInUp"),o(u,"data-wow-duration","1s"),o(c,"class","text wow fadeInUp"),o(c,"data-wow-duration","1s"),o(f,"class","section-title text-center mt-30 pb-40"),o(p,"class","col-xl-6 col-lg-6"),o(v,"class","col-xl-6 col-lg-6 wow fadeInUp"),o(v,"data-wow-duration","1s"),o(_,"class","row about-subtitle svelte-1ulk18f"),o(t,"class","container"),o(e,"id","about"),o(e,"class","about-area")},m(b,C){L(b,e,C),a(e,t),a(t,i),a(i,s),a(s,r),a(r,d),a(i,w),a(i,h);for(let S=0;S<y.length;S+=1)y[S]&&y[S].m(h,null);a(t,m),a(t,_),a(_,p),a(p,f),a(f,u),a(f,$),a(f,c),a(_,g),a(_,v),H(j,v,null),L(b,D,C),H(A,b,C),L(b,N,C),H(R,b,C),I=!0},p(b,[C]){if(C&2){k=b[1];let S;for(S=0;S<k.length;S+=1){const J=xe(b,k,S);y[S]?y[S].p(J,C):(y[S]=Te(J),y[S].c(),y[S].m(h,null))}for(;S<y.length;S+=1)y[S].d(1);y.length=k.length}},i(b){I||(U(j.$$.fragment,b),U(A.$$.fragment,b),U(R.$$.fragment,b),I=!0)},o(b){W(j.$$.fragment,b),W(A.$$.fragment,b),W(R.$$.fragment,b),I=!1},d(b){b&&M(e),fe(y,b),q(j),b&&M(D),q(A,b),b&&M(N),q(R,b)}}}function ft(n){let{title:e,texts:t,objective:i}=Z.about;return[e,t,i]}class gt extends F{constructor(e){super(),B(this,e,ft,ut,z,{})}}function ht(n){let e,t;return{c(){e=l("iframe"),e.innerHTML="<p>Your browser does not support iframes.</p>",X(e.src,t="//mautic.clubrotariodedavid.org/form/9")||o(e,"src",t),o(e,"width","500"),o(e,"height","500")},m(i,s){L(i,e,s)},p:P,i:P,o:P,d(i){i&&M(e)}}}class pt extends F{constructor(e){super(),B(this,e,null,ht,z,{})}}function Ie(n,e,t){const i=n.slice();return i[5]=e[t],i}function mt(n){let e=n[5].text+"",t;return{c(){t=G(e)},m(i,s){L(i,t,s)},p:P,d(i){i&&M(t)}}}function vt(n){let e,t=n[5].text+"",i;return{c(){e=l("a"),i=G(t),o(e,"href","tel:"+n[5].text)},m(s,r){L(s,e,r),a(e,i)},p:P,d(s){s&&M(e)}}}function _t(n){let e,t=n[5].text+"",i;return{c(){e=l("a"),i=G(t),o(e,"href","mailto:"+n[5].text)},m(s,r){L(s,e,r),a(e,i)},p:P,d(s){s&&M(e)}}}function je(n){let e,t,i,s;function r(h,m){return h[5].type==="mail"?_t:h[5].type==="phone"?vt:mt}let w=r(n)(n);return{c(){e=l("li"),t=l("i"),i=T(),w.c(),s=T(),o(t,"class",n[5].icon)},m(h,m){L(h,e,m),a(e,t),a(e,i),w.m(e,null),a(e,s)},p(h,m){w.p(h,m)},d(h){h&&M(e),w.d()}}}function wt(n){let e,t,i,s,r,d,w,h,m,_,p,f,u,$,c,g,v,j,D,A,N,R,I=n[4],k=[];for(let y=0;y<I.length;y+=1)k[y]=je(Ie(n,I,y));return N=new pt({}),{c(){e=l("section"),t=l("div"),i=l("div"),s=l("div"),r=l("div"),d=l("h3"),d.textContent=`${n[0]}`,w=T(),h=l("p"),h.textContent=`${n[1]}`,m=T(),_=l("div"),p=l("div"),f=l("div"),u=l("h4"),u.textContent=`${n[2]}`,$=T(),c=l("p"),c.textContent=`${n[3]}`,g=T(),v=l("ul");for(let y=0;y<k.length;y+=1)k[y].c();j=T(),D=l("div"),A=l("div"),Y(N.$$.fragment),o(d,"class","title"),o(h,"class","text"),o(r,"class","section-title text-center pb-20"),o(s,"class","col-lg-6"),o(i,"class","row justify-content-center"),o(u,"class","contact-title"),o(c,"class","text"),o(v,"class","contact-info"),o(f,"class","contact-two mt-50 wow fadeIn"),o(f,"data-wow-duration","1.5s"),o(f,"data-wow-delay","0.2s"),o(p,"class","col-lg-6"),o(A,"class","contact-form form-style-one mt-35 wow fadeIn"),o(A,"data-wow-duration","1.5s"),o(A,"data-wow-delay","0.5s"),o(D,"class","col-lg-6"),o(_,"class","row"),o(t,"class","container"),o(e,"id","contact"),o(e,"class","contact-area")},m(y,b){L(y,e,b),a(e,t),a(t,i),a(i,s),a(s,r),a(r,d),a(r,w),a(r,h),a(t,m),a(t,_),a(_,p),a(p,f),a(f,u),a(f,$),a(f,c),a(f,g),a(f,v);for(let C=0;C<k.length;C+=1)k[C]&&k[C].m(v,null);a(_,j),a(_,D),a(D,A),H(N,A,null),R=!0},p(y,[b]){if(b&16){I=y[4];let C;for(C=0;C<I.length;C+=1){const S=Ie(y,I,C);k[C]?k[C].p(S,b):(k[C]=je(S),k[C].c(),k[C].m(v,null))}for(;C<k.length;C+=1)k[C].d(1);k.length=I.length}},i(y){R||(U(N.$$.fragment,y),R=!0)},o(y){W(N.$$.fragment,y),R=!1},d(y){y&&M(e),fe(k,y),q(N)}}}function yt(n){let{title:e,description:t,contactTitle:i,contactText:s,contactInfo:r}=Z.contact;return[e,t,i,s,r]}class bt extends F{constructor(e){super(),B(this,e,yt,wt,z,{})}}function $t(n){let e;return{c(){e=l("footer"),e.innerHTML=`<div class="footer-copyright"><div class="container"><div class="row align-items-center"><div class="col-lg-10"><div class="copyright text-center text-lg-left mt-10"><p class="text">Crafted by <a style="color: #17458f" rel="nofollow" href="https://uideck.con">UIdeck</a>
              , UI Elements from
              <a style="color: #17458f" rel="nofollow" href="https://ayroui.com">Ayro UI</a>
              and icons created by
              <a style="color: #17458f" rel="nofollow" href="https://www.flaticon.com/free-icons/association" title="association icons">Freepik - Flaticon</a></p></div></div> 
        <div class="col-lg-2"><div class="footer-logo text-right mt-10"><a href="index.html"><img src="images/favicon.png" alt="Logo of Digital Interactive Classrooms Project, a Rotary initiative."/></a></div></div></div></div></div>`,o(e,"id","footer"),o(e,"class","footer-area")},m(t,i){L(t,e,i)},p:P,i:P,o:P,d(t){t&&M(e)}}}class kt extends F{constructor(e){super(),B(this,e,null,$t,z,{})}}function Ce(n,e,t){const i=n.slice();return i[2]=e[t],i[4]=t,i}function Pe(n,e,t){const i=n.slice();return i[2]=e[t],i[4]=t,i}function Ee(n,e,t){const i=n.slice();return i[2]=e[t],i[4]=t,i}function Ae(n,e){let t,i,s=e[2].name+"",r,d;return{key:n,first:null,c(){t=l("li"),i=l("a"),r=G(s),d=T(),o(i,"class","page-scroll"),o(i,"href",e[2].href),o(t,"class","nav-item "+(e[2].active?"active":"")),this.first=t},m(w,h){L(w,t,h),a(t,i),a(i,r),a(t,d)},p(w,h){e=w},d(w){w&&M(t)}}}function Me(n,e){let t;return{key:n,first:null,c(){t=l("li"),o(t,"data-target","#carouselOne"),o(t,"data-slide-to",e[4]),o(t,"class",e[4]===0?"active":""),this.first=t},m(i,s){L(i,t,s)},p(i,s){e=i},d(i){i&&M(t)}}}function Le(n,e){let t,i,s,r,d,w,h=e[2].title+"",m,_,p,f,u,$=e[2].buttonText+"",c,g;return{key:n,first:null,c(){t=l("div"),i=l("div"),s=l("div"),r=l("div"),d=l("div"),w=l("h2"),m=G(h),_=T(),p=l("ul"),f=l("li"),u=l("a"),c=G($),g=T(),o(w,"class","carousel-title"),o(u,"class","main-btn rounded-three"),o(u,"href",e[2].href),o(p,"class","carousel-btn rounded-buttons"),o(d,"class","col-xl-6 col-lg-7 col-sm-10"),o(r,"class","row justify-content-center"),o(s,"class","container"),o(i,"class","carousel-caption"),o(t,"class","carousel-item bg_cover "+(e[4]===0?"active":"")),Ge(t,"background-image","url("+e[2].backgroundImage+")"),this.first=t},m(v,j){L(v,t,j),a(t,i),a(i,s),a(s,r),a(r,d),a(d,w),a(w,m),a(d,_),a(d,p),a(p,f),a(f,u),a(u,c),a(t,g)},p(v,j){e=v},d(v){v&&M(t)}}}function xt(n){let e,t,i,s,r,d,w,h,m,_,p,f,u=[],$=new Map,c,g,v,j,D,A=[],N=new Map,R,I,k=[],y=new Map,b,C,S,J,oe=n[0];const he=x=>x[2].id;for(let x=0;x<oe.length;x+=1){let E=Ee(n,oe,x),O=he(E);$.set(O,u[x]=Ae(O,E))}let ae=n[1];const pe=x=>x[2].id;for(let x=0;x<ae.length;x+=1){let E=Pe(n,ae,x),O=pe(E);N.set(O,A[x]=Me(O,E))}let se=n[1];const me=x=>x[2].id;for(let x=0;x<se.length;x+=1){let E=Ce(n,se,x),O=me(E);y.set(O,k[x]=Le(O,E))}return{c(){e=l("section"),t=l("div"),i=l("div"),s=l("div"),r=l("div"),d=l("nav"),w=l("a"),w.innerHTML=`<img src="images/favicon.png" alt="Logo of Digital Interactive Classrooms Project, a Rotary initiative." class="svelte-xroov3"/>
                            Digital Interactive Classrooms Project`,h=T(),m=l("button"),m.innerHTML=`<span class="toggler-icon"></span> 
                            <span class="toggler-icon"></span> 
                            <span class="toggler-icon"></span>`,_=T(),p=l("div"),f=l("ul");for(let x=0;x<u.length;x+=1)u[x].c();c=T(),g=l("div"),v=l("div"),j=l("div"),D=l("ol");for(let x=0;x<A.length;x+=1)A[x].c();R=T(),I=l("div");for(let x=0;x<k.length;x+=1)k[x].c();b=T(),C=l("a"),C.innerHTML='<i class="lni-arrow-left-circle"></i>',S=T(),J=l("a"),J.innerHTML='<i class="lni-arrow-right-circle"></i>',o(w,"class","navbar-brand svelte-xroov3"),o(w,"href","#"),o(m,"class","navbar-toggler"),o(m,"type","button"),o(m,"data-toggle","collapse"),o(m,"data-target","#navbarEight"),o(m,"aria-controls","navbarEight"),o(m,"aria-expanded","false"),o(m,"aria-label","Toggle navigation"),o(f,"class","navbar-nav ml-auto"),o(p,"class","collapse navbar-collapse sub-menu-bar"),o(p,"id","navbarEight"),o(d,"class","navbar navbar-expand-lg"),o(r,"class","col-lg-12"),o(s,"class","row"),o(i,"class","container"),o(t,"class","navbar-area"),o(D,"class","carousel-indicators"),o(I,"class","carousel-inner"),o(C,"class","carousel-control-prev"),o(C,"href","#carouselOne"),o(C,"role","button"),o(C,"data-slide","prev"),o(J,"class","carousel-control-next"),o(J,"href","#carouselOne"),o(J,"role","button"),o(J,"data-slide","next"),o(j,"id","carouselOne"),o(j,"class","carousel slide"),o(j,"data-ride","carousel"),o(v,"class","bd-example"),o(g,"id","home"),o(g,"class","slider-area"),o(e,"class","header-area")},m(x,E){L(x,e,E),a(e,t),a(t,i),a(i,s),a(s,r),a(r,d),a(d,w),a(d,h),a(d,m),a(d,_),a(d,p),a(p,f);for(let O=0;O<u.length;O+=1)u[O]&&u[O].m(f,null);a(e,c),a(e,g),a(g,v),a(v,j),a(j,D);for(let O=0;O<A.length;O+=1)A[O]&&A[O].m(D,null);a(j,R),a(j,I);for(let O=0;O<k.length;O+=1)k[O]&&k[O].m(I,null);a(j,b),a(j,C),a(j,S),a(j,J)},p(x,[E]){E&1&&(oe=x[0],u=ne(u,E,he,1,x,oe,$,f,te,Ae,null,Ee)),E&2&&(ae=x[1],A=ne(A,E,pe,1,x,ae,N,D,te,Me,null,Pe)),E&2&&(se=x[1],k=ne(k,E,me,1,x,se,y,I,te,Le,null,Ce))},i:P,o:P,d(x){x&&M(e);for(let E=0;E<u.length;E+=1)u[E].d();for(let E=0;E<A.length;E+=1)A[E].d();for(let E=0;E<k.length;E+=1)k[E].d()}}}function Tt(n){let{navbarItems:e,carouselItems:t}=Z.header;return[e,t]}class It extends F{constructor(e){super(),B(this,e,Tt,xt,z,{})}}function Se(n,e,t){const i=n.slice();return i[3]=e[t],i}function Oe(n){let e,t,i,s,r;return{c(){e=l("div"),t=l("div"),i=l("img"),r=T(),X(i.src,s=n[3].src)||o(i,"src",s),o(i,"alt",n[3].alt),o(t,"class","single-client text-center"),o(e,"class","col-lg-3")},m(d,w){L(d,e,w),a(e,t),a(t,i),a(e,r)},p:P,d(d){d&&M(e)}}}function jt(n){let e,t,i,s,r,d,w,h,m,_,p=n[2],f=[];for(let u=0;u<p.length;u+=1)f[u]=Oe(Se(n,p,u));return{c(){e=l("section"),t=l("div"),i=l("div"),s=l("div"),r=l("div"),d=l("h3"),d.textContent=`${n[0]}`,w=T(),h=l("p"),h.textContent=`${n[1]}`,m=T(),_=l("div");for(let u=0;u<f.length;u+=1)f[u].c();o(d,"class","title"),o(h,"class","text"),o(r,"class","section-title text-center pb-20"),o(s,"class","col-lg-6"),o(i,"class","row justify-content-center"),o(_,"class","row client-active"),o(t,"class","container"),o(e,"id","partners"),o(e,"class","partners-area")},m(u,$){L(u,e,$),a(e,t),a(t,i),a(i,s),a(s,r),a(r,d),a(r,w),a(r,h),a(t,m),a(t,_);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(_,null)},p(u,[$]){if($&4){p=u[2];let c;for(c=0;c<p.length;c+=1){const g=Se(u,p,c);f[c]?f[c].p(g,$):(f[c]=Oe(g),f[c].c(),f[c].m(_,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=p.length}},i:P,o:P,d(u){u&&M(e),fe(f,u)}}}function Ct(n){let{title:e,description:t,images:i}=Z.partners;return[e,t,i]}class Pt extends F{constructor(e){super(),B(this,e,Ct,jt,z,{})}}function Et(n){let e;return{c(){e=l("div"),e.innerHTML=`<div class="loader"><div class="ytp-spinner"><div class="ytp-spinner-container"><div class="ytp-spinner-rotator"><div class="ytp-spinner-left"><div class="ytp-spinner-circle"></div></div> 
                  <div class="ytp-spinner-right"><div class="ytp-spinner-circle"></div></div></div></div></div></div>`,o(e,"class","preloader")},m(t,i){L(t,e,i)},p:P,i:P,o:P,d(t){t&&M(e)}}}class At extends F{constructor(e){super(),B(this,e,null,Et,z,{})}}function Mt(n){let e;return{c(){e=l("a"),e.innerHTML='<i class="lni-chevron-up"></i>',o(e,"href","#"),o(e,"class","back-to-top")},m(t,i){L(t,e,i)},p:P,i:P,o:P,d(t){t&&M(e)}}}class Lt extends F{constructor(e){super(),B(this,e,null,Mt,z,{})}}function St(n){let e,t,i,s,r,d,w,h,m,_,p,f,u,$,c;return t=new At({}),s=new It({}),d=new gt({}),h=new Pt({}),_=new bt({}),f=new kt({}),$=new Lt({}),{c(){e=l("div"),Y(t.$$.fragment),i=T(),Y(s.$$.fragment),r=T(),Y(d.$$.fragment),w=T(),Y(h.$$.fragment),m=T(),Y(_.$$.fragment),p=T(),Y(f.$$.fragment),u=T(),Y($.$$.fragment)},m(g,v){L(g,e,v),H(t,e,null),a(e,i),H(s,e,null),a(e,r),H(d,e,null),a(e,w),H(h,e,null),a(e,m),H(_,e,null),a(e,p),H(f,e,null),a(e,u),H($,e,null),c=!0},p:P,i(g){c||(U(t.$$.fragment,g),U(s.$$.fragment,g),U(d.$$.fragment,g),U(h.$$.fragment,g),U(_.$$.fragment,g),U(f.$$.fragment,g),U($.$$.fragment,g),c=!0)},o(g){W(t.$$.fragment,g),W(s.$$.fragment,g),W(d.$$.fragment,g),W(h.$$.fragment,g),W(_.$$.fragment,g),W(f.$$.fragment,g),W($.$$.fragment,g),c=!1},d(g){g&&M(e),q(t),q(s),q(d),q(h),q(_),q(f),q($)}}}class Ot extends F{constructor(e){super(),B(this,e,null,St,z,{})}}new Ot({target:document.getElementById("app")});