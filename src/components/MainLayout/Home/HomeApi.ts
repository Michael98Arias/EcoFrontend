import HttpService from '../../shared/services/HttpService';

import { AuthenticationModel, AuthenticationSendModel } from './interfaces/Home';

class AuthenticationInitialApi {
	public login = (data: AuthenticationSendModel['loginToken']): Promise<AuthenticationModel> => {
		const url = 'sign-in/' + localStorage.getItem('Current')
		return HttpService.sing(url, data)
	};
}

export default new AuthenticationInitialApi();
