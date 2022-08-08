import "./style.css";

import Navigo from "navigo";
import HomePage from "./pages/Home";
import AddProductPage from "./pages/Admin/Product/add";

import AdminPage from "./pages/Admin";
import EditProductPage from "./pages/Admin/Product/editproduct";
import detailProduct from "./pages/Home/detail";
import signin from "./pages/auth/signin";
import signup from "./pages/auth/signup";
import Cart from "./pages/Home/cart";

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
  "/Cart": () => {
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
