module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/transactions/razorpay',
      handler: 'razorpay.createOrder',
    },
  ],
}
