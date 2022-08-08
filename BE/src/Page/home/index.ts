import { List } from "../../api/product";
import footer from "../../components/Footer";
import UserHeader from "../../components/Header/User";
import HomeSidebar from "../../components/Sidebar/home";
import Product from "../../model/product";

const HomePage = {
  render: async () => {
    const res = await List();
    const data: Product[] = res.data;
    console.log(data);

    return /*html*/ `
            ${UserHeader.render()} 
            <div class="mt-4 flex pt-6 " >
                <div class="w-[300px] flex-none">
                ${HomeSidebar.render()}
                </div>
         
                <div class=" flex flex-wrap justify-center pt-6 w-[1500px] ">
                <img src="https://www.duchuymobile.com/images/promo/34/s20-plus-pc-banner.jpg" alt="">
                </div>
           
            </div>
            <h1 class="py-8 px-20  font-bold">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>     
            <div class=" grid grid-cols-4 gap-4 mt-4 mb-4 px-20 pt-6">
                   
                ${data
                  .map((iphone) => {
                    return /*html*/ `  
                    <a href="/product/${iphone.id}">
                    <div>
                        <div class="flex justify-center"><img class="max-h-[200px]  " src="${iphone.image}"></div>
                         
                        <p>${iphone.name}<p>
                        <div class="flex pt-6 ">
                            <p class="text-red-700 font-bold  ">${iphone.saleOffPrice} đ<p>
                            <p class="px-8  line-through">${iphone.originalPrice}đ<p>
                        </div>
                        <div class="box-content h-auto w-auto p-4 border-4 bg-gray-200">
                        <p>[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ</p>
                        </div>
                        <div class="flex pt-6">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#00000" style="color:#00000" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#00000" style="color:#00000" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#00000" style="color:#00000" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#00000" style="color:#00000" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="16" color="#00000" style="color:#00000" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
                            <p class="pl-2">0 đánh giá</p>
                        </div>
                 
                    </div> 
                    </a>
                    `;
                  })
                  .join("")}     
            </div>
            ${footer.render()}

        `;
  },
};

export default HomePage;
