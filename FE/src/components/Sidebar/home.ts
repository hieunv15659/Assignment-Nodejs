import axios from "axios";
const HomeSidebar = {
  render: async () => {
    const { data } = await axios.get("http://localhost:8080/api/category");
    console.log(data);

    return /* html */ `
          <div class="grid grid-cols-[250px,auto] gap-8">
              <ul class="menu-navber">
              ${data
                .map(
                  (item: any) => /* html */ `
              <li><a href="/category/${item._id}"><i class="fa-solid fa-mobile-button mr-[12px]"></i> ${item.name} </a></li>
      
          `
                )
                .join("")}
              </ul>
 
          </div>
      `;
  },
};
export default HomeSidebar;
