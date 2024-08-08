import HttpService from '../../../shared/services/HttpService';

import { UserSendModelRegister } from './../../MainLayout/Login/interfaces/Login';
import { RoleCount, RoleSendModel, ListUserByRole, StatusSendModel } from './interfaces/Users';

class LoginApi {
	public roleCount = (): Promise<RoleCount> => {
		const url = 'role/count'
		return HttpService.get(url)
	};
	public listByRole = (data: RoleSendModel): Promise<ListUserByRole> => {
		const url = `user/${data.role}`
		return HttpService.get(url)
	};
	public changeStatus = (data: StatusSendModel): Promise<ListUserByRole> => {
		const url = `userState/${data.id}/${data.status}`
		return HttpService.patch(url)
	};
	
	public createUser = (data: UserSendModelRegister): Promise<void> => {
		const url = 'createUser'
		return HttpService.post(url, data)
	};
	public editUser = (id: number, data: UserSendModelRegister): Promise<void> => {
		const url = `editUser/${id}`
		return HttpService.put(url, data)
	};
}

export default new LoginApi();
