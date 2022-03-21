import { onMount } from "svelte";
import { locale } from "$lib/translations/index";

export function initializeCcsp() {
    onMount(() => {
        const cc = window.initCookieConsent();

        cc.run({
            "current_lang": locale.get() || 'en',
            "autoclear_cookies": true,
            "cookie_name": "ccs",
            "cookie_expiration": 365,
            "page_scripts": true,
            "hide_from_bots": true,
            "revision": 1,
            "gui_options": {
                "consent_modal": { "layout": "cloud", "position": "bottom center", "transition": "slide" },
                "settings_modal": { "layout": "cloud", "transition": "slide" }
            },
            "languages": {
                "cs": {
                    "consent_modal": {
                        "title": "Používáme cookies 🍪!",
                        "description": "Abychom mohli dále pracovat na naši stránce a dále ji vylepšovat, potřebujeme tvůj souhlas s tím, že si k tobě uložíme několik sušenek.",
                        "primary_btn": { "text": "Přijmout vše", "role": "accept_all" },
                        "secondary_btn": { "text": "Nastavení", "role": "settings" }
                    }, "settings_modal": {
                        "title": "Nastavení preferencí volby cookies",
                        "save_settings_btn": "Uložit vše",
                        "accept_all_btn": "Přijmout vše",
                        "reject_all_btn": "Odmítnout vše",
                        "close_btn_label": "Zavřít",
                        "cookie_table_headers": [{ "key": "Název" }, { "domain": "Doména" }, { "expiration": "Expirace" }, { "description": "Popis" }],
                        "blocks": [{
                            "title": "",
                            "description": "V následujícím seznamu si můžete přizpůsobit, které cookies chcete uložit do svého zařízení a které nikoliv."
                        }, {
                            "title": "Vyžadované sušenky",
                            "description": "Tyto cookies jsou vyžadovány pro správné fungování webu, bez nich to prostě nejde.",
                            "toggle": { "value": "necessary", "enabled": true, "readonly": true }
                        }, {
                            "title": "Statistické sušenky",
                            "description": "Tyto cookies používáme za účelem měření návštěvnosti a její analýzy.",
                            "toggle": { "value": "analytics", "enabled": false, "readonly": false },
                            "cookie_table": [{
                                "key": "_ga",
                                "domain": "google.com",
                                "expiration": "2 roky",
                                "description": "",
                                "is_regex": "0",
                                "script": "  gtag('consent', 'update', {\r\n    'ad_storage': 'granted',\r\n    'analytics_storage': 'granted'\r\n  });"
                            }, {
                                "key": "_gid",
                                "domain": "google.com",
                                "expiration": "24 hodin",
                                "description": "",
                                "is_regex": "0",
                                "script": ""
                            }, {
                                "key": "_ga_UA-110461586-2",
                                "domain": "google.com",
                                "expiration": "2 roky",
                                "description": "",
                                "is_regex": "0",
                                "script": ""
                            }, {
                                "key": "_gac_gb_UA-110461586-2",
                                "domain": "google.com",
                                "expiration": "90 dní",
                                "description": "",
                                "is_regex": "0",
                                "script": ""
                            }, {
                                "key": "_fbc",
                                "domain": "facebook.com",
                                "expiration": "2 roky",
                                "description": "",
                                "is_regex": "0",
                                "script": "fbq('consent', 'grant');"
                            }, {
                                "key": "_fbp",
                                "domain": "facebook.com",
                                "expiration": "2 roky",
                                "description": "",
                                "is_regex": "0",
                                "script": ""
                            }, {
                                "key": "_ga_G-D0KZDMBRRT",
                                "domain": "google.com",
                                "expiration": "2 roky",
                                "description": "",
                                "is_regex": "0",
                                "script": ""
                            }, {
                                "key": "_gac_gb_G-D0KZDMBRRT",
                                "domain": "google.com",
                                "expiration": "90 dní",
                                "description": "",
                                "is_regex": "0",
                                "script": ""
                            }]
                        }]
                    }
                },
                'en': {
                    consent_modal: {
                        title: 'We use cookies 🍪!',
                        description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                        primary_btn: {
                            text: 'Accept all',
                            role: 'accept_all'              // 'accept_selected' or 'accept_all'
                        },
                        secondary_btn: {
                            text: 'Reject all',
                            role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                        }
                    },
                    settings_modal: {
                        title: 'Cookie preferences',
                        save_settings_btn: 'Save settings',
                        accept_all_btn: 'Accept all',
                        reject_all_btn: 'Reject all',
                        close_btn_label: 'Close',
                        cookie_table_headers: [
                            { col1: 'Name' },
                            { col2: 'Domain' },
                            { col3: 'Expiration' },
                            { col4: 'Description' }
                        ],
                        blocks: [
                            {
                                title: 'Cookie usage 📢',
                                description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                            }, {
                                title: 'Strictly necessary cookies',
                                description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                                toggle: {
                                    value: 'necessary',
                                    enabled: true,
                                    readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                                }
                            }, {
                                title: 'Performance and Analytics cookies',
                                description: 'These cookies allow the website to remember the choices you have made in the past',
                                toggle: {
                                    value: 'analytics',     // your cookie category
                                    enabled: false,
                                    readonly: false
                                },
                                cookie_table: [             // list of all expected cookies
                                    {
                                        col1: '^_ga',       // match all cookies starting with "_ga"
                                        col2: 'google.com',
                                        col3: '2 years',
                                        col4: 'description ...',
                                        is_regex: true
                                    },
                                    {
                                        col1: '_gid',
                                        col2: 'google.com',
                                        col3: '1 day',
                                        col4: 'description ...',
                                    }
                                ]
                            }, {
                                title: 'Advertisement and Targeting cookies',
                                description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                                toggle: {
                                    value: 'targeting',
                                    enabled: false,
                                    readonly: false
                                }
                            }, {
                                title: 'More information',
                                description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                            }
                        ]
                    }
                }
            }
        });
    })
}
