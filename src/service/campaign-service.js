import { prismaClient } from "../app/database.js"
import { ResponseError } from "../error/response-error.js";
import { haversine } from "../utils/location.js";
import { searchCampaignValidation } from "../validation/campaign-validation.js"
import { validate } from "../validation/validation.js"

const getAllCampaign = async () => {
  const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const result = await prismaClient.$queryRaw`
  SELECT * FROM campaign 
  WHERE reached < target AND deadline > ${currentDate}
  ORDER BY id DESC`;
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

  if (!campaign) {
    throw new ResponseError(404, "campaign is Not Found")
  }
  return campaign
}

const campaignSortByNearest = async (location) => {
  const { latitude, longitude } = location
  const campaign = await prismaClient.campaign.findMany()
  const campaignsWithDistances = campaign.map((campaign) => {
    const distance = haversine(
      latitude,
      longitude,
      campaign.latitude,
      campaign.longitude
    );

    return { campaign, distance }
  })
  campaignsWithDistances.sort((a, b) => a.distance - b.distance);
  
  const sortedCampaigns = campaignsWithDistances.map(
    (campaignWithDistance) => campaignWithDistance.campaign
  );

  return { sortedCampaigns }
}


export default { getAllCampaign, findCampaign, campaignSortByNearest }