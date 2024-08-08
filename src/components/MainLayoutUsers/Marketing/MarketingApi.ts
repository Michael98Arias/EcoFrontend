import HttpService from '../../../shared/services/HttpService';

import { ChannelCount, CampaignCount, ChannelList, StatusSendModel, ChannelSendModel} from './interfaces/Marketing';

class MarketingApi {
	public channelCount = (): Promise<ChannelCount> => {
		const url = 'channel/count'
		return HttpService.get(url)
	};
	public campaignCount = (): Promise<CampaignCount> => {
		const url = 'campaign/count'
		return HttpService.get(url)
	};
	public categoriesList= (): Promise<ChannelList> => {
		const url = 'channel'
		return HttpService.get(url)
	};
	public changeChannelStatus = (data: StatusSendModel, ): Promise<void> => {
		const url = `channelState/${data.id}/${data.status}`
		return HttpService.patch(url)
	};
	public createChannel = (data: ChannelSendModel): Promise<void> => {
		const url = 'createChannel'
		return HttpService.post(url, data)
	};
	public editChannel = (id: number, data: ChannelSendModel): Promise<void> => {
		const url = `editChannel/${id}`
		return HttpService.put(url, data)
	};


	public campaignList= (): Promise<ChannelList> => {
		const url = 'campaign'
		return HttpService.get(url)
	};
	public changeCampaignStatus = (data: StatusSendModel, ): Promise<void> => {
		const url = `campaignState/${data.id}/${data.status}`
		return HttpService.patch(url)
	};
	public createCampaign = (data: ChannelSendModel): Promise<void> => {
		const url = 'createCampaign'
		return HttpService.post(url, data)
	};
}

export default new MarketingApi();
