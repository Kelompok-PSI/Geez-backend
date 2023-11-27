import { prismaClient } from "../app/database.js"
import { ResponseError } from "../error/response-error.js"
import { donateValidation } from "../validation/history-validation.js"
import { validate } from "../validation/validation.js"

const donate = async (req) => {
  const valid = validate(donateValidation, req.body)
  const reachedCurrently = await prismaClient.campaign.findFirst({
    where: {
      id: req.campaign_id
    }, select: {
      reached: true,
      target: true
    }
  })
  if (reachedCurrently.reached + req.quantity >= reachedCurrently.target)
  {
    throw new ResponseError(401, "Total with Your Donation is Pass the Maximum of Donation")
  }
  const donation = await prismaClient.history.create({
    data: {
      ...valid,
      user_id: req.user.id
    }
  })
  return donation;
}

const updateCampaign = async (req) => {
  const reachedCurrently = await prismaClient.campaign.findFirst({
    where: {
      id: req.campaign_id
    }, select: {
      reached: true
    }
  })
  const update = await prismaClient.campaign.update({
    where: {
      id: req.campaign_id
    },
    data: {
      reached: reachedCurrently.reached + req.quantity
    },
  })
  return update
}

const getAllHistory = async (req) => {
  const result = await prismaClient.history.findMany({
    where: {
      user_id: req.user_id
    }
  })
  return result
}

export default { donate, updateCampaign, getAllHistory }