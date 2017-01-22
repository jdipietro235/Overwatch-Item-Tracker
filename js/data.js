OWI.factory('Data', function() {
  var items = `{"skinsLegendary":{},"skinsEpic":{},"emotes":{},"intros":{},"sprays":{},"voicelines":{},"poses":{},"icons":{}}`
  return {
    checked: {
      summergames2016: JSON.parse(items),
      halloween2016: JSON.parse(items),
      winterwonderland2016: JSON.parse(items)
    },
    prices: {
      'common': 75,
      'rare': 225,
      'epic': 750,
      'legendary': 3000
    },
    updates: [{
      name: 'Summer Games 2016',
      id: 'summergames2016',
      items: {
        "icons": [
          {
            "name": "Archery",
            "id": "hanzo-archery",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/hanzo-archery.png"
          },
          {
            "name": "Australia",
            "id": "australia",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/australia.png"
          },
          {
            "name": "BMX",
            "id": "reaper-bmx",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/reaper-bmx.png"
          },
          {
            "name": "Badminton",
            "id": "mercy-badminton",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/mercy-badminton.png"
          },
          {
            "name": "Basketball",
            "id": "pharah-basketball",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/pharah-basketball.png"
          },
          {
            "name": "Boxing",
            "id": "bastion-boxing",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/bastion-boxing.png"
          },
          {
            "name": "Brazil",
            "id": "brazil",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/brazil.png"
          },
          {
            "name": "China",
            "id": "china",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/china.png"
          },
          {
            "name": "Cycling",
            "id": "dva-cycling",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/dva-cycling.png"
          },
          {
            "name": "Diving",
            "id": "roadhog-diving",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/roadhog-diving.png"
          },
          {
            "name": "Egypt",
            "id": "egypt",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/egypt.png"
          },
          {
            "name": "Equestrian",
            "id": "mccree-equestrian",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/mccree-equestrian.png"
          },
          {
            "name": "Fencing",
            "id": "genji-fencing",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/genji-fencing.png"
          },
          {
            "name": "Football",
            "id": "lucio-football",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/lucio-football.png"
          },
          {
            "name": "France",
            "id": "france",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/france.png"
          },
          {
            "name": "Germany",
            "id": "germany",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/germany.png"
          },
          {
            "name": "Golf",
            "id": "soldier-76-golf",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/soldier-76-golf.png"
          },
          {
            "name": "Greece",
            "id": "greece",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/greece.png"
          },
          {
            "name": "Gymnastics",
            "id": "widowmaker-gymnastics",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/widowmaker-gymnastics.png"
          },
          {
            "name": "Japan",
            "id": "japan",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/japan.png"
          },
          {
            "name": "Mexico",
            "id": "mexico",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/mexico.png"
          },
          {
            "name": "Nepal",
            "id": "nepal",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/nepal.png"
          },
          {
            "name": "Numbani",
            "id": "numbani",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/numbani.png"
          },
          {
            "name": "Rhythmic Gymnastics",
            "id": "symmetra-rhythmic-gymnastics",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/symmetra-rhythmic-gymnastics.png"
          },
          {
            "name": "Russia",
            "id": "russia",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/russia.png"
          },
          {
            "name": "Shooting",
            "id": "ana-shooting",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/ana-shooting.png"
          },
          {
            "name": "South Korea",
            "id": "south-korea",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/south-korea.png"
          },
          {
            "name": "Summer Games",
            "id": "summer-games",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/summer-games.png"
          },
          {
            "name": "Sweden",
            "id": "sweden",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/sweden.png"
          },
          {
            "name": "Switzerland",
            "id": "switzerland",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/switzerland.png"
          },
          {
            "name": "Table Tennis",
            "id": "mei-table-tennis",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/mei-table-tennis.png"
          },
          {
            "name": "Taekwondo",
            "id": "zenyatta-taekwondo",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/zenyatta-taekwondo.png"
          },
          {
            "name": "Tennis",
            "id": "junkrat-tennis",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/junkrat-tennis.png"
          },
          {
            "name": "Track",
            "id": "tracer-track",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/tracer-track.png"
          },
          {
            "name": "United Kingdom",
            "id": "united-kingdom",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/united-kingdom.png"
          },
          {
            "name": "United States",
            "id": "united-states",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/united-states.png"
          },
          {
            "name": "Volleyball",
            "id": "winston-volleyball",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/winston-volleyball.png"
          },
          {
            "name": "Water Polo",
            "id": "torbjorn-water-polo",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/torbjorn-water-polo.png"
          },
          {
            "name": "Weightlifting",
            "id": "zarya-weightlifting",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/zarya-weightlifting.png"
          },
          {
            "name": "Wrestling",
            "id": "reinhardt-wrestling",
            "img": "./resources/updates/SUMMER_GAMES_2016/icons/reinhardt-wrestling.png"
          }
        ],
        "sprays": [
          {
            "hero": "Ana",
            "name": "Shooting",
            "id": "ana-shooting",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/ana-shooting.png"
          },
          {
            "hero": "Bastion",
            "name": "Boxing",
            "id": "bastion-boxing",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/bastion-boxing.png"
          },
          {
            "hero": "D.Va",
            "name": "Cycling",
            "id": "dva-cycling",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/dva-cycling.png"
          },
          {
            "hero": "Genji",
            "name": "Fencing",
            "id": "genji-fencing",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/genji-fencing.png"
          },
          {
            "hero": "Hanzo",
            "name": "Archery",
            "id": "hanzo-archery",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/hanzo-archery.png"
          },
          {
            "hero": "Junkrat",
            "name": "Tennis",
            "id": "junkrat-tennis",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/junkrat-tennis.png"
          },
          {
            "hero": "Lúcio",
            "name": "Football",
            "id": "lucio-football",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/lucio-football.png"
          },
          {
            "hero": "McCree",
            "name": "Equestrian",
            "id": "mccree-equestrian",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mccree-equestrian.png"
          },
          {
            "hero": "Mei",
            "name": "Table Tennis",
            "id": "mei-table-tennis",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mei-table-tennis.png"
          },
          {
            "hero": "Mercy",
            "name": "Badminton",
            "id": "mercy-badminton",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mercy-badminton.png"
          },
          {
            "hero": "Pharah",
            "name": "Basketball",
            "id": "pharah-basketball",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/pharah-basketball.png"
          },
          {
            "hero": "Reaper",
            "name": "BMX",
            "id": "reaper-bmx",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/reaper-bmx.png"
          },
          {
            "hero": "Reinhardt",
            "name": "Wrestling",
            "id": "reinhardt-wrestling",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/reinhardt-wrestling.png"
          },
          {
            "hero": "Roadhog",
            "name": "Diving",
            "id": "roadhog-diving",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/roadhog-diving.png"
          },
          {
            "hero": "Soldier: 76",
            "name": "Golf",
            "id": "soldier-76-golf",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/soldier-76-golf.png"
          },
          {
            "hero": "Symmetra",
            "name": "Rhythmic",
            "id": "symmetra-rhythmic",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/symmetra-rhythmic.png"
          },
          {
            "hero": "Torbjörn",
            "name": "Water Polo",
            "id": "torbjorn-water-polo",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/torbjorn-water-polo.png"
          },
          {
            "hero": "Tracer",
            "name": "Track",
            "id": "tracer-track",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/tracer-track.png"
          },
          {
            "hero": "Widowmaker",
            "name": "Gymnastics",
            "id": "widowmaker-gymnastics",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/widowmaker-gymnastics.png"
          },
          {
            "hero": "Winston",
            "name": "Volleyball",
            "id": "winston-volleyball",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/winston-volleyball.png"
          },
          {
            "hero": "Zarya",
            "name": "Weightlifting",
            "id": "zarya-weightlifting",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/zarya-weightlifting.png"
          },
          {
            "hero": "Zenyatta",
            "name": "Taekwondo",
            "id": "zenyatta-taekwondo",
            "quality": "common",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/zenyatta-taekwondo.png"
          },
          {
            "name": "Summer Games",
            "id": "summer-games",
            "img": "./resources/updates/SUMMER_GAMES_2016/sprays/summer-games.png"
          }
        ],
        "voicelines": [
          {
            "hero": "Ana",
            "name": "Learn from the Pain",
            "id": "ana-learn-from-the-pain",
            "quality": "common"
          },
          {
            "hero": "Bastion",
            "name": "WHOO-VWEEEEEE",
            "id": "bastion-whoovweeeeee",
            "quality": "common"
          },
          {
            "hero": "D.Va",
            "name": "I'm #1",
            "id": "dva-im-1",
            "quality": "common"
          },
          {
            "hero": "Genji",
            "name": "I was hoping for a challenge",
            "id": "genji-i-was-hoping-for-a-challenge",
            "quality": "common"
          },
          {
            "hero": "Hanzo",
            "name": "Ignore all distractions",
            "id": "hanzo-ignore-all-distractions",
            "quality": "common"
          },
          {
            "hero": "Junkrat",
            "name": "I give it a 10!",
            "id": "junkrat-i-give-it-a-10",
            "quality": "common"
          },
          {
            "hero": "Lúcio",
            "name": "Be champions",
            "id": "lucio-be-champions",
            "quality": "common"
          },
          {
            "hero": "McCree",
            "name": "I don't much like losing",
            "id": "mccree-i-dont-much-like-losing",
            "quality": "common"
          },
          {
            "hero": "Mei",
            "name": "Overcome all obstacles",
            "id": "mei-overcome-all-obstacles",
            "quality": "common"
          },
          {
            "hero": "Mercy",
            "name": "Piece of cake",
            "id": "mercy-piece-of-cake",
            "quality": "common"
          },
          {
            "hero": "Pharah",
            "name": "We are in this together",
            "id": "pharah-we-are-in-this-together",
            "quality": "common"
          },
          {
            "hero": "Reaper",
            "name": "It's in the refrigerator",
            "id": "reaper-its-in-the-refrigerator",
            "quality": "common"
          },
          {
            "hero": "Reinhardt",
            "name": "100%% German power",
            "id": "reinhardt-100-german-power",
            "quality": "common"
          },
          {
            "hero": "Roadhog",
            "name": "What's mine is mine",
            "id": "roadhog-whats-mine-is-mine",
            "quality": "common"
          },
          {
            "hero": "Soldier: 76",
            "name": "You want a medal?",
            "id": "soldier-76-you-want-a-medal",
            "quality": "common"
          },
          {
            "hero": "Symmetra",
            "name": "Hard work and dedication",
            "id": "symmetra-hard-work-and-dedication",
            "quality": "common"
          },
          {
            "hero": "Torbjörn",
            "name": "More where that came from",
            "id": "torbjorn-more-where-that-came-from",
            "quality": "common"
          },
          {
            "hero": "Tracer",
            "name": "Eat my dust",
            "id": "tracer-eat-my-dust",
            "quality": "common"
          },
          {
            "hero": "Widowmaker",
            "name": "I don't miss",
            "id": "widowmaker-i-dont-miss",
            "quality": "common"
          },
          {
            "hero": "Winston",
            "name": "Playtime's over",
            "id": "winston-playtimes-over",
            "quality": "common"
          },
          {
            "hero": "Zarya",
            "name": "No pain, no gain",
            "id": "zarya-no-pain-no-gain",
            "quality": "common"
          },
          {
            "hero": "Zenyatta",
            "name": "Strive for improvement",
            "id": "zenyatta-strive-for-improvement",
            "quality": "common"
          }
        ],
        "emotes": [
          {
            "hero": "Bastion",
            "name": "Boxing",
            "id": "bastion-boxing",
            "quality": "epic",
            "video": "./resources/updates/SUMMER_GAMES_2016/emotes/bastion-boxing.webm"
          },
          {
            "hero": "Lúcio",
            "name": "Juggle",
            "id": "lucio-juggle",
            "quality": "epic",
            "video": "./resources/updates/SUMMER_GAMES_2016/emotes/lucio-juggle.webm"
          },
          {
            "hero": "Symmetra",
            "name": "Ribbon",
            "id": "symmetra-ribbon",
            "quality": "epic",
            "video": "./resources/updates/SUMMER_GAMES_2016/emotes/symmetra-ribbon.webm"
          }
        ],
        "skinsEpic": [
          {
            "hero": "McCree",
            "name": "American",
            "id": "mccree-american",
            "quality": "epic",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/mccree-american.jpg"
          },
          {
            "hero": "Mercy",
            "name": "Eidgenossin",
            "id": "mercy-eidgenossin",
            "quality": "epic",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/mercy-eidgenossin.jpg"
          },
          {
            "hero": "Genji",
            "name": "Nihon",
            "id": "genji-nihon",
            "quality": "epic",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/genji-nihon.jpg"
          },
          {
            "hero": "D.Va",
            "name": "Taegeukgi",
            "id": "dva-taegeukgi",
            "quality": "epic",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/dva-taegeukgi.jpg"
          },
          {
            "hero": "Torbjörn",
            "name": "Tre Kronor",
            "id": "torbjorn-tre-kronor",
            "quality": "epic",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/torbjorn-tre-kronor.jpg"
          },
          {
            "hero": "Widowmaker",
            "name": "Tricolore",
            "id": "widowmaker-tricolore",
            "quality": "epic",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/widowmaker-tricolore.jpg"
          }
        ],
        "intros": [
          {
            "hero": "Lúcio",
            "name": "Bicycle Kick",
            "id": "lucio-bicycle-kick",
            "quality": "epic",
            "video": "./resources/updates/SUMMER_GAMES_2016/intros/lucio-bicycle-kick.webm"
          },
          {
            "hero": "Tracer",
            "name": "Hurdle",
            "id": "tracer-hurdle",
            "quality": "epic",
            "video": "./resources/updates/SUMMER_GAMES_2016/intros/tracer-hurdle.webm"
          },
          {
            "hero": "Junkrat",
            "name": "Shot Put",
            "id": "junkrat-shot-put",
            "quality": "epic",
            "video": "./resources/updates/SUMMER_GAMES_2016/intros/junkrat-shot-put.webm"
          }
        ],
        "skinsLegendary": [
          {
            "hero": "Zarya",
            "name": "Champion",
            "id": "zarya-champion",
            "quality": "legendary",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/zarya-champion.jpg"
          },
          {
            "hero": "Lúcio",
            "name": "Seleção",
            "id": "lucio-selecao",
            "quality": "legendary",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/lucio-selecao.jpg"
          },
          {
            "hero": "Tracer",
            "name": "Sprinter",
            "id": "tracer-sprinter",
            "quality": "legendary",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/tracer-sprinter.jpg"
          },
          {
            "hero": "Lúcio",
            "name": "Striker",
            "id": "lucio-striker",
            "quality": "legendary",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/lucio-striker.jpg"
          },
          {
            "hero": "Tracer",
            "name": "Track and Field",
            "id": "tracer-track-and-field",
            "quality": "legendary",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/tracer-track-and-field.jpg"
          },
          {
            "hero": "Zarya",
            "name": "Weightlifter",
            "id": "zarya-weightlifter",
            "quality": "legendary",
            "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/zarya-weightlifter.jpg"
          }
        ],
        "poses": [
          {
            "hero": "Soldier: 76",
            "name": "Golf Swing",
            "id": "soldier-76-golf-swing",
            "quality": "rare",
            "img": "./resources/updates/SUMMER_GAMES_2016/poses/soldier-76-golf-swing.jpg"
          },
          {
            "hero": "Mei",
            "name": "Medal",
            "id": "mei-medal",
            "quality": "rare",
            "img": "./resources/updates/SUMMER_GAMES_2016/poses/mei-medal.jpg"
          },
          {
            "hero": "Pharah",
            "name": "Medal",
            "id": "pharah-medal",
            "quality": "rare",
            "img": "./resources/updates/SUMMER_GAMES_2016/poses/pharah-medal.jpg"
          },
          {
            "hero": "Reaper",
            "name": "Medal",
            "id": "reaper-medal",
            "quality": "rare",
            "img": "./resources/updates/SUMMER_GAMES_2016/poses/reaper-medal.jpg"
          },
          {
            "hero": "Roadhog",
            "name": "Medal",
            "id": "roadhog-medal",
            "quality": "rare",
            "img": "./resources/updates/SUMMER_GAMES_2016/poses/roadhog-medal.jpg"
          },
          {
            "hero": "Torbjörn",
            "name": "Medal",
            "id": "torbjorn-medal",
            "quality": "rare",
            "img": "./resources/updates/SUMMER_GAMES_2016/poses/torbjorn-medal.jpg"
          },
          {
            "hero": "Widowmaker",
            "name": "Medal",
            "id": "widowmaker-medal",
            "quality": "rare",
            "img": "./resources/updates/SUMMER_GAMES_2016/poses/widowmaker-medal.jpg"
          },
          {
            "hero": "Winston",
            "name": "Medal",
            "id": "winston-medal",
            "quality": "rare",
            "img": "./resources/updates/SUMMER_GAMES_2016/poses/winston-medal.jpg"
          },
          {
            "hero": "Zenyatta",
            "name": "Medals",
            "id": "zenyatta-medals",
            "quality": "rare",
            "img": "./resources/updates/SUMMER_GAMES_2016/poses/zenyatta-medals.jpg"
          }
        ]
      }
    },
    {
      name: 'Halloween 2016',
      id: 'halloween2016',
      items: {
        "skinsEpic": [
          {
            "hero": "Reinhardt",
            "name": "Coldhardt",
            "id": "reinhardt-coldhardt",
            "quality": "epic",
            "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/reinhardt-coldhardt.jpg"
          },
          {
            "hero": "Hanzo",
            "name": "Demon",
            "id": "hanzo-demon",
            "quality": "epic",
            "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/hanzo-demon.jpg"
          },
          {
            "hero": "Ana",
            "name": "Ghoul",
            "id": "ana-ghoul",
            "quality": "epic",
            "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/ana-ghoul.jpg"
          },
          {
            "hero": "Soldier: 76",
            "name": "Immortal",
            "id": "soldier-76-immortal",
            "quality": "epic",
            "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/soldier-76-immortal.jpg"
          },
          {
            "hero": "Pharah",
            "name": "Possessed",
            "id": "pharah-possessed",
            "quality": "epic",
            "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/pharah-possessed.jpg"
          },
          {
            "hero": "Zenyatta",
            "name": "Skullyatta",
            "id": "zenyatta-skullyatta",
            "quality": "epic",
            "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/zenyatta-skullyatta.jpg"
          },
          {
            "hero": "Bastion",
            "name": "Tombstone",
            "id": "bastion-tombstone",
            "quality": "epic",
            "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/bastion-tombstone.jpg"
          },
          {
            "hero": "Symmetra",
            "name": "Vampire",
            "id": "symmetra-vampire",
            "quality": "epic",
            "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/symmetra-vampire.jpg"
          }
        ],
        "emotes": [
          {
            "hero": "Ana",
            "name": "Candy",
            "id": "ana-candy",
            "quality": "epic",
            "video": "./resources/updates/HALLOWEEN_2016/emotes/ana-candy.webm"
          },
          {
            "hero": "Reinhardt",
            "name": "Pumpkin Smash",
            "id": "reinhardt-pumpkin-smash",
            "quality": "epic",
            "video": "./resources/updates/HALLOWEEN_2016/emotes/reinhardt-pumpkin-smash.webm"
          },
          {
            "hero": "Winston",
            "name": "Shadow Puppets",
            "id": "winston-shadow-puppets",
            "quality": "epic",
            "video": "./resources/updates/HALLOWEEN_2016/emotes/winston-shadow-puppets.webm"
          }
        ],
        "sprays": [
          {
            "hero": "Ana",
            "name": "Trick or Treat",
            "id": "ana-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/ana-trick-or-treat.png"
          },
          {
            "hero": "Bastion",
            "name": "Trick or Treat",
            "id": "bastion-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/bastion-trick-or-treat.png"
          },
          {
            "hero": "D.Va",
            "name": "Trick or Treat",
            "id": "dva-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/dva-trick-or-treat.png"
          },
          {
            "hero": "Genji",
            "name": "Trick or Treat",
            "id": "genji-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/genji-trick-or-treat.png"
          },
          {
            "hero": "Hanzo",
            "name": "Trick or Treat",
            "id": "hanzo-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/hanzo-trick-or-treat.png"
          },
          {
            "hero": "Junkrat",
            "name": "Trick or Treat",
            "id": "junkrat-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/junkrat-trick-or-treat.png"
          },
          {
            "hero": "Lúcio",
            "name": "Trick or Treat",
            "id": "lucio-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/lucio-trick-or-treat.png"
          },
          {
            "hero": "McCree",
            "name": "Trick or Treat",
            "id": "mccree-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/mccree-trick-or-treat.png"
          },
          {
            "hero": "Mei",
            "name": "Trick or Treat",
            "id": "mei-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/mei-trick-or-treat.png"
          },
          {
            "hero": "Mercy",
            "name": "Trick or Treat",
            "id": "mercy-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/mercy-trick-or-treat.png"
          },
          {
            "hero": "Pharah",
            "name": "Trick or Treat",
            "id": "pharah-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/pharah-trick-or-treat.png"
          },
          {
            "hero": "Reaper",
            "name": "Trick or Treat",
            "id": "reaper-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/reaper-trick-or-treat.png"
          },
          {
            "hero": "Reinhardt",
            "name": "Trick or Treat",
            "id": "reinhardt-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/reinhardt-trick-or-treat.png"
          },
          {
            "hero": "Roadhog",
            "name": "Trick or Treat",
            "id": "roadhog-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/roadhog-trick-or-treat.png"
          },
          {
            "hero": "Soldier: 76",
            "name": "Trick or Treat",
            "id": "soldier-76-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/soldier-76-trick-or-treat.png"
          },
          {
            "hero": "Symmetra",
            "name": "Trick or Treat",
            "id": "symmetra-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/symmetra-trick-or-treat.png"
          },
          {
            "hero": "Torbjörn",
            "name": "Trick or Treat",
            "id": "torbjorn-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/torbjorn-trick-or-treat.png"
          },
          {
            "name": "Boo!",
            "id": "boo",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/boo.png"
          },
          {
            "hero": "Tracer",
            "name": "Trick or Treat",
            "id": "tracer-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/tracer-trick-or-treat.png"
          },
          {
            "hero": "Widowmaker",
            "name": "Trick or Treat",
            "id": "widowmaker-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/widowmaker-trick-or-treat.png"
          },
          {
            "name": "Boop!",
            "id": "boop",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/boop.png"
          },
          {
            "hero": "Winston",
            "name": "Trick or Treat",
            "id": "winston-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/winston-trick-or-treat.png"
          },
          {
            "hero": "Zarya",
            "name": "Trick or Treat",
            "id": "zarya-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/zarya-trick-or-treat.png"
          },
          {
            "hero": "Zenyatta",
            "name": "Trick or Treat",
            "id": "zenyatta-trick-or-treat",
            "quality": "common",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/zenyatta-trick-or-treat.png"
          },
          {
            "name": "Witch's Brew",
            "id": "witchs-brew",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/witchs-brew.png"
          },
          {
            "name": "Pumpkins",
            "id": "pumpkins",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/pumpkins.png"
          },
          {
            "name": "Halloween Terror 2016",
            "id": "halloween-terror-2016",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/halloween-terror-2016.png"
          },
          {
            "name": "Gummy Hog",
            "id": "gummy-hog",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/gummy-hog.png"
          },
          {
            "name": "Fangs",
            "id": "fangs",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/fangs.png"
          },
          {
            "name": "Candyball",
            "id": "candyball",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/candyball.png"
          },
          {
            "name": "Bats",
            "id": "bats",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/bats.png"
          },
          {
            "name": "...Never Die",
            "id": "never-die",
            "img": "./resources/updates/HALLOWEEN_2016/sprays/never-die.png"
          }
        ],
        "voicelines": [
          {
            "hero": "Ana",
            "name": "Are you scared?",
            "id": "ana-are-you-scared",
            "quality": "common"
          },
          {
            "hero": "Bastion",
            "name": "W-W-Wooooo...?",
            "id": "bastion-wwwooooo",
            "quality": "common"
          },
          {
            "hero": "D.Va",
            "name": "Happy Halloween!",
            "id": "dva-happy-halloween",
            "quality": "common"
          },
          {
            "hero": "Genji",
            "name": "My Halloween costume?",
            "id": "genji-my-halloween-costume",
            "quality": "common"
          },
          {
            "hero": "Hanzo",
            "name": "You are already dead",
            "id": "hanzo-you-are-already-dead",
            "quality": "common"
          },
          {
            "hero": "Junkrat",
            "name": "Happy Halloween",
            "id": "junkrat-happy-halloween",
            "quality": "common"
          },
          {
            "hero": "Lúcio",
            "name": "Killed it!",
            "id": "lucio-killed-it",
            "quality": "common"
          },
          {
            "hero": "McCree",
            "name": "It's your funeral",
            "id": "mccree-its-your-funeral",
            "quality": "common"
          },
          {
            "hero": "Mei",
            "name": "Scary!",
            "id": "mei-scary",
            "quality": "common"
          },
          {
            "hero": "Mercy",
            "name": "Superstition",
            "id": "mercy-superstition",
            "quality": "common"
          },
          {
            "hero": "Pharah",
            "name": "Dead or alive",
            "id": "pharah-dead-or-alive",
            "quality": "common"
          },
          {
            "hero": "Reaper",
            "name": "I work the graveyard shift",
            "id": "reaper-i-work-the-graveyard-shift",
            "quality": "common"
          },
          {
            "hero": "Reinhardt",
            "name": "Smashing",
            "id": "reinhardt-smashing",
            "quality": "common"
          },
          {
            "hero": "Roadhog",
            "name": "Want some candy?",
            "id": "roadhog-want-some-candy",
            "quality": "common"
          },
          {
            "hero": "Soldier: 76",
            "name": "Knock knock",
            "id": "soldier-76-knock-knock",
            "quality": "common"
          },
          {
            "hero": "Symmetra",
            "name": "A frightening thought",
            "id": "symmetra-a-frightening-thought",
            "quality": "common"
          },
          {
            "hero": "Torbjörn",
            "name": "If you build it",
            "id": "torbjorn-if-you-build-it",
            "quality": "common"
          },
          {
            "hero": "Tracer",
            "name": "Ooh, Scary!",
            "id": "tracer-ooh-scary",
            "quality": "common"
          },
          {
            "hero": "Widowmaker",
            "name": "The party is over",
            "id": "widowmaker-the-party-is-over",
            "quality": "common"
          },
          {
            "hero": "Winston",
            "name": "This is not a costume",
            "id": "winston-this-is-not-a-costume",
            "quality": "common"
          },
          {
            "hero": "Zarya",
            "name": "Never forget the fallen",
            "id": "zarya-never-forget-the-fallen",
            "quality": "common"
          },
          {
            "hero": "Zenyatta",
            "name": "Trick or treat?",
            "id": "zenyatta-trick-or-treat",
            "quality": "common"
          }
        ],
        "poses": [
          {
            "hero": "Reaper",
            "name": "R.I.P.",
            "id": "reaper-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/reaper-rip.jpg"
          },
          {
            "hero": "Ana",
            "name": "R.I.P.",
            "id": "ana-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/ana-rip.jpg"
          },
          {
            "hero": "D.Va",
            "name": "R.I.P.",
            "id": "dva-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/dva-rip.jpg"
          },
          {
            "hero": "Genji",
            "name": "R.I.P.",
            "id": "genji-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/genji-rip.jpg"
          },
          {
            "hero": "Hanzo",
            "name": "R.I.P.",
            "id": "hanzo-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/hanzo-rip.jpg"
          },
          {
            "hero": "Junkrat",
            "name": "R.I.P.",
            "id": "junkrat-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/junkrat-rip.jpg"
          },
          {
            "hero": "Lúcio",
            "name": "R.I.P.",
            "id": "lucio-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/lucio-rip.jpg"
          },
          {
            "hero": "McCree",
            "name": "R.I.P.",
            "id": "mccree-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/mccree-rip.jpg"
          },
          {
            "hero": "Mei",
            "name": "R.I.P.",
            "id": "mei-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/mei-rip.jpg"
          },
          {
            "hero": "Mercy",
            "name": "R.I.P.",
            "id": "mercy-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/mercy-rip.jpg"
          },
          {
            "hero": "Pharah",
            "name": "R.I.P.",
            "id": "pharah-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/pharah-rip.jpg"
          },
          {
            "hero": "Bastion",
            "name": "R.I.P.",
            "id": "bastion-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/bastion-rip.jpg"
          },
          {
            "hero": "Reinhardt",
            "name": "R.I.P.",
            "id": "reinhardt-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/reinhardt-rip.jpg"
          },
          {
            "hero": "Roadhog",
            "name": "R.I.P.",
            "id": "roadhog-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/roadhog-rip.jpg"
          },
          {
            "hero": "Soldier: 76",
            "name": "R.I.P.",
            "id": "soldier-76-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/soldier-76-rip.jpg"
          },
          {
            "hero": "Symmetra",
            "name": "R.I.P.",
            "id": "symmetra-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/symmetra-rip.jpg"
          },
          {
            "hero": "Torbjörn",
            "name": "R.I.P.",
            "id": "torbjorn-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/torbjorn-rip.jpg"
          },
          {
            "hero": "Tracer",
            "name": "R.I.P.",
            "id": "tracer-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/tracer-rip.jpg"
          },
          {
            "hero": "Widowmaker",
            "name": "R.I.P.",
            "id": "widowmaker-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/widowmaker-rip.jpg"
          },
          {
            "hero": "Winston",
            "name": "R.I.P.",
            "id": "winston-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/winston-rip.jpg"
          },
          {
            "hero": "Zarya",
            "name": "R.I.P.",
            "id": "zarya-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/zarya-rip.jpg"
          },
          {
            "hero": "Zenyatta",
            "name": "R.I.P.",
            "id": "zenyatta-rip",
            "quality": "rare",
            "img": "./resources/updates/HALLOWEEN_2016/poses/zenyatta-rip.jpg"
          }
        ],
        "intros": [
          {
            "hero": "Reaper",
            "name": "Eternal Rest",
            "id": "reaper-eternal-rest",
            "quality": "epic",
            "video": "./resources/updates/HALLOWEEN_2016/intros/reaper-eternal-rest.webm"
          },
          {
            "hero": "Mei",
            "name": "Ice Scream",
            "id": "mei-ice-scream",
            "quality": "epic",
            "video": "./resources/updates/HALLOWEEN_2016/intros/mei-ice-scream.webm"
          },
          {
            "hero": "Genji",
            "name": "Pumpkin Carving",
            "id": "genji-pumpkin-carving",
            "quality": "epic",
            "video": "./resources/updates/HALLOWEEN_2016/intros/genji-pumpkin-carving.webm"
          }
        ],
        "skinsLegendary": [
          {
            "hero": "Junkrat",
            "name": "Dr. Junkenstein",
            "id": "junkrat-dr-junkenstein",
            "quality": "legendary",
            "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/junkrat-dr-junkenstein.jpg"
          },
          {
            "hero": "Roadhog",
            "name": "Junkenstein's Monster",
            "id": "roadhog-junkensteins-monster",
            "quality": "legendary",
            "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/roadhog-junkensteins-monster.jpg"
          },
          {
            "hero": "Reaper",
            "name": "Pumpkin",
            "id": "reaper-pumpkin",
            "quality": "legendary",
            "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/reaper-pumpkin.jpg"
          },
          {
            "hero": "Mercy",
            "name": "Witch",
            "id": "mercy-witch",
            "quality": "legendary",
            "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/mercy-witch.jpg"
          }
        ],
        "icons": [
          {
            "name": "...Never Die",
            "id": "never-die",
            "img": "./resources/updates/HALLOWEEN_2016/icons/never-die.png"
          },
          {
            "name": "Bewitching",
            "id": "bewitching",
            "img": "./resources/updates/HALLOWEEN_2016/icons/bewitching.png"
          },
          {
            "name": "Calavera",
            "id": "calavera",
            "img": "./resources/updates/HALLOWEEN_2016/icons/calavera.png"
          },
          {
            "name": "Candle",
            "id": "candle",
            "img": "./resources/updates/HALLOWEEN_2016/icons/candle.png"
          },
          {
            "name": "Eyeball",
            "id": "eyeball",
            "img": "./resources/updates/HALLOWEEN_2016/icons/eyeball.png"
          },
          {
            "name": "Ghostymari",
            "id": "ghostymari",
            "img": "./resources/updates/HALLOWEEN_2016/icons/ghostymari.png"
          },
          {
            "name": "Halloween Terror",
            "id": "halloween-terror",
            "img": "./resources/updates/HALLOWEEN_2016/icons/halloween-terror.png"
          },
          {
            "name": "Spider",
            "id": "spider",
            "img": "./resources/updates/HALLOWEEN_2016/icons/spider.png"
          },
          {
            "name": "Superstition",
            "id": "superstition",
            "img": "./resources/updates/HALLOWEEN_2016/icons/superstition.png"
          },
          {
            "name": "The Doctor",
            "id": "junkrat-the-doctor",
            "img": "./resources/updates/HALLOWEEN_2016/icons/junkrat-the-doctor.png"
          },
          {
            "name": "The Monster",
            "id": "roadhog-the-monster",
            "img": "./resources/updates/HALLOWEEN_2016/icons/roadhog-the-monster.png"
          },
          {
            "name": "The Reaper",
            "id": "reaper-the-reaper",
            "img": "./resources/updates/HALLOWEEN_2016/icons/reaper-the-reaper.png"
          },
          {
            "name": "The Witch",
            "id": "mercy-the-witch",
            "img": "./resources/updates/HALLOWEEN_2016/icons/mercy-the-witch.png"
          },
          {
            "name": "Tombstone",
            "id": "tombstone",
            "img": "./resources/updates/HALLOWEEN_2016/icons/tombstone.png"
          },
          {
            "name": "Vampachimari",
            "id": "vampachimari",
            "img": "./resources/updates/HALLOWEEN_2016/icons/vampachimari.png"
          },
          {
            "name": "Witch's Brew",
            "id": "witchs-brew",
            "img": "./resources/updates/HALLOWEEN_2016/icons/witchs-brew.png"
          },
          {
            "name": "Witch's Hat",
            "id": "witchs-hat",
            "img": "./resources/updates/HALLOWEEN_2016/icons/witchs-hat.png"
          },
          {
            "name": "Wolf",
            "id": "wolf",
            "img": "./resources/updates/HALLOWEEN_2016/icons/wolf.png"
          }
        ]
      }
    },
    {
      name: 'Winter Wonderland 2016',
      id: 'winterwonderland2016',
      items: {
        "sprays": [
          {
            "hero": "Ana",
            "name": "Warm",
            "id": "ana-warm",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-warm.png",
            "ornamentID": "ana-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png"
          },
          {
            "hero": "Ana",
            "name": "Ornament",
            "id": "ana-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png",
            "ornamentID": "ana-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png"
          },
          {
            "hero": "Bastion",
            "name": "ORNAMENT",
            "id": "bastion-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png",
            "ornamentID": "bastion-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png"
          },
          {
            "hero": "Bastion",
            "name": "FESTIVE",
            "id": "bastion-festive",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-festive.png",
            "ornamentID": "bastion-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png"
          },
          {
            "hero": "D.Va",
            "name": "ORNAMENT",
            "id": "dva-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png",
            "ornamentID": "dva-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png"
          },
          {
            "hero": "D.Va",
            "name": "COOKIE",
            "id": "dva-cookie",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-cookie.png",
            "ornamentID": "dva-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png"
          },
          {
            "hero": "Genji",
            "name": "Kadomatsu",
            "id": "genji-kadomatsu",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-kadomatsu.png",
            "ornamentID": "genji-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png"
          },
          {
            "hero": "Genji",
            "name": "Ornament",
            "id": "genji-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png",
            "ornamentID": "genji-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png"
          },
          {
            "hero": "Hanzo",
            "name": "Kadomatsu",
            "id": "hanzo-kadomatsu",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-kadomatsu.png",
            "ornamentID": "hanzo-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png"
          },
          {
            "hero": "Hanzo",
            "name": "Ornament",
            "id": "hanzo-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png",
            "ornamentID": "hanzo-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png"
          },
          {
            "hero": "Junkrat",
            "name": "\"WINTER\"",
            "id": "junkrat-winter",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-winter.png",
            "ornamentID": "junkrat-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png"
          },
          {
            "hero": "Junkrat",
            "name": "Ornament",
            "id": "junkrat-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png",
            "ornamentID": "junkrat-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png"
          },
          {
            "hero": "Lúcio",
            "name": "Ornament",
            "id": "lucio-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png",
            "ornamentID": "lucio-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png"
          },
          {
            "hero": "Lúcio",
            "name": "Hockey",
            "id": "lucio-hockey",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-hockey.png",
            "ornamentID": "lucio-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png"
          },
          {
            "hero": "McCree",
            "name": "Ornament",
            "id": "mccree-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png",
            "ornamentID": "mccree-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png"
          },
          {
            "hero": "McCree",
            "name": "Ugly Sweater",
            "id": "mccree-ugly-sweater",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ugly-sweater.png",
            "ornamentID": "mccree-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png"
          },
          {
            "hero": "Mei",
            "name": "Sculpting",
            "id": "mei-sculpting",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-sculpting.png",
            "ornamentID": "mei-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png"
          },
          {
            "hero": "Mei",
            "name": "Ornament",
            "id": "mei-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png",
            "ornamentID": "mei-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png"
          },
          {
            "hero": "Mercy",
            "name": "Snow Angel",
            "id": "mercy-snow-angel",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-snow-angel.png",
            "ornamentID": "mercy-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png"
          },
          {
            "hero": "Mercy",
            "name": "Ornament",
            "id": "mercy-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png",
            "ornamentID": "mercy-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png"
          },
          {
            "hero": "Pharah",
            "name": "Ice Fishing",
            "id": "pharah-ice-fishing",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ice-fishing.png",
            "ornamentID": "pharah-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png"
          },
          {
            "hero": "Pharah",
            "name": "Ornament",
            "id": "pharah-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png",
            "ornamentID": "pharah-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png"
          },
          {
            "hero": "Reaper",
            "name": "Stocking",
            "id": "reaper-stocking",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-stocking.png",
            "ornamentID": "reaper-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png"
          },
          {
            "hero": "Reaper",
            "name": "Ornament",
            "id": "reaper-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png",
            "ornamentID": "reaper-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png"
          },
          {
            "hero": "Reinhardt",
            "name": "Ice Fishing",
            "id": "reinhardt-ice-fishing",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ice-fishing.png",
            "ornamentID": "reinhardt-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png"
          },
          {
            "hero": "Reinhardt",
            "name": "Ornament",
            "id": "reinhardt-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png",
            "ornamentID": "reinhardt-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png"
          },
          {
            "hero": "Roadhog",
            "name": "\"Winter\"",
            "id": "roadhog-winter",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-winter.png",
            "ornamentID": "roadhog-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png"
          },
          {
            "hero": "Roadhog",
            "name": "Ornament",
            "id": "roadhog-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png",
            "ornamentID": "roadhog-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png"
          },
          {
            "hero": "Soldier: 76",
            "name": "Ornament",
            "id": "soldier-76-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png",
            "ornamentID": "soldier-76-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png"
          },
          {
            "hero": "Soldier: 76",
            "name": "Army Man: 76",
            "id": "soldier-76-army-man-76",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-army-man-76.png",
            "ornamentID": "soldier-76-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png"
          },
          {
            "hero": "Sombra",
            "name": "Puppet",
            "id": "sombra-puppet",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-puppet.png",
            "ornamentID": "sombra-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png"
          },
          {
            "hero": "Sombra",
            "name": "Ornament",
            "id": "sombra-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png",
            "ornamentID": "sombra-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png"
          },
          {
            "hero": "Symmetra",
            "name": "Snowflake",
            "id": "symmetra-snowflake",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-snowflake.png",
            "ornamentID": "symmetra-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png"
          },
          {
            "hero": "Symmetra",
            "name": "Ornament",
            "id": "symmetra-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png",
            "ornamentID": "symmetra-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png"
          },
          {
            "hero": "Torbjörn",
            "name": "Workshop",
            "id": "torbjorn-workshop",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-workshop.png",
            "ornamentID": "torbjorn-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png"
          },
          {
            "hero": "Torbjörn",
            "name": "Ornament",
            "id": "torbjorn-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png",
            "ornamentID": "torbjorn-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png"
          },
          {
            "hero": "Tracer",
            "name": "Snowboarding",
            "id": "tracer-snowboarding",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-snowboarding.png",
            "ornamentID": "tracer-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png"
          },
          {
            "hero": "Tracer",
            "name": "Ornament",
            "id": "tracer-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png",
            "ornamentID": "tracer-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png"
          },
          {
            "hero": "Widowmaker",
            "name": "Skiing",
            "id": "widowmaker-skiing",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-skiing.png",
            "ornamentID": "widowmaker-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png"
          },
          {
            "hero": "Widowmaker",
            "name": "Ornament",
            "id": "widowmaker-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png",
            "ornamentID": "widowmaker-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png"
          },
          {
            "hero": "Winston",
            "name": "Presents",
            "id": "winston-presents",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-presents.png",
            "ornamentID": "winston-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png"
          },
          {
            "hero": "Winston",
            "name": "Ornament",
            "id": "winston-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png",
            "ornamentID": "winston-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png"
          },
          {
            "hero": "Zarya",
            "name": "Matryoshka",
            "id": "zarya-matryoshka",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-matryoshka.png",
            "ornamentID": "zarya-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png"
          },
          {
            "hero": "Zarya",
            "name": "Ornament",
            "id": "zarya-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png",
            "ornamentID": "zarya-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png"
          },
          {
            "hero": "Zenyatta",
            "name": "Snowball Fight",
            "id": "zenyatta-snowball-fight",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-snowball-fight.png",
            "ornamentID": "zenyatta-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png"
          },
          {
            "hero": "Zenyatta",
            "name": "Ornament",
            "id": "zenyatta-ornament",
            "quality": "common",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png",
            "ornamentID": "zenyatta-ornament",
            "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png"
          },
          {
            "name": "Winter Wonderland",
            "id": "winter-wonderland",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winter-wonderland.png",
            "quality": "common"
          },
          {
            "name": "SnowReaper",
            "id": "snowreaper",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowreaper.png"
          },
          {
            "name": "SnowMei",
            "id": "snowmei",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowmei.png"
          },
          {
            "name": "SnowHog",
            "id": "snowhog",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowhog.png"
          },
          {
            "name": "SnowCree",
            "id": "snowcree",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowcree.png"
          }
        ],
        "voicelines": [
          {
            "hero": "Ana",
            "name": "I'm watching out for you",
            "id": "ana-im-watching-out-for-you",
            "quality": "common"
          },
          {
            "hero": "Bastion",
            "name": "DWEE DOO HOO",
            "id": "bastion-dwee-doo-hoo",
            "quality": "common"
          },
          {
            "hero": "D.Va",
            "name": "Aw, you shouldn't have",
            "id": "dva-aw-you-shouldnt-have",
            "quality": "common"
          },
          {
            "hero": "Genji",
            "name": "Merry Christmas!",
            "id": "genji-merry-christmas",
            "quality": "common"
          },
          {
            "hero": "Hanzo",
            "name": "A gift for you",
            "id": "hanzo-a-gift-for-you",
            "quality": "common"
          },
          {
            "hero": "Junkrat",
            "name": "Merry Christmas",
            "id": "junkrat-merry-christmas",
            "quality": "common"
          },
          {
            "hero": "Lúcio",
            "name": "Happy holidays!",
            "id": "lucio-happy-holidays",
            "quality": "common"
          },
          {
            "hero": "McCree",
            "name": "Had to break the ice",
            "id": "mccree-had-to-break-the-ice",
            "quality": "common"
          },
          {
            "hero": "Mei",
            "name": "I got you something!",
            "id": "mei-i-got-you-something",
            "quality": "common"
          },
          {
            "hero": "Mercy",
            "name": "Your guardian angel",
            "id": "mercy-your-guardian-angel",
            "quality": "common"
          },
          {
            "hero": "Pharah",
            "name": "The forecast",
            "id": "pharah-the-forecast",
            "quality": "common"
          },
          {
            "hero": "Reaper",
            "name": "Holiday spirit",
            "id": "reaper-holiday-spirit",
            "quality": "common"
          },
          {
            "hero": "Reinhardt",
            "name": "You're on my naughty list",
            "id": "reinhardt-youre-on-my-naughty-list",
            "quality": "common"
          },
          {
            "hero": "Roadhog",
            "name": "Ho ho ho",
            "id": "roadhog-ho-ho-ho",
            "quality": "common"
          },
          {
            "hero": "Soldier: 76",
            "name": "Stay frosty",
            "id": "soldier-76-stay-frosty",
            "quality": "common"
          },
          {
            "hero": "Sombra",
            "name": "I know who's been naughty",
            "id": "sombra-i-know-whos-been-naughty",
            "quality": "common"
          },
          {
            "hero": "Symmetra",
            "name": "I made you something",
            "id": "symmetra-i-made-you-something",
            "quality": "common"
          },
          {
            "hero": "Torbjörn",
            "name": "Made to order",
            "id": "torbjorn-made-to-order",
            "quality": "common"
          },
          {
            "hero": "Tracer",
            "name": "It's in the bag",
            "id": "tracer-its-in-the-bag",
            "quality": "common"
          },
          {
            "hero": "Widowmaker",
            "name": "Exquisite",
            "id": "widowmaker-exquisite",
            "quality": "common"
          },
          {
            "hero": "Winston",
            "name": "I... got you something",
            "id": "winston-i-got-you-something",
            "quality": "common"
          },
          {
            "hero": "Zarya",
            "name": "For the Motherland",
            "id": "zarya-for-the-motherland",
            "quality": "common"
          },
          {
            "hero": "Zenyatta",
            "name": "No snowflake",
            "id": "zenyatta-no-snowflake",
            "quality": "common"
          }
        ],
        "poses": [
          {
            "hero": "D.Va",
            "name": "Festive",
            "id": "dva-festive",
            "quality": "rare",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/dva-festive.jpg"
          },
          {
            "hero": "Mercy",
            "name": "Mistletoe",
            "id": "mercy-mistletoe",
            "quality": "rare",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/mercy-mistletoe.jpg"
          },
          {
            "hero": "Ana",
            "name": "Toast",
            "id": "ana-toast",
            "quality": "rare",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/ana-toast.jpg"
          },
          {
            "hero": "Pharah",
            "name": "Toast",
            "id": "pharah-toast",
            "quality": "rare",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/pharah-toast.jpg"
          },
          {
            "hero": "Reinhardt",
            "name": "Toast",
            "id": "reinhardt-toast",
            "quality": "rare",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/reinhardt-toast.jpg"
          },
          {
            "hero": "Soldier: 76",
            "name": "Toast",
            "id": "soldier-76-toast",
            "quality": "rare",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/soldier-76-toast.jpg"
          },
          {
            "hero": "Torbjörn",
            "name": "Toast",
            "id": "torbjorn-toast",
            "quality": "rare",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/torbjorn-toast.jpg"
          }
        ],
        "skinsEpic": [
          {
            "hero": "Lúcio",
            "name": "Andes",
            "id": "lucio-andes",
            "quality": "epic",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/lucio-andes.jpg"
          },
          {
            "hero": "Pharah",
            "name": "Frostbite",
            "id": "pharah-frostbite",
            "quality": "epic",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/pharah-frostbite.jpg"
          },
          {
            "hero": "Zarya",
            "name": "Frosted",
            "id": "zarya-frosted",
            "quality": "epic",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/zarya-frosted.jpg"
          },
          {
            "hero": "Sombra",
            "name": "Peppermint",
            "id": "sombra-peppermint",
            "quality": "epic",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/sombra-peppermint.jpg"
          },
          {
            "hero": "Roadhog",
            "name": "Rudolph",
            "id": "roadhog-rudolph",
            "quality": "epic",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/roadhog-rudolph.jpg"
          },
          {
            "hero": "McCree",
            "name": "Scrooge",
            "id": "mccree-scrooge",
            "quality": "epic",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/mccree-scrooge.jpg"
          },
          {
            "hero": "Reaper",
            "name": "Shiver",
            "id": "reaper-shiver",
            "quality": "epic",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/reaper-shiver.jpg"
          }
        ],
        "emotes": [
          {
            "hero": "McCree",
            "name": "Hat Trick",
            "id": "mccree-hat-trick",
            "quality": "epic",
            "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/mccree-hat-trick.webm"
          },
          {
            "hero": "Zarya",
            "legendary": true,
            "name": "Mystery Gift",
            "id": "zarya-mystery-gift",
            "quality": "legendary",
            "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/zarya-mystery-gift.webm"
          },
          {
            "hero": "Mei",
            "name": "Snowman",
            "id": "mei-snowman",
            "quality": "epic",
            "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/mei-snowman.webm"
          }
        ],
        "skinsLegendary": [
          {
            "hero": "Tracer",
            "name": "Jingle",
            "id": "tracer-jingle",
            "quality": "legendary",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/tracer-jingle.jpg"
          },
          {
            "hero": "Mei",
            "name": "Mei-rry",
            "id": "mei-meirry",
            "quality": "legendary",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/mei-meirry.jpg"
          },
          {
            "hero": "Zenyatta",
            "name": "Nutcracker",
            "id": "zenyatta-nutcracker",
            "quality": "legendary",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/zenyatta-nutcracker.jpg"
          },
          {
            "hero": "Torbjörn",
            "name": "Santaclad",
            "id": "torbjorn-santaclad",
            "quality": "legendary",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/torbjorn-santaclad.jpg"
          },
          {
            "hero": "Winston",
            "name": "Yeti",
            "id": "winston-yeti",
            "quality": "legendary",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/winston-yeti.jpg"
          }
        ],
        "intros": [
          {
            "hero": "Symmetra",
            "name": "Snowflakes",
            "id": "symmetra-snowflakes",
            "quality": "epic",
            "video": "./resources/updates/WINTER_WONDERLAND_2016/intros/symmetra-snowflakes.webm"
          },
          {
            "hero": "Widowmaker",
            "name": "Under the Mistletoe",
            "id": "widowmaker-under-the-mistletoe",
            "quality": "epic",
            "video": "./resources/updates/WINTER_WONDERLAND_2016/intros/widowmaker-under-the-mistletoe.webm"
          }
        ],
        "icons": [
          {
            "name": "2017",
            "id": "2017",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/2017.png"
          },
          {
            "name": "Bells",
            "id": "bells",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/bells.png"
          },
          {
            "name": "Bubbly",
            "id": "bubbly",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/bubbly.png"
          },
          {
            "name": "Candy Cane",
            "id": "candy-cane",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/candy-cane.png"
          },
          {
            "name": "Cheers!",
            "id": "cheers",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/cheers.png"
          },
          {
            "name": "Dreidel",
            "id": "dreidel",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/dreidel.png"
          },
          {
            "name": "Gingerbread",
            "id": "gingerbread",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/gingerbread.png"
          },
          {
            "name": "Gingermari",
            "id": "gingermari",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/gingermari.png"
          },
          {
            "name": "Holly",
            "id": "holly",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/holly.png"
          },
          {
            "name": "Hot Cocoa",
            "id": "hot-cocoa",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/hot-cocoa.png"
          },
          {
            "name": "Jingle",
            "id": "tracer-jingle",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/tracer-jingle.png"
          },
          {
            "name": "Mochi",
            "id": "mochi",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/mochi.png"
          },
          {
            "name": "Nutcracker",
            "id": "zenyatta-nutcracker",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/zenyatta-nutcracker.png"
          },
          {
            "name": "Ornament",
            "id": "ornament",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/ornament.png"
          },
          {
            "name": "Pachimerry",
            "id": "pachimerry",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/pachimerry.png"
          },
          {
            "name": "Pachireindeer",
            "id": "pachireindeer",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/pachireindeer.png"
          },
          {
            "name": "Peppermint",
            "id": "peppermint",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/peppermint.png"
          },
          {
            "name": "Present",
            "id": "present",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/present.png"
          },
          {
            "name": "Santaclad",
            "id": "torbjorn-santaclad",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/torbjorn-santaclad.png"
          },
          {
            "name": "Snow Globe",
            "id": "snow-globe",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/snow-globe.png"
          },
          {
            "name": "Snowman",
            "id": "snowman",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/snowman.png"
          },
          {
            "name": "Stocking",
            "id": "stocking",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/stocking.png"
          },
          {
            "name": "Tannenbaum",
            "id": "tannenbaum",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/tannenbaum.png"
          },
          {
            "name": "Winter Wonderland",
            "id": "winter-wonderland",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/winter-wonderland.png"
          },
          {
            "name": "Wreath",
            "id": "wreath",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/wreath.png"
          },
          {
            "name": "Yeti",
            "id": "winston-yeti",
            "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/winston-yeti.png"
          }
        ]
      }
    }]
  }
})
