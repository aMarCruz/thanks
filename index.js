/*
 * npm username -> donate page
 *
 * Whenever a `thanks` user has a package owned by one of these authors in their
 * package tree, they will be prompted to donate.
 */
const authors = {
  akepinski: 'https://www.patreon.com/akepinski',
  amit_merchant: 'https://www.patreon.com/amitmerchant',
  andrewnez: 'https://en.liberapay.com/andrew/',
  anteriovieira: 'https://www.patreon.com/anteriovieira',
  antony: 'https://www.patreon.com/wirah',
  armaldio: 'https://www.paypal.me/armaldio',
  balupton: 'https://balupton.com/donate',
  bevacqua: 'https://www.patreon.com/bevacqua',
  bevry: 'https://bevry.me/donate',
  bevryme: 'https://bevry.me/donate',
  chinchang: 'https://www.patreon.com/kushagra',
  dannyfritz: 'https://www.patreon.com/dannyfritz',
  darcyclarke: 'https://www.patreon.com/darcyclarke',
  derhuerst: 'https://www.patreon.com/derhuerst',
  diegohaz: 'https://www.patreon.com/diegohaz',
  evantahler: 'https://www.paypal.me/evantahler',
  feross: 'https://www.patreon.com/feross',
  getify: 'https://www.patreon.com/getify',
  gr2m: 'https://railsgirlssummerofcode.org/campaign/',
  hacdias: 'https://www.patreon.com/hacdias',
  hueniverse: 'https://www.patreon.com/eranhammer',
  hughsk: 'https://hughsk.io/donate/',
  hzoo: 'https://www.patreon.com/henryzhu',
  jaredhanson: 'https://www.patreon.com/jaredhanson',
  jayphelps: 'https://www.patreon.com/jayphelps',
  johnjleider: 'https://www.patreon.com/vuetify',
  jpcote: 'https://beerpay.io/cotejp',
  juliangruber: 'https://www.patreon.com/juliangruber',
  kgryte: 'https://www.patreon.com/athan',
  korynunn: 'https://www.patreon.com/korynunn',
  limonte: 'https://www.patreon.com/limonte',
  litomore: 'https://paypal.me/LitoMore',
  loghorn: 'https://paypal.me/Loghorn',
  mafintosh: 'https://www.patreon.com/mafintosh',
  maoberlehner: 'https://paypal.me/maoberlehner',
  marijn: 'https://www.patreon.com/marijn',
  mblarsen: 'https://flattr.com/@mblarsen',
  mmckegg: 'https://www.patreon.com/MattMcKegg',
  moox: 'https://liberapay.com/MoOx/',
  mpj: 'https://www.patreon.com/funfunfunction',
  mrahmadawais: 'https://pay.paddle.com/checkout/515568',
  mweststrate: 'https://www.paypal.me/michelweststrate',
  noffle: 'https://en.liberapay.com/noffle/',
  nzakas: 'https://www.paypal.me/nczonline',
  olstenlarck: 'https://www.paypal.me/tunnckoCore',
  ovhemert: 'https://www.patreon.com/ovhemert',
  paulcbetts: 'https://www.patreon.com/paulcbetts',
  posva: 'https://www.github.com/posva/donate',
  qubyte: 'https://www.paypal.me/qubyte',
  rayzr: 'https://www.patreon.com/rayzr522',
  richardlitt: 'https://www.patreon.com/richlitt',
  riyadhalnur: 'https://www.paypal.me/riyadhalnur',
  rstoenescu: 'https://www.patreon.com/quasarframework',
  shama: 'https://www.patreon.com/shama',
  sindresorhus: 'https://www.patreon.com/sindresorhus',
  staltz: 'https://www.patreon.com/andrestaltz',
  steelbrain: 'https://www.patreon.com/steelbrain',
  softwaretailoring: 'https://www.paypal.me/softwaretailoring',
  thlorenz: 'https://www.patreon.com/thlorenz',
  tomchentw: 'https://www.patreon.com/tomchentw',
  typicode: 'https://www.patreon.com/typicode',
  yoshuawuyts: 'https://www.patreon.com/yoshuawuyts',
  yyx990803: 'https://www.patreon.com/evanyou',
  zeke: 'http://zeke.sikelianos.com/donations',
  sergeylukin: 'https://paypal.me/smartcoding'
}

/*
 * npm organization name -> donate page
 *
 * Whenever a `thanks` user has a packages from one of these organizations in their
 * package tree, they will be prompted to donate.
 */
const organizations = {
  babel: 'https://opencollective.com/babel',
  compodoc: 'https://opencollective.com/compodoc',
  cycle: 'https://opencollective.com/cyclejs',
  turf: 'https://opencollective.com/turf'
}

/*
 * npm package name -> donate page
 *
 * Whenever a `thanks` user has one these exact packages in their package tree,
 * they will be prompted to donate.
 *
 * NOTE: If you have an npm organization, specify it above (see the `organizations`
 * variable above!). This gives maximum coverage versus listing each package below.
 */
const packages = {
  '30-seconds-of-code': 'https://opencollective.com/30-seconds-of-code',
  '@colmena/colmena': 'https://opencollective.com/colmena',
  '@feathersjs/feathers': 'https://opencollective.com/feathers',
  '@jscad/openjscad': 'https://opencollective.com/openjscad',
  '@ngrx/platform': 'https://opencollective.com/ngrx',
  '@reactivex/rxjs': 'https://opencollective.com/rxjs',
  '@storybook/root': 'https://opencollective.com/storybook',
  'acgn-stock': 'https://opencollective.com/acgn-stock',
  'altair': 'https://opencollective.com/altair',
  'angular-socialshare': 'https://opencollective.com/angular-socialshare',
  'angular-starter': 'https://opencollective.com/angular-starter',
  'AnsPress': 'https://opencollective.com/anspress',
  'antd': 'https://opencollective.com/ant-design',
  'aplayer': 'https://opencollective.com/aplayer',
  'apollo-universal-starter-kit': 'https://opencollective.com/apollo-universal-starter-kit',
  'app': 'https://opencollective.com/react-static-boilerplate',
  'aresume': 'https://opencollective.com/resume',
  'aurelia-framework': 'https://opencollective.com/aurelia',
  'ava': 'https://opencollective.com/ava',
  'ava-ia': 'https://opencollective.com/ava-ia',
  'awesome-mac': 'https://opencollective.com/awesome-mac',
  'ax5ui-kernel': 'https://opencollective.com/ax5ui-kernel',
  'axboot': 'https://opencollective.com/ax-boot-framework',
  'beakerbrowser': 'https://opencollective.com/beaker',
  'boost': 'https://opencollective.com/boostnoteio',
  'bootstrap-table': 'https://opencollective.com/bootstrap-table',
  'bootstrap-vue': 'https://opencollective.com/bootstrap-vue',
  'bower': 'https://opencollective.com/bower',
  'bundlesize': 'https://opencollective.com/bundlesize',
  'buttercup-desktop': 'https://opencollective.com/buttercup',
  'caption': 'https://opencollective.com/caption',
  'cboard': 'https://opencollective.com/cboard',
  'ccxt': 'https://opencollective.com/ccxt',
  'cdnjs': 'https://opencollective.com/cdnjs',
  'cerebro': 'https://opencollective.com/cerebro',
  'cezerin': 'https://opencollective.com/cezerin',
  'chai': 'https://opencollective.com/chaijs',
  'cheerio': 'https://opencollective.com/cheerio',
  'choo': 'https://opencollective.com/choo',
  'cloudcmd': 'https://opencollective.com/cloudcmd',
  'CNodeRN': 'https://opencollective.com/cnodern',
  'cockpit-next': 'https://opencollective.com/cockpit',
  'color-space': 'https://opencollective.com/color-space',
  'colyseus': 'https://opencollective.com/colyseus',
  'commitizen': 'https://opencollective.com/commitizen',
  'ConfigurableMapViewerCMV': 'https://opencollective.com/cmv-app',
  'cypress': 'https://opencollective.com/cypressio',
  'd3-node-editor': 'https://opencollective.com/d3-node-editor',
  'dat': 'https://opencollective.com/dat',
  'DataServices': 'https://opencollective.com/cloudboost',
  'date-fns': 'https://opencollective.com/date-fns',
  'debug': 'https://opencollective.com/debug',
  'dep': 'https://opencollective.com/dep',
  'dim': 'https://opencollective.com/dim',
  'discord.js': 'https://opencollective.com/discordjs',
  'docker.io': 'https://opencollective.com/dockerio',
  'docsify': 'https://opencollective.com/docsify',
  'document-register-element': 'https://opencollective.com/document-register-element',
  'docute': 'https://opencollective.com/docute',
  'dplayer': 'https://opencollective.com/dplayer',
  'echoes-player': 'https://opencollective.com/echoes-player',
  'electron-react-boilerplate': 'https://opencollective.com/electron-react-boilerplate',
  'element-ui': 'https://opencollective.com/element',
  'ellie': 'https://opencollective.com/ellie',
  'eme': 'https://opencollective.com/eme',
  'emoji-url-shortener': 'https://opencollective.com/url-shortener',
  'erxes': 'https://opencollective.com/erxes',
  'esdiscuss.org': 'https://opencollective.com/esdiscuss',
  'esnextbin': 'https://opencollective.com/esnextbin',
  'faker': 'https://opencollective.com/fakerjs',
  'fast-xml-parser': 'https://opencollective.com/fast-xml-parser',
  'ferment': 'https://opencollective.com/lolashare',
  'Fireideaz': 'https://opencollective.com/distributed',
  'firekylin': 'https://opencollective.com/firekylin',
  'flatpickr': 'https://opencollective.com/flatpickr',
  'fontplop': 'https://opencollective.com/fontplop',
  'front-end-checklist': 'https://opencollective.com/front-end-checklist',
  'fuse-box': 'https://opencollective.com/fuse-box',
  'generator-jhipster': 'https://opencollective.com/generator-jhipster',
  'gh-badges': 'https://opencollective.com/shields',
  'ghost': 'https://opencollective.com/ghost',
  'gitpoint': 'https://opencollective.com/git-point',
  'go-plus': 'https://opencollective.com/go-plus',
  'google-play-music-desktop-player': 'https://opencollective.com/google-play-music-desktop-player-unofficial-',
  'grapesjs': 'https://opencollective.com/grapesjs',
  'griddle-react': 'https://opencollective.com/griddle',
  'Grow-IoT': 'https://opencollective.com/grow-iot',
  'gulp': 'https://opencollective.com/gulpjs',
  'gulp-cli': 'https://opencollective.com/gulpjs',
  'hackathon-starter': 'https://opencollective.com/hackathon-starter',
  'hamsters.js': 'https://opencollective.com/hamstersjs',
  'hedron': 'https://opencollective.com/hedron',
  'hexo': 'https://opencollective.com/hexo',
  'hoodie': 'https://opencollective.com/hoodie',
  'hoverboard': 'https://opencollective.com/hoverboard',
  'hyperhtml': 'https://opencollective.com/hyperhtml',
  'hyperline': 'https://opencollective.com/hyperline',
  'icestudio': 'https://opencollective.com/icestudio',
  'idyll': 'https://opencollective.com/idyll',
  'ifme': 'https://opencollective.com/ifme',
  'immer': 'https://opencollective.com/mobx',
  'inferno-build': 'https://opencollective.com/inferno',
  'ion-rangeslider': 'https://opencollective.com/ionrangeslider',
  'ion-sound': 'https://opencollective.com/ionsound',
  'javascript-obfuscator': 'https://opencollective.com/javascript-obfuscator',
  'jqplay': 'https://opencollective.com/jqplay',
  'jquery-jsonview': 'https://opencollective.com/jquery-jsonview',
  'jquery.adaptive-backgrounds': 'https://opencollective.com/jquery-adaptive-background',
  'jsbin': 'https://opencollective.com/jsbin',
  'jss': 'https://opencollective.com/jss',
  'Kaku': 'https://opencollective.com/kaku',
  'karma-typescript': 'https://opencollective.com/karma-typescript',
  'kea': 'https://opencollective.com/kea',
  'koa': 'https://opencollective.com/koajs',
  'lad': 'https://opencollective.com/lad',
  'lazy.ai': 'https://opencollective.com/lazy-bot',
  'lem': 'https://opencollective.com/lem',
  'lethargy': 'https://opencollective.com/lethargy',
  'levelup': 'https://opencollective.com/level',
  'linter': 'https://opencollective.com/linter',
  'lumo': 'https://opencollective.com/lumo',
  'material-ui': 'https://opencollective.com/material-ui',
  'material-ui-build': 'https://opencollective.com/material-ui',
  'materialize-css': 'https://www.patreon.com/materialize',
  'Matterwiki': 'https://opencollective.com/matterwiki',
  'mimic': 'https://opencollective.com/mimic',
  'mobx': 'https://opencollective.com/mobx',
  'mobx-state-tree': 'https://opencollective.com/mobx',
  'mocha': 'https://opencollective.com/mochajs',
  'modular-admin-html': 'https://opencollective.com/modular-admin',
  'mongoose': 'https://opencollective.com/mongoose',
  'moro': 'https://opencollective.com/moro',
  'mup': 'https://opencollective.com/meteor-up',
  'ndm': 'https://opencollective.com/ndm',
  'nearley': 'https://nearley.js.org/#give-to-nearley',
  'nestjs': 'https://opencollective.com/nest',
  'nexe': 'https://opencollective.com/nexe',
  'ng2-date-picker': 'https://opencollective.com/angular-datepicker',
  'ngx-infinite-scroll': 'https://opencollective.com/ngx-infinite-scroll',
  'nightwatch': 'https://opencollective.com/nightwatch',
  'noble': 'https://opencollective.com/noble',
  'nodedata': 'https://opencollective.com/node-data',
  'nodemailer': 'https://opencollective.com/nodemailer',
  'nodemon': 'https://opencollective.com/nodemon',
  'npms-www': 'https://opencollective.com/npms-www',
  'nuxt': 'https://opencollective.com/nuxtjs',
  'nwitter': 'https://opencollective.com/node-twitter',
  'OctoLinker': 'https://opencollective.com/octolinker',
  'octotree': 'https://opencollective.com/octotree',
  'offline-plugin': 'https://opencollective.com/offline-plugin',
  'oni': 'https://opencollective.com/oni',
  'openfl': 'https://opencollective.com/openfl',
  'openlayers': 'https://opencollective.com/openlayers',
  'openscope': 'https://opencollective.com/openscope',
  'parcel': 'https://opencollective.com/parcel',
  'parcel-bundler': 'https://opencollective.com/parcel',
  'parle': 'https://opencollective.com/parle',
  'parse-server': 'https://opencollective.com/parse-server',
  'phenomic': 'https://opencollective.com/phenomic',
  'pickadate': 'https://opencollective.com/pickadatejs',
  'poi': 'https://opencollective.com/poi',
  'pokeapi': 'https://opencollective.com/pokeapi',
  'postgraphql': 'https://opencollective.com/postgraphql',
  'preact': 'https://opencollective.com/preact',
  'pug': 'https://opencollective.com/pug',
  'pug-monorepo': 'https://opencollective.com/pug',
  'ramda-adjunct': 'https://opencollective.com/ramda-adjunct',
  'ran-boilerplate': 'https://opencollective.com/ran',
  'react-ace': 'https://opencollective.com/react-ace',
  'react-boilerplate': 'https://opencollective.com/react-boilerplate',
  'react-dropzone': 'https://opencollective.com/react-dropzone',
  'react-final-form': 'https://opencollective.com/final-form',
  'react-native-camera': 'https://opencollective.com/react-native-camera',
  'react-native-cn': 'https://opencollective.com/react-nativecn',
  'react-native-debugger': 'https://opencollective.com/react-native-debugger',
  'react-native-elements': 'https://opencollective.com/react-native-elements',
  'react-native-firebase': 'https://opencollective.com/react-native-firebase',
  'react-native-image-crop-picker': 'https://opencollective.com/react-native-image-crop-picker',
  'react-native-masonry': 'https://opencollective.com/react-native-masonry',
  'react-native-responsive-grid': 'https://opencollective.com/react-native-responsive-grid',
  'react-native-router-flux': 'https://opencollective.com/react-native-router-flux',
  'react-on-rails': 'https://opencollective.com/react-on-rails',
  'react-redux-firebase': 'https://opencollective.com/react-redux-firebase',
  'react-slick': 'https://opencollective.com/react-slick',
  'react-styleguidist': 'https://opencollective.com/styleguidist',
  'react-toolbox': 'https://opencollective.com/react-toolbox',
  'reactabular': 'https://opencollective.com/reactabular',
  'ReactPWA': 'https://opencollective.com/react-pwa',
  'ream': 'https://opencollective.com/ream',
  'redom': 'https://opencollective.com/redom',
  'redux-devtools-extension': 'https://opencollective.com/redux-devtools-extension',
  'redux-saga': 'https://opencollective.com/redux-saga',
  'relax': 'https://opencollective.com/relax',
  'remotedev-redux-devtools-extension': 'https://opencollective.com/redux-devtools-extension',
  'research-engine': 'https://opencollective.com/research-engine',
  'riot': 'https://opencollective.com/riot',
  'rollup': 'https://opencollective.com/rollup',
  'sage': 'https://opencollective.com/sage',
  'satellizer': 'https://opencollective.com/satellizer',
  'selection-sharer': 'https://opencollective.com/selection-sharer',
  'serializr': 'https://opencollective.com/mobx',
  'shapeshifter': 'https://opencollective.com/shapeshifter',
  'sierra-library': 'https://opencollective.com/sierra',
  'sinon': 'https://opencollective.com/sinon',
  'Sizzy': 'https://opencollective.com/sizzy',
  'skatejs-monorepo': 'https://opencollective.com/skatejs',
  'sketchpad': 'https://opencollective.com/sketchpad',
  'slim-js': 'https://opencollective.com/slimjs',
  'socket.io': 'https://opencollective.com/socketio',
  'speedtracker': 'https://opencollective.com/speedtracker',
  'split.js': 'https://opencollective.com/splitjs',
  'streetmix': 'https://opencollective.com/streetmix',
  'strider': 'https://opencollective.com/strider',
  'styled-components': 'https://opencollective.com/styled-components',
  'stylelint': 'https://opencollective.com/stylelint',
  'surfbird': 'https://opencollective.com/surfbird',
  'sweetalert': 'https://opencollective.com/sweetalert',
  'sweetalert2': 'https://opencollective.com/sweetalert2',
  't-scroll': 'https://opencollective.com/t-scroll',
  'tachyons': 'https://opencollective.com/tachyons',
  'telegraf': 'https://opencollective.com/telegraf',
  'TellForm': 'https://opencollective.com/tellform',
  'tipbox': 'https://opencollective.com/tipbox',
  'tldjs': 'https://opencollective.com/tldjs',
  'trails': 'https://opencollective.com/trails',
  'typeorm': 'https://opencollective.com/typeorm',
  'ui-grid': 'https://opencollective.com/ui-grid',
  'universalviewer': 'https://opencollective.com/universalviewer',
  'verdaccio': 'https://opencollective.com/verdaccio',
  'vim-cheat-sheet': 'https://opencollective.com/vim-cheat-sheet',
  'vis': 'https://opencollective.com/vis',
  'voca': 'https://opencollective.com/voca',
  'vsc-material-theme': 'https://opencollective.com/vsc-material-theme',
  'vue': 'https://opencollective.com/vuejs',
  'vue-admin': 'https://opencollective.com/vue-admin',
  'vue-js-modal': 'https://opencollective.com/vue-js-modal',
  'Vulcan': 'https://opencollective.com/telescope',
  'vux': 'https://opencollective.com/vux',
  'wallabag': 'https://opencollective.com/wallabag',
  'weather-10kb': 'https://opencollective.com/weather-10kb',
  'webpack': 'https://opencollective.com/webpack',
  'webslides': 'https://opencollective.com/webslides',
  'whs': 'https://opencollective.com/whitestormjs',
  'wiki': 'https://opencollective.com/wikijs',
  'WireFlow': 'https://opencollective.com/wireflow',
  'WPGulp': 'https://opencollective.com/wpgulp',
  'xss-listener': 'https://opencollective.com/xss-listener',
  'yo': 'https://opencollective.com/yeoman'
}

module.exports = { authors, organizations, packages }
