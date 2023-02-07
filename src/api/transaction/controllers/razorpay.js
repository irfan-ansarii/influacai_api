const Razorpay = require('razorpay')

const { createCoreController } = require('@strapi/strapi').factories

var razorpay = new Razorpay({
  key_id: 'rzp_live_9WzJK8hXMpmrik',
  key_secret: 'Hd8eFoNt9vYP0Nz6TFZkbYDM',
})

module.exports = createCoreController(
  'api::transaction.transaction',
  ({ strapi }) => ({
    async createOrder(ctx) {
      var options = {
        amount: ctx.request.body?.data?.amount * 100,
        currency: 'INR',
      }

      const order = await razorpay.orders.create(options)

      ctx.request.body.data = {
        ...ctx.request.body.data,
        orderId: order.id,
        isCredit: true,
      }

      const response = await super.create(ctx)

      return response
    },
  }),
)
