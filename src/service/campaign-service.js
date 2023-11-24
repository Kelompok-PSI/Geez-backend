import { prismaClient } from "../app/database.js"
import { ResponseError } from "../error/response-error.js";
import { searchCampaignValidation } from "../validation/campaign-validation.js"
import { validate } from "../validation/validation.js"

const getAllCampaign = async () => {
  const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const result = await prismaClient.$queryRaw`SELECT * FROM campaign WHERE reached < target AND deadline > ${currentDate}`;
  return result
}

const findCampaign = async (campaignId) => {
  const campId = parseInt(campaignId)

  validate(searchCampaignValidation, campId)
  const campaign = await prismaClient.campaign.findFirst({
    where: {
      id: campId,
    }
  })

  if (!campaign)
  {
    throw new ResponseError(404, "campaign is Not Found")
  }
  return campaign
}
export default { getAllCampaign, findCampaign }