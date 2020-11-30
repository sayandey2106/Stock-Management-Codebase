export const all_student_options = [
  { id: 0, name: "Home", icon: "home", link: "/" },
  { id: 1, name: "Batches", icon: "home", link: "/batches" },
  { id: 2, name: "Workshops", icon: "book", link: "/workshops" },
  { id: 3, name: "Dashboard", icon: "dashboard", link: "/" }
];

export const all_account_option = [
  { id: 0, name: "Home", icon: "home", link: "/" },
  { id: 1, name: "Workshops", icon: "handyman", link: "/workshops" },
  { id: 2, name: "Webinars", icon: "phonelink", link: "/webinars" },
  { id: 3, name: "Batches", icon: "people", link: "/batches" }
];

export const all_marketing_option = [
  { id: 0, name: "Home", icon: "home", link: "/" },
  { id: 1, name: "Workshops", icon: "handyman", link: "/workshops" },
  { id: 2, name: "Webinars", icon: "phonelink", link: "/webinars" },
  { id: 3, name: "Batches", icon: "people", link: "/batches" }
];
export const all_intrainer_option = [
  { id: 0, name: "Home", icon: "home", link: "/" },
  { id: 1, name: "Workshops", icon: "handyman", link: "/workshops" },
  { id: 2, name: "Webinars", icon: "phonelink", link: "/webinars" },
  { id: 3, name: "Batches", icon: "people", link: "/batches" }
];

export const all_admin_option = [
  { id: 0, name: "Dashboard", icon: "home", link: "/" },
  {
    id: 1, name: "Staffs", icon: "work", subdivision: [
      { id: 1, name: "Trainer", icon: "assignment_ind", link: "/trainer" },
      { id: 2, name: "Accountants", icon: "account_balance", link: "/accountants" },
      { id: 3, name: "Marketing", icon: "business_center", link: "/marketing" },
    ]
  },
  {
    id: 2, name: "Classes", icon: "list", subdivision: [
      { id: 0, name: "Workshops", icon: "handyman", link: "/workshops" },
      { id: 1, name: "Webinars", icon: "phonelink", link: "/webinars" },
      { id: 2, name: "Batches", icon: "people", link: "/batches" }
    ]
  },
  {
    id: 3, name: "Masters", icon: "view_quilt", subdivision: [
      { id: 3, name: "Categories", icon: "view_module", link: "/programs" },
      { id: 4, name: "Courses", icon: "view_comfy", link: "/courses" },
    ]
  },

];
export const all_super_admin_option = [
  { id: 0, name: "Home", icon: "home", link: "admin_dashboard" },
];
