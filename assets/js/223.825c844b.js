(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{613:function(e,t,o){"use strict";o.r(t);var r=o(49),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"how-zeroconf-api-was-implemented-in-barterdex-gui"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-zeroconf-api-was-implemented-in-barterdex-gui"}},[e._v("#")]),e._v(" How zeroconf API was implemented in BarterDEX GUI")]),e._v(" "),o("p",[e._v("This is how Grewal Satinder implemented zeroconf in BarterDEX GUI:")]),e._v(" "),o("p",[e._v("The files you need:")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"https://github.com/KomodoPlatform/BarterDEX/blob/master/ipc/shepherd-ipc.js#L62",target:"_blank",rel:"noopener noreferrer"}},[e._v("/ipc/shepherd-ipc.js@master#L62"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://github.com/KomodoPlatform/BarterDEX/blob/master/gui/js/dex_SimpleActions.js#L5438",target:"_blank",rel:"noopener noreferrer"}},[e._v("/gui/js/dex_SimpleActions.js@master#L5438"),o("OutboundLink")],1)])])]),e._v(" "),o("p",[e._v("Look for keyword "),o("code",[e._v("zeroconf")]),e._v(" in the file. There is Shepherd-IPC-API which interacts with the GUI through Electron IPC. This API's job is to record and backup the output of zeroconf results. Doesn't matter if it's success or error, it will record that output in a log file.")]),e._v(" "),o("p",[e._v("The reason is in case the user somehow got messed up setup with the mm or something which results in loosing the access to their txid. These log files can be used to track those txids done for zeroconf and recover those funds sent to zeroconf. These logs files feature is independent operation to the "),o("code",[e._v("marketmaker")]),e._v(" zeroconf API calls.")]),e._v(" "),o("p",[e._v("The gui/js side of code is managing the "),o("code",[e._v("deposit")]),e._v(" part and "),o("code",[e._v("claim")]),e._v(" part. zeroconf is very easy to implement, as its the only deposit/claim process, nothing else much.")])])}),[],!1,null,null,null);t.default=s.exports}}]);