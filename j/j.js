const _0x586ba3=_0x5d05;(function(_0x48389c,_0x4a9019){const _0x398a47=_0x5d05,_0xad67c5=_0x48389c();while(!![]){try{const _0x11377b=-parseInt(_0x398a47(0x209))/0x1*(parseInt(_0x398a47(0x1cb))/0x2)+-parseInt(_0x398a47(0x268))/0x3+-parseInt(_0x398a47(0x221))/0x4+parseInt(_0x398a47(0x249))/0x5+parseInt(_0x398a47(0x1c5))/0x6+parseInt(_0x398a47(0x1bb))/0x7*(-parseInt(_0x398a47(0x1d2))/0x8)+parseInt(_0x398a47(0x1de))/0x9*(parseInt(_0x398a47(0x1b6))/0xa);if(_0x11377b===_0x4a9019)break;else _0xad67c5['push'](_0xad67c5['shift']());}catch(_0x190a92){_0xad67c5['push'](_0xad67c5['shift']());}}}(_0x50e3,0x9f846));const API_KEY=_0x586ba3(0x218);let initialViews=0x0,incrementViewsInterval,notificationsPaused=![],notificationTimeout;document[_0x586ba3(0x1d7)](_0x586ba3(0x23e))[_0x586ba3(0x1ed)](_0x586ba3(0x1bf),function(_0x4f731f){const _0x1322bd=_0x586ba3;_0xc477a2('');let _0x3168b8=_0x4f731f[_0x1322bd(0x238)][_0x1322bd(0x265)][_0x1322bd(0x231)](),_0x17186f='',_0x28185d='',_0x813301=![];(_0x3168b8[_0x1322bd(0x20b)](_0x1322bd(0x1cd))||_0x3168b8[_0x1322bd(0x20b)](_0x1322bd(0x25d)))&&(notificationsPaused=!![],clearTimeout(notificationTimeout),document[_0x1322bd(0x1d7)](_0x1322bd(0x1c2))[_0x1322bd(0x1f7)][_0x1322bd(0x1da)]=_0x1322bd(0x1f6),setTimeout(function(){notificationsPaused=![],scheduleNextNotification();},0x7530));if(_0x3168b8['includes'](_0x1322bd(0x1cd)))_0x17186f=_0x3168b8[_0x1322bd(0x246)]('/')[_0x1322bd(0x219)]()[_0x1322bd(0x246)]('?')[0x0];else{if(_0x3168b8[_0x1322bd(0x20b)]('youtube.com')){if(_0x3168b8[_0x1322bd(0x20b)]('v='))_0x17186f=_0x3168b8['split']('v=')[0x1][_0x1322bd(0x246)]('&')[0x0];else{if(_0x3168b8[_0x1322bd(0x20b)]('embed/'))_0x17186f=_0x3168b8[_0x1322bd(0x246)](_0x1322bd(0x1b3))[0x1]['split']('/')[0x0];else{if(_0x3168b8[_0x1322bd(0x20b)]('results?search_query='))_0x17186f=_0x3168b8[_0x1322bd(0x246)](_0x1322bd(0x1f1))[0x1]['split']('&')[0x0];else{if(_0x3168b8[_0x1322bd(0x20b)](_0x1322bd(0x230)))_0x17186f=_0x3168b8[_0x1322bd(0x246)](_0x1322bd(0x230))[0x1][_0x1322bd(0x246)]('?')[0x0];else{if(_0x3168b8[_0x1322bd(0x20b)](_0x1322bd(0x244)))_0x17186f=_0x3168b8[_0x1322bd(0x246)](_0x1322bd(0x244))[0x1]['split']('?')[0x0],_0x3168b8='https://www.youtube.com/watch?v='+_0x17186f,_0x4f731f['target']['value']=_0x3168b8;else{if(_0x3168b8['includes'](_0x1322bd(0x252)))_0x28185d=_0x3168b8[_0x1322bd(0x246)](_0x1322bd(0x252))[0x1][_0x1322bd(0x246)]('?')[0x0];else{if(_0x3168b8['includes'](_0x1322bd(0x23d)))_0x28185d=_0x3168b8['split']('/user/')[0x1][_0x1322bd(0x246)]('?')[0x0],_0x813301=!![];else{if(_0x3168b8[_0x1322bd(0x20b)]('/@')){let _0x4d3857=_0x3168b8['split']('/@')[0x1][_0x1322bd(0x246)]('?')[0x0][_0x1322bd(0x246)]('/')[0x0];_0x28185d=_0x4d3857,_0x813301=!![],_0x3168b8=_0x1322bd(0x22e)+_0x4d3857,_0x4f731f[_0x1322bd(0x238)]['value']=_0x3168b8;}}}}}}}}}}if(_0x17186f)_0x49b688(_0x17186f);else _0x28185d?_0x3b2f3d(_0x28185d,_0x813301):_0xc477a2('Insira\x20um\x20link\x20válido.');function _0x49b688(_0x317d85){const _0x17c8be=_0x1322bd;fetch(_0x17c8be(0x1c8)+_0x317d85+_0x17c8be(0x261)+API_KEY)['then'](_0x1f9f9d=>_0x1f9f9d['json']())['then'](_0xd26b07=>{const _0x47ae43=_0x17c8be;if(_0xd26b07[_0x47ae43(0x1fb)]['length']>0x0){const _0x3bde87=_0xd26b07[_0x47ae43(0x1fb)][0x0][_0x47ae43(0x263)],_0x53bf3f=_0xd26b07['items'][0x0]['statistics'],_0x13931e=_0x3bde87[_0x47ae43(0x227)][_0x47ae43(0x1eb)][_0x47ae43(0x204)],_0x492d03=_0x3bde87[_0x47ae43(0x20f)],_0x4f33bc=parseInt(_0x53bf3f['viewCount']);document[_0x47ae43(0x1d7)](_0x47ae43(0x20a))['src']=_0x13931e,document[_0x47ae43(0x1d7)]('youtube-thumbnail')[_0x47ae43(0x1f7)][_0x47ae43(0x1da)]='block',document[_0x47ae43(0x1d7)](_0x47ae43(0x1be))[_0x47ae43(0x1f0)]=_0x47ae43(0x1d6)+formatTitle(_0x492d03),document[_0x47ae43(0x1d7)](_0x47ae43(0x1b5))[_0x47ae43(0x1f3)]=_0x47ae43(0x225)+formatNumber(_0x4f33bc)+_0x47ae43(0x250),document[_0x47ae43(0x1d7)](_0x47ae43(0x224))[_0x47ae43(0x1f3)]=_0x47ae43(0x233)+formatNumber(_0x4f33bc*0x3)+_0x47ae43(0x1ae),initialViews=_0x4f33bc,_0x21492a(initialViews),document[_0x47ae43(0x1d7)](_0x47ae43(0x23a))[_0x47ae43(0x1f7)][_0x47ae43(0x1da)]=_0x47ae43(0x1c0),document['getElementById']('info')[_0x47ae43(0x1f7)][_0x47ae43(0x1da)]='flex',document[_0x47ae43(0x1d7)](_0x47ae43(0x1b1))[_0x47ae43(0x1f7)][_0x47ae43(0x1da)]=_0x47ae43(0x259),document[_0x47ae43(0x1d7)]('status-text')[_0x47ae43(0x1f0)]=_0x47ae43(0x234),document[_0x47ae43(0x1d7)]('youtube-url')[_0x47ae43(0x1bc)][_0x47ae43(0x207)](_0x47ae43(0x1c1)),document[_0x47ae43(0x1d7)](_0x47ae43(0x23e))['classList']['remove'](_0x47ae43(0x248));}else _0xc477a2(_0x47ae43(0x223));})[_0x17c8be(0x206)](_0x418203=>{const _0x175539=_0x17c8be;console[_0x175539(0x248)](_0x175539(0x264),_0x418203),_0xc477a2(_0x175539(0x242));});}function _0x3b2f3d(_0x5b280f,_0x211a03){const _0x2e9d2e=_0x1322bd,_0x59e2ac=_0x211a03?_0x2e9d2e(0x1b8)+_0x5b280f+_0x2e9d2e(0x261)+API_KEY:'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id='+_0x5b280f+_0x2e9d2e(0x261)+API_KEY;fetch(_0x59e2ac)[_0x2e9d2e(0x24a)](_0x49797d=>_0x49797d[_0x2e9d2e(0x236)]())['then'](_0x539e6d=>{const _0x44fb5a=_0x2e9d2e;if(_0x211a03&&_0x539e6d['items']['length']>0x0){const _0x1636d3=_0x539e6d[_0x44fb5a(0x1fb)][0x0];fetch(_0x44fb5a(0x1e8)+_0x1636d3['id'][_0x44fb5a(0x255)]+'&key='+API_KEY)[_0x44fb5a(0x24a)](_0x1df8e8=>_0x1df8e8[_0x44fb5a(0x236)]())[_0x44fb5a(0x24a)](_0x46f2a2=>{const _0x65a2c4=_0x44fb5a;_0x46f2a2[_0x65a2c4(0x1fb)][_0x65a2c4(0x1cf)]>0x0?_0x5cd98c(_0x46f2a2[_0x65a2c4(0x1fb)][0x0]):_0xc477a2(_0x65a2c4(0x1c3));})[_0x44fb5a(0x206)](_0x46ba6f=>{console['error']('Error:',_0x46ba6f),_0xc477a2('Erro\x20ao\x20carregar\x20canal');});}else!_0x211a03&&_0x539e6d[_0x44fb5a(0x1fb)][_0x44fb5a(0x1cf)]>0x0?_0x5cd98c(_0x539e6d[_0x44fb5a(0x1fb)][0x0]):_0xc477a2('Canal\x20não\x20encontrado');})['catch'](_0x5944ec=>{const _0x4f9fea=_0x2e9d2e;console[_0x4f9fea(0x248)](_0x4f9fea(0x264),_0x5944ec),_0xc477a2(_0x4f9fea(0x21e));});}function _0x5cd98c(_0x225461){const _0x30472d=_0x1322bd,_0x48ec91=_0x225461[_0x30472d(0x263)],_0x21b6e5=_0x225461[_0x30472d(0x1e4)],_0x47a9c7=_0x48ec91[_0x30472d(0x227)]['high'][_0x30472d(0x204)],_0x476347=_0x48ec91[_0x30472d(0x20f)],_0x53f0ea=parseInt(_0x21b6e5['subscriberCount']);document[_0x30472d(0x1d7)](_0x30472d(0x20a))['src']=_0x47a9c7,document[_0x30472d(0x1d7)](_0x30472d(0x20a))[_0x30472d(0x1f7)][_0x30472d(0x1da)]=_0x30472d(0x1c0),document['getElementById'](_0x30472d(0x1be))[_0x30472d(0x1f0)]=_0x30472d(0x235)+formatTitle(_0x476347),document[_0x30472d(0x1d7)](_0x30472d(0x1b5))['innerHTML']='Seu\x20canal\x20tem:<b>&nbsp;'+formatNumber(_0x53f0ea)+'&nbsp;</b>\x20Inscritos',document[_0x30472d(0x1d7)]('increment-views')[_0x30472d(0x1f3)]=_0x30472d(0x233)+formatNumber(_0x53f0ea*0x3)+'</b>\x20Inscritos',initialViews=_0x53f0ea,_0x1d016d(initialViews),document['getElementById']('info')['style']['display']=_0x30472d(0x259),document[_0x30472d(0x1d7)](_0x30472d(0x1e1))[_0x30472d(0x1f7)][_0x30472d(0x1da)]=_0x30472d(0x1c0),document[_0x30472d(0x1d7)](_0x30472d(0x1b1))['style'][_0x30472d(0x1da)]=_0x30472d(0x259),document[_0x30472d(0x1d7)](_0x30472d(0x25f))[_0x30472d(0x1f0)]=_0x30472d(0x1d4),document[_0x30472d(0x1d7)](_0x30472d(0x23e))['classList'][_0x30472d(0x207)](_0x30472d(0x1c1)),document['getElementById'](_0x30472d(0x23e))[_0x30472d(0x1bc)][_0x30472d(0x1ff)]('error');}function _0xc477a2(_0x2602ec){const _0x3a2e72=_0x1322bd;document[_0x3a2e72(0x1d7)]('youtube-thumbnail')[_0x3a2e72(0x1f7)][_0x3a2e72(0x1da)]=_0x3a2e72(0x1f6),document[_0x3a2e72(0x1d7)](_0x3a2e72(0x1be))[_0x3a2e72(0x1f0)]=_0x2602ec,document[_0x3a2e72(0x1d7)](_0x3a2e72(0x1b5))[_0x3a2e72(0x1f0)]='',document[_0x3a2e72(0x1d7)](_0x3a2e72(0x224))[_0x3a2e72(0x1f0)]='',document['getElementById']('info')[_0x3a2e72(0x1f7)][_0x3a2e72(0x1da)]='none',document['getElementById'](_0x3a2e72(0x23a))[_0x3a2e72(0x1f7)]['display']=_0x3a2e72(0x1f6),document[_0x3a2e72(0x1d7)](_0x3a2e72(0x1e1))[_0x3a2e72(0x1f7)]['display']='none',document[_0x3a2e72(0x1d7)](_0x3a2e72(0x1b1))[_0x3a2e72(0x1f7)][_0x3a2e72(0x1da)]=_0x3a2e72(0x1f6),clearInterval(incrementViewsInterval);const _0x336888=document[_0x3a2e72(0x1d7)]('youtube-url');_0x2602ec===_0x3a2e72(0x1d5)?(_0x336888[_0x3a2e72(0x1bc)]['add'](_0x3a2e72(0x248)),_0x336888[_0x3a2e72(0x1bc)][_0x3a2e72(0x1ff)](_0x3a2e72(0x1c1)),_0x336888[_0x3a2e72(0x222)]=_0x3a2e72(0x1e9)):(_0x336888[_0x3a2e72(0x1bc)][_0x3a2e72(0x1ff)]('error'),_0x336888[_0x3a2e72(0x1bc)][_0x3a2e72(0x1ff)](_0x3a2e72(0x1c1)),_0x336888['placeholder']='Insira\x20seu\x20Link');}function _0x21492a(_0x2d7a64){const _0x441c90=_0x1322bd,_0x107101=document[_0x441c90(0x1d7)](_0x441c90(0x224)),_0x3a443a=_0x2d7a64*0x14;let _0x46ce3a=_0x2d7a64;_0x107101[_0x441c90(0x1bc)][_0x441c90(0x207)](_0x441c90(0x229)),_0x107101['style'][_0x441c90(0x1e6)]=_0x441c90(0x200),_0x107101[_0x441c90(0x1f0)]='Sem\x20Impulsionar\x20=\x20'+formatNumber(_0x2d7a64)+_0x441c90(0x267),setTimeout(()=>{const _0x5671fb=_0x441c90;_0x107101[_0x5671fb(0x1bc)][_0x5671fb(0x1ff)](_0x5671fb(0x229)),_0x107101[_0x5671fb(0x1f7)][_0x5671fb(0x1e6)]='#39e639',incrementViewsInterval=setInterval(()=>{const _0x986ec0=_0x5671fb,_0x51e912=Math[_0x986ec0(0x258)](_0x2d7a64*(Math[_0x986ec0(0x208)]()*(0.08-0.04)+0.04));_0x46ce3a+=_0x51e912,_0x46ce3a>=_0x3a443a&&(_0x46ce3a=_0x3a443a,clearInterval(incrementViewsInterval)),_0x107101[_0x986ec0(0x1f3)]=_0x986ec0(0x233)+formatNumber(_0x46ce3a)+_0x986ec0(0x1ae);},0x3e8);},0x1b58);}function _0x1d016d(_0x26f3ac){const _0x18c0ed=_0x1322bd,_0x34a1e0=document['getElementById'](_0x18c0ed(0x224)),_0x450a61=_0x26f3ac*0x14;let _0x339aa9=_0x26f3ac;_0x34a1e0['classList']['add'](_0x18c0ed(0x229)),_0x34a1e0[_0x18c0ed(0x1f7)][_0x18c0ed(0x1e6)]=_0x18c0ed(0x200),_0x34a1e0['textContent']=_0x18c0ed(0x1b0)+formatNumber(_0x26f3ac)+_0x18c0ed(0x210),setTimeout(()=>{const _0x507127=_0x18c0ed;_0x34a1e0[_0x507127(0x1bc)][_0x507127(0x1ff)]('blinking'),_0x34a1e0[_0x507127(0x1f7)][_0x507127(0x1e6)]=_0x507127(0x1ef),incrementViewsInterval=setInterval(()=>{const _0x482332=_0x507127,_0x58126b=Math[_0x482332(0x258)](_0x26f3ac*(Math['random']()*(0.08-0.04)+0.04));_0x339aa9+=_0x58126b,_0x339aa9>=_0x450a61&&(_0x339aa9=_0x450a61,clearInterval(incrementViewsInterval)),_0x34a1e0[_0x482332(0x1f3)]='Com\x20Impulsionamento:\x20<b>+'+formatNumber(_0x339aa9)+'</b>\x20Inscritos';},0x3e8);},0x1b58);}});let titulosdosvideos=[_0x586ba3(0x1ec),_0x586ba3(0x213),_0x586ba3(0x269),_0x586ba3(0x25c),'Curiosidade…\x20canal\x20@Eli***','Como\x20Fazer…\x20canal\x20@Fer***',_0x586ba3(0x216),_0x586ba3(0x1e2),_0x586ba3(0x228),'Moda\x202024…\x20canal\x20@Jos***',_0x586ba3(0x1d0),_0x586ba3(0x1c9),_0x586ba3(0x212),_0x586ba3(0x220),'Série\x20Nova…\x20canal\x20@Oli***',_0x586ba3(0x1fc),_0x586ba3(0x1b7),_0x586ba3(0x22b),_0x586ba3(0x25b),'Humor\x20Total…\x20canal\x20@Tal***',_0x586ba3(0x247),_0x586ba3(0x254),_0x586ba3(0x217),_0x586ba3(0x1ad),_0x586ba3(0x20e),'Dia\x20a\x20Dia…\x20canal\x20@Zan***',_0x586ba3(0x1ea),_0x586ba3(0x1cc),_0x586ba3(0x21a),_0x586ba3(0x25a),_0x586ba3(0x22f),_0x586ba3(0x201),_0x586ba3(0x202),_0x586ba3(0x1bd),'Vida\x20Saudável…\x20canal\x20@Ing***','Cozinhando…\x20canal\x20@Jan***',_0x586ba3(0x1b4),_0x586ba3(0x256),'Descobertas…\x20canal\x20@Mon***',_0x586ba3(0x226),_0x586ba3(0x23c),_0x586ba3(0x260),_0x586ba3(0x1fa),_0x586ba3(0x21f),_0x586ba3(0x251),_0x586ba3(0x23f),_0x586ba3(0x1f9),'Música\x20Nova…\x20canal\x20@Viv***',_0x586ba3(0x1f5),_0x586ba3(0x20d),_0x586ba3(0x1af),'Tutorial\x20Pro…\x20canal\x20@Zor***',_0x586ba3(0x1d9),'Melhores\x20Filmes…\x20canal\x20@Bia***','Casa\x20Nova…\x20canal\x20@Cec***',_0x586ba3(0x1d8),_0x586ba3(0x1f2),_0x586ba3(0x1fd),_0x586ba3(0x21d),_0x586ba3(0x23b),_0x586ba3(0x1b9),_0x586ba3(0x24f),_0x586ba3(0x214),_0x586ba3(0x21c),_0x586ba3(0x1c6),'Projetos…\x20canal\x20@Nor***','Review\x20Carro…\x20canal\x20@Orl***',_0x586ba3(0x1f8),'Receitas\x20Rápidas…\x20canal\x20@Qui***','Passeando…\x20canal\x20@Raf***',_0x586ba3(0x25e),_0x586ba3(0x240),_0x586ba3(0x1e0),_0x586ba3(0x253),'Vida\x20Simples…\x20canal\x20@Wil***',_0x586ba3(0x22d),_0x586ba3(0x1b2),_0x586ba3(0x1e7),_0x586ba3(0x1ce),_0x586ba3(0x1df),_0x586ba3(0x1e5),'Dieta\x20Keto…\x20canal\x20@Duk***','Bebidas\x20Top…\x20canal\x20@Eva***','Dicas\x20Rápidas…\x20canal\x20@Fio***','Produtividade…\x20canal\x20@Gal***','Fotografia…\x20canal\x20@Hug***',_0x586ba3(0x262),_0x586ba3(0x1ba),_0x586ba3(0x245),_0x586ba3(0x1c4),_0x586ba3(0x239),_0x586ba3(0x215),_0x586ba3(0x1d1),_0x586ba3(0x20c),'Pintando…\x20canal\x20@Qui***',_0x586ba3(0x266),'Rotina\x20Beleza…\x20canal\x20@Sia***','Maquiagem…\x20canal\x20@Tin***','Animal\x20Planet…\x20canal\x20@Uri***','Orçamento…\x20canal\x20@Ver***'];function getRandomInt(_0x1aa588,_0x7f54e7){const _0x30f4ff=_0x586ba3;return Math['floor'](Math[_0x30f4ff(0x208)]()*(_0x7f54e7-_0x1aa588+0x1))+_0x1aa588;}function formatNumber(_0x120850){return _0x120850['toString']()['replace'](/\B(?=(\d{3})+(?!\d))/g,'.');}function getRandomTime(_0x5bc5ca){const _0x3a29a5=_0x586ba3;if(_0x5bc5ca<=0x2710)return getRandomInt(0x6,0x3b)+_0x3a29a5(0x1dd);else return _0x5bc5ca<=0x4e20?getRandomInt(0x1,0x6)+'\x20horas\x20atrás':'há\x201\x20dia';}function _0x5d05(_0x4a1a4a,_0x46f109){const _0x50e395=_0x50e3();return _0x5d05=function(_0x5d0598,_0x102eaf){_0x5d0598=_0x5d0598-0x1ad;let _0x193c58=_0x50e395[_0x5d0598];return _0x193c58;},_0x5d05(_0x4a1a4a,_0x46f109);}function _0x50e3(){const _0x3ed1d4=['target','Cultura\x202024…\x20canal\x20@May***','boost-button-views','Diário\x20Secreto…\x20canal\x20@Hel***','Tendências…\x20canal\x20@Oli***','/user/','youtube-url','Relaxando…\x20canal\x20@Tho***','Bolo\x20Fácil…\x20canal\x20@Tal***','stringify','Erro\x20ao\x20carregar\x20vídeo','getData','live/','Saúde\x20Mental…\x20canal\x20@Kar***','split','Receita\x20Fit…\x20canal\x20@Ubi***','error','4737325ApwgDJ','then','video-title','error-message','log','substring','cendo…\x20canal\x20@Jul***','&nbsp;</b>\x20Visualizações','Receitas\x20Vegan…\x20canal\x20@Sof***','/channel/','Estudando…\x20canal\x20@Vit***','Aula\x20Yoga…\x20canal\x20@Ver***','channelId','Tecnologia…\x20canal\x20@Lel***','keydown','ceil','flex','Culinária…\x20canal\x20@Dan***','Pets\x20Fofos…\x20canal\x20@Sar***','Vida\x20na\x20Roça…\x20canal\x20@Dav***','youtube.com','Estilo\x20Vida…\x20canal\x20@Sam***','status-text','Melhores\x20Jogos…\x20canal\x20@Pac***','&key=','Festa\x20Infantil…\x20canal\x20@Ine***','snippet','Error:','value','Meu\x20Estilo…\x20canal\x20@Ros***','\x20Visualizações','2902905nVWSYs','ReceitaTop…\x20canal\x20@Car***','Receita\x20Fácil…\x20canal\x20@Xan***','</b>\x20Visualizações','Brincando…\x20canal\x20@Yar***','Sem\x20Impulsionar\x20=\x20','status-message','Minimalismo…\x20canal\x20@Yur***','embed/','Série\x202024…\x20canal\x20@Kle***','youtube-views','930pEZBox','Dicas\x20Saúde…\x20canal\x20@Qui***','https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=','Testando…\x20canal\x20@Ica***','Treino\x20Total…\x20canal\x20@Jak***','56QDijcQ','classList','Melhores\x20Apps…\x20canal\x20@Han***','youtube-title','input','block','valid','notification','Canal\x20não\x20encontrado','Documentário…\x20canal\x20@Lia***','7057986tnrDuV','Aventura…\x20canal\x20@Mir***','F12','https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=','Top\x205\x20Lugares…\x20canal\x20@Lia***','...','7390bmLWwU','Análise\x20Filmes…\x20canal\x20@Bru***','youtu.be','Desafio\x20Pro…\x20canal\x20@Ale***','length','Truques101…\x20canal\x20@Kir***','Gadgets\x20Pro…\x20canal\x20@Owe***','584488HGqdLI','preventDefault','Canal\x20conectado\x20no\x20site','Insira\x20um\x20link\x20válido.','Vídeo:\x20','getElementById','Dicas\x20Úteis…\x20canal\x20@Den***','Festa\x20DIY…\x20canal\x20@Ann***','display','contextmenu','order-number','\x20minutos\x20atrás','116469amywpz','Refeições…\x20canal\x20@Bec***','Jogos\x20Antigos…\x20canal\x20@Urs***','boost-button-subscribers','GamePlay…\x20canal\x20@Hug***','innerText','statistics','Mudança…\x20canal\x20@Cle***','color','Guia\x20Beleza…\x20canal\x20@Zan***','https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=','Insira\x20um\x20link\x20do\x20vídeo\x20ou\x20canal','Livros\x20Top…\x20canal\x20@Ali***','high','Vlog\x20Diário…\x20canal\x20@Ala***','addEventListener','ctrlKey','#39e639','textContent','results?search_query=','Bastidores…\x20canal\x20@Ele***','innerHTML','https://script.google.com/macros/s/AKfycbz3gRGaxhFqsynbHMY04FwezOwxL0QAmUuMSzsBJWZXQR4l_J2S0Dkn1cgENr3bVb94/exec','Cultura\x20Pop…\x20canal\x20@Wen***','none','style','Fitness\x20Home…\x20canal\x20@Pau***','Aprendendo…\x20canal\x20@Urs***','Cuidados…\x20canal\x20@Qia***','items','Viagem\x20Luxo…\x20canal\x20@Pie***','Brincadeiras…\x20canal\x20@Fel***','click','remove','red','Transformação…\x20canal\x20@Fab***','Desafio\x20Fit…\x20canal\x20@Gus***','application/json','url','no-cors','catch','add','random','72xOxqAv','youtube-thumbnail','includes','Meditação…\x20canal\x20@Pau***','Fazendo\x20Arte…\x20canal\x20@Xen***','Histórias…\x20canal\x20@Yur***','title','\x20Inscritos','Insira\x20seu\x20Link','Comprinhas…\x20canal\x20@Mil***','Desafio10…\x20canal\x20@Bet***','Jogos\x20Online…\x20canal\x20@Kai***','Notícias\x20Hoje…\x20canal\x20@Nin***','DIY\x20Fácil…\x20canal\x20@Gab***','Decoração…\x20canal\x20@Wil***','AIzaSyBsUFJTTPKvI21d6jZ26Cz6AAETHEmaGWk','pop','Bate-Papo…\x20canal\x20@Cri***','POST','Novidade…\x20canal\x20@Lar***','Férias\x202024…\x20canal\x20@Gui***','Erro\x20ao\x20carregar\x20canal','Humor\x20Viral…\x20canal\x20@Ren***','Reagindo\x20a…\x20canal\x20@Nin***','3423056fgOnuD','placeholder','Vídeo\x20não\x20encontrado','increment-views','Seu\x20vídeo\x20tem:<b>&nbsp;','Estilo\x202024…\x20canal\x20@Nat***','thumbnails','Review\x20Tech…\x20canal\x20@Igo***','blinking','clipboardData','Rotina\x20Fit…\x20canal\x20@Raf***','key','Spa\x20Caseiro…\x20canal\x20@Xia***','https://www.youtube.com/@','Truques\x20de…\x20canal\x20@Edo***','shorts/','trim','text','Com\x20Impulsionamento:\x20<b>+','Vídeo\x20conectado\x20no\x20site','Canal:\x20','json','Link\x20enviado\x20para\x20a\x20planilha:'];_0x50e3=function(){return _0x3ed1d4;};return _0x50e3();}function getRandomOrderNumber(){var _0x105265='';for(var _0x387931=0x0;_0x387931<0xa;_0x387931++){_0x105265+=getRandomInt(0x0,0x9);}return'#'+_0x105265;}function getRandomVideoTitle(){const _0x22ac9d=_0x586ba3;return titulosdosvideos[getRandomInt(0x0,titulosdosvideos[_0x22ac9d(0x1cf)]-0x1)];}function showNotification(){const _0x10bf48=_0x586ba3;if(notificationsPaused)return;var _0x371a2a=getRandomInt(0xce4,0x18786);document[_0x10bf48(0x1d7)]('views-count')['innerText']='+'+formatNumber(_0x371a2a);var _0x6e48b0=getRandomTime(_0x371a2a);document[_0x10bf48(0x1d7)]('notification-time')['innerText']=_0x6e48b0;var _0x518e90=getRandomOrderNumber();document[_0x10bf48(0x1d7)](_0x10bf48(0x1dc))[_0x10bf48(0x1e3)]=_0x518e90;var _0x39abc1=getRandomVideoTitle();document['getElementById'](_0x10bf48(0x24b))[_0x10bf48(0x1e3)]=_0x39abc1;var _0x470726=document[_0x10bf48(0x1d7)](_0x10bf48(0x1c2));_0x470726[_0x10bf48(0x1f7)][_0x10bf48(0x1da)]=_0x10bf48(0x259),notificationTimeout=setTimeout(function(){const _0x37cfa6=_0x10bf48;_0x470726[_0x37cfa6(0x1f7)][_0x37cfa6(0x1da)]=_0x37cfa6(0x1f6),scheduleNextNotification();},0x1b58);}function scheduleNextNotification(){if(notificationsPaused)return;var _0x2a714e=getRandomInt(0x1770,0x2af8);notificationTimeout=setTimeout(showNotification,_0x2a714e);}showNotification(),document[_0x586ba3(0x1d7)]('close-btn')[_0x586ba3(0x1ed)](_0x586ba3(0x1fe),function(){const _0x13316b=_0x586ba3;document[_0x13316b(0x1d7)](_0x13316b(0x1c2))['style'][_0x13316b(0x1da)]=_0x13316b(0x1f6);}),document[_0x586ba3(0x1ed)](_0x586ba3(0x1db),_0x3b3ef4=>_0x3b3ef4[_0x586ba3(0x1d3)]()),document[_0x586ba3(0x1ed)](_0x586ba3(0x257),function(_0x1905e0){const _0x272172=_0x586ba3;(_0x1905e0[_0x272172(0x22c)]===_0x272172(0x1c7)||_0x1905e0[_0x272172(0x1ee)]&&_0x1905e0['shiftKey']&&_0x1905e0[_0x272172(0x22c)]==='I')&&_0x1905e0['preventDefault']();});function handlePaste(_0x2c5f3d){const _0x2d90b1=_0x586ba3,_0x232fc=(_0x2c5f3d[_0x2d90b1(0x22a)]||window[_0x2d90b1(0x22a)])[_0x2d90b1(0x243)](_0x2d90b1(0x232));sendToGoogleSheets(_0x232fc);}async function sendToGoogleSheets(_0x17d8b9){const _0x63a0dd=_0x586ba3,_0x3bad49=await fetch(_0x63a0dd(0x1f4),{'method':_0x63a0dd(0x21b),'mode':_0x63a0dd(0x205),'headers':{'Content-Type':_0x63a0dd(0x203)},'body':JSON[_0x63a0dd(0x241)]({'link':_0x17d8b9})});console[_0x63a0dd(0x24d)](_0x63a0dd(0x237),_0x17d8b9);}function checkInput(_0x56a5d4){const _0x4a7933=_0x586ba3,_0x3b429d=_0x56a5d4[_0x4a7933(0x238)][_0x4a7933(0x265)],_0x3c4b42=document[_0x4a7933(0x1d7)](_0x4a7933(0x24c)),_0x30a94f=_0x3b429d[_0x4a7933(0x20b)](_0x4a7933(0x1cd))||_0x3b429d[_0x4a7933(0x20b)]('youtube.com');!_0x30a94f&&_0x3b429d[_0x4a7933(0x1cf)]>=0x2?(_0x3c4b42[_0x4a7933(0x1f7)]['display']=_0x4a7933(0x1c0),document[_0x4a7933(0x1d7)](_0x4a7933(0x23e))[_0x4a7933(0x1bc)]['add'](_0x4a7933(0x248)),document[_0x4a7933(0x1d7)]('youtube-url')[_0x4a7933(0x1bc)][_0x4a7933(0x1ff)](_0x4a7933(0x1c1)),document[_0x4a7933(0x1d7)](_0x4a7933(0x23e))[_0x4a7933(0x222)]=_0x4a7933(0x1e9)):(_0x3c4b42[_0x4a7933(0x1f7)][_0x4a7933(0x1da)]='none',document[_0x4a7933(0x1d7)](_0x4a7933(0x23e))[_0x4a7933(0x1bc)][_0x4a7933(0x1ff)]('error'),document[_0x4a7933(0x1d7)](_0x4a7933(0x23e))['classList']['add'](_0x4a7933(0x1c1)),document[_0x4a7933(0x1d7)](_0x4a7933(0x23e))['placeholder']=_0x4a7933(0x211));}function formatTitle(_0x3aaae2){const _0x50ea2a=_0x586ba3;return _0x3aaae2['length']>0x32?_0x3aaae2[_0x50ea2a(0x24e)](0x0,0x2f)+_0x50ea2a(0x1ca):_0x3aaae2;}