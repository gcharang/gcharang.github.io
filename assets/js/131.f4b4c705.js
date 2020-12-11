(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{518:function(a,t,e){"use strict";e.r(t);var s=e(49),o=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"running-komodo-software-in-debug-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-komodo-software-in-debug-mode"}},[a._v("#")]),a._v(" Running Komodo Software in Debug Mode")]),a._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v("To run Komodo software in debug mode, follow these steps.")]),a._v(" "),e("h2",{attrs:{id:"install-gdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-gdb"}},[a._v("#")]),a._v(" Install gdb")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" gdb\n")])])]),e("h2",{attrs:{id:"run-komodo-daemon-with-gdb-tool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-komodo-daemon-with-gdb-tool"}},[a._v("#")]),a._v(" Run Komodo Daemon With "),e("code",[a._v("gdb")]),a._v(" Tool")]),a._v(" "),e("p",[a._v("Initiate your daemon using with "),e("code",[a._v("gdb -args")]),a._v(" as a prefix.")]),a._v(" "),e("p",[a._v("For example, the below command would initiate the Komodod daemon with mining active and a designated pubkey.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("gdb -args ./src/komodod -gen -genproclimit"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" -pubkey"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"03af2412ebf9517a43d192193490476fd0a44312c70755e07eb03b6d71338ebc9d"')]),a._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("If you are having trouble initiating komodod in the shell, try use the absolute path to komodod. For example, "),e("b",[a._v("/home/$USERNAME/komodo/src/komodod")])])]),a._v(" "),e("p",[a._v("The shell should return the following prompt.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("gdb"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("Execute "),e("code",[a._v("run")]),a._v(" in the shell to start Komodo in debug mode.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("gdb"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" run\n")])])]),e("h2",{attrs:{id:"retrieving-backtrace-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#retrieving-backtrace-data"}},[a._v("#")]),a._v(" Retrieving Backtrace Data")]),a._v(" "),e("p",[a._v("Whenever komodod crashes, you will again see "),e("code",[a._v("gdb>")]),a._v(" as a prompt.")]),a._v(" "),e("p",[a._v("To recall the last stages of komodod before the crash, execute the following command.")]),a._v(" "),e("h5",{attrs:{id:"command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[a._v("#")]),a._v(" Command")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("gdb"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" backtrace\n")])])]),e("p",[a._v("The returned data can be shared with any Komodo developer to assist in troubleshooting Komodo development.")]),a._v(" "),e("p",[a._v("Select and highlight all relevant data using the cursor, and then use "),e("code",[a._v("CTRL + SHIFT + C")]),a._v(" to copy to the clipboard.")])])}),[],!1,null,null,null);t.default=o.exports}}]);