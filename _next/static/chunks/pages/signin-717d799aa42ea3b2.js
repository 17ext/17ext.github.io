(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{3165:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return s(1695)}])},1695:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return c}});var t=s(1527),a=s(5032),l=s(9222),i=s.n(l),d=s(9087),n=s.n(d),o=s(2628);function c(){let{data:e}=(0,a.useSession)(),{push:r}=(0,o.useRouter)();return e&&r("/").catch(console.error),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("title",{children:"플라이"}),(0,t.jsx)("meta",{name:"description",content:"플라이"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)("section",{className:"bg-gray-50 dark:bg-gray-900",children:(0,t.jsxs)("div",{className:"mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0",children:[(0,t.jsxs)("a",{href:"#",className:"mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white",children:[(0,t.jsx)(i(),{className:"mr-2 h-8 w-8",src:"/images/logo-32.png",width:22,height:24,alt:"로고"}),"플라이"]}),(0,t.jsx)("div",{className:"w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0",children:(0,t.jsxs)("div",{className:"p-6 sm:p-8",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h1",{className:"block text-2xl font-bold text-gray-800 dark:text-white",children:"로그인"}),(0,t.jsxs)("p",{className:"mt-2 text-sm text-gray-600 dark:text-gray-400",children:["아직 계정이 없으신가요?",(0,t.jsx)("a",{className:"font-medium text-blue-600 decoration-2 hover:underline",href:"#",children:"회원가입"})]})]}),(0,t.jsx)("div",{className:"mt-5",children:(0,t.jsxs)("button",{onClick:()=>void(0,a.signIn)("kakao",{callbackUrl:"/"}),type:"button",className:"inline-flex w-full items-center justify-center gap-2 rounded-md bg-yellow-300 px-4 py-4 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:bg-yellow-300 dark:text-gray-700 dark:hover:bg-yellow-400 dark:hover:text-gray-700 dark:focus:ring-offset-gray-800",children:[(0,t.jsx)("svg",{className:"h-auto w-4",width:"46",height:"47",viewBox:"0 0 512 512",fill:"none",children:(0,t.jsx)("path",{fill:"#000000",d:"M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"})}),"카카오 로그인"]})}),(0,t.jsx)("div",{className:"flex items-center py-3 text-xs uppercase text-gray-400 before:mr-6 before:flex-[1_1_0%] before:border-t before:border-gray-200 after:ml-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600",children:"또는"}),(0,t.jsx)("form",{children:(0,t.jsxs)("div",{className:"grid gap-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",className:"mb-2 block text-sm dark:text-white",children:"이메일"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{type:"email",id:"email",name:"email",className:"block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",required:!0,"aria-describedby":"email-error"}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex hidden items-center pr-3",children:(0,t.jsx)("svg",{className:"h-5 w-5 text-red-500",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})})})]}),(0,t.jsx)("p",{className:"mt-2 hidden text-xs text-red-600",id:"email-error",children:"Please include a valid email address so we can get back to you"})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("label",{htmlFor:"password",className:"mb-2 block text-sm dark:text-white",children:"비밀번호"}),(0,t.jsx)("a",{className:"text-sm font-medium text-blue-600 decoration-2 hover:underline",href:"../examples/html/recover-account.html",children:"비밀번호를 잊으셨나요?"})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{type:"password",id:"password",name:"password",className:"block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",required:!0,"aria-describedby":"password-error"}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex hidden items-center pr-3",children:(0,t.jsx)("svg",{className:"h-5 w-5 text-red-500",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"})})})]}),(0,t.jsx)("p",{className:"mt-2 hidden text-xs text-red-600",id:"password-error",children:"8+ characters required"})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"flex",children:(0,t.jsx)("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"pointer-events-none mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"})}),(0,t.jsx)("div",{className:"ml-3",children:(0,t.jsx)("label",{htmlFor:"remember-me",className:"text-sm dark:text-white",children:"로그인 상태 유지"})})]}),(0,t.jsx)("button",{type:"submit",className:"inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",children:"로그인"})]})})]})})]})})]})}},2628:function(e,r,s){e.exports=s(359)}},function(e){e.O(0,[538,774,888,179],function(){return e(e.s=3165)}),_N_E=e.O()}]);