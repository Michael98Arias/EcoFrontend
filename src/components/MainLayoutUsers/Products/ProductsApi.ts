import HttpService from '../../../shared/services/HttpService';

import { CategoryCount, ProductCount, CategoryList, StatusSendModel, CategorySendModel} from './interfaces/Products';

class LoginApi {
	public categoryCount = (): Promise<CategoryCount> => {
		const url = 'category/count'
		return HttpService.get(url)
	};
	public productCount = (): Promise<ProductCount> => {
		const url = 'product/count'
		return HttpService.get(url)
	};
	public categoriesList= (): Promise<CategoryList> => {
		const url = 'category'
		return HttpService.get(url)
	};
	public changeCategoryStatus = (data: StatusSendModel, ): Promise<void> => {
		const url = `categoryState/${data.id}/${data.status}`
		return HttpService.patch(url)
	};
	public createCategory = (data: CategorySendModel): Promise<void> => {
		const url = 'createCategory'
		return HttpService.post(url, data)
	};
	public editCategory = (id: number, data: CategorySendModel): Promise<void> => {
		const url = `editCategory/${id}`
		return HttpService.put(url, data)
	};


	public productList= (): Promise<CategoryList> => {
		const url = 'product'
		return HttpService.get(url)
	};
	public changeProductStatus = (data: StatusSendModel, ): Promise<void> => {
		const url = `productState/${data.id}/${data.status}`
		return HttpService.patch(url)
	};
	public createProduct = (data: CategorySendModel): Promise<void> => {
		const url = 'createProduct'
		return HttpService.post(url, data)
	};
}

export default new LoginApi();
