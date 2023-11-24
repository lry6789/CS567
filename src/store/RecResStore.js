import { makeAutoObservable } from "mobx"
import recommendVideos from "../algorithm/algorithm"
import { firstRec } from "../algorithm/data"
class RecResStore {


  constructor() {
    makeAutoObservable(this)
  }

  recRes = firstRec

  get Biased () {
    return this.recRes.filter((item) => item.video.label === 0).length
  }
  get Unbiased () {
    return this.recRes.filter((item) => item.video.label === 1).length
  }
  get Unclear () {
    return this.recRes.filter((item) => item.video.label === 2).length
  }
  update () {
    this.recRes = recommendVideos()
  }

}
const recResStore = new RecResStore()
export default recResStore