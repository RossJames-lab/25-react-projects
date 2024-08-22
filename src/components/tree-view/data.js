export const sideMenu = [
    {
      title: "Dashboard",
      icon: "dashboard_icon",
      path: "/dashboard",
    },
    {
      title: "Products",
      icon: "products_icon",
      path: "/products",
      children: [
        {
          title: "All Products",
          path: "/products/all",
        },
        {
          title: "Categories",
          path: "/products/categories",
          children: [
            {
              title: "Electronics",
              path: "/products/categories/electronics",
            },
            {
              title: "Clothing",
              path: "/products/categories/clothing",
            },
          ],
        },
        {
          title: "New Arrivals",
          path: "/products/new-arrivals",
        },
      ],
    },
  ];
  