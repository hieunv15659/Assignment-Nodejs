const UserHeader = {
  render: () => {
    return /*html*/ `
                <div  class="flex bg-red-500 ">
                    <a href="/">
                    <div class="  justify-between ml-20">
                        <img class="w-[64px] p-2" src="/images/logo.png"/>			
                    </div>
                    </a>
                    <div class="  flex ">
                    <form class="flex items-center ml-15 pl-2">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] pl-10 p-2.5 w dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required="">
                    </div>
                    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-white-700 rounded-lg border border-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-white-800">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only">Search</span>
                    </button>
                </form>       
                </div>	

                    <div class="text-white pt-1 px-8">
                        <p>Gọi mua ngay</p>
                        <p>1800.2097</p>
                    </div>

                    <div class="text-white pt-1 px-8 flex ">
                    <img  class="w-7 h-7  mt-3" src=".../icon/map.png"  >
                    <div class="flex-col">       
                        <p>Cửa hàng</p>
                        <p>gần bạn</p>
                    </div>

                    </div>

                    <div class="text-white pt-1 px-8 flex ">
                    <img  class="w-10 h-7  mt-3" src=".../icon/xe.png"  >
                    <div class="flex-col">       
                        <p>Tra cứu</p>
                        <p>đơn hàng</p>
                    </div>

                    <div class="text-white pt-1 px-8 flex ">
                    <img  class="w-7 h-7  mt-2 " src=".../icon/giohang.png" >
                    <div class="flex-col mt-3">       
                        <p>Giỏ Hàng</p>
                    </div>

                    <div class="text-white pt-1 px-8 flex ">
                        <p> <a href="/signup">Đăng Ký</a></p>
                        <p><a href="/signin">/ Đăng Nhập</a></p>
                    </div>

                    <div class="text-white pt-1 px-8 flex ">
                    <p><a href="/admin">Admin</a></p>
                    </div> 
               
                    
                        </div>
                    </div>              
               </div>
                `;
  },
};

export default UserHeader;
