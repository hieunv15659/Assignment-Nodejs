import { catebyId } from "../../api/category";
import { getAll } from "../../api/product";
import footer from "../../components/Footer";
import UserHeader from "../../components/Header/User";

const detailProduct = {
  render: async (id: Number) => {
    const list = await getAll(id);
    const data: Product = list.data;

    const listdata: Category = await catebyId(id);
    const listcate = listdata.data;

    const itemProd: Product = list.data;
    const idbyProd = itemProd.category;

    return /*html*/ `        
           ${UserHeader.render()}
           <div class="md:place-items-center">   
           <nav class="bg-gray-50 dark:bg-gray-700">
           <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-8">
               <div class="flex items-center">
                   <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium text-lg">
                       <li>
                           <a href="/" class="text-gray-900 dark:text-white hover:underline " aria-current="page">Trang Chủ</a>
                       </li> <div class="mt-2"><img src="../icon/muiten.png"></div>
                       <li>
                           <a href="#" class="text-gray-900 dark:text-white hover:underline ">${
                             listcate.name
                           }</a>
                       </li> <div class="mt-2"><img src="../icon/muiten.png"></div>
                       <li>
                           <a href="#" class="text-gray-900 dark:text-white hover:underline">${
                             data.name
                           }</a>
                       </li>
                   </ul>
               </div>
           </div>
       </nav>
            <div class="text-xl px-8 border-2 ring-offset-yellow-50 ">
                ${data.name}   
            </div>

              <div class="grid gap-2 grid-cols-2 py-12 ">

                  <div class="px-24 ">
                    <img src="${data.image}" id="img-post" name="img-post"/>   
                    <div class="flex pt-6 p-8">
                           <div class="border border-indigo-600 rounded-lg w-20 grid mr-4  place-items-center ">
                              <img class="w-5 h-5 " src="../icon/sao.png"  >
                              <p>Tính năng 
                              nổi bật</p>
                           </div>
                           <div class="border border-indigo-600 rounded-lg w-20 grid   place-items-center ">
                           <img src="${data.image}"/>   
                        </div>
                            <div class="border border-indigo-600 rounded-lg w-20 grid   place-items-center ">
                            <img src="${data.image}"/>   
                        </div>
                            <div class="border border-indigo-600 rounded-lg w-20 grid   place-items-center ">
                            <img src="${data.image}"/>   
                          </div>
                    </div>
 
  
                  </div>

                  <div>
                      <div class="flex pt-6 ">
                          <p class="text-red-700 font-bold text-2xl ">${
                            data.saleOffPrice
                          } đ<p>
                          <p class="px-8 line-through">${data.originalPrice}đ<p>
                      </div>
             
                      <div class="py-8 ">Mô tả ngắn :${data.shortDesc}</div>  
 
                      <div class="flex my-32">
                        <a  ><button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" id="cart"> Mua Ngay</button></a> 
                        <div>
                          <a  ><div class="w-20 mr-2 mb-2    border border-red-600    grid mr-4  place-items-center "><img src="../icon/Icon-cart.jpg"> </div> </a> 
                           <p class="flex">Thêm vào giỏ hàng</p>
                        </div>   
                      </div>
                  </div>

              </div>
              <div class="">
                  <h1 class="px-24 text-xl ">Sản phẩm tương tự</h1>
                  <div>
                          <div> 

                          </div>
                  </div>
              </div>
              <div class="pt-14 px-28 justify-center">
                  <div class="   px-28  h-100px p-4  bg-gray-200  ">
                    <p class="flex justify-center text-red-600 text-xl">ĐẶC ĐIỂM NỔI BẬT</p>
                    <p class="pt-6 py-8 flex justify-center">${data.feature}</p>
                  </div>
                </div>
            </div>
             <p class="pt-24 px-28 py-8 flex justify-center ">${
               data.longDesc
             }</p>
            <div class="bottom-0   pt-24"> ${footer.render()}</div>
        `;
  },
  afterRender: async () => {
    const btnmua = document.querySelector("#cart");

    btnmua?.addEventListener("click", async function (e) {
      const name = document.querySelector("#name")?.value;
      const price = document.querySelector("#originalPrice")?.value;
      const sale = document.querySelector("#saleOffPrice")?.value;

      const productCart: Product = {
        name: name,
        originalPrice: price,
        saleOffPrice: sale,
      };

      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        const index = cart.findIndex((x) => x._id === productCart._id);
        if (index === -1) {
          cart.push(productCart);
        }
        localStorage.setItem("cart", JSON.stringify([...cart]));
      } else {
        localStorage.setItem("cart", JSON.stringify([productCart]));
      }
      const newCart = JSON.parse(localStorage.getItem("cart"));
      console.log(newCart, "localstorage");
      if (productCart) {
        alert("Bạn đã thêm sản phẩm thành công");
      }
      window.location.href = "/Cart";
    });
  },
};

export default detailProduct;
