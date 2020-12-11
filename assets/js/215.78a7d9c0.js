(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{606:function(e,a,s){"use strict";s.r(a);var t=s(49),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"installing-and-using-marketmakerv1-in-linux-or-macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-and-using-marketmakerv1-in-linux-or-macos"}},[e._v("#")]),e._v(" Installing and Using MarketmakerV1 (in linux or MacOS)")]),e._v(" "),s("h2",{attrs:{id:"barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release"}},[e._v("#")]),e._v(" BarterDEX is officially deprecated as of this writing and mm2 is under testing before public release.")]),e._v(" "),s("p",[s("strong",[e._v("This guide is intended for developers and advanced users (Linux & MacOS) only using command line interface (CLI). GUI users, get")]),e._v(" "),s("a",{attrs:{href:"https://github.com/KomodoPlatform/BarterDEX/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("BarterDEX GUI"),s("OutboundLink")],1),e._v(" "),s("strong",[e._v(". For Windows installations please refer to this")]),e._v(" "),s("RouterLink",{attrs:{to:"/mmV1/installation/install-marketmakerV1-windows.html"}},[e._v("guide")]),e._v(" "),s("strong",[e._v("and use this")]),e._v(" "),s("a",{attrs:{href:"https://github.com/KomodoPlatform/BarterDEX/tree/dev/assets/bin/win64",target:"_blank",rel:"noopener noreferrer"}},[e._v("link for the binaries."),s("OutboundLink")],1)],1),e._v(" "),s("p",[e._v("MarketmakerV1 is capable of working with Electrum servers. This means it is not necessary to download blockchain data to your computer. As a matter of fact, you don't need even download and run native coin wallet or daemon. Check the list of current Electrum servers here: "),s("RouterLink",{attrs:{to:"/mmV1/installation/electrum-servers-list.html"}},[e._v("Electrum Servers List.")])],1),e._v(" "),s("p",[e._v("If you however choose to use a native coin daemon, please make sure it is fully synced. For Komodo and other assetchains use the "),s("a",{attrs:{href:"https://komodoplatform.com/komodo-wallets",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest Agama installer"),s("OutboundLink")],1),e._v(" or use the "),s("a",{attrs:{href:"https://github.com/DeckerSU/komodo-qt/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("KomodoOcean-QT"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("For a list of currently supported native coins and instructions for the coin specific configuration file, see "),s("a",{attrs:{href:""}},[e._v("Supported Native Coins")])]),e._v(" "),s("p",[e._v("You may want to back up your system or clone it after everything is synced and running correctly BEFORE you start installing coin daemons.")]),e._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("h3",{attrs:{id:"install-the-following-dependency-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-the-following-dependency-packages"}},[e._v("#")]),e._v(" Install the following dependency packages")]),e._v(" "),s("h4",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" cmake "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" libcurl4-openssl-dev build-essential libsodium-dev\n")])])]),s("h3",{attrs:{id:"install-nanomsg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-nanomsg"}},[e._v("#")]),e._v(" Install "),s("code",[e._v("nanomsg")])]),e._v(" "),s("h4",{attrs:{id:"linux-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-2"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/nanomsg/nanomsg\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" nanomsg\ncmake "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -DNN_TESTS"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("OFF -DNN_ENABLE_DOC"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("OFF\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" -j2\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" ldconfig\n")])])]),s("h4",{attrs:{id:"macos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[e._v("#")]),e._v(" MacOS")]),e._v(" "),s("p",[e._v("You'll need to install "),s("code",[e._v("homebrew")]),e._v(" (Google how to do it)")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" nanomsg\n")])])]),s("h3",{attrs:{id:"clone-the-supernet-repo-from-github-install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clone-the-supernet-repo-from-github-install"}},[e._v("#")]),e._v(" Clone the SuperNET repo from github & Install")]),e._v(" "),s("p",[e._v("Clone the repo, checkout dev branch for latest and install.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/jl777/SuperNET\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/SuperNET/iguana/exchanges\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout dev\n./install\n")])])]),s("h3",{attrs:{id:"copy-the-passphrase-file-using-seed-passphrase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copy-the-passphrase-file-using-seed-passphrase"}},[e._v("#")]),e._v(" Copy the "),s("code",[e._v("passphrase")]),e._v(" file & using seed passphrase")]),e._v(" "),s("p",[e._v("From the same dir in terminal type the following commands to copy the "),s("code",[e._v("passphrase")]),e._v(" file to "),s("code",[e._v("~/SuperNET/iguana/dexscripts")]),e._v(" dir and add a strong 24 words seed passphrase in between "),s("code",[e._v('""')]),e._v(". Save your passphrase properly without changing any word or space. Same seed "),s("strong",[e._v("passphrase")]),e._v(" will always show you the same "),s("strong",[e._v("smartaddress")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" passphrase "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/dexscripts/passphrase\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/dexscripts\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" passphrase\n")])])]),s("p",[e._v("Enter your passphrase:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("passphrase")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<put a very strong passphrase here>"')]),e._v("\n")])])]),s("p",[e._v("Press "),s("code",[e._v("CTRL+X")]),e._v(" then "),s("code",[e._v("Y")]),e._v(" then "),s("code",[e._v("ENTER")]),e._v(" to save the file and exit from Nano editor.")]),e._v(" "),s("h2",{attrs:{id:"getting-the-userpass-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-userpass-value"}},[e._v("#")]),e._v(" Getting the userpass value")]),e._v(" "),s("p",[e._v("All these scripts are expecting a "),s("code",[e._v("userpass")]),e._v(" file, which contains the definition of the "),s("code",[e._v("$userpass")]),e._v(" variable (found inside scripts) to authenticate API access. This is to prevent malicious webpages from issuing port 7783 calls to steal your money. At first you may not know the value of "),s("code",[e._v("userpass")]),e._v(". To find out, just run the "),s("code",[e._v("client")]),e._v(" script first (as instructed below) and then run "),s("code",[e._v("./setpassphrase")]),e._v(". You will notice your "),s("code",[e._v("userpass")]),e._v(" value at the top of output and you can copy that value and put it into "),s("code",[e._v("~/SuperNET/iguana/dexscripts/userpass")]),e._v(" file. If you don't, all subsequent API calls will get authorisation error.")]),e._v(" "),s("p",[e._v("Open a new terminal and type the following (for macOS please use the "),s("code",[e._v("client_osx")]),e._v(" script):")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/SuperNET/iguana/dexscripts\n./client "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n./setpassphrase\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("pkill")]),e._v(" -15 marketmaker\n")])])]),s("h3",{attrs:{id:"edit-the-userpass-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edit-the-userpass-file"}},[e._v("#")]),e._v(" Edit the userpass file")]),e._v(" "),s("p",[e._v("Now copy the "),s("code",[e._v("userpass")]),e._v(" example file to "),s("code",[e._v("~/SuperNET/iguana/dexscripts")]),e._v(" dir and edit the file to save the "),s("code",[e._v("userpass")]),e._v(" you got from the "),s("code",[e._v("./setpassphrase")]),e._v(" script output.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/SuperNET/iguana/exchanges\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" userpass "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/dexscripts/userpass\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/dexscripts\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("nano")]),e._v(" userpass\n")])])]),s("p",[e._v("Once done press "),s("code",[e._v("CTRL+X")]),e._v(" then "),s("code",[e._v("Y")]),e._v(" then "),s("code",[e._v("ENTER")]),e._v(" to save the file and exit from Nano editor.")]),e._v(" "),s("p",[e._v("barterDEX is now installed in your system.")]),e._v(" "),s("h2",{attrs:{id:"running-marketmakerv1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-marketmakerv1"}},[e._v("#")]),e._v(" Running MarketmakerV1")]),e._v(" "),s("p",[e._v("Every time you want to run "),s("strong",[e._v("MarketmakerV1")]),e._v(" open a new terminal window and type the following:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/SuperNET/iguana/dexscripts\n./client "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n./setpassphrase\n")])])]),s("p",[e._v("And, don't close it. Open a new terminal window to issue all other scripts/API calls from next. Get all available api list by typing "),s("code",[e._v("./help")]),e._v(" inside "),s("code",[e._v("~/SuperNET/iguana/dexscripts")]),e._v(" dir. You can see all scripts available for you to modify, test and use.")]),e._v(" "),s("h3",{attrs:{id:"activating-coins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activating-coins"}},[e._v("#")]),e._v(" Activating coins")]),e._v(" "),s("p",[e._v("You can run MarketmakerV1 and activate coins for trading without downloading any blockchain data, using the Electrum mode. Edit the "),s("code",[e._v("electrum")]),e._v(" script with the list of servers you want to use. To activate your list of electrum servers from the script, in terminal use "),s("code",[e._v("./electrum")]),e._v(".")]),e._v(" "),s("p",[e._v("Native mode is faster and you need to use native wallet running with fully synced blockchain data and your barterDEX seed passphrase imported into the wallet. Edit the "),s("code",[e._v("enable")]),e._v(" script with coin names and run "),s("code",[e._v("./enable")]),e._v(" in terminal window to activate native coins for trading in barterDEX.")]),e._v(" "),s("h2",{attrs:{id:"stopping-kill-marketmaker-close-the-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stopping-kill-marketmaker-close-the-app"}},[e._v("#")]),e._v(" Stopping "),s("code",[e._v("kill marketmaker")]),e._v(" / Close the app")]),e._v(" "),s("p",[e._v("If you want to close barterDEX, issue "),s("code",[e._v("pkill -15 marketmaker")]),e._v(" every time. This ensures all BarterDEX process is killed safely.")]),e._v(" "),s("p",[s("strong",[e._v("Check the doc")]),e._v(": "),s("RouterLink",{attrs:{to:"/mmV1/api/introduction.html"}},[e._v("MarketmakerV1 API")]),e._v(" "),s("strong",[e._v("for more info on different API calls that barterDEX supports. e.g.: buy, sell, orderbook, balance etc. Just edit them to your liking and run them in 2nd terminal.")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);