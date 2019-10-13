<template>
  <div class="article">
    <pre>// router/index.js

const requireAuth = () => (from, to, next) => {
  const isAuthenticated = false
  if (isAuthenticated) return next()
  next('/login?returnPath=me')
}

export default new Router({
    /* 중략 */
    {
      path: '/me',
      name: 'Me',
      component: Me,
      beforeEnter: requireAuth()
    }
  ]
})</pre>
  </div>
</template>

<style scoped>
.article {
  min-height: 400px;
  padding: 5%;
}
</style>