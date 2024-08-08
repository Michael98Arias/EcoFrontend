import HttpService from '../../../shared/services/HttpService';

import { UserSendModelLogin, UserSendModelRegister, DataReponse } from './interfaces/Login';

class LoginApi {
	public login = (data: UserSendModelLogin): Promise<DataReponse> => {
		const url = 'login'
		return HttpService.sing(url, data)
	};
	public register = (data: UserSendModelRegister): Promise<DataReponse> => {
		const url = 'register'
		return HttpService.sing(url, data)
	};
}

export default new LoginApi();
