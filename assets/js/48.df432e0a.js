(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{436:function(e,a,t){"use strict";t.r(a);var s=t(49),o=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"komodo-developer-path-preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#komodo-developer-path-preparation"}},[e._v("#")]),e._v(" Komodo Developer Path | Preparation")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("The following six guided tutorials cover introductory topics for a new developer in the Komodo ecosystem. This tutorial here guides the reader in creating and installing the necessary environment for the tutorials.")]),e._v(" "),t("p",[e._v('The tutorials rely extensively on downloadable "docker images" of Komodo software. A downloadable docker image is an entirely self-contained virtual machine that holds installations of the software necessary to complete the tutorials.')]),e._v(" "),t("p",[e._v("The developer does not need to alter or make any additions to the Komodo source code itself as a part of these tutorials.")]),e._v(" "),t("h4",{attrs:{id:"full-overview-of-komodo-developer-path-tutorials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-overview-of-komodo-developer-path-tutorials"}},[e._v("#")]),e._v(" Full Overview of Komodo Developer Path Tutorials")]),e._v(" "),t("p",[e._v("The following is a brief summary of the docker tutorial stages.")]),e._v(" "),t("ul",[t("li",[e._v("Install Development Environment")]),e._v(" "),t("li",[e._v("Create a New Blockchain (10 minutes)")]),e._v(" "),t("li",[e._v("Integrate the Faucet Module (5 minutes)")]),e._v(" "),t("li",[e._v("Connect Your Programming Language to the Tutorials (10 minutes)")]),e._v(" "),t("li",[e._v("Make an NFT (5 minutes)")]),e._v(" "),t("li",[e._v("Build a Token DEX (30 minutes)")]),e._v(" "),t("li",[e._v("Sync the community testnet blockchain RICK (or MORTY)")]),e._v(" "),t("li",[e._v("Retrieve test coins from a website faucet")]),e._v(" "),t("li",[e._v("Use a mobile wallet to send coins between your dev node and a community blockchain")]),e._v(" "),t("li",[e._v("Repeat the tutorials and test with colleagues")])]),e._v(" "),t("h4",{attrs:{id:"menu-options-in-docker-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#menu-options-in-docker-images"}},[e._v("#")]),e._v(" Menu Options in Docker Images")]),e._v(" "),t("p",[e._v("The options from the main menu of the docker image are the following.")]),e._v(" "),t("ul",[t("li",[e._v("TUTORIALS\n"),t("ul",[t("li",[e._v("Go through the tutorials, including starting a blockchain, run a faucet, create a token dex, use a MuSig Schnorr Signature")])])]),e._v(" "),t("li",[e._v("RICK\n"),t("ul",[t("li",[e._v("dPoW community testnet blockchain")])])]),e._v(" "),t("li",[e._v("MORTY\n"),t("ul",[t("li",[e._v("dPoW community testnet blockchain")])])]),e._v(" "),t("li",[e._v("MAINT\n"),t("ul",[t("li",[e._v("For basic maintenance of this guided tutorial application")])])]),e._v(" "),t("li",[e._v("EXIT\n"),t("ul",[t("li",[e._v("Return to shell")])])])]),e._v(" "),t("h2",{attrs:{id:"rapid-summary-tl-dr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rapid-summary-tl-dr"}},[e._v("#")]),e._v(" Rapid Summary (TL;DR)")]),e._v(" "),t("p",[e._v("If the reader is in a hurry and does not have time to follow all of the instructions in Part I, the following three terminal commands accomplish the essential aspects of the full tutorial's objectives.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker pull komodocakeshop/dev-allinone-learn-kmd\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker run -it -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1:9253:9253 komodocakeshop/dev-allinone-learn-kmd\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("learn-kmd\n")])])]),t("p",[e._v("After the last command, follow the onscreen instructions.")]),e._v(" "),t("p",[e._v("From here, the reader may optionally skip all of the following content and proceed directly to the next article in this tutorial series.")]),e._v(" "),t("h2",{attrs:{id:"the-unique-nature-of-the-docker-image-tutorials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-unique-nature-of-the-docker-image-tutorials"}},[e._v("#")]),e._v(" The Unique Nature of the Docker-Image Tutorials")]),e._v(" "),t("p",[e._v("These guided tutorials are different from many other developer tutorials in the Komodo documentation.")]),e._v(" "),t("p",[e._v('Normally, a developer builds the Komodo software from source. In the tutorials here, however, the developer downloads a "docker image."')]),e._v(" "),t("p",[e._v("A docker image can be described as a complete, self-contained virtual machine that already bears all necessary software installed. This includes the Komodo software, the Zcash parameters, and any necessary instances of Smart Chains.")]),e._v(" "),t("p",[e._v("Once the docker image is downloaded and initiated in the terminal, the developer can utilize all installed software as normal.")]),e._v(" "),t("p",[e._v("In this tutorial, the docker container contains two starting nodes.")]),e._v(" "),t("p",[e._v("If the reader is not familiar with docker, do not worry. These tutorials use docker only as a development tool, and not as a complex deployment strategy.")]),e._v(" "),t("p",[e._v("The tutorial's image uses the default docker network. Advanced docker users are welcome to adjust docker settings as desired.")]),e._v(" "),t("h4",{attrs:{id:"sending-commands-to-the-docker-image-s-seed-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sending-commands-to-the-docker-image-s-seed-node"}},[e._v("#")]),e._v(" Sending Commands to the Docker Image's Seed Node")]),e._v(" "),t("p",[e._v("The developer uses a text console within the docker container to controll the blockchain seed node during the guided tutorials. This text console interfaces with the "),t("code",[e._v("127.0.0.1")]),e._v(" Remote Procedure Call (RPC) server.")]),e._v(" "),t("p",[e._v("The guided tutorial features a preset chain called "),t("code",[e._v("TUT1")]),e._v(". The parameters of this chain are an initial coin supply of "),t("code",[e._v("1000")]),e._v(" and an RPC port of "),t("code",[e._v("9253")]),e._v(".")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("docker run")]),e._v(" command specifies the RPC port as a passthrough port. This makes the port available outside the docker image, should the developer choose to integrate the docker image's Smart Chain, "),t("code",[e._v("TUT1")]),e._v(", with an external programming environment, such as Python or Node.js.")]),e._v(" "),t("p",[e._v("Supported languages include all languages that can call RPC commands in the terminal, as well as those that can implement tools such as curl, postman, insomnia, and other similar development tools.")]),e._v(" "),t("p",[e._v("The docker image is suitable for testing only; do not use the image in a production setting.")]),e._v(" "),t("p",[e._v("The mining node RPC port is not passed through the docker container at runtime because it is randomly generated. The developer can reconfigure this setting, but the tutorials do not cover this topic.")]),e._v(" "),t("h2",{attrs:{id:"install-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-docker"}},[e._v("#")]),e._v(" Install Docker")]),e._v(" "),t("h4",{attrs:{id:"estimated-time-2-minutes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-2-minutes"}},[e._v("#")]),e._v(" Estimated Time: 2 Minutes")]),e._v(" "),t("p",[e._v("The following instructions are written for an Ubuntu 18.04 (LTS) user with root privileges.")]),e._v(" "),t("p",[e._v("After completing the following steps, a non-privileged user may continue to use the docker image without further requiring the "),t("code",[e._v("sudo")]),e._v(" command.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" apt-transport-https ca-certificates "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" software-properties-common\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL https://download.docker.com/linux/ubuntu/gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" add-apt-repository "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"')]),e._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-cache")]),e._v(" policy docker-ce\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" docker-ce\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl status docker\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -aG docker "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("USER")]),e._v("}")]),e._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("USER")]),e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"download-komodo-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-komodo-image"}},[e._v("#")]),e._v(" Download Komodo Image")]),e._v(" "),t("h4",{attrs:{id:"estimated-time-3-minutes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-3-minutes"}},[e._v("#")]),e._v(" Estimated Time: 3 Minutes")]),e._v(" "),t("p",[e._v('The "all-in-one" Komodo image is available for development only.')]),e._v(" "),t("p",[e._v("This image includes Komodo software and the Zcash parameters.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker pull komodocakeshop/dev-allinone-learn-kmd\n")])])]),t("h4",{attrs:{id:"optional-install-the-reduced-size-docker-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optional-install-the-reduced-size-docker-image"}},[e._v("#")]),e._v(" (Optional) Install the Reduced-Size Docker Image")]),e._v(" "),t("p",[e._v("If the reader already has the Zcash parameters installed, a smaller docker image is available. Use of this image is entirely optional; the only benefit it serves is a reduced storage-space footprint.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker pull komodocakeshop/dev-learn-kmd\n")])])]),t("h4",{attrs:{id:"check-the-local-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-the-local-image"}},[e._v("#")]),e._v(" Check the Local Image")]),e._v(" "),t("p",[e._v("Once downloaded, check that the image is in your local docker catalogue using the "),t("code",[e._v("docker images")]),e._v(" command.")]),e._v(" "),t("h4",{attrs:{id:"command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[e._v("#")]),e._v(" Command")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker images\n")])])]),t("h4",{attrs:{id:"expected-response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expected-response"}},[e._v("#")]),e._v(" Expected Response")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("REPOSITORY                           TAG                 IMAGE ID            CREATED             SIZE\nkomodocakeshop/dev-learn-kmd   latest          3792dab98cce        "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" days ago          992MB\n")])])]),t("h2",{attrs:{id:"start-komodo-development-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-komodo-development-container"}},[e._v("#")]),e._v(" Start Komodo Development Container")]),e._v(" "),t("h4",{attrs:{id:"estimated-time-10-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-10-seconds"}},[e._v("#")]),e._v(" Estimated Time: 10 seconds")]),e._v(" "),t("p",[e._v("Start the container.")]),e._v(" "),t("p",[e._v("This drops into a bash prompt that is ready to start the guided tutorials.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker run -it -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1:9253:9253 komodocakeshop/dev-allinone-learn-kmd\n")])])]),t("h4",{attrs:{id:"optional-for-smaller-docker-image-only-mount-the-local-zcash-parameters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optional-for-smaller-docker-image-only-mount-the-local-zcash-parameters"}},[e._v("#")]),e._v(" (Optional, for Smaller Docker Image Only) Mount the Local Zcash Parameters")]),e._v(" "),t("p",[e._v("For users relying on pre-existing Zcash parameters and using the smaller Komodo docker image, mount the parameters as a read-only volume.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker run -it -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1:9253:9253 -v /home/"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("USER")]),e._v("}")]),e._v("/.zcash-params:/root/.zcash-params:ro komodocakeshop/dev-learn-kmd\n")])])]),t("h2",{attrs:{id:"follow-the-guided-tutorial-blockchain-starter-kit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#follow-the-guided-tutorial-blockchain-starter-kit"}},[e._v("#")]),e._v(" Follow The Guided Tutorial Blockchain Starter Kit")]),e._v(" "),t("h4",{attrs:{id:"estimated-time-4-minutes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-4-minutes"}},[e._v("#")]),e._v(" Estimated Time: 4 minutes")]),e._v(" "),t("p",[e._v("The guided tutorial starts by automatically creating two sets of randomly generated keys that should be used throughout the tutorials.")]),e._v(" "),t("p",[e._v("Alternatively, run everything from command line using the komodo-cli.")]),e._v(" "),t("h2",{attrs:{id:"begin-guided-tutorial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#begin-guided-tutorial"}},[e._v("#")]),e._v(" Begin Guided Tutorial")]),e._v(" "),t("h4",{attrs:{id:"estimated-time-20-seconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#estimated-time-20-seconds"}},[e._v("#")]),e._v(" Estimated Time: 20 seconds")]),e._v(" "),t("p",[e._v("Type "),t("code",[e._v("learn-kmd")]),e._v(" to start the guided tutorials.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("learn-kmd\n")])])]),t("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[t("img",{attrs:{src:"/2019-06-24-tutorial-1-img-1.png"}})]),e._v(" "),t("p",[e._v('The "quick start" menu opens with the following screen.')]),e._v(" "),t("div",{staticStyle:{clear:"both","margin-top":"1rem","margin-bottom":"1rem",display:"block"}},[t("img",{attrs:{src:"/2019-06-24-tutorial-1-img-2.png"}})]),e._v(" "),t("hr"),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/basic-docs/antara/antara-tutorials/beginner-series-part-1.html#create-a-blockchain"}},[t("b",[e._v("Click here to proceed to the next tutorial in this series")])])],1)])}),[],!1,null,null,null);a.default=o.exports}}]);