export const soccerfake =[
    {
        "fixture": {
            "id": 601269,
            "referee": "Tiago Martins, Portugal",
            "timezone": "UTC",
            "date": "2021-04-22T20:00:00+00:00",
            "timestamp": 1619121600,
            "periods": {
                "first": 1619121600,
                "second": null
            },
            "venue": {
                "id": 1286,
                "name": "Estádio Do Dragão",
                "city": "Porto"
            },
            "status": {
                "long": "First Half",
                "short": "1H",
                "elapsed": 39
            }
        },
        "league": {
            "id": 94,
            "name": "Primeira Liga",
            "country": "Portugal",
            "logo": "https://media.api-sports.io/football/leagues/94.png",
            "flag": "https://media.api-sports.io/flags/pt.svg",
            "season": 2020,
            "round": "Regular Season - 28"
        },
        "teams": {
            "home": {
                "id": 212,
                "name": "FC Porto",
                "logo": "https://media.api-sports.io/football/teams/212.png",
                "winner": null
            },
            "away": {
                "id": 224,
                "name": "Guimaraes",
                "logo": "https://media.api-sports.io/football/teams/224.png",
                "winner": null
            }
        },
        "goals": {
            "home": 0,
            "away": 0
        },
        "score": {
            "halftime": {
                "home": 0,
                "away": 0
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "601269",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 94,
                        "name": "Primeira Liga",
                        "country": "Portugal",
                        "logo": "https://media.api-sports.io/football/leagues/94.png",
                        "flag": "https://media.api-sports.io/flags/pt.svg",
                        "season": 2020
                    },
                    "fixture": {
                        "id": 601269,
                        "timezone": "UTC",
                        "date": "2021-04-22T20:00:00+00:00",
                        "timestamp": 1619121600
                    },
                    "update": "2021-04-22T16:00:40+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "1.38"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "5.22"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "8.59"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 605367,
            "referee": "Jorge Figueroa Vazquez, Spain",
            "timezone": "UTC",
            "date": "2021-04-22T20:00:00+00:00",
            "timestamp": 1619121600,
            "periods": {
                "first": 1619121600,
                "second": null
            },
            "venue": {
                "id": 1462,
                "name": "Camp Nou",
                "city": "Barcelona"
            },
            "status": {
                "long": "First Half",
                "short": "1H",
                "elapsed": 39
            }
        },
        "league": {
            "id": 140,
            "name": "Primera Division",
            "country": "Spain",
            "logo": "https://media.api-sports.io/football/leagues/140.png",
            "flag": "https://media.api-sports.io/flags/es.svg",
            "season": 2020,
            "round": "Regular Season - 31"
        },
        "teams": {
            "home": {
                "id": 529,
                "name": "Barcelona",
                "logo": "https://media.api-sports.io/football/teams/529.png",
                "winner": true
            },
            "away": {
                "id": 546,
                "name": "Getafe",
                "logo": "https://media.api-sports.io/football/teams/546.png",
                "winner": false
            }
        },
        "goals": {
            "home": 3,
            "away": 1
        },
        "score": {
            "halftime": {
                "home": 3,
                "away": 1
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 6,
                    "extra": null
                },
                "team": {
                    "id": 529,
                    "name": "Barcelona",
                    "logo": "https://media.api-sports.io/football/teams/529.png"
                },
                "player": {
                    "id": 133,
                    "name": "C. Lenglet"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Tripping"
            },
            {
                "time": {
                    "elapsed": 8,
                    "extra": null
                },
                "team": {
                    "id": 529,
                    "name": "Barcelona",
                    "logo": "https://media.api-sports.io/football/teams/529.png"
                },
                "player": {
                    "id": 154,
                    "name": "L. Messi"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 12,
                    "extra": null
                },
                "team": {
                    "id": 546,
                    "name": "Getafe",
                    "logo": "https://media.api-sports.io/football/teams/546.png"
                },
                "player": {
                    "id": 133,
                    "name": "C. Lenglet"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Own Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 28,
                    "extra": null
                },
                "team": {
                    "id": 529,
                    "name": "Barcelona",
                    "logo": "https://media.api-sports.io/football/teams/529.png"
                },
                "player": {
                    "id": 122737,
                    "name": "S. Chakla"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Own Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 33,
                    "extra": null
                },
                "team": {
                    "id": 529,
                    "name": "Barcelona",
                    "logo": "https://media.api-sports.io/football/teams/529.png"
                },
                "player": {
                    "id": 154,
                    "name": "L. Messi"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "605367",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 140,
                        "name": "Primera Division",
                        "country": "Spain",
                        "logo": "https://media.api-sports.io/football/leagues/140.png",
                        "flag": "https://media.api-sports.io/flags/es.svg",
                        "season": 2020
                    },
                    "fixture": {
                        "id": 605367,
                        "timezone": "UTC",
                        "date": "2021-04-22T20:00:00+00:00",
                        "timestamp": 1619121600
                    },
                    "update": "2021-04-22T16:00:39+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "1.22"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "6.75"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "15.47"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 693115,
            "referee": null,
            "timezone": "UTC",
            "date": "2021-04-22T20:15:00+00:00",
            "timestamp": 1619122500,
            "periods": {
                "first": 1619122500,
                "second": null
            },
            "venue": {
                "id": 1867,
                "name": "Estadio Francisco Rivera Escobar",
                "city": "Palmira"
            },
            "status": {
                "long": "First Half",
                "short": "1H",
                "elapsed": 25
            }
        },
        "league": {
            "id": 241,
            "name": "Copa Colombia",
            "country": "Colombia",
            "logo": "https://media.api-sports.io/football/leagues/241.png",
            "flag": "https://media.api-sports.io/flags/co.svg",
            "season": 2021,
            "round": "2nd Round"
        },
        "teams": {
            "home": {
                "id": 1460,
                "name": "Popayan",
                "logo": "https://media.api-sports.io/football/teams/1460.png",
                "winner": true
            },
            "away": {
                "id": 1467,
                "name": "Valledupar",
                "logo": "https://media.api-sports.io/football/teams/1467.png",
                "winner": false
            }
        },
        "goals": {
            "home": 2,
            "away": 0
        },
        "score": {
            "halftime": {
                "home": 2,
                "away": 0
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 11,
                    "extra": null
                },
                "team": {
                    "id": 1460,
                    "name": "Popayan",
                    "logo": "https://media.api-sports.io/football/teams/1460.png"
                },
                "player": {
                    "id": 36387,
                    "name": "E. Toloza"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 24,
                    "extra": null
                },
                "team": {
                    "id": 1460,
                    "name": "Popayan",
                    "logo": "https://media.api-sports.io/football/teams/1460.png"
                },
                "player": {
                    "id": null,
                    "name": null
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "693115",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 241,
                        "name": "Copa Colombia",
                        "country": "Colombia",
                        "logo": "https://media.api-sports.io/football/leagues/241.png",
                        "flag": "https://media.api-sports.io/flags/co.svg",
                        "season": 2021
                    },
                    "fixture": {
                        "id": 693115,
                        "timezone": "UTC",
                        "date": "2021-04-22T20:15:00+00:00",
                        "timestamp": 1619122500
                    },
                    "update": "2021-04-22T20:00:30+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "1.96"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "3.32"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "4.27"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 699040,
            "referee": null,
            "timezone": "UTC",
            "date": "2021-04-22T20:00:00+00:00",
            "timestamp": 1619121600,
            "periods": {
                "first": 1619121600,
                "second": null
            },
            "venue": {
                "id": 1659,
                "name": "CTE Cachamay",
                "city": "Ciudad Guayana"
            },
            "status": {
                "long": "First Half",
                "short": "1H",
                "elapsed": 39
            }
        },
        "league": {
            "id": 299,
            "name": "Primera Division",
            "country": "Venezuela",
            "logo": "https://media.api-sports.io/football/leagues/299.png",
            "flag": "https://media.api-sports.io/flags/ve.svg",
            "season": 2021,
            "round": "Regular Season - 2"
        },
        "teams": {
            "home": {
                "id": 2828,
                "name": "Lala FC",
                "logo": "https://media.api-sports.io/football/teams/2828.png",
                "winner": true
            },
            "away": {
                "id": 2808,
                "name": "Caracas FC",
                "logo": "https://media.api-sports.io/football/teams/2808.png",
                "winner": false
            }
        },
        "goals": {
            "home": 1,
            "away": 0
        },
        "score": {
            "halftime": {
                "home": 1,
                "away": 0
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 5,
                    "extra": null
                },
                "team": {
                    "id": 2828,
                    "name": "Lala FC",
                    "logo": "https://media.api-sports.io/football/teams/2828.png"
                },
                "player": {
                    "id": 52855,
                    "name": "J. Acosta"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 20,
                    "extra": null
                },
                "team": {
                    "id": 2828,
                    "name": "Lala FC",
                    "logo": "https://media.api-sports.io/football/teams/2828.png"
                },
                "player": {
                    "id": null,
                    "name": "E. Gonzalez"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 35,
                    "extra": null
                },
                "team": {
                    "id": 2828,
                    "name": "Lala FC",
                    "logo": "https://media.api-sports.io/football/teams/2828.png"
                },
                "player": {
                    "id": 52874,
                    "name": "A. Maita"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "699040",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 0,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": []
        }
    },
    {
        "fixture": {
            "id": 592811,
            "referee": "Andy Madley, England",
            "timezone": "UTC",
            "date": "2021-04-22T19:00:00+00:00",
            "timestamp": 1619118000,
            "periods": {
                "first": 1619118000,
                "second": 1619121600
            },
            "venue": {
                "id": 547,
                "name": "King Power Stadium",
                "city": "Leicester, Leicestershire"
            },
            "status": {
                "long": "Second Half",
                "short": "2H",
                "elapsed": 82
            }
        },
        "league": {
            "id": 39,
            "name": "Premier League",
            "country": "England",
            "logo": "https://media.api-sports.io/football/leagues/39.png",
            "flag": "https://media.api-sports.io/flags/gb.svg",
            "season": 2020,
            "round": "Regular Season - 32"
        },
        "teams": {
            "home": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media.api-sports.io/football/teams/46.png",
                "winner": true
            },
            "away": {
                "id": 60,
                "name": "West Brom",
                "logo": "https://media.api-sports.io/football/teams/60.png",
                "winner": false
            }
        },
        "goals": {
            "home": 3,
            "away": 0
        },
        "score": {
            "halftime": {
                "home": 3,
                "away": 0
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 23,
                    "extra": null
                },
                "team": {
                    "id": 46,
                    "name": "Leicester",
                    "logo": "https://media.api-sports.io/football/teams/46.png"
                },
                "player": {
                    "id": 18788,
                    "name": "J. Vardy"
                },
                "assist": {
                    "id": 2920,
                    "name": "T. Castagne"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 26,
                    "extra": null
                },
                "team": {
                    "id": 46,
                    "name": "Leicester",
                    "logo": "https://media.api-sports.io/football/teams/46.png"
                },
                "player": {
                    "id": 18772,
                    "name": "J. Evans"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 36,
                    "extra": null
                },
                "team": {
                    "id": 46,
                    "name": "Leicester",
                    "logo": "https://media.api-sports.io/football/teams/46.png"
                },
                "player": {
                    "id": 2778,
                    "name": "K. Iheanacho"
                },
                "assist": {
                    "id": 18788,
                    "name": "J. Vardy"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 46,
                    "extra": null
                },
                "team": {
                    "id": 60,
                    "name": "West Brom",
                    "logo": "https://media.api-sports.io/football/teams/60.png"
                },
                "player": {
                    "id": 2769,
                    "name": "S. Ajayi"
                },
                "assist": {
                    "id": 19462,
                    "name": "C. Robinson"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 57,
                    "extra": null
                },
                "team": {
                    "id": 60,
                    "name": "West Brom",
                    "logo": "https://media.api-sports.io/football/teams/60.png"
                },
                "player": {
                    "id": 47443,
                    "name": "O. Yokuslu"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Tripping"
            },
            {
                "time": {
                    "elapsed": 61,
                    "extra": null
                },
                "team": {
                    "id": 60,
                    "name": "West Brom",
                    "logo": "https://media.api-sports.io/football/teams/60.png"
                },
                "player": {
                    "id": 19168,
                    "name": "H. Robson-Kanu"
                },
                "assist": {
                    "id": 458,
                    "name": "M. Diagne"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 62,
                    "extra": null
                },
                "team": {
                    "id": 46,
                    "name": "Leicester",
                    "logo": "https://media.api-sports.io/football/teams/46.png"
                },
                "player": {
                    "id": 18777,
                    "name": "M. Albrighton"
                },
                "assist": {
                    "id": 22094,
                    "name": "W. Fofana"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 72,
                    "extra": null
                },
                "team": {
                    "id": 46,
                    "name": "Leicester",
                    "logo": "https://media.api-sports.io/football/teams/46.png"
                },
                "player": {
                    "id": 18906,
                    "name": "A. Perez"
                },
                "assist": {
                    "id": 18784,
                    "name": "J. Maddison"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 73,
                    "extra": null
                },
                "team": {
                    "id": 60,
                    "name": "West Brom",
                    "logo": "https://media.api-sports.io/football/teams/60.png"
                },
                "player": {
                    "id": 19055,
                    "name": "K. Grant"
                },
                "assist": {
                    "id": 25618,
                    "name": "M. Pereira"
                },
                "type": "subst",
                "detail": "Substitution 3",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 79,
                    "extra": null
                },
                "team": {
                    "id": 60,
                    "name": "West Brom",
                    "logo": "https://media.api-sports.io/football/teams/60.png"
                },
                "player": {
                    "id": 19146,
                    "name": "K. Bartley"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Holding"
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "592811",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 39,
                        "name": "Premier League",
                        "country": "England",
                        "logo": "https://media.api-sports.io/football/leagues/39.png",
                        "flag": "https://media.api-sports.io/flags/gb.svg",
                        "season": 2020
                    },
                    "fixture": {
                        "id": 592811,
                        "timezone": "UTC",
                        "date": "2021-04-22T19:00:00+00:00",
                        "timestamp": 1619118000
                    },
                    "update": "2021-04-22T16:00:39+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "1.66"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "4.05"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "5.70"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 605370,
            "referee": "Santiago Jaime Latre, Spain",
            "timezone": "UTC",
            "date": "2021-04-22T19:00:00+00:00",
            "timestamp": 1619118000,
            "periods": {
                "first": 1619118000,
                "second": 1619121600
            },
            "venue": {
                "id": 1479,
                "name": "Estadio Nuevo Los Cármenes",
                "city": "Granada"
            },
            "status": {
                "long": "Second Half",
                "short": "2H",
                "elapsed": 82
            }
        },
        "league": {
            "id": 140,
            "name": "Primera Division",
            "country": "Spain",
            "logo": "https://media.api-sports.io/football/leagues/140.png",
            "flag": "https://media.api-sports.io/flags/es.svg",
            "season": 2020,
            "round": "Regular Season - 31"
        },
        "teams": {
            "home": {
                "id": 715,
                "name": "Granada CF",
                "logo": "https://media.api-sports.io/football/teams/715.png",
                "winner": true
            },
            "away": {
                "id": 545,
                "name": "Eibar",
                "logo": "https://media.api-sports.io/football/teams/545.png",
                "winner": false
            }
        },
        "goals": {
            "home": 4,
            "away": 1
        },
        "score": {
            "halftime": {
                "home": 2,
                "away": 0
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 21,
                    "extra": null
                },
                "team": {
                    "id": 715,
                    "name": "Granada CF",
                    "logo": "https://media.api-sports.io/football/teams/715.png"
                },
                "player": {
                    "id": 1375,
                    "name": "R. Soldado"
                },
                "assist": {
                    "id": 46689,
                    "name": "A. Puertas"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 37,
                    "extra": null
                },
                "team": {
                    "id": 715,
                    "name": "Granada CF",
                    "logo": "https://media.api-sports.io/football/teams/715.png"
                },
                "player": {
                    "id": 46689,
                    "name": "A. Puertas"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 41,
                    "extra": null
                },
                "team": {
                    "id": 715,
                    "name": "Granada CF",
                    "logo": "https://media.api-sports.io/football/teams/715.png"
                },
                "player": {
                    "id": 47265,
                    "name": "J. Molina"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Tripping"
            },
            {
                "time": {
                    "elapsed": 42,
                    "extra": null
                },
                "team": {
                    "id": 545,
                    "name": "Eibar",
                    "logo": "https://media.api-sports.io/football/teams/545.png"
                },
                "player": {
                    "id": 47413,
                    "name": "Recio"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Tripping"
            },
            {
                "time": {
                    "elapsed": 46,
                    "extra": null
                },
                "team": {
                    "id": 545,
                    "name": "Eibar",
                    "logo": "https://media.api-sports.io/football/teams/545.png"
                },
                "player": {
                    "id": 47392,
                    "name": "P. Leon"
                },
                "assist": {
                    "id": 41149,
                    "name": "Rafa"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 51,
                    "extra": null
                },
                "team": {
                    "id": 715,
                    "name": "Granada CF",
                    "logo": "https://media.api-sports.io/football/teams/715.png"
                },
                "player": {
                    "id": 2051,
                    "name": "M. Gonalons"
                },
                "assist": {
                    "id": 47265,
                    "name": "J. Molina"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 60,
                    "extra": null
                },
                "team": {
                    "id": 545,
                    "name": "Eibar",
                    "logo": "https://media.api-sports.io/football/teams/545.png"
                },
                "player": {
                    "id": 47384,
                    "name": "Cote"
                },
                "assist": {
                    "id": 47385,
                    "name": "S. Alvarez"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 60,
                    "extra": null
                },
                "team": {
                    "id": 545,
                    "name": "Eibar",
                    "logo": "https://media.api-sports.io/football/teams/545.png"
                },
                "player": {
                    "id": 46809,
                    "name": "Quique"
                },
                "assist": {
                    "id": 47387,
                    "name": "P. Diop"
                },
                "type": "subst",
                "detail": "Substitution 3",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 64,
                    "extra": null
                },
                "team": {
                    "id": 545,
                    "name": "Eibar",
                    "logo": "https://media.api-sports.io/football/teams/545.png"
                },
                "player": {
                    "id": 47396,
                    "name": "Kike"
                },
                "assist": {
                    "id": 47392,
                    "name": "P. Leon"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 71,
                    "extra": null
                },
                "team": {
                    "id": 715,
                    "name": "Granada CF",
                    "logo": "https://media.api-sports.io/football/teams/715.png"
                },
                "player": {
                    "id": 46677,
                    "name": "V. Diaz"
                },
                "assist": {
                    "id": 46687,
                    "name": "A. Montoro"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 71,
                    "extra": null
                },
                "team": {
                    "id": 715,
                    "name": "Granada CF",
                    "logo": "https://media.api-sports.io/football/teams/715.png"
                },
                "player": {
                    "id": 18902,
                    "name": "Kenedy"
                },
                "assist": {
                    "id": 2459,
                    "name": "D. Machis"
                },
                "type": "subst",
                "detail": "Substitution 3",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 77,
                    "extra": null
                },
                "team": {
                    "id": 715,
                    "name": "Granada CF",
                    "logo": "https://media.api-sports.io/football/teams/715.png"
                },
                "player": {
                    "id": 1375,
                    "name": "R. Soldado"
                },
                "assist": {
                    "id": 18902,
                    "name": "Kenedy"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 81,
                    "extra": null
                },
                "team": {
                    "id": 715,
                    "name": "Granada CF",
                    "logo": "https://media.api-sports.io/football/teams/715.png"
                },
                "player": {
                    "id": 37,
                    "name": "N. Perez"
                },
                "assist": {
                    "id": 741,
                    "name": "J. Vallejo"
                },
                "type": "subst",
                "detail": "Substitution 4",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 81,
                    "extra": null
                },
                "team": {
                    "id": 715,
                    "name": "Granada CF",
                    "logo": "https://media.api-sports.io/football/teams/715.png"
                },
                "player": {
                    "id": 18902,
                    "name": "Kenedy"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "605370",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 140,
                        "name": "Primera Division",
                        "country": "Spain",
                        "logo": "https://media.api-sports.io/football/leagues/140.png",
                        "flag": "https://media.api-sports.io/flags/es.svg",
                        "season": 2020
                    },
                    "fixture": {
                        "id": 605370,
                        "timezone": "UTC",
                        "date": "2021-04-22T19:00:00+00:00",
                        "timestamp": 1619118000
                    },
                    "update": "2021-04-22T16:00:39+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "2.36"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "3.19"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "3.51"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 605373,
            "referee": "Jesus Gil Manzano, Spain",
            "timezone": "UTC",
            "date": "2021-04-22T19:00:00+00:00",
            "timestamp": 1619118000,
            "periods": {
                "first": 1619118000,
                "second": 1619121600
            },
            "venue": {
                "id": 1491,
                "name": "Reale Arena",
                "city": "Donostia-San Sebastián"
            },
            "status": {
                "long": "Second Half",
                "short": "2H",
                "elapsed": 81
            }
        },
        "league": {
            "id": 140,
            "name": "Primera Division",
            "country": "Spain",
            "logo": "https://media.api-sports.io/football/leagues/140.png",
            "flag": "https://media.api-sports.io/flags/es.svg",
            "season": 2020,
            "round": "Regular Season - 31"
        },
        "teams": {
            "home": {
                "id": 548,
                "name": "Real Sociedad",
                "logo": "https://media.api-sports.io/football/teams/548.png",
                "winner": true
            },
            "away": {
                "id": 538,
                "name": "Celta Vigo",
                "logo": "https://media.api-sports.io/football/teams/538.png",
                "winner": false
            }
        },
        "goals": {
            "home": 2,
            "away": 1
        },
        "score": {
            "halftime": {
                "home": 2,
                "away": 1
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 15,
                    "extra": null
                },
                "team": {
                    "id": 548,
                    "name": "Real Sociedad",
                    "logo": "https://media.api-sports.io/football/teams/548.png"
                },
                "player": {
                    "id": 47298,
                    "name": "A. Elustondo"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Roughing"
            },
            {
                "time": {
                    "elapsed": 22,
                    "extra": null
                },
                "team": {
                    "id": 538,
                    "name": "Celta Vigo",
                    "logo": "https://media.api-sports.io/football/teams/538.png"
                },
                "player": {
                    "id": 47432,
                    "name": "H. Mallo"
                },
                "assist": {
                    "id": 1461,
                    "name": "D. Suarez"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 25,
                    "extra": null
                },
                "team": {
                    "id": 548,
                    "name": "Real Sociedad",
                    "logo": "https://media.api-sports.io/football/teams/548.png"
                },
                "player": {
                    "id": 47520,
                    "name": "Portu"
                },
                "assist": {
                    "id": 46808,
                    "name": "C. Fernandez"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 29,
                    "extra": null
                },
                "team": {
                    "id": 548,
                    "name": "Real Sociedad",
                    "logo": "https://media.api-sports.io/football/teams/548.png"
                },
                "player": {
                    "id": 2864,
                    "name": "A. Isak"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Missed Penalty",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 38,
                    "extra": null
                },
                "team": {
                    "id": 538,
                    "name": "Celta Vigo",
                    "logo": "https://media.api-sports.io/football/teams/538.png"
                },
                "player": {
                    "id": 135,
                    "name": "J. Murillo"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Tripping"
            },
            {
                "time": {
                    "elapsed": 39,
                    "extra": null
                },
                "team": {
                    "id": 548,
                    "name": "Real Sociedad",
                    "logo": "https://media.api-sports.io/football/teams/548.png"
                },
                "player": {
                    "id": 2924,
                    "name": "A. Januzaj"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Penalty",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 46,
                    "extra": null
                },
                "team": {
                    "id": 548,
                    "name": "Real Sociedad",
                    "logo": "https://media.api-sports.io/football/teams/548.png"
                },
                "player": {
                    "id": 47323,
                    "name": "M. Oyarzabal"
                },
                "assist": {
                    "id": 2924,
                    "name": "A. Januzaj"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 62,
                    "extra": null
                },
                "team": {
                    "id": 538,
                    "name": "Celta Vigo",
                    "logo": "https://media.api-sports.io/football/teams/538.png"
                },
                "player": {
                    "id": 47435,
                    "name": "F. Beltran"
                },
                "assist": {
                    "id": 1461,
                    "name": "D. Suarez"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 62,
                    "extra": null
                },
                "team": {
                    "id": 538,
                    "name": "Celta Vigo",
                    "logo": "https://media.api-sports.io/football/teams/538.png"
                },
                "player": {
                    "id": 182501,
                    "name": "J. Fontan"
                },
                "assist": {
                    "id": 25914,
                    "name": "A. Caricol"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 62,
                    "extra": null
                },
                "team": {
                    "id": 538,
                    "name": "Celta Vigo",
                    "logo": "https://media.api-sports.io/football/teams/538.png"
                },
                "player": {
                    "id": 2058,
                    "name": "Nolito"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Tripping"
            },
            {
                "time": {
                    "elapsed": 68,
                    "extra": null
                },
                "team": {
                    "id": 548,
                    "name": "Real Sociedad",
                    "logo": "https://media.api-sports.io/football/teams/548.png"
                },
                "player": {
                    "id": 47317,
                    "name": "A. Barrenetxea"
                },
                "assist": {
                    "id": 2864,
                    "name": "A. Isak"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 69,
                    "extra": null
                },
                "team": {
                    "id": 548,
                    "name": "Real Sociedad",
                    "logo": "https://media.api-sports.io/football/teams/548.png"
                },
                "player": {
                    "id": 47315,
                    "name": "M. Zubimendi"
                },
                "assist": {
                    "id": 47309,
                    "name": "A. Guevara"
                },
                "type": "subst",
                "detail": "Substitution 3",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 72,
                    "extra": null
                },
                "team": {
                    "id": 548,
                    "name": "Real Sociedad",
                    "logo": "https://media.api-sports.io/football/teams/548.png"
                },
                "player": {
                    "id": 47318,
                    "name": "B. O. Jon"
                },
                "assist": {
                    "id": 46808,
                    "name": "C. Fernandez"
                },
                "type": "subst",
                "detail": "Substitution 4",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 79,
                    "extra": null
                },
                "team": {
                    "id": 538,
                    "name": "Celta Vigo",
                    "logo": "https://media.api-sports.io/football/teams/538.png"
                },
                "player": {
                    "id": 5921,
                    "name": "A. Solari"
                },
                "assist": {
                    "id": 2058,
                    "name": "Nolito"
                },
                "type": "subst",
                "detail": "Substitution 3",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "605373",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 140,
                        "name": "Primera Division",
                        "country": "Spain",
                        "logo": "https://media.api-sports.io/football/leagues/140.png",
                        "flag": "https://media.api-sports.io/flags/es.svg",
                        "season": 2020
                    },
                    "fixture": {
                        "id": 605373,
                        "timezone": "UTC",
                        "date": "2021-04-22T19:00:00+00:00",
                        "timestamp": 1619118000
                    },
                    "update": "2021-04-22T16:00:39+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "1.82"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "3.86"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "4.65"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 608850,
            "referee": "Marco Di Bello, Italy",
            "timezone": "UTC",
            "date": "2021-04-22T18:45:00+00:00",
            "timestamp": 1619117100,
            "periods": {
                "first": 1619117100,
                "second": 1619120700
            },
            "venue": {
                "id": null,
                "name": "Stadio Diego Armando Maradona",
                "city": "Naples"
            },
            "status": {
                "long": "Second Half",
                "short": "2H",
                "elapsed": 90
            }
        },
        "league": {
            "id": 135,
            "name": "Serie A",
            "country": "Italy",
            "logo": "https://media.api-sports.io/football/leagues/135.png",
            "flag": "https://media.api-sports.io/flags/it.svg",
            "season": 2020,
            "round": "Regular Season - 32"
        },
        "teams": {
            "home": {
                "id": 492,
                "name": "Napoli",
                "logo": "https://media.api-sports.io/football/teams/492.png",
                "winner": true
            },
            "away": {
                "id": 487,
                "name": "Lazio",
                "logo": "https://media.api-sports.io/football/teams/487.png",
                "winner": false
            }
        },
        "goals": {
            "home": 5,
            "away": 2
        },
        "score": {
            "halftime": {
                "home": 2,
                "away": 0
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 6,
                    "extra": null
                },
                "team": {
                    "id": 487,
                    "name": "Lazio",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                "player": {
                    "id": 1856,
                    "name": "S. Milinkovic-Savic"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Roughing"
            },
            {
                "time": {
                    "elapsed": 7,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 331,
                    "name": "L. Insigne"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Penalty",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 12,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 219,
                    "name": "M. Politano"
                },
                "assist": {
                    "id": 332,
                    "name": "D. Mertens"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 15,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 772,
                    "name": "K. Manolas"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Tripping"
            },
            {
                "time": {
                    "elapsed": 30,
                    "extra": null
                },
                "team": {
                    "id": 487,
                    "name": "Lazio",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                "player": {
                    "id": 1858,
                    "name": "Lucas Leiva"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Foul"
            },
            {
                "time": {
                    "elapsed": 42,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 328,
                    "name": "F. Ruiz"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Holding"
            },
            {
                "time": {
                    "elapsed": 45,
                    "extra": 1
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 332,
                    "name": "D. Mertens"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Tripping"
            },
            {
                "time": {
                    "elapsed": 48,
                    "extra": null
                },
                "team": {
                    "id": 487,
                    "name": "Lazio",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                "player": {
                    "id": 1863,
                    "name": "C. Immobile"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Roughing"
            },
            {
                "time": {
                    "elapsed": 53,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 331,
                    "name": "L. Insigne"
                },
                "assist": {
                    "id": 317,
                    "name": "E. Hysaj"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 58,
                    "extra": null
                },
                "team": {
                    "id": 487,
                    "name": "Lazio",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                "player": {
                    "id": 1852,
                    "name": "D. Cataldi"
                },
                "assist": {
                    "id": 1858,
                    "name": "Lucas Leiva"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 64,
                    "extra": null
                },
                "team": {
                    "id": 487,
                    "name": "Lazio",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                "player": {
                    "id": 1855,
                    "name": "S. Lulic"
                },
                "assist": {
                    "id": 30859,
                    "name": "M. Fares"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 65,
                    "extra": null
                },
                "team": {
                    "id": 487,
                    "name": "Lazio",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                "player": {
                    "id": 899,
                    "name": "A. Pereira"
                },
                "assist": {
                    "id": 1859,
                    "name": "L. Alberto"
                },
                "type": "subst",
                "detail": "Substitution 3",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 65,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 332,
                    "name": "D. Mertens"
                },
                "assist": {
                    "id": 329,
                    "name": "P. Zielinski"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 70,
                    "extra": null
                },
                "team": {
                    "id": 487,
                    "name": "Lazio",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                "player": {
                    "id": 1863,
                    "name": "C. Immobile"
                },
                "assist": {
                    "id": 899,
                    "name": "A. Pereira"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 71,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 1314,
                    "name": "A. Rrahmani"
                },
                "assist": {
                    "id": 772,
                    "name": "K. Manolas"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 71,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 248,
                    "name": "H. Lozano"
                },
                "assist": {
                    "id": 219,
                    "name": "M. Politano"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 72,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 2780,
                    "name": "V. Osimhen"
                },
                "assist": {
                    "id": 332,
                    "name": "D. Mertens"
                },
                "type": "subst",
                "detail": "Substitution 3",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 73,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 31042,
                    "name": "G. Di Lorenzo"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Tripping"
            },
            {
                "time": {
                    "elapsed": 74,
                    "extra": null
                },
                "team": {
                    "id": 487,
                    "name": "Lazio",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                "player": {
                    "id": 1856,
                    "name": "S. Milinkovic-Savic"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 75,
                    "extra": null
                },
                "team": {
                    "id": 487,
                    "name": "Lazio",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                "player": {
                    "id": 899,
                    "name": "A. Pereira"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": "Tripping"
            },
            {
                "time": {
                    "elapsed": 80,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 2780,
                    "name": "V. Osimhen"
                },
                "assist": {
                    "id": 248,
                    "name": "H. Lozano"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 82,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 1358,
                    "name": "E. Elmas"
                },
                "assist": {
                    "id": 329,
                    "name": "P. Zielinski"
                },
                "type": "subst",
                "detail": "Substitution 4",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 83,
                    "extra": null
                },
                "team": {
                    "id": 487,
                    "name": "Lazio",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                "player": {
                    "id": 50048,
                    "name": "V. Muriqi"
                },
                "assist": {
                    "id": 1863,
                    "name": "C. Immobile"
                },
                "type": "subst",
                "detail": "Substitution 4",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 83,
                    "extra": null
                },
                "team": {
                    "id": 487,
                    "name": "Lazio",
                    "logo": "https://media.api-sports.io/football/teams/487.png"
                },
                "player": {
                    "id": 31678,
                    "name": "J. Akpa Akpro"
                },
                "assist": {
                    "id": 1856,
                    "name": "S. Milinkovic-Savic"
                },
                "type": "subst",
                "detail": "Substitution 5",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 90,
                    "extra": null
                },
                "team": {
                    "id": 492,
                    "name": "Napoli",
                    "logo": "https://media.api-sports.io/football/teams/492.png"
                },
                "player": {
                    "id": 47439,
                    "name": "S. Lobotka"
                },
                "assist": {
                    "id": 1635,
                    "name": "T. Bakayoko"
                },
                "type": "subst",
                "detail": "Substitution 5",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "608850",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 135,
                        "name": "Serie A",
                        "country": "Italy",
                        "logo": "https://media.api-sports.io/football/leagues/135.png",
                        "flag": "https://media.api-sports.io/flags/it.svg",
                        "season": 2020
                    },
                    "fixture": {
                        "id": 608850,
                        "timezone": "UTC",
                        "date": "2021-04-22T18:45:00+00:00",
                        "timestamp": 1619117100
                    },
                    "update": "2021-04-22T16:00:39+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "2.03"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "3.83"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "3.73"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 658392,
            "referee": null,
            "timezone": "UTC",
            "date": "2021-04-22T19:00:00+00:00",
            "timestamp": 1619118000,
            "periods": {
                "first": 1619118000,
                "second": 1619121600
            },
            "venue": {
                "id": 5639,
                "name": "Estádio Presidente Vargas",
                "city": "Campina Grande, Paraíba"
            },
            "status": {
                "long": "Second Half",
                "short": "2H",
                "elapsed": 46
            }
        },
        "league": {
            "id": 603,
            "name": "Paraibano",
            "country": "Brazil",
            "logo": "https://media.api-sports.io/football/leagues/603.png",
            "flag": "https://media.api-sports.io/flags/br.svg",
            "season": 2021,
            "round": "Regular Season - 2"
        },
        "teams": {
            "home": {
                "id": 12909,
                "name": "Perilima",
                "logo": "https://media.api-sports.io/football/teams/12909.png",
                "winner": false
            },
            "away": {
                "id": 7864,
                "name": "Sousa",
                "logo": "https://media.api-sports.io/football/teams/7864.png",
                "winner": true
            }
        },
        "goals": {
            "home": 0,
            "away": 2
        },
        "score": {
            "halftime": {
                "home": 0,
                "away": 1
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 36,
                    "extra": null
                },
                "team": {
                    "id": 7864,
                    "name": "Sousa",
                    "logo": "https://media.api-sports.io/football/teams/7864.png"
                },
                "player": {
                    "id": 58766,
                    "name": "O. Neto"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 66,
                    "extra": null
                },
                "team": {
                    "id": 7864,
                    "name": "Sousa",
                    "logo": "https://media.api-sports.io/football/teams/7864.png"
                },
                "player": {
                    "id": 58766,
                    "name": "Dentinho"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "658392",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 603,
                        "name": "Paraibano",
                        "country": "Brazil",
                        "logo": "https://media.api-sports.io/football/leagues/603.png",
                        "flag": "https://media.api-sports.io/flags/br.svg",
                        "season": 2021
                    },
                    "fixture": {
                        "id": 658392,
                        "timezone": "UTC",
                        "date": "2021-04-22T19:00:00+00:00",
                        "timestamp": 1619118000
                    },
                    "update": "2021-04-22T16:00:40+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "3.94"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "3.06"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "2.08"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 681416,
            "referee": null,
            "timezone": "UTC",
            "date": "2021-04-22T19:30:00+00:00",
            "timestamp": 1619119800,
            "periods": {
                "first": 1619119800,
                "second": 1619123400
            },
            "venue": {
                "id": null,
                "name": "Al Ahly Stadium",
                "city": "Cairo"
            },
            "status": {
                "long": "Second Half",
                "short": "2H",
                "elapsed": 54
            }
        },
        "league": {
            "id": 233,
            "name": "Premier League",
            "country": "Egypt",
            "logo": "https://media.api-sports.io/football/leagues/233.png",
            "flag": "https://media.api-sports.io/flags/eg.svg",
            "season": 2020,
            "round": "Regular Season - 16"
        },
        "teams": {
            "home": {
                "id": 1034,
                "name": "El Entag EL Harby",
                "logo": "https://media.api-sports.io/football/teams/1034.png",
                "winner": false
            },
            "away": {
                "id": 1040,
                "name": "Zamalek SC",
                "logo": "https://media.api-sports.io/football/teams/1040.png",
                "winner": true
            }
        },
        "goals": {
            "home": 0,
            "away": 2
        },
        "score": {
            "halftime": {
                "home": 0,
                "away": 2
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 22,
                    "extra": null
                },
                "team": {
                    "id": 1040,
                    "name": "Zamalek SC",
                    "logo": "https://media.api-sports.io/football/teams/1040.png"
                },
                "player": {
                    "id": 20666,
                    "name": "A. Bencharki"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Penalty",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 32,
                    "extra": null
                },
                "team": {
                    "id": 1040,
                    "name": "Zamalek SC",
                    "logo": "https://media.api-sports.io/football/teams/1040.png"
                },
                "player": {
                    "id": null,
                    "name": "M. Abdel-Shafi"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 40,
                    "extra": null
                },
                "team": {
                    "id": 1040,
                    "name": "Zamalek SC",
                    "logo": "https://media.api-sports.io/football/teams/1040.png"
                },
                "player": {
                    "id": 16872,
                    "name": "H. Ahadad"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 45,
                    "extra": null
                },
                "team": {
                    "id": 1040,
                    "name": "Zamalek SC",
                    "logo": "https://media.api-sports.io/football/teams/1040.png"
                },
                "player": {
                    "id": 16854,
                    "name": "M. Abdel Ghani"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 45,
                    "extra": 1
                },
                "team": {
                    "id": 1040,
                    "name": "Zamalek SC",
                    "logo": "https://media.api-sports.io/football/teams/1040.png"
                },
                "player": {
                    "id": 49432,
                    "name": "H. Mathlouthi"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 51,
                    "extra": null
                },
                "team": {
                    "id": 1040,
                    "name": "Zamalek SC",
                    "logo": "https://media.api-sports.io/football/teams/1040.png"
                },
                "player": {
                    "id": 16854,
                    "name": "M. Abdel Ghani"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 51,
                    "extra": null
                },
                "team": {
                    "id": 1040,
                    "name": "Zamalek SC",
                    "logo": "https://media.api-sports.io/football/teams/1040.png"
                },
                "player": {
                    "id": 16854,
                    "name": "M. Abdel Ghani"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Red Card",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "681416",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 233,
                        "name": "Premier League",
                        "country": "Egypt",
                        "logo": "https://media.api-sports.io/football/leagues/233.png",
                        "flag": "https://media.api-sports.io/flags/eg.svg",
                        "season": 2020
                    },
                    "fixture": {
                        "id": 681416,
                        "timezone": "UTC",
                        "date": "2021-04-22T19:30:00+00:00",
                        "timestamp": 1619119800
                    },
                    "update": "2021-04-22T16:00:40+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "9.88"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "3.57"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "1.50"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 681437,
            "referee": null,
            "timezone": "UTC",
            "date": "2021-04-22T19:30:00+00:00",
            "timestamp": 1619119800,
            "periods": {
                "first": 1619119800,
                "second": 1619123400
            },
            "venue": {
                "id": null,
                "name": "Arab Contractors Stadium",
                "city": "Cairo"
            },
            "status": {
                "long": "Second Half",
                "short": "2H",
                "elapsed": 51
            }
        },
        "league": {
            "id": 233,
            "name": "Premier League",
            "country": "Egypt",
            "logo": "https://media.api-sports.io/football/leagues/233.png",
            "flag": "https://media.api-sports.io/flags/eg.svg",
            "season": 2020,
            "round": "Regular Season - 19"
        },
        "teams": {
            "home": {
                "id": 1575,
                "name": "El Mokawloon",
                "logo": "https://media.api-sports.io/football/teams/1575.png",
                "winner": null
            },
            "away": {
                "id": 1046,
                "name": "Wadi Degla",
                "logo": "https://media.api-sports.io/football/teams/1046.png",
                "winner": null
            }
        },
        "goals": {
            "home": 0,
            "away": 0
        },
        "score": {
            "halftime": {
                "home": 0,
                "away": 0
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 41,
                    "extra": null
                },
                "team": {
                    "id": 1046,
                    "name": "Wadi Degla",
                    "logo": "https://media.api-sports.io/football/teams/1046.png"
                },
                "player": {
                    "id": 17142,
                    "name": "M. Helal"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 43,
                    "extra": null
                },
                "team": {
                    "id": 1575,
                    "name": "El Mokawloon",
                    "logo": "https://media.api-sports.io/football/teams/1575.png"
                },
                "player": {
                    "id": 16842,
                    "name": "M. Rizk"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 46,
                    "extra": null
                },
                "team": {
                    "id": 1046,
                    "name": "Wadi Degla",
                    "logo": "https://media.api-sports.io/football/teams/1046.png"
                },
                "player": {
                    "id": 196832,
                    "name": "A. Atef"
                },
                "assist": {
                    "id": 270355,
                    "name": "K. Mohamed"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 46,
                    "extra": null
                },
                "team": {
                    "id": 1046,
                    "name": "Wadi Degla",
                    "logo": "https://media.api-sports.io/football/teams/1046.png"
                },
                "player": {
                    "id": 17130,
                    "name": "K. Reda"
                },
                "assist": {
                    "id": 17132,
                    "name": "B. Walid"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "681437",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 233,
                        "name": "Premier League",
                        "country": "Egypt",
                        "logo": "https://media.api-sports.io/football/leagues/233.png",
                        "flag": "https://media.api-sports.io/flags/eg.svg",
                        "season": 2020
                    },
                    "fixture": {
                        "id": 681437,
                        "timezone": "UTC",
                        "date": "2021-04-22T19:30:00+00:00",
                        "timestamp": 1619119800
                    },
                    "update": "2021-04-22T16:00:40+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "2.54"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "2.77"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "3.46"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 684382,
            "referee": null,
            "timezone": "UTC",
            "date": "2021-04-22T19:00:00+00:00",
            "timestamp": 1619118000,
            "periods": {
                "first": 1619118000,
                "second": 1619121600
            },
            "venue": {
                "id": 10493,
                "name": "Arena da Baixada",
                "city": "Curitiba, Paraná"
            },
            "status": {
                "long": "Second Half",
                "short": "2H",
                "elapsed": 81
            }
        },
        "league": {
            "id": 606,
            "name": "Paranaense - 1",
            "country": "Brazil",
            "logo": "https://media.api-sports.io/football/leagues/606.png",
            "flag": "https://media.api-sports.io/flags/br.svg",
            "season": 2021,
            "round": "Group Stage - 4"
        },
        "teams": {
            "home": {
                "id": 134,
                "name": "Atletico Paranaense",
                "logo": "https://media.api-sports.io/football/teams/134.png",
                "winner": true
            },
            "away": {
                "id": 12913,
                "name": "Cascavel CR",
                "logo": "https://media.api-sports.io/football/teams/12913.png",
                "winner": false
            }
        },
        "goals": {
            "home": 2,
            "away": 1
        },
        "score": {
            "halftime": {
                "home": 2,
                "away": 1
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 16,
                    "extra": null
                },
                "team": {
                    "id": 12913,
                    "name": "Cascavel CR",
                    "logo": "https://media.api-sports.io/football/teams/12913.png"
                },
                "player": {
                    "id": null,
                    "name": "Ramon"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 18,
                    "extra": null
                },
                "team": {
                    "id": 134,
                    "name": "Atletico Paranaense",
                    "logo": "https://media.api-sports.io/football/teams/134.png"
                },
                "player": {
                    "id": 9980,
                    "name": "F. Aguilar"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 42,
                    "extra": null
                },
                "team": {
                    "id": 134,
                    "name": "Atletico Paranaense",
                    "logo": "https://media.api-sports.io/football/teams/134.png"
                },
                "player": {
                    "id": 10250,
                    "name": "Jadson"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 46,
                    "extra": null
                },
                "team": {
                    "id": 134,
                    "name": "Atletico Paranaense",
                    "logo": "https://media.api-sports.io/football/teams/134.png"
                },
                "player": {
                    "id": 9650,
                    "name": "Reinaldo"
                },
                "assist": {
                    "id": 35821,
                    "name": "Yago"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 53,
                    "extra": null
                },
                "team": {
                    "id": 134,
                    "name": "Atletico Paranaense",
                    "logo": "https://media.api-sports.io/football/teams/134.png"
                },
                "player": {
                    "id": 10119,
                    "name": "M. Azevedo"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 54,
                    "extra": null
                },
                "team": {
                    "id": 12913,
                    "name": "Cascavel CR",
                    "logo": "https://media.api-sports.io/football/teams/12913.png"
                },
                "player": {
                    "id": 70313,
                    "name": "Kennidy"
                },
                "assist": {
                    "id": null,
                    "name": "Vanderlan"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 62,
                    "extra": null
                },
                "team": {
                    "id": 134,
                    "name": "Atletico Paranaense",
                    "logo": "https://media.api-sports.io/football/teams/134.png"
                },
                "player": {
                    "id": null,
                    "name": "M. Anjos"
                },
                "assist": {
                    "id": 159718,
                    "name": "Babi Matheus"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 62,
                    "extra": null
                },
                "team": {
                    "id": 134,
                    "name": "Atletico Paranaense",
                    "logo": "https://media.api-sports.io/football/teams/134.png"
                },
                "player": {
                    "id": 133186,
                    "name": "V. Mingotti"
                },
                "assist": {
                    "id": 10119,
                    "name": "M. Azevedo"
                },
                "type": "subst",
                "detail": "Substitution 3",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 70,
                    "extra": null
                },
                "team": {
                    "id": 12913,
                    "name": "Cascavel CR",
                    "logo": "https://media.api-sports.io/football/teams/12913.png"
                },
                "player": {
                    "id": null,
                    "name": "A. Da Silva"
                },
                "assist": {
                    "id": null,
                    "name": "B. Guterres"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 71,
                    "extra": null
                },
                "team": {
                    "id": 134,
                    "name": "Atletico Paranaense",
                    "logo": "https://media.api-sports.io/football/teams/134.png"
                },
                "player": {
                    "id": 9980,
                    "name": "F. Aguilar"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 74,
                    "extra": null
                },
                "team": {
                    "id": 134,
                    "name": "Atletico Paranaense",
                    "logo": "https://media.api-sports.io/football/teams/134.png"
                },
                "player": {
                    "id": 143640,
                    "name": "K. G. das Silva"
                },
                "assist": {
                    "id": 10250,
                    "name": "Jadson"
                },
                "type": "subst",
                "detail": "Substitution 4",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 76,
                    "extra": null
                },
                "team": {
                    "id": 12913,
                    "name": "Cascavel CR",
                    "logo": "https://media.api-sports.io/football/teams/12913.png"
                },
                "player": {
                    "id": 91219,
                    "name": "B. Chalkiadakis"
                },
                "assist": {
                    "id": null,
                    "name": "Ramon"
                },
                "type": "subst",
                "detail": "Substitution 3",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "684382",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 606,
                        "name": "Paranaense - 1",
                        "country": "Brazil",
                        "logo": "https://media.api-sports.io/football/leagues/606.png",
                        "flag": "https://media.api-sports.io/flags/br.svg",
                        "season": 2021
                    },
                    "fixture": {
                        "id": 684382,
                        "timezone": "UTC",
                        "date": "2021-04-22T19:00:00+00:00",
                        "timestamp": 1619118000
                    },
                    "update": "2021-04-22T16:00:40+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "1.33"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "5.02"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "8.44"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 684398,
            "referee": null,
            "timezone": "UTC",
            "date": "2021-04-22T19:00:00+00:00",
            "timestamp": 1619118000,
            "periods": {
                "first": 1619118000,
                "second": 1619121600
            },
            "venue": {
                "id": 7310,
                "name": "Estádio Olímpico Regional Arnaldo Busatto",
                "city": "Cascavel, Paraná"
            },
            "status": {
                "long": "Second Half",
                "short": "2H",
                "elapsed": 83
            }
        },
        "league": {
            "id": 606,
            "name": "Paranaense - 1",
            "country": "Brazil",
            "logo": "https://media.api-sports.io/football/leagues/606.png",
            "flag": "https://media.api-sports.io/flags/br.svg",
            "season": 2021,
            "round": "Group Stage - 6"
        },
        "teams": {
            "home": {
                "id": 10673,
                "name": "Cascavel",
                "logo": "https://media.api-sports.io/football/teams/10673.png",
                "winner": null
            },
            "away": {
                "id": 1194,
                "name": "Cianorte",
                "logo": "https://media.api-sports.io/football/teams/1194.png",
                "winner": null
            }
        },
        "goals": {
            "home": 1,
            "away": 1
        },
        "score": {
            "halftime": {
                "home": 1,
                "away": 1
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 5,
                    "extra": null
                },
                "team": {
                    "id": 1194,
                    "name": "Cianorte",
                    "logo": "https://media.api-sports.io/football/teams/1194.png"
                },
                "player": {
                    "id": 10075,
                    "name": "Pachu"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 24,
                    "extra": null
                },
                "team": {
                    "id": 10673,
                    "name": "Cascavel",
                    "logo": "https://media.api-sports.io/football/teams/10673.png"
                },
                "player": {
                    "id": 54929,
                    "name": "Gama"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 46,
                    "extra": null
                },
                "team": {
                    "id": 10673,
                    "name": "Cascavel",
                    "logo": "https://media.api-sports.io/football/teams/10673.png"
                },
                "player": {
                    "id": null,
                    "name": "Carlinhos"
                },
                "assist": {
                    "id": 70893,
                    "name": "W. Simoes"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 51,
                    "extra": null
                },
                "team": {
                    "id": 1194,
                    "name": "Cianorte",
                    "logo": "https://media.api-sports.io/football/teams/1194.png"
                },
                "player": {
                    "id": 216552,
                    "name": "Ze Vitor"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 62,
                    "extra": null
                },
                "team": {
                    "id": 1194,
                    "name": "Cianorte",
                    "logo": "https://media.api-sports.io/football/teams/1194.png"
                },
                "player": {
                    "id": null,
                    "name": "W. Junior"
                },
                "assist": {
                    "id": 96389,
                    "name": "Buba"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 62,
                    "extra": null
                },
                "team": {
                    "id": 1194,
                    "name": "Cianorte",
                    "logo": "https://media.api-sports.io/football/teams/1194.png"
                },
                "player": {
                    "id": null,
                    "name": "Tales"
                },
                "assist": {
                    "id": 237925,
                    "name": "Grafite"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 63,
                    "extra": null
                },
                "team": {
                    "id": 1194,
                    "name": "Cianorte",
                    "logo": "https://media.api-sports.io/football/teams/1194.png"
                },
                "player": {
                    "id": null,
                    "name": "S. Figueiredo"
                },
                "assist": {
                    "id": 216552,
                    "name": "Ze Vitor"
                },
                "type": "subst",
                "detail": "Substitution 3",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 68,
                    "extra": null
                },
                "team": {
                    "id": 10673,
                    "name": "Cascavel",
                    "logo": "https://media.api-sports.io/football/teams/10673.png"
                },
                "player": {
                    "id": null,
                    "name": "Douglas"
                },
                "assist": {
                    "id": null,
                    "name": "Henrique Santos"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 68,
                    "extra": null
                },
                "team": {
                    "id": 10673,
                    "name": "Cascavel",
                    "logo": "https://media.api-sports.io/football/teams/10673.png"
                },
                "player": {
                    "id": null,
                    "name": "Joao Vittor"
                },
                "assist": {
                    "id": 70714,
                    "name": "R. Leichtweis"
                },
                "type": "subst",
                "detail": "Substitution 3",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 76,
                    "extra": null
                },
                "team": {
                    "id": 10673,
                    "name": "Cascavel",
                    "logo": "https://media.api-sports.io/football/teams/10673.png"
                },
                "player": {
                    "id": null,
                    "name": "Douglas"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 77,
                    "extra": null
                },
                "team": {
                    "id": 1194,
                    "name": "Cianorte",
                    "logo": "https://media.api-sports.io/football/teams/1194.png"
                },
                "player": {
                    "id": 41839,
                    "name": "G. Pereira"
                },
                "assist": {
                    "id": 10075,
                    "name": "Pachu"
                },
                "type": "subst",
                "detail": "Substitution 4",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "684398",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 606,
                        "name": "Paranaense - 1",
                        "country": "Brazil",
                        "logo": "https://media.api-sports.io/football/leagues/606.png",
                        "flag": "https://media.api-sports.io/flags/br.svg",
                        "season": 2021
                    },
                    "fixture": {
                        "id": 684398,
                        "timezone": "UTC",
                        "date": "2021-04-22T19:00:00+00:00",
                        "timestamp": 1619118000
                    },
                    "update": "2021-04-22T16:00:40+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "2.16"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "3.29"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "3.40"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        "fixture": {
            "id": 692567,
            "referee": null,
            "timezone": "UTC",
            "date": "2021-04-22T19:30:00+00:00",
            "timestamp": 1619119800,
            "periods": {
                "first": 1619119800,
                "second": 1619123400
            },
            "venue": {
                "id": 3429,
                "name": "Al Hasan Stadium",
                "city": "Irbid"
            },
            "status": {
                "long": "Second Half",
                "short": "2H",
                "elapsed": 50
            }
        },
        "league": {
            "id": 387,
            "name": "Division 1",
            "country": "Jordan",
            "logo": "https://media.api-sports.io/football/leagues/387.png",
            "flag": "https://media.api-sports.io/flags/jo.svg",
            "season": 2021,
            "round": "Regular Season - 3"
        },
        "teams": {
            "home": {
                "id": 4534,
                "name": "Al Ramtha",
                "logo": "https://media.api-sports.io/football/teams/4534.png",
                "winner": true
            },
            "away": {
                "id": 11474,
                "name": "Al Jalil",
                "logo": "https://media.api-sports.io/football/teams/11474.png",
                "winner": false
            }
        },
        "goals": {
            "home": 1,
            "away": 0
        },
        "score": {
            "halftime": {
                "home": 1,
                "away": 0
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 10,
                    "extra": null
                },
                "team": {
                    "id": 4534,
                    "name": "Al Ramtha",
                    "logo": "https://media.api-sports.io/football/teams/4534.png"
                },
                "player": {
                    "id": null,
                    "name": "M. Zraiq"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "692567",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 0,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": []
        }
    },
    {
        "fixture": {
            "id": 697086,
            "referee": "Kevin Ortega, Peru",
            "timezone": "UTC",
            "date": "2021-04-22T19:00:00+00:00",
            "timestamp": 1619118000,
            "periods": {
                "first": 1619118000,
                "second": 1619121600
            },
            "venue": {
                "id": 110,
                "name": "Estadio Mario Alberto Kempes",
                "city": "Ciudad de Córdoba, Provincia de Córdoba"
            },
            "status": {
                "long": "Second Half",
                "short": "2H",
                "elapsed": 84
            }
        },
        "league": {
            "id": 11,
            "name": "CONMEBOL Sudamericana",
            "country": "World",
            "logo": "https://media.api-sports.io/football/leagues/11.png",
            "flag": null,
            "season": 2021,
            "round": "Group Stage - 1"
        },
        "teams": {
            "home": {
                "id": 456,
                "name": "Talleres Cordoba",
                "logo": "https://media.api-sports.io/football/teams/456.png",
                "winner": false
            },
            "away": {
                "id": 1148,
                "name": "Emelec",
                "logo": "https://media.api-sports.io/football/teams/1148.png",
                "winner": true
            }
        },
        "goals": {
            "home": 1,
            "away": 2
        },
        "score": {
            "halftime": {
                "home": 1,
                "away": 0
            },
            "fulltime": {
                "home": null,
                "away": null
            },
            "extratime": {
                "home": null,
                "away": null
            },
            "penalty": {
                "home": null,
                "away": null
            }
        },
        "events": [
            {
                "time": {
                    "elapsed": 6,
                    "extra": null
                },
                "team": {
                    "id": 456,
                    "name": "Talleres Cordoba",
                    "logo": "https://media.api-sports.io/football/teams/456.png"
                },
                "player": {
                    "id": 13577,
                    "name": "R. Perez"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 10,
                    "extra": null
                },
                "team": {
                    "id": 1148,
                    "name": "Emelec",
                    "logo": "https://media.api-sports.io/football/teams/1148.png"
                },
                "player": {
                    "id": 36020,
                    "name": "S. Rodriguez"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 15,
                    "extra": null
                },
                "team": {
                    "id": 456,
                    "name": "Talleres Cordoba",
                    "logo": "https://media.api-sports.io/football/teams/456.png"
                },
                "player": {
                    "id": 6187,
                    "name": "C. Auzqui"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 15,
                    "extra": null
                },
                "team": {
                    "id": 1148,
                    "name": "Emelec",
                    "logo": "https://media.api-sports.io/football/teams/1148.png"
                },
                "player": {
                    "id": 16649,
                    "name": "L. Sosa"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 17,
                    "extra": null
                },
                "team": {
                    "id": 1148,
                    "name": "Emelec",
                    "logo": "https://media.api-sports.io/football/teams/1148.png"
                },
                "player": {
                    "id": 16549,
                    "name": "M. Mejia"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 32,
                    "extra": null
                },
                "team": {
                    "id": 456,
                    "name": "Talleres Cordoba",
                    "logo": "https://media.api-sports.io/football/teams/456.png"
                },
                "player": {
                    "id": 6237,
                    "name": "E. H. Diaz"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 39,
                    "extra": null
                },
                "team": {
                    "id": 456,
                    "name": "Talleres Cordoba",
                    "logo": "https://media.api-sports.io/football/teams/456.png"
                },
                "player": {
                    "id": 6128,
                    "name": "F. Fragapane"
                },
                "assist": {
                    "id": 6254,
                    "name": "D. Valoyes"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 51,
                    "extra": null
                },
                "team": {
                    "id": 456,
                    "name": "Talleres Cordoba",
                    "logo": "https://media.api-sports.io/football/teams/456.png"
                },
                "player": {
                    "id": 47424,
                    "name": "M. Santos"
                },
                "assist": {
                    "id": 10404,
                    "name": "G. Parede"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 58,
                    "extra": null
                },
                "team": {
                    "id": 1148,
                    "name": "Emelec",
                    "logo": "https://media.api-sports.io/football/teams/1148.png"
                },
                "player": {
                    "id": 16615,
                    "name": "B. Carabali"
                },
                "assist": {
                    "id": 16517,
                    "name": "A. Gracia"
                },
                "type": "subst",
                "detail": "Substitution 1",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 71,
                    "extra": null
                },
                "team": {
                    "id": 456,
                    "name": "Talleres Cordoba",
                    "logo": "https://media.api-sports.io/football/teams/456.png"
                },
                "player": {
                    "id": 6241,
                    "name": "F. Navarro"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 73,
                    "extra": null
                },
                "team": {
                    "id": 1148,
                    "name": "Emelec",
                    "logo": "https://media.api-sports.io/football/teams/1148.png"
                },
                "player": {
                    "id": 36020,
                    "name": "S. Rodriguez"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Goal",
                "detail": "Penalty",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 78,
                    "extra": null
                },
                "team": {
                    "id": 1148,
                    "name": "Emelec",
                    "logo": "https://media.api-sports.io/football/teams/1148.png"
                },
                "player": {
                    "id": 35857,
                    "name": "F. Barcelo"
                },
                "assist": {
                    "id": 16557,
                    "name": "R. Caicedo"
                },
                "type": "Goal",
                "detail": "Normal Goal",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 81,
                    "extra": null
                },
                "team": {
                    "id": 1148,
                    "name": "Emelec",
                    "logo": "https://media.api-sports.io/football/teams/1148.png"
                },
                "player": {
                    "id": 2582,
                    "name": "J. Orejuela"
                },
                "assist": {
                    "id": 13485,
                    "name": "A. Zapata"
                },
                "type": "subst",
                "detail": "Substitution 2",
                "comments": null
            },
            {
                "time": {
                    "elapsed": 82,
                    "extra": null
                },
                "team": {
                    "id": 456,
                    "name": "Talleres Cordoba",
                    "logo": "https://media.api-sports.io/football/teams/456.png"
                },
                "player": {
                    "id": 127817,
                    "name": "P. Hincapie"
                },
                "assist": {
                    "id": null,
                    "name": null
                },
                "type": "Card",
                "detail": "Yellow Card",
                "comments": null
            }
        ],
        "odds": {
            "get": "odds",
            "parameters": {
                "fixture": "697086",
                "bookmaker": "4",
                "bet": "1"
            },
            "errors": [],
            "results": 1,
            "paging": {
                "current": 1,
                "total": 1
            },
            "response": [
                {
                    "league": {
                        "id": 11,
                        "name": "CONMEBOL Sudamericana",
                        "country": "World",
                        "logo": "https://media.api-sports.io/football/leagues/11.png",
                        "flag": null,
                        "season": 2021
                    },
                    "fixture": {
                        "id": 697086,
                        "timezone": "UTC",
                        "date": "2021-04-22T19:00:00+00:00",
                        "timestamp": 1619118000
                    },
                    "update": "2021-04-22T16:00:29+00:00",
                    "bookmakers": [
                        {
                            "id": 4,
                            "name": "Pinnacle",
                            "bets": [
                                {
                                    "id": 1,
                                    "name": "Match Winner",
                                    "values": [
                                        {
                                            "value": "Home",
                                            "odd": "1.85"
                                        },
                                        {
                                            "value": "Draw",
                                            "odd": "3.36"
                                        },
                                        {
                                            "value": "Away",
                                            "odd": "4.81"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
]