//Rarity
// 0 == Branco
// 1 == Azul
// 2 == roxo
// 3 == rosa
// 4 == vermelho
// 5  == amarelo

//Item parou = 18, comecando pelo 0


var app = new Vue({
    el: "#app",
    data:{
        itensRaro: [
            {
                "name" : "Faca Gut Hook (★ StatTrak™) | Noite",
                "price" : 450,
                "rarity": 5,
                "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPrxN7LEm1Rd6dd2j6fAodqgjFfn-EpvYzuhINWUdA5rYF-B_FS_wbzn1pDptMjAmCRkunIl-z-DyJdWNjR9/360fx360f"                   
            },
            {
                "name" : "Faca Gut Hook (★) | Autotrônica",
                "price" : 524,
                "rarity": 5,
                "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjpR09ujgL-KguP7J6nemGJS18h0juDU-LP5iUazrl1kMWjxLYKRelBqYlvR_VS9wuft1pK4vprPz3Bn63JwtyyOm0TigE4fcKUx0tgYzqQB/360fx360f"                   
            },
            {
                "name" : "Faca Gut Hook (★) | Brasas",
                "price" : 278,
                "rarity": 5,
                "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj5Nr_Yg2Zu5MRjjeyPot3zjQzi_0FrMGylLY-SIQI6Yg6B-1ntxu27gMC47smbm3thu3QqtGGdwUIO0yEj6Q/360fx360f"                   
            },
            {
                "name" : "Baioneta M9 (★ StatTrak™) | Autotrônica",
                "price" : 7258,
                "rarity": 5,
                "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-MhMj5aoTTl3Ju6dBlhf3T-oL8i2u4ohQ0JwavdcTCJxhoaVmG_Fnoxua9hcS4vJrIznRjuHZx7XeLmRflhUxLP7NsgfPNTV-eGeUXSwZKyJQd/360fx360f"                   
            },
        ],
        cases: [
            {
                "name":"Gama",
                "price": 0.07,
                "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYznarJJjkQ6ovjw4SPlfP3auqEl2oBuJB1j--WoY322QziqkdpZGr3IteLMlhpw4RJCv8/360fx360f",
                "items" : [
                    {
                        "name" : "Five-SeveN | Daimiô Violento",
                        "price" : 1.38,
                        "rarity": 1,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goW0hPLiNrXukmpY5dx-teTE8YXghRqwrRFoYWGhdYScdQQ8YAvS81a3wui80J606J6YzXE1siEn4yzYnBK1n1gSOVzaIvOT/360fx360f"                   
                    },
                    {
                        "name" : "MAC-10 | Carnívora",
                        "price" : 0.41,
                        "rarity": 1,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3fDxB043mq4GHnvL6DLjQm2Ru5cB1g_zMu93zjQXsr0RpMG77ItDHcw48ZlyF8wfqkuvqg8C5vsiYzScy6SYr4H7D30vgqob1iS4/360fx360f"                   
                    },
                    {
                        "name" : "Nova | Exo",
                        "price" : 0.78,
                        "rarity": 1, 
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhhwszGfitD08-1nb-Nnsj5Nr_Yg2YfuZ1y3eySo96l3wDn-kNrY2v3JI-TegQ5MlzY-Fm5ybrsgpLvu8zAyWwj5HecrHIalg/360fx360f"                   
                    },
                    {
                        "name" : "P250 | Cobertura Férrea",
                        "price" : 0.55,
                        "rarity": 1,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhnwMzYI2gS09GzgIGHqOf1Pb7dhVRd4cJ5nqfApNyhi1Hl-RZpYz-iJoKScwc5YVDX8lPrxLro15S_6ZybmiBk7iFw-z-DyIqJ8OGX/360fx360f"                   
                    },
                    {
                        "name" : "PP-Bizon | Ceifadora",
                        "price" : 0.63,
                        "rarity": 1,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf1OD3YS197tWsm460n_bmJb7Cgm5D18l4jeHVu9qg3FDm_RdoYD30cYKQegVvYQ2Er1Trwbu-g8TuupTOwXdrvCkqsSzD30vgYAZZ8iA/360fx360f"                   
                    },
                    {
                        "name" : "SG 553 | Aéreo",
                        "price" : 1.68,
                        "rarity": 1,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JlYWZnvb4DLbUkmJE5YsgiOyX9I2j3lW28ktkNj31coTAcQNqYFGG-Fm2k-zqjZO9vpuaySMxpGB8sqXbOY22/360fx360f"                   
                    },
                    {
                        "name" : "Tec-9 | Camada de Gelo",
                        "price" : 0.76,
                        "rarity": 1,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szcdD59teOlkYG0hPb4J4Tdn2xZ_Ism2L_HotTzjAzj-RI9YTqgctXEIA9vYV3RqFXsxue8hpe46JjJmHY2pGB8srWWYKT2/360fx360f"                   
                    },
                    {
                        "name" : "AUG | Aristocrata",
                        "price" : 3.91,
                        "rarity": 2, 
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFABz7PLddgJD_tWlgI-IhfbgDLbUkmJE5Yt02-3CoYrxigTh-RI5MWCgdYGSJlU5ZVzQq1LowOro1JO_vsjLmCZgpGB8sto__-J1/360fx360f"                   
                    },
                    {
                        "name" : "AWP | Fobos",
                        "price" : 13.41,
                        "rarity": 2,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJS5NO0m5O0mvLwOq7c2G4EucYk2L7Ep42t3VGx_RFtamHyLISXe1JsYw6Fr1e9wuvr1JS5vs7XiSw0S4ZJl1o/360fx360f"                   
                    },
                    {
                        "name" : "P90 | Fogosa",
                        "price" : 4.32,
                        "rarity": 2,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FABz7OORIQJE-dC6q5SDhfjgJ7fUqWZU7Mxkh6fEpoml2Fbj-RFuY2_xLITBewVrZ1DTrgXtw7vnjJC-tJibySA3syQk-z-DyMine1-Q/360fx360f"                   
                    },
                    {
                        "name" : "Revólver R8 | Reinício",
                        "price" : 1.38,
                        "rarity": 2,
                         "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cih9_oSJl5mJkuXnI7TDglRc7cF4n-SP8dmniQKy_URpMmyhcYOTdgE2N1-D-1C5wem6hZDp7pzOznpr7yIn7GGdwUJhz-oNlQ/360fx360f"                   
                        },
                    {
                        "name" : "Cano Curto | Lima",
                        "price" : 1.91,
                        "rarity": 2,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYS0mPHyDLfYm25u5cB1g_zMu92l0FC3_EA-NT3zd4SSegE4MlzYr1a9wu-8jZ-6u5mam3owsyImsCzD30vgr4wHheQ/360fx360f"                   
                    },
                    {
                        "name" : "M4A4 | Desolação Espacial",
                        "price" : 64.21,
                        "rarity": 3,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09izh4-HluPxDKjBl2hU18l4jeHVu93zi1aw_hZtYW2icYHGdwJtN1nSr1foxui8gZW96ZvPznMyvSMq4XrD30vgc83x0v4/360fx360f"                 
                    },
                    {
                        "name" : "P2000 | Dragão Imperial",
                        "price" : 11.50,
                        "rarity": 3,
                         "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zPYgJSvozmxL-CmufxIbLQmlRV-sR2hef--YXygED6qBBkYTugIoWQcVc-NFCDr1i4wrjp15buup3JwHJm7iR2tnzazUOz0AYMMLKd06oYrw/360fx360f"                   
                        },
                    {
                        "name" : "SCAR-20 | Patrocínios",
                        "price" : 10.61,
                        "rarity": 3,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PTbTi5B7c7kxL-Jm_j7N6jBmXlF18l4jeHVu4jx0Q2yrhA_MWrycITAIQQ3ZwqDrle8wb-90Z60ucjPnydmunQm4SrD30vg_ZtSLog/360fx360f"                   
                    },
                    {
                        "name" : "Glock-18 | Rebelde das Terras Devastadas",
                        "price" : 35.53,
                        "rarity": 4,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJg4GYg_L4MrXVqXlU6sB9teTE8YXghRrhr0U-NTulddSSdFVqN1HW_QPrl-u7gp61vpicmiE1uSkk4CvamkHjn1gSOWfdS3KX/360fx360f"                   
                    },
                    {
                        "name" : "M4A1-S | Indústrias Mecha",
                        "price" : 57.53,
                        "rarity": 4,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNQ18x_jvzS4Z78jUeLpxo7Oy3tJo-ScVVoZAuB8wW_xOft0ZC6uZ-bn3Nn63Mq7C2Oyx2yiBsYarNv1OveFwt9ELX6XQ/360fx360f" 
                    }
                ]
            },
            {
                "name":"Teia Fragmentada",
                "price": 6.63,
                "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUznaCaJWVDvozlzdONwvKjYLiBk24IsZEl0uuYrNjw0A3n80JpZWzwIYWLMlhpLvhcskA/360fx360f",
                "items" : [
                    {
                        "name" : "MP5-SD | Banho de Ácido",
                        "price" : 0.63,
                        "rarity": 1,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X09mil4i0mvLwOq7c2GgIuMd02-2W8N-s2wHkqUtlYz_yJtTBJAE_YVvS-1K8w-7qjMTqu5TXiSw0Hyo_8Tc/360fx360f"                   
                    },
                    {
                        "name" : "Nova | Plumagem",
                        "price" : 0.93,
                        "rarity": 1,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09qzlZSDkuXnJLLfkVRd4cJ5nqeVrImt2QPt-URoZT2gI46RdlBoYFCD_lTok-zshZW878nBm3Rl7iUr-z-DyF5Y_UYc/360fx360f"                   
                    },
                    {
                        "name" : "G3SG1 | Areia Preta",
                        "price" : 0.93,
                        "rarity": 1,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0Ob3dm5R642JloyKlPznMrXVqWdY781lxLHArI6m3gDj_EpoamqicYecIw45NArUr1a9kL_rgsC4uJ7LnXE1viE8pSGKEi1V3V4/360fx360f"                   
                    },
                    {
                        "name" : "Revólver R8 | Recordações",
                        "price" : 0.58,
                        "rarity": 1,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3di59_oSJmYWGkvngPITck29Y_cg_3uiUod_30Qbj_0I-YTyhIoLBdAM9ZQmDqVG5w7_vh5-0u5rIyiMxuT5iuygNWUhzCg/360fx360f"                   
                    },
                    {
                        "name" : "Berettas Duplas | Equilíbrio",
                        "price" : 0.89,
                        "rarity": 1,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4OOzmImfkuTLIbTCk1Rd4cJ5nqeZ8Yqt0Qzk-UNvMWj6LI6Sew45ZAqF_lW4xOjsg5fv78-bzXNksyF3-z-DyH2Gw439/360fx360f"                   
                    },
                    {
                        "name" : "AUG | Lobo Ártico",
                        "price" : 9.61,
                        "rarity": 2,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJV5NWikYaKmfDLP7LWnn8fuJAgiLuQ8Y2hjQHiqEVoMj30LNPAelc4ZgnQr1jrw-3o1JLpvJybyGwj5HeowEWz1Q/360fx360f"                   
                    },
                    {
                        "name" : "AK-47 | Rat rod",
                        "price" : 25.10,
                        "rarity": 2,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV09K_loKHkuXLP7LWnn8fucYl2rvFptWgigLm8xI9Zm_1I4SWe1NrMlzU_FW-lem5g5a_6JrMzWwj5HfI4UkLHw/360fx360f"                   
                    },
                    {
                        "name" : "AWP | Falha de Contenção",
                        "price" : 265.20,
                        "rarity": 4,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5c6jh7-HnvD8J_WBxjgBv8Mp27HFod6gjA3gqBFkNm2mcdLEc1M8Zl7Z8we5wO2515K5ot2XnsjoWXP9/360fx360f"                   
                    },
                    {
                        "name" : "MAC-10 | Perseguidora",
                        "price" : 89.89,
                        "rarity": 4,
                        "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf1OD3fDxBvYyJh5SKm_zxIYTdn2xZ_ItyiL3Foo2j2FXi8kpraz_yIYGQdwQ4N1HX8wPrybvu0Je5v5WYz3VgpGB8smMduxoo/360fx360f"                   
                    }
                ]
            }
        ],
        translateX: 0,
        itemCase: [],
        selectCaixa: -1,
        possoAbrirCaixa: true,
        itemGanho:  {
            "name" : "M4A1-S | Indústrias Mecha",
            "price" : 57.53,
            "rarity": 4,
            "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDLbUlWNQ18x_jvzS4Z78jUeLpxo7Oy3tJo-ScVVoZAuB8wW_xOft0ZC6uZ-bn3Nn63Mq7C2Oyx2yiBsYarNv1OveFwt9ELX6XQ/360fx360f" 
        },
        abriu: false,
        player: {
            saldo: 100
        },
        myItens: [],
        verItemB : false
    },
    mounted(){
        const myItensDecrypt = CryptoJS.AES.decrypt(localStorage.myItens, "kaway404")
        const myItensOk = myItensDecrypt.toString(CryptoJS.enc.Utf8);
        this.myItens = localStorage.myItens ? JSON.parse(myItensOk): []
        const profileDecrypt = CryptoJS.AES.decrypt(localStorage.profile, "kaway404")
        const profileOk = profileDecrypt.toString(CryptoJS.enc.Utf8)
        console.log(profileOk)
        this.player = localStorage.profile ? JSON.parse(profileOk): {saldo: 100}
    },
    methods:{   
        openCase(){
            if(this.player.saldo >= this.cases[this.selectCaixa].price){
            if(this.possoAbrirCaixa){
            this.translateX = 3500
            this.possoAbrirCaixa = false
            this.player.saldo -= this.cases[this.selectCaixa].price
            setTimeout(() => this.gainedItem(), 3000)
            }
            }
        },
        generateItem(){
            this.itemCase = []
            for(var i = 0; i < 50; i++){
                var itemRaro = Math.floor((Math.random() * 15));
                var itemRandom = Math.floor((Math.random() * this.cases[this.selectCaixa].items.length));
                if(itemRaro == 3){
                    var itemRaro = Math.floor((Math.random() * this.itensRaro.length))
                    this.itemCase.push(this.itensRaro[itemRaro])
                } else{
                    this.itemCase.push(this.cases[this.selectCaixa].items[itemRandom])
                }
            }
        },
        gainedItem(){
            this.abriu = true
            this.itemGanho = this.itemCase[18]
            this.translateX = 0
            this.possoAbrirCaixa = true
            this.myItens.push(this.itemGanho)
            const saveLocalStorage = JSON.stringify(this.myItens)
            localStorage.myItens = CryptoJS.AES.encrypt(saveLocalStorage, "kaway404")
            const saveProfile = JSON.stringify(this.player)
            localStorage.profile = CryptoJS.AES.encrypt(saveProfile, "kaway404")
            this.generateItem()
        },
        selectCase(caixa){
            this.selectCaixa = this.cases.indexOf(caixa)
            this.possoAbrirCaixa = true
            this.generateItem()
        },
        openAgain(){
            this.abriu = false
        },
        verItem(){
            this.selectCaixa = -1
            this.verItemB = true
        },
        vender(item){
            this.player.saldo += item.price
            const id = this.myItens.indexOf(item)
            this.myItens.splice(id, 1)
            const saveProfile = JSON.stringify(this.player)
            localStorage.profile = CryptoJS.AES.encrypt(saveProfile, "kaway404")
            const saveLocalStorage = JSON.stringify(this.myItens)
            localStorage.myItens = CryptoJS.AES.encrypt(saveLocalStorage, "kaway404")
        },
        voltarItemB(){
            this.selectCaixa = -1
            this.verItemB = false
        }
    }
})