import "./style.css";
import Navigo from "navigo";
import HomePage from "./Page/home";
import AddProductPage from "./Page/Admin/Product/add";
import AdminPage from "./Page/Admin";
import EditProductPage from "./Page/Admin/Product/editproduct";
import detailProduct from "./Page/home/detail";
import signin from "./Page/auth/signin";
import signup from "./Page/auth/signup";
import Cart from "./Page/home/cart";

const router = new Navigo("/", { linksSelector: "a" });

export type ComponentBase = {
  render: (id: any) => Promise<string>;
  afterRender?: () => void;
};

const print = async (
  component: ComponentBase,
  id: ComponentBase,
  params?: any
) => {
  document.getElementById("app").innerHTML = await component.render(id);
  if (component.afterRender) {
    component.afterRender(id);
  }
};

router.on({
  "/": () => {
    print(HomePage);
  },
  "/admin": () => {
    print(AdminPage);
  },
  "/admin/products/add": () => {
    print(AddProductPage);
  },
  "/admin/product/edit/:id": (data: any) => {
    const id = +data.data.id;
    console.log(id);
    print(EditProductPage, id);
  },
  "/product/:id": (params: any) => {
    const id = params.data.id;
    console.log(id);
    print(detailProduct, id);
  },
  "/Cart/": () => {
    print(Cart);
  },

  "/signin": () => {
    print(signin);
  },
  "/signup": () => {
    print(signup);
  },
});
router.resolve();
