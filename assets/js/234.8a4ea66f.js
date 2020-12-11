(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{625:function(s,e,a){"use strict";a.r(e);var t=a(49),o=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"updating-a-komodo-notary-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-a-komodo-notary-node"}},[s._v("#")]),s._v(" Updating a Komodo Notary Node")]),s._v(" "),a("p",[s._v("WIP.")]),s._v(" "),a("h2",{attrs:{id:"lesson-1-securing-and-updating-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lesson-1-securing-and-updating-server"}},[s._v("#")]),s._v(" Lesson 1: Securing and updating server")]),s._v(" "),a("p",[s._v("Soon.")]),s._v(" "),a("h2",{attrs:{id:"lesson-2-bitcoin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lesson-2-bitcoin"}},[s._v("#")]),s._v(" Lesson 2: Bitcoin")]),s._v(" "),a("p",[s._v("Assuming your server was just updated to latest OS software, re-checked for security and rebooted. Nothing from our set is running yet. It’s the same as before, so you had your very first steps in setting this up done and your are not a newbie. We're only updating here.")]),s._v(" "),a("p",[s._v("First of all, run bitcoin using just "),a("code",[s._v("bitcoind")]),s._v(" & and validate "),a("code",[s._v("bitcoin-cli getinfo")]),s._v(".")]),s._v(" "),a("p",[s._v("You should have at least 0.01 BTC there for no worries. Ask @kolo or @pondsea if you have no funds anymore.")]),s._v(" "),a("p",[a("strong",[s._v("Recommendation:")]),s._v(" To avoid trouble, send 0.1 BTC to each of your nodes. It's not that much and you will get them back later. But this is good for notarizing for a very long time.")]),s._v(" "),a("p",[s._v("You shoud have correctly imported your privkey (bitcoin privkey, BTCwif, "),a("strong",[s._v("not")]),s._v(" BTCDwif or KMDwif), long time ago. Use "),a("code",[s._v("bitcoin-cli validateaddress 1YourAddress")]),s._v(" with your node's BTC address. Should be "),a("code",[s._v("ismine: true")]),s._v(". If your balance on ratified node is exactly zero - this indicates you have not imported your privkey correctly. Upon ratify it gets 6 satoshi.")]),s._v(" "),a("p",[a("strong",[s._v("Recommendation:")]),s._v(" if you see weird problems, your address is correct, but balance is zero - stop it, remove "),a("code",[s._v("wallet.dat")]),s._v(" file in "),a("code",[s._v(".bitcoin")]),s._v(" folder. This will not trigger a full chain rescan - only wallet recreation. Than you can import privkey again. And yes, this can take hours to complete.")]),s._v(" "),a("p",[s._v("You should have your funds on primary node BTC address generated by iguana, not on a random change address. Make "),a("code",[s._v("bitcoin-cli listunspent")]),s._v(" and manually review unspent inputs. They should all be on your node BTC address, otherwise iguana will not see those funds, regardless of balance shown in getinfo. Change address happens when you've sent something to other address using directly "),a("code",[s._v("bitcoin-cli sendtoaddress")]),s._v(" - in that case change (remaining balance of used input) always goes to new generated address (it's still yours).")]),s._v(" "),a("p",[a("strong",[s._v("Possible solution:")]),s._v(" from "),a("code",[s._v("bitcoin-cli listunspent")]),s._v(" get addresses, which are not your node primary address and make "),a("code",[s._v("bitcoin-cli dumpprivkey 1ThatRandomNonNotaryAddress")]),s._v(". This privkey than can be imported in blockchain.info wallet (or any other supporting spending addresses) and send them back to your main address.")]),s._v(" "),a("p",[a("strong",[s._v("Recommendation:")]),s._v(" Never ever use "),a("code",[s._v("bitcoin-cli sendtoaddress")]),s._v(".")]),s._v(" "),a("p",[a("strong",[s._v("Result:")]),s._v(" You can keep backup of only iguana passphrase and than recreate all software set using only it. It will give you back same set of privkeys. Only coins left on change addresses (which you have 0 now) will be lost.")]),s._v(" "),a("p",[s._v("You should have a lot of inputs (verify by "),a("code",[s._v("bitcoin-cli listunspent")]),s._v(") of exaclty size 0.0001 BTC. That's inputs of exact size needed for notarize. If there is no - iguana will make splitfund (when starting it, few lessons ahead) for that, but this will require 30-60 minutes - iguana "),a("strong",[s._v("will complain")]),s._v(" about no BTC funds until that transaction gets mined in bitcoin blockchain.")]),s._v(" "),a("p",[a("strong",[s._v("Solution and recommendation:")]),s._v(" patience.")]),s._v(" "),a("p",[s._v("It's good idea to update bitcoin itself (once in a year or so 🙂) and revew your bitcoin configuration. For example, I highly recommend having")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bind")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rpcbind")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n")])])]),a("p",[s._v("inside "),a("code",[s._v("bitcoin.conf")]),s._v(" or you will have few terabytes of your banwidth gone to helping other bitcoin nodes in wild world. Also you need to have "),a("code",[s._v("txindex=1")]),s._v(" in that conf or you will get random bugs. After first time adding this line you must do full bitcoin chain resync.")]),s._v(" "),a("p",[s._v("Did it? Ok, from now we can think your bitcoin is working as it should.")]),s._v(" "),a("h2",{attrs:{id:"lesson-3-updating-komodo-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lesson-3-updating-komodo-instance"}},[s._v("#")]),s._v(" Lesson 3: Updating komodo instance")]),s._v(" "),a("p",[s._v("Next step will be verify that you have komodo (our main core chain) properly configured and updated. ("),a("em",[s._v("No assetchains exist on this step regardless of komodo output")]),s._v(").")]),s._v(" "),a("p",[s._v("First of all you go "),a("code",[s._v("~/komodo/src")]),s._v(" folder and check everything:")]),s._v(" "),a("p",[s._v("You should use exactly "),a("code",[s._v("beta")]),s._v(" code branch. Do "),a("code",[s._v("git fetch && git checkout beta")]),s._v(" until you will see Already on 'beta'. Than never switch to any other branches. All old branches ("),a("code",[s._v("dPoW")]),s._v(", "),a("code",[s._v("master")]),s._v(", "),a("code",[s._v("dev")]),s._v(") are obsolete for you and must be forgotten.")]),s._v(" "),a("p",[s._v("You should always have latest code - do "),a("code",[s._v("git pull")]),s._v(" - this is your daily updating step. If you see new files ("),a("code",[s._v("+'s")]),s._v(" and "),a("code",[s._v("-'s")]),s._v(") it means it had new code and needs recompile. If you see only branches updates - ignore it.")]),s._v(" "),a("p",[s._v("Verify that you have not messed anything manually inside code tree. If it's so - it's solved by simply doing "),a("code",[s._v("git reset --hard")]),s._v(" to remove any manual additions and get exactly latest commit. You will not loose anything.")]),s._v(" "),a("p",[s._v("Your beloved txt file named "),a("code",[s._v("pubkey.txt")]),s._v(" should be in "),a("code",[s._v("komodo/src")]),s._v(" folder and conain your pubkey ("),a("strong",[s._v("btcpubkey!")]),s._v(") in the form "),a("code",[s._v("pubkey=yourpubkey")]),s._v(" . No quotes, no spaces, no remarks and no dead animals:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("~/komodo/src$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" pubkey.txt\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pubkey")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0287aa4b73988ba26cf6565d815786caf0d2c4af704d7883d163ee89cd9977edec\n")])])]),a("p",[s._v("Second file (who's future is unclear) is "),a("code",[s._v("userhome.txt")]),s._v(" in same directory. Nobody knows for sure if it is need or not anymore. Just have it. Inside you should put path to your "),a("code",[s._v("homedir")]),s._v(" without leading slash, nothing more:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("~/komodo/src$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" userhome.txt\nhome/kolo\n")])])]),a("p",[s._v("Now you can try to compile everything. Command is just "),a("code",[s._v("make")]),s._v(" or "),a("code",[s._v("make -j$(nproc)")]),s._v(". Last will try to use all availible CPU's (nproc) to speed up compile process. This should work without errors if you not ignored recommendation to use "),a("code",[s._v("beta")]),s._v(" branch.")]),s._v(" "),a("p",[s._v("It's good idea to clean chain files before start if you have not done so in a 1-2 weeks or if you see strange errors after all other checks. You can monitor "),a("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[s._v("Discord"),a("OutboundLink")],1),s._v(" channel #notarynode day by day to see when it's really needed. But if you have missed that moment - nobody can tell you if you need resync right now or no. There is no exact moment in records. Current chain resync should take no more than 30 minutes, unless youre not on SSD. To resync - go to folder "),a("code",[s._v("~/.komodo")]),s._v(" and remove everything but files "),a("code",[s._v("wallet.dat")]),s._v(" and "),a("code",[s._v("komodo.conf")]),s._v(".")]),s._v(" "),a("p",[s._v("Dont forget to verify "),a("code",[s._v("komodo.conf")]),s._v(" file. There is no more need to keep addnode lines there. Only this lines:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rpcuser")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yourrandomusername\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rpcpassword")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("youverysecretpassword\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("txindex")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bind")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rpcbind")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n")])])]),a("p",[s._v("Last two lines allow you to keep komodo daemon hidden from outer world. It will be slower on network stuff, but more safe.")]),s._v(" "),a("p",[s._v("Now you can fasten your belt and finally start komodo.")]),s._v(" "),a("h2",{attrs:{id:"lesson-4-starting-komodo-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lesson-4-starting-komodo-instance"}},[s._v("#")]),s._v(" Lesson 4: Starting komodo instance")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/komodo/src\n./komodod -notary -gen -genproclimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" -pubkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0287aa4b73988ba26cf6565d815786caf0d2c4af704d7883d163ee89cd9977edec -pax -rewind"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("110000")]),s._v("\n")])])]),a("h2",{attrs:{id:"lesson-5-starting-iguana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lesson-5-starting-iguana"}},[s._v("#")]),s._v(" Lesson 5: Starting iguana")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/dPoW/iguana\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ./wp_7776     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <-- post this to Discord")]),s._v("\n./m_notary\n")])])]),a("h2",{attrs:{id:"lesson-6-starting-assetchains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lesson-6-starting-assetchains"}},[s._v("#")]),s._v(" Lesson 6: Starting assetchains")]),s._v(" "),a("p",[s._v("Go to "),a("code",[s._v("~/komodo/src")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/komodo/src\n")])])]),a("p",[s._v("Edit clearassets and delete everything in it")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" clearassets "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("and delete everything "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("And paste the following in it:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/USD\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/EUR\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/JPY\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/GBP\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/AUD\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/CAD\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/CHF\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/NZD\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/CNY\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/RUB\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/MXN\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/BRL\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/INR\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/HKD\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/TRY\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/ZAR\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/PLN\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/NOK\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/SEK\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/DKK\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/CZK\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/HUF\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/ILS\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/KRW\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/MYR\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/PHP\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/RON\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/SGD\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/THB\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/BGN\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/IDR\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/HRK\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/BET\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/BOTS\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/CRYPTO\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/DEX\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/HODL\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/JUMBLR\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/MGW\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/PANGEA\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/REVS\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/SHARK\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.komodo/SUPERNET\n")])])]),a("p",[s._v("Save it and run clearassets")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./clearassets\n")])])]),a("p",[s._v("Run assetchains")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./assetchains\n")])])]),a("p",[s._v("Wait for it until it stops doing its thing. The import your BTCDwif key")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./fiat-cli importprivkey U*************************** "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("your BTCDwif key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("After it is finished fund your assets with your BTCD address")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./assetfunds R********************* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("your BTCD address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h2",{attrs:{id:"lesson-7-adding-assets-dpow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lesson-7-adding-assets-dpow"}},[s._v("#")]),s._v(" Lesson 7: Adding assets dPoW")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/komodo/src\n./dpowassets\n")])])]),a("p",[s._v("Done.")])])}),[],!1,null,null,null);e.default=o.exports}}]);