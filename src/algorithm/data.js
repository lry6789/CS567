

const userInfo = {
  "gender": 1,
  "age": 35,
  "occupation": 10
}

const interact = {
  0: 1,
  1: 1,
  2: 2,
  3: 0,
  4: 2,
  5: 1,
}
const history = {
  0: 82,
  1: 89,
  2: 52,
  3: 5,
  4: 43,
  5: 94,
}
const firstRec = [
  {
    "video": {
      "name": "Secret Galaxy",
      "category": 5,
      "audience_demographics": {
        "gender": 1,
        "age": 31,
        "occupation": 10
      },
      "label": 1
    },
    "score": 73.43
  },
  {
    "video": {
      "name": "Epic Cinema",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 36,
        "occupation": 8
      },
      "label": 1
    },
    "score": 70.47
  },
  {
    "video": {
      "name": "Dream Ocean",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 34,
        "occupation": 9
      },
      "label": 0
    },
    "score": 70.47
  },
  {
    "video": {
      "name": "Epic Sports",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 36,
        "occupation": 8
      },
      "label": 1
    },
    "score": 70.47
  },
  {
    "video": {
      "name": "Secret Ocean",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 38,
        "occupation": 5
      },
      "label": 0
    },
    "score": 69.88
  },
  {
    "video": {
      "name": "Challenge Cinema",
      "category": 0,
      "audience_demographics": {
        "gender": 1,
        "age": 39,
        "occupation": 10
      },
      "label": 1
    },
    "score": 68.96
  },
  {
    "video": {
      "name": "World Ocean",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 42,
        "occupation": 5
      },
      "label": 1
    },
    "score": 68.71
  },
  {
    "video": {
      "name": "Discovery Life",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 27,
        "occupation": 7
      },
      "label": 0
    },
    "score": 68.42
  },
  {
    "video": {
      "name": "Challenge Sports",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 26,
        "occupation": 1
      },
      "label": 2
    },
    "score": 68.12
  },
  {
    "video": {
      "name": "Insight Galaxy",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 22,
        "occupation": 7
      },
      "label": 1
    },
    "score": 66.95
  },
  {
    "video": {
      "name": "Dream Life",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 30,
        "occupation": 0
      },
      "label": 1
    },
    "score": 65.94
  },
  {
    "video": {
      "name": "Challenge Sports",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 29,
        "occupation": 0
      },
      "label": 1
    },
    "score": 65.65
  },
  {
    "video": {
      "name": "Insight Science",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 45,
        "occupation": 1
      },
      "label": 2
    },
    "score": 64.48
  },
  {
    "video": {
      "name": "World Melody",
      "category": 4,
      "audience_demographics": {
        "gender": 0,
        "age": 24,
        "occupation": 10
      },
      "label": 1
    },
    "score": 64.18
  },
  {
    "video": {
      "name": "Challenge Innovation",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 46,
        "occupation": 5
      },
      "label": 1
    },
    "score": 64.18
  },
  {
    "video": {
      "name": "Challenge Ocean",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 50,
        "occupation": 8
      },
      "label": 2
    },
    "score": 63.01
  },
  {
    "video": {
      "name": "Adventure Cinema",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 17,
        "occupation": 4
      },
      "label": 1
    },
    "score": 62.13
  },
  {
    "video": {
      "name": "Discovery Art",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 53,
        "occupation": 9
      },
      "label": 1
    },
    "score": 62.13
  },
  {
    "video": {
      "name": "Future Galaxy",
      "category": 5,
      "audience_demographics": {
        "gender": 1,
        "age": 36,
        "occupation": 7
      },
      "label": 1
    },
    "score": 61.11
  },
  {
    "video": {
      "name": "Epic Cinema",
      "category": 5,
      "audience_demographics": {
        "gender": 1,
        "age": 36,
        "occupation": 11
      },
      "label": 1
    },
    "score": 61.11
  }
]
const dataset =
  [
    {
      "name": "Epic Melody",
      "category": 0,
      "audience_demographics": {
        "gender": 0,
        "age": 26,
        "occupation": 2
      },
      "label": 1
    },
    {
      "name": "Epic History",
      "category": 3,
      "audience_demographics": {
        "gender": 0,
        "age": 58,
        "occupation": 11
      },
      "label": 1
    },
    {
      "name": "Epic Innovation",
      "category": 0,
      "audience_demographics": {
        "gender": 0,
        "age": 45,
        "occupation": 9
      },
      "label": 1
    },
    {
      "name": "Future Innovation",
      "category": 2,
      "audience_demographics": {
        "gender": 0,
        "age": 59,
        "occupation": 1
      },
      "label": 1
    },
    {
      "name": "Secret Cinema",
      "category": 0,
      "audience_demographics": {
        "gender": 0,
        "age": 36,
        "occupation": 11
      },
      "label": 1
    },
    {
      "name": "Epic Cinema",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 36,
        "occupation": 8
      },
      "label": 1
    },
    {
      "name": "Dream Ocean",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 34,
        "occupation": 9
      },
      "label": 0
    },
    {
      "name": "Challenge Cinema",
      "category": 0,
      "audience_demographics": {
        "gender": 1,
        "age": 39,
        "occupation": 10
      },
      "label": 1
    },
    {
      "name": "Insight Melody",
      "category": 0,
      "audience_demographics": {
        "gender": 2,
        "age": 40,
        "occupation": 8
      },
      "label": 1
    },
    {
      "name": "Challenge History",
      "category": 3,
      "audience_demographics": {
        "gender": 2,
        "age": 60,
        "occupation": 9
      },
      "label": 1
    },
    {
      "name": "Discovery Cinema",
      "category": 4,
      "audience_demographics": {
        "gender": 2,
        "age": 16,
        "occupation": 0
      },
      "label": 1
    },
    {
      "name": "Epic Sports",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 36,
        "occupation": 8
      },
      "label": 1
    },
    {
      "name": "Future Sports",
      "category": 5,
      "audience_demographics": {
        "gender": 0,
        "age": 35,
        "occupation": 6
      },
      "label": 1
    },
    {
      "name": "Future Ocean",
      "category": 1,
      "audience_demographics": {
        "gender": 2,
        "age": 55,
        "occupation": 5
      },
      "label": 1
    },
    {
      "name": "Insight Innovation",
      "category": 1,
      "audience_demographics": {
        "gender": 2,
        "age": 59,
        "occupation": 4
      },
      "label": 1
    },
    {
      "name": "Insight Cinema",
      "category": 0,
      "audience_demographics": {
        "gender": 1,
        "age": 45,
        "occupation": 5
      },
      "label": 1
    },
    {
      "name": "World Galaxy",
      "category": 0,
      "audience_demographics": {
        "gender": 2,
        "age": 43,
        "occupation": 4
      },
      "label": 2
    },
    {
      "name": "World Art",
      "category": 0,
      "audience_demographics": {
        "gender": 0,
        "age": 29,
        "occupation": 0
      },
      "label": 1
    },
    {
      "name": "Future Galaxy",
      "category": 5,
      "audience_demographics": {
        "gender": 1,
        "age": 36,
        "occupation": 7
      },
      "label": 1
    },
    {
      "name": "World Ocean",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 42,
        "occupation": 5
      },
      "label": 1
    },
    {
      "name": "Insight Cinema",
      "category": 2,
      "audience_demographics": {
        "gender": 0,
        "age": 38,
        "occupation": 11
      },
      "label": 1
    },
    {
      "name": "Secret Life",
      "category": 1,
      "audience_demographics": {
        "gender": 1,
        "age": 18,
        "occupation": 7
      },
      "label": 1
    },
    {
      "name": "World Melody",
      "category": 4,
      "audience_demographics": {
        "gender": 0,
        "age": 24,
        "occupation": 10
      },
      "label": 1
    },
    {
      "name": "Challenge Sports",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 26,
        "occupation": 1
      },
      "label": 2
    },
    {
      "name": "Adventure Life",
      "category": 2,
      "audience_demographics": {
        "gender": 0,
        "age": 43,
        "occupation": 8
      },
      "label": 1
    },
    {
      "name": "Challenge Ocean",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 50,
        "occupation": 8
      },
      "label": 2
    },
    {
      "name": "Discovery Art",
      "category": 5,
      "audience_demographics": {
        "gender": 0,
        "age": 26,
        "occupation": 6
      },
      "label": 1
    },
    {
      "name": "Dream Life",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 30,
        "occupation": 0
      },
      "label": 1
    },
    {
      "name": "Future Melody",
      "category": 0,
      "audience_demographics": {
        "gender": 2,
        "age": 29,
        "occupation": 1
      },
      "label": 1
    },
    {
      "name": "Adventure Melody",
      "category": 5,
      "audience_demographics": {
        "gender": 1,
        "age": 52,
        "occupation": 3
      },
      "label": 1
    },
    {
      "name": "Secret Art",
      "category": 0,
      "audience_demographics": {
        "gender": 1,
        "age": 29,
        "occupation": 6
      },
      "label": 1
    },
    {
      "name": "Journey Science",
      "category": 0,
      "audience_demographics": {
        "gender": 0,
        "age": 34,
        "occupation": 9
      },
      "label": 1
    },
    {
      "name": "Secret Galaxy",
      "category": 5,
      "audience_demographics": {
        "gender": 1,
        "age": 31,
        "occupation": 10
      },
      "label": 1
    },
    {
      "name": "Discovery Life",
      "category": 1,
      "audience_demographics": {
        "gender": 1,
        "age": 19,
        "occupation": 3
      },
      "label": 1
    },
    {
      "name": "Insight Science",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 45,
        "occupation": 1
      },
      "label": 2
    },
    {
      "name": "Discovery Art",
      "category": 5,
      "audience_demographics": {
        "gender": 2,
        "age": 28,
        "occupation": 8
      },
      "label": 1
    },
    {
      "name": "Future Innovation",
      "category": 1,
      "audience_demographics": {
        "gender": 0,
        "age": 22,
        "occupation": 2
      },
      "label": 1
    },
    {
      "name": "Challenge Innovation",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 46,
        "occupation": 5
      },
      "label": 1
    },
    {
      "name": "Insight Cinema",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 59,
        "occupation": 4
      },
      "label": 1
    },
    {
      "name": "Future Art",
      "category": 0,
      "audience_demographics": {
        "gender": 2,
        "age": 52,
        "occupation": 1
      },
      "label": 1
    },
    {
      "name": "Adventure Cinema",
      "category": 3,
      "audience_demographics": {
        "gender": 1,
        "age": 36,
        "occupation": 2
      },
      "label": 1
    },
    {
      "name": "Dream Art",
      "category": 3,
      "audience_demographics": {
        "gender": 2,
        "age": 33,
        "occupation": 4
      },
      "label": 1
    },
    {
      "name": "Adventure Galaxy",
      "category": 4,
      "audience_demographics": {
        "gender": 0,
        "age": 16,
        "occupation": 2
      },
      "label": 1
    },
    {
      "name": "Epic Melody",
      "category": 4,
      "audience_demographics": {
        "gender": 0,
        "age": 41,
        "occupation": 2
      },
      "label": 1
    },
    {
      "name": "Future Innovation",
      "category": 0,
      "audience_demographics": {
        "gender": 2,
        "age": 57,
        "occupation": 8
      },
      "label": 1
    },
    {
      "name": "Dream History",
      "category": 5,
      "audience_demographics": {
        "gender": 1,
        "age": 39,
        "occupation": 2
      },
      "label": 1
    },
    {
      "name": "Future Galaxy",
      "category": 4,
      "audience_demographics": {
        "gender": 0,
        "age": 32,
        "occupation": 4
      },
      "label": 0
    },
    {
      "name": "World Life",
      "category": 3,
      "audience_demographics": {
        "gender": 1,
        "age": 34,
        "occupation": 5
      },
      "label": 1
    },
    {
      "name": "Epic Innovation",
      "category": 4,
      "audience_demographics": {
        "gender": 0,
        "age": 36,
        "occupation": 1
      },
      "label": 1
    },
    {
      "name": "Challenge Innovation",
      "category": 0,
      "audience_demographics": {
        "gender": 0,
        "age": 39,
        "occupation": 1
      },
      "label": 1
    },
    {
      "name": "Adventure Science",
      "category": 2,
      "audience_demographics": {
        "gender": 2,
        "age": 26,
        "occupation": 4
      },
      "label": 0
    },
    {
      "name": "Insight History",
      "category": 5,
      "audience_demographics": {
        "gender": 0,
        "age": 32,
        "occupation": 11
      },
      "label": 1
    },
    {
      "name": "World History",
      "category": 3,
      "audience_demographics": {
        "gender": 2,
        "age": 35,
        "occupation": 8
      },
      "label": 1
    },
    {
      "name": "Future Melody",
      "category": 1,
      "audience_demographics": {
        "gender": 1,
        "age": 37,
        "occupation": 0
      },
      "label": 0
    },
    {
      "name": "Dream Life",
      "category": 5,
      "audience_demographics": {
        "gender": 2,
        "age": 37,
        "occupation": 11
      },
      "label": 1
    },
    {
      "name": "Dream Life",
      "category": 0,
      "audience_demographics": {
        "gender": 1,
        "age": 50,
        "occupation": 0
      },
      "label": 0
    },
    {
      "name": "Future Galaxy",
      "category": 1,
      "audience_demographics": {
        "gender": 0,
        "age": 24,
        "occupation": 5
      },
      "label": 2
    },
    {
      "name": "Discovery Melody",
      "category": 2,
      "audience_demographics": {
        "gender": 0,
        "age": 45,
        "occupation": 0
      },
      "label": 1
    },
    {
      "name": "Insight Innovation",
      "category": 0,
      "audience_demographics": {
        "gender": 1,
        "age": 44,
        "occupation": 9
      },
      "label": 1
    },
    {
      "name": "World Life",
      "category": 4,
      "audience_demographics": {
        "gender": 0,
        "age": 20,
        "occupation": 8
      },
      "label": 0
    },
    {
      "name": "Secret Sports",
      "category": 0,
      "audience_demographics": {
        "gender": 1,
        "age": 25,
        "occupation": 1
      },
      "label": 2
    },
    {
      "name": "Journey Science",
      "category": 3,
      "audience_demographics": {
        "gender": 2,
        "age": 25,
        "occupation": 7
      },
      "label": 1
    },
    {
      "name": "Adventure Melody",
      "category": 4,
      "audience_demographics": {
        "gender": 0,
        "age": 22,
        "occupation": 3
      },
      "label": 1
    },
    {
      "name": "World Art",
      "category": 1,
      "audience_demographics": {
        "gender": 1,
        "age": 60,
        "occupation": 4
      },
      "label": 1
    },
    {
      "name": "World Cinema",
      "category": 3,
      "audience_demographics": {
        "gender": 2,
        "age": 35,
        "occupation": 0
      },
      "label": 1
    },
    {
      "name": "Insight Life",
      "category": 1,
      "audience_demographics": {
        "gender": 2,
        "age": 30,
        "occupation": 10
      },
      "label": 0
    },
    {
      "name": "Dream Melody",
      "category": 4,
      "audience_demographics": {
        "gender": 0,
        "age": 18,
        "occupation": 1
      },
      "label": 1
    },
    {
      "name": "Secret History",
      "category": 3,
      "audience_demographics": {
        "gender": 1,
        "age": 40,
        "occupation": 9
      },
      "label": 1
    },
    {
      "name": "Adventure History",
      "category": 4,
      "audience_demographics": {
        "gender": 0,
        "age": 31,
        "occupation": 5
      },
      "label": 1
    },
    {
      "name": "Future Galaxy",
      "category": 1,
      "audience_demographics": {
        "gender": 1,
        "age": 17,
        "occupation": 9
      },
      "label": 1
    },
    {
      "name": "Discovery Galaxy",
      "category": 1,
      "audience_demographics": {
        "gender": 0,
        "age": 44,
        "occupation": 1
      },
      "label": 1
    },
    {
      "name": "World Science",
      "category": 5,
      "audience_demographics": {
        "gender": 0,
        "age": 54,
        "occupation": 4
      },
      "label": 1
    },
    {
      "name": "Adventure Cinema",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 17,
        "occupation": 4
      },
      "label": 1
    },
    {
      "name": "Discovery Life",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 27,
        "occupation": 7
      },
      "label": 0
    },
    {
      "name": "Insight Ocean",
      "category": 0,
      "audience_demographics": {
        "gender": 0,
        "age": 45,
        "occupation": 4
      },
      "label": 1
    },
    {
      "name": "Dream History",
      "category": 1,
      "audience_demographics": {
        "gender": 2,
        "age": 25,
        "occupation": 4
      },
      "label": 1
    },
    {
      "name": "Dream Innovation",
      "category": 2,
      "audience_demographics": {
        "gender": 2,
        "age": 28,
        "occupation": 4
      },
      "label": 0
    },
    {
      "name": "Journey History",
      "category": 1,
      "audience_demographics": {
        "gender": 0,
        "age": 18,
        "occupation": 10
      },
      "label": 2
    },
    {
      "name": "Adventure Art",
      "category": 1,
      "audience_demographics": {
        "gender": 0,
        "age": 39,
        "occupation": 5
      },
      "label": 1
    },
    {
      "name": "Discovery Art",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 53,
        "occupation": 9
      },
      "label": 1
    },
    {
      "name": "Challenge History",
      "category": 1,
      "audience_demographics": {
        "gender": 2,
        "age": 29,
        "occupation": 8
      },
      "label": 2
    },
    {
      "name": "Journey Sports",
      "category": 1,
      "audience_demographics": {
        "gender": 1,
        "age": 59,
        "occupation": 4
      },
      "label": 1
    },
    {
      "name": "Challenge Cinema",
      "category": 5,
      "audience_demographics": {
        "gender": 2,
        "age": 18,
        "occupation": 3
      },
      "label": 1
    },
    {
      "name": "Epic History",
      "category": 1,
      "audience_demographics": {
        "gender": 1,
        "age": 19,
        "occupation": 7
      },
      "label": 1
    },
    {
      "name": "Epic Cinema",
      "category": 5,
      "audience_demographics": {
        "gender": 1,
        "age": 36,
        "occupation": 11
      },
      "label": 1
    },
    {
      "name": "Insight Galaxy",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 22,
        "occupation": 7
      },
      "label": 1
    },
    {
      "name": "Secret History",
      "category": 3,
      "audience_demographics": {
        "gender": 2,
        "age": 32,
        "occupation": 7
      },
      "label": 1
    },
    {
      "name": "Insight Galaxy",
      "category": 0,
      "audience_demographics": {
        "gender": 2,
        "age": 51,
        "occupation": 10
      },
      "label": 1
    },
    {
      "name": "Challenge Sports",
      "category": 4,
      "audience_demographics": {
        "gender": 1,
        "age": 29,
        "occupation": 0
      },
      "label": 1
    },
    {
      "name": "Future Melody",
      "category": 0,
      "audience_demographics": {
        "gender": 2,
        "age": 36,
        "occupation": 0
      },
      "label": 1
    },
    {
      "name": "Insight Cinema",
      "category": 0,
      "audience_demographics": {
        "gender": 1,
        "age": 31,
        "occupation": 0
      },
      "label": 2
    },
    {
      "name": "Epic Innovation",
      "category": 3,
      "audience_demographics": {
        "gender": 1,
        "age": 40,
        "occupation": 6
      },
      "label": 1
    },
    {
      "name": "World Sports",
      "category": 4,
      "audience_demographics": {
        "gender": 2,
        "age": 34,
        "occupation": 7
      },
      "label": 1
    },
    {
      "name": "Journey Melody",
      "category": 1,
      "audience_demographics": {
        "gender": 0,
        "age": 42,
        "occupation": 1
      },
      "label": 0
    },
    {
      "name": "Secret Ocean",
      "category": 2,
      "audience_demographics": {
        "gender": 1,
        "age": 38,
        "occupation": 5
      },
      "label": 0
    },
    {
      "name": "World Ocean",
      "category": 5,
      "audience_demographics": {
        "gender": 2,
        "age": 46,
        "occupation": 11
      },
      "label": 0
    },
    {
      "name": "Epic History",
      "category": 4,
      "audience_demographics": {
        "gender": 0,
        "age": 55,
        "occupation": 8
      },
      "label": 1
    },
    {
      "name": "Dream Life",
      "category": 3,
      "audience_demographics": {
        "gender": 1,
        "age": 39,
        "occupation": 0
      },
      "label": 1
    },
    {
      "name": "Discovery Innovation",
      "category": 5,
      "audience_demographics": {
        "gender": 0,
        "age": 52,
        "occupation": 10
      },
      "label": 1
    },
    {
      "name": "Journey Science",
      "category": 0,
      "audience_demographics": {
        "gender": 0,
        "age": 53,
        "occupation": 5
      },
      "label": 1
    }
  ]
export { userInfo, dataset, interact, history, firstRec }