import { makeAutoObservable } from "mobx"

class CommentFeedbackStore {


  constructor() {
    makeAutoObservable(this)
  }
  //comment
  commentData = [
    {
      author: "Mike",
      content: "This video is a breath of fresh air! It's so important to showcase the strength and capabilities of all genders. Let's keep pushing for a society where everyone's talents are recognized and celebrated, regardless of gender. 。",
      likes: 100,
      dislikes: 2,
    },
    {
      author: "Caily",
      content: "Incredible work on this video. Highlighting the importance of gender equality not only inspires but also educates. It's time we all take action to ensure equal opportunities for everyone. #BalanceForBetter。",
      likes: 79,
      dislikes: 0,
    },

    {
      author: "John",
      content: "Thank you for creating content that promotes an inclusive perspective. Gender equality is about fairness and valuing people as individuals with unique contributions. We all benefit from a more equitable world. #EqualMeansEqual",
      likes: 39,
      dislikes: 1,
    },

  ]
  addData (comment) {
    this.commentData = [...this.commentData, {
      author: "Current User",
      content: comment,
      likes: 0,
      dislikes: 0,
    }]
  }
  //labels
  related = 2
  unrelated = 40
  unclear = 8
  get relatedPortion () {
    return (this.related / (this.related + this.unrelated + this.unclear) * 100).toFixed(2)
  }
  get unRelatedPortion () {
    console.log(parseFloat(this.unrelated * 1.0 / (this.related + this.unrelated + this.unclear) * 100).toFixed(2))
    return (parseFloat(this.unrelated * 1.0 / (this.related + this.unrelated + this.unclear) * 100).toFixed(2))
  }
  get unclearPortion () {
    return (100 - this.relatedPortion - this.unRelatedPortion).toFixed(2)
  }
  addLabel (type) {
    if (type === 'Related') {
      this.related++
    }
    else if (type === 'Unrelated') {
      this.unrelated++
    }
    else if (type === 'Unclear') {
      this.unclear++
    }
  }
}
const commentFeedbackStore = new CommentFeedbackStore()
export default commentFeedbackStore