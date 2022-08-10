import AdminHeader from "../../components/Header/Admin";
import Sidebar from "../../components/Sidebar";

import axios from "axios";
const AdminPage = {
  render: async (_id: any) => {
    const { data } = await axios.get("http://localhost:8080/api/category");
    console.log(data);
    const { data: product } = await axios.get(
      `http://localhost:8080/api/products`
    );

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
 
                    <select class="w-[300px] border rounded-sm h-10"  name="category" id="category">

                    ${data
                      .map(
                        (item: any) =>
                          `<option><a href="admin/category/${item._id}">${item.name}</a></option>`
                      )
                      .join("")}}
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
                    <th class="w-[10%] border">Ảnh</th>
                    <th class="w-[15%] border">Gía</th>
                    <th class="w-[30%] border">Mô tả</th>
                    <th colspan="2" class ="w-[30%] border">Action</th>
                    </tr>
                </thead>
                    <tbody>
                    ${product
                      .map(
                        (item: any, index: any) => /* html */ `
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
                            <button class="btn btn-danger btn-remove text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center  " data-id=${
                              item._id
                            }>Xóa</button> <br>
                            </td>
                            <td class="text-center p-3 px-5">
                                <a href="/admin/product/edit/${item._id}"   >
                                <button class=" text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sửa</button> <br>                  
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
  afterRender() {
    const btns = document.querySelectorAll(".btn-remove");
    btns.forEach((btn: any) => {
      const id = btn.dataset.id;
      console.log(id);

      btn.addEventListener("click", async () => {
        if (btn.classList.contains("btn-remove")) {
          const confirm = window.confirm("Bạn có chắc muốn xóa không ?");
          if (confirm) {
            try {
              await axios.delete(`http://localhost:8080/api/products/${id}`);
              location.href = "/admin";
            } catch (error) {
              errorShow(error);
            }
          }
        }
      });
    });
  },
};

export default AdminPage;
