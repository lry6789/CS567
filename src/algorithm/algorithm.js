import recWeightsStore from '../store/RecWeightsStore'
import { userInfo, interact, history, dataset } from './data'
const user = userInfo
const adActions = interact
const userHistory = history
const videos = dataset
function calculateAdScore (category) {
  const adActionScores = {
    0: -100,  // Close
    1: 0,   // Ignore
    2: 100    // Click
  }
  return adActionScores[adActions[category]] || 0
}
function calculateSimilarity (videoDemographics) {
  let score = 0
  const maxAgeDifference = 45


  if (user.gender === videoDemographics.gender) {
    score += 33
  }
  if (user.occupation === videoDemographics.occupation) {
    score += 33
  }

  const ageDifference = Math.abs(user.age - videoDemographics.age)
  score += Math.max(0, 33 * (maxAgeDifference - ageDifference) / maxAgeDifference)

  return score
}

function calculateHistoryScore (videoCategory) {
  const maxViewCount = Math.max(...Object.values(userHistory))
  const viewCountForCategory = userHistory[videoCategory] || 0
  return (viewCountForCategory / maxViewCount) * 100
}
function calculateRecommendationScore (video) {


  let adScore = calculateAdScore(video.category)


  let similarityScore = calculateSimilarity(video.audience_demographics)


  let historyScore = calculateHistoryScore(video.category)


  return (adScore * recWeightsStore.interaction + similarityScore * recWeightsStore.demographics + historyScore * recWeightsStore.history) / 100
}


function recommendVideos () {

  let scores = videos.map(video => {
    return {
      video: video,
      score: parseFloat(calculateRecommendationScore(video).toFixed(2))
    }
  })

  return scores.sort((a, b) => b.score - a.score).slice(0, 20)
}

export default recommendVideos