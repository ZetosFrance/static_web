import index from "@/views/index.vue"

export default [
  {
    path: "/",
    component: index,
    children: [
      {
        path: "",
        component: () => import("@/views/Home.vue"),
        name: "home",
      },
      {
        path: "upload",
        component: () => import("@/views/upload.vue"),
        name: "upload",
      },
      {
        path: "uploadlist",
        component: () => import("@/views/uploadlist.vue"),
        name: "uploadlist",
      },
      {
        path: "letter",
        component: () => import("@/views/letter.vue"),
        name: "letter",
      },
      {
        path: "chat",
        component: () => import("@/views/chat.vue"),
        name: "chat",
      },
      {
        path: "jobSearch",
        component: () => import("@/views/jobSearch.vue"),
        name: "jobSearch",
      },
      {
        path: "suggestions",
        component: () => import("@/views/suggestions.vue"),
        name: "suggestions",
      },
      {
        path: "dashboard",
        component: () => import("@/views/dashboard.vue"),
        name: "dashboard",
      },
      {
        path: "student",
        component: () => import("@/views/student.vue"),
        name: "student",
      },
      {
        path: "score",
        component: () => import("@/views/score.vue"),
        name: "score",
      },
      {
        path: "interviewFinish",
        component: () => import("@/views/interviewFinish.vue"),
        name: "interviewFinish",
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
]
