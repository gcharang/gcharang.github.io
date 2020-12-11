(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{617:function(e,s,a){"use strict";a.r(s);var t=a(49),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-generate-address-and-private-key-wif-for-3rd-party-coins-using-passphrase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-generate-address-and-private-key-wif-for-3rd-party-coins-using-passphrase"}},[e._v("#")]),e._v(" How to Generate Address and Private Key (WIF) for 3rd Party Coins Using Passphrase")]),e._v(" "),a("p",[e._v("While this guide is intended for Notary Node operators, other users may find it useful too.")]),e._v(" "),a("p",[e._v("Never enter your Notary Node's passphrase into any other computer/server other than your node itself for security purposes.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("For Notary Nodes, we will need "),a("code",[e._v("Compressed Public Key")]),e._v(" as BTC pubkey, "),a("code",[e._v("Compressed WIF")]),e._v(" as private key and "),a("code",[e._v("Compressed Address")]),e._v(" as the public address.")])]),e._v(" "),a("h2",{attrs:{id:"install-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[e._v("#")]),e._v(" Install dependencies")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" upgrade -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" php7.2-cli php7.2-gmp php7.2-mbstring\n")])])]),a("h2",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),a("ul",[a("li",[e._v("Clone the repo: "),a("a",{attrs:{href:"https://github.com/DeckerSU/komodo_scripts",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/DeckerSU/komodo_scripts"),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/DeckerSU/komodo_scripts\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" komodo_scripts\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" submodule update --init --recursive\n")])])]),a("ul",[a("li",[a("p",[e._v("Edit "),a("code",[e._v("genkomodo.php")]),e._v(" and fill your passphrase instead of "),a("code",[e._v('$passphrase = "myverysecretandstrongpassphrase_noneabletobrute"')]),e._v(". Change only the content inside "),a("code",[e._v('""')]),e._v(" i.e., replace "),a("code",[e._v("myverysecretandstrongpassphrase_noneabletobrute")]),e._v(" with your passphrase")])]),e._v(" "),a("li",[a("p",[e._v("Execute the command: "),a("code",[e._v("php genkomodo.php")])])]),e._v(" "),a("li",[a("p",[e._v("Copy and use your required WIF and delete your passphrase from "),a("code",[e._v("genkomodo.php")]),e._v(" for security purposes.")])])]),e._v(" "),a("h2",{attrs:{id:"example-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-output"}},[e._v("#")]),e._v(" Example Output")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ php genkomodo.php\n\n             Passphrase: "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'myverysecretandstrongpassphrase_noneabletobrute'")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" BTC "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n         Network Prefix: 00\n  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1\nUncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030\n            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d\n         Compressed WIF: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes\n       Uncompressed WIF: 5JuvXAozwf7G7yjT7Fs2UZhFF85qS6Fez9yCfAMZzFZ7uPJvWtC\n  Compressed Address: 1M68ML9dMZZPEdrjncUCe7ZWadAGUxMNyv\nUncompressed Address: 1Py6QmcHgWsoAjTJeixtXt2uGzMVa5Ym1i\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" KMD "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n         Network Prefix: 3C\n  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1\nUncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030\n            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d\n         Compressed WIF: UtrRXqvRFUAtCrCTRAHPH6yroQKUrrTJRmxt2h5U4QTUN1jCxTAh\n       Uncompressed WIF: 7KYb75jv5BgrDCbmW36yhofiBy2vSLpCCWDfJ9dMdZxPWnKicJh\n  Compressed Address: RVNKRr2uxPMxJeDwFnTKjdtiLtcs7UzCZn\nUncompressed Address: RYFHVHVaHLgNEjpW7tx1dQN73Fp6Hu5EXs\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" GAME "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n         Network Prefix: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("26")]),e._v("\n  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1\nUncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030\n            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d\n         Compressed WIF: Re6YxHzdQ61rmTuZFVbjmGu9Kqu8VeVJr4G1ihTPFsspAjGiErDL\n       Uncompressed WIF: 6anDDysDKposF9pFZHSzikUg3TV88rGvtSfHvrVdm9orf3EW88J\n  Compressed Address: Gdw3mTUaLRAgK7A2iZ8K4suQVnx7VRJ9rf\nUncompressed Address: Ggp1ptwEfNV6FCkbafczxeNoCA9LcND32e\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" HUSH "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n         Network Prefix: 1cb8\n  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1\nUncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030\n            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d\n         Compressed WIF: L24bEAJSkFCdjoQNEcboWfJdsLGLmkBgfGb4TSHnbhEmU9jenaes\n       Uncompressed WIF: 5JuvXAozwf7G7yjT7Fs2UZhFF85qS6Fez9yCfAMZzFZ7uPJvWtC\n  Compressed Address: t1dxjMfZmKtLyqGudj3HKmvfRqHMMEqgmKn\nUncompressed Address: t1gqhR72ReqfPmNWCb9n1fh8pXeYaT8Hks5\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" EMC2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n         Network Prefix: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v("\n  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1\nUncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030\n            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d\n         Compressed WIF: T7trfubd9dBEWe3EnFYfj1r1pBueqqCaUUVKKEvLAfQvz3JFsNhs\n       Uncompressed WIF: 6vDezJMXr5a8bMdJd5ezFxURCbeJdthgkqNNNMNbhhsjbJoAQhU\n  Compressed Address: EdF2quz8nWrJDwTbbTTieFYUMGfPsVB5dv\nUncompressed Address: Eg7zuMSo7UAiA34ATZxQY21s3drd3WJM6h\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" GIN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n         Network Prefix: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("26")]),e._v("\n  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1\nUncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030\n            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d\n         Compressed WIF: WNejFTXR11LFx2L8wvEKEqvjHkL1D3Aa4CCBdEYQyBzbBKjPLHJQ\n       Uncompressed WIF: 7ez2sQEEbST7ZQQpZqJyF1fTM7C6wPEx4tvjjeWKa82GSwnepa2\n  Compressed Address: Gdw3mTUaLRAgK7A2iZ8K4suQVnx7VRJ9rf\nUncompressed Address: Ggp1ptwEfNV6FCkbafczxeNoCA9LcND32e\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" AYA "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n         Network Prefix: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("17")]),e._v("\n  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1\nUncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030\n            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d\n         Compressed WIF: T7trfubd9dBEWe3EnFYfj1r1pBueqqCaUUVKKEvLAfQvz3JFsNhs\n       Uncompressed WIF: 6vDezJMXr5a8bMdJd5ezFxURCbeJdthgkqNNNMNbhhsjbJoAQhU\n  Compressed Address: Abrzzq1FgiDY3c4jMG8Xnzpc4E5xqktXhz\nUncompressed Address: Aejy4GTv1fXwyhfJDNdDgmHzkbHBwVxnvD\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" GleecBTC "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n         Network Prefix: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v("\n  Compressed Public Key: 02a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1\nUncompressed Public Key: 04a854251adfee222bede8396fed0756985d4ea905f72611740867c7a4ad6488c1767ae7bed159fca39dc26e2f9de31817bd32e0d6c5a870801bcd81fb7f1c2030\n            Private Key: 907ece717a8f94e07de7bf6f8b3e9f91abb8858ebf831072cdbb9016ef53bc5d\n         Compressed WIF: AhXsCzbmiZUyMCZyPqjYMhLxBxcFBP6tQSLrCpTpfYkvjJEMthcW\n       Uncompressed WIF: 3CT2QZXzFrVzdJ81zjm5PMvTYwHbUjAVQtWRHj26My8gpHMRMYn\n  Compressed Address: FRvEp8aiCsn3rojmeJ8McW63cHBHKoxKbV\nUncompressed Address: FUoCsa3NXq6TnuLLWQd3WGZSJeNWVgWuPR\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" ETH/ERC20 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n   ETH/ERC20 Address: 0x85FE0A232fA144921d880BE72A3C5515e5C17A8c\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);