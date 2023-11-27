import historyService from "../service/history-service.js"

const makeADonation = async (req, res, next) => {
  try
  {
    const history = await historyService.donate(req)
    const donation = await historyService.updateCampaign(req.body)
    res.status(200).json({
      data: donation
    })
  } catch (error)
  {
    next(error)
  }
}

const getAllHistory = async (req, res, next) => {
  try
  {
    const histories = await historyService.getAllHistory(req)
    res.status(200).json({
      data: histories
    })
  } catch (error)
  {
    next(error)
  }
}

export default { makeADonation, getAllHistory }