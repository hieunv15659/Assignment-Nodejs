import { List } from "../../api/product";
import { getcate } from "../../api/category";
import AdminHeader from "../../components/Header/Admin";
import Sidebar from "../../components/Sidebar";
import Product from "../../model/product";

const AdminPage = {
  render: async () => {
    const res = await List();
    const data: Product[] = res.data;
    const listcate: Category = await getcate();
    console.log(data);
    return /* html */ `
        ${AdminHeader.render()}
        <!-- Container -->
        <div class="flex divide-x h-screen mt-4 divide-x">
            <!-- Siderbar -->
            <div class="w-[250px] flex-none mt-4 ml-5">
                ${Sidebar.render()}
            </div>
            <!-- Content -->
            <div class="w-auto p-10   from-gray-100">
            
            <div class="main text-[#5F5E61]">
                <h1 class="text-xl font-semibold">Dien thoai</h1>
                <div class="flex justify-between">
                <div class="filter w-[400px] pt-5 flex justify-between">
                <h1 class="font-bold w-[100%] px-8">Bộ Lọc: </h1>
                    <div class="filter-cate">
                    <label for="category" class="font-bold w-[100%] px-8">Danh muc san pham</label><br>
                    <select class="w-[300px] border rounded-sm h-10" name="category" id="category">
                        ${listcate.data.map(
                          (item) => `
                        <option value="${item.id}">${item.name}</option>
                        `
                        )}
                    </select>
                    </div>
                </div>
    
                <a href="/admin/products/add">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </a>

                </div>
                <table class="w-full mt-10 text-md rounded mb-4">
                <thead>
                    <tr>
                    <th class="w-[5%] border">#</th>
                    <th class="w-[20%] border ">Tên sản phẩm</th>
                    <th class="w-[10%] border">Gía</th>
                    <th class="w-[15%] border">Ảnh</th>
                    <th class="w-[30%] border">Mô tả</th>
                    <th class="w-[10%] border text-center">Ẩn/hiện</th>
                    <th class="w-[10%] border">Thao tác</th>
                    </tr>
                </thead>
                    <tbody>
                    ${data
                      .map(
                        (item, index) => /* html */ `
                        <tr class="border-t-2 hover:bg-orange-100 text-center">
                            <td class="text-center p-3 px-5">${index + 1}</td>
                            <td class="text-center p-3 px-5">${item.name}</td>
                            <td class="border"><img src="${item.image}"/></td>
                            <td class="text-center p-3 px-5">${
                              item.originalPrice
                            }</td>
                            <td class="text-center p-3 px-5">${
                              item.feature
                            }</td>
                            <td class="text-center p-3 px-5">
                                <label for="default-toggle ${
                                  item.id
                                }" class="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" id="default-toggle ${
                                      item.id
                                    }" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </td>
                            <td class="text-center p-3 px-5">
                                <a href="/admin/product/edit/${
                                  item.id
                                }" class="" >
                                    <svg class="mx-auto"  width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4548 3.41575C19.647 3.70687 19.615 4.10248 19.3587 4.35876L10.1663 13.5511C10.0721 13.6454 9.95445 13.7128 9.82552 13.7465L5.99709 14.7465C5.87223 14.7791 5.74352 14.7784 5.62259 14.7476C5.49402 14.7149 5.37425 14.6482 5.27723 14.5511C5.08896 14.3629 5.01462 14.0889 5.08191 13.8313L6.08191 10.0028C6.11138 9.89003 6.16667 9.77861 6.24316 9.69121L15.4696 0.46967C15.5504 0.388906 15.6477 0.32846 15.7535 0.291631C15.832 0.264324 15.9152 0.25 15.9999 0.25C16.1989 0.25 16.3896 0.329017 16.5303 0.46967L19.3587 3.2981C19.3953 3.33471 19.4273 3.37416 19.4548 3.41575ZM17.7677 3.82843L15.9999 2.06066L7.48178 10.5788L6.85679 12.9716L9.24955 12.3466L17.7677 3.82843Z" fill="black"/>
                                        <path d="M17.6413 15.1603C17.9147 12.8227 18.0017 10.4688 17.9023 8.12079C17.8975 8.00837 17.9398 7.89898 18.0194 7.81942L19.0027 6.83609C19.1236 6.71519 19.3302 6.79194 19.3415 6.96254C19.5264 9.75219 19.4563 12.5545 19.1311 15.3346C18.8946 17.3571 17.2703 18.9421 15.2582 19.167C11.7916 19.5544 8.20828 19.5544 4.74171 19.167C2.72965 18.9421 1.10532 17.3571 0.868765 15.3346C0.454227 11.7903 0.454227 8.20973 0.868765 4.66543C1.10532 2.6429 2.72965 1.05789 4.74171 0.833012C7.37146 0.539099 10.0684 0.468149 12.7306 0.620161C12.9022 0.629958 12.9804 0.837575 12.8589 0.959093L11.8663 1.95165C11.7876 2.03034 11.6797 2.07261 11.5685 2.06885C9.34205 1.99376 7.10049 2.07872 4.90832 2.32373C3.57821 2.47239 2.51272 3.522 2.35861 4.83968C1.95761 8.26821 1.95761 11.7318 2.35861 15.1603C2.51272 16.478 3.57821 17.5276 4.90832 17.6763C8.26417 18.0513 11.7357 18.0513 15.0916 17.6763C16.4217 17.5276 17.4872 16.478 17.6413 15.1603Z" fill="black"/>
                                    </svg>                      
                                </a>
                            </td>
                        </tr>
                    `
                      )
                      .join("")}

                    </tbody>
                </table>
            </div>
            </div>
        </div>
        `;
  },
};

export default AdminPage;
