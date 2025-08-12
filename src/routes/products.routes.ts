import { Router } from 'express'
import { ProductsController } from '@/controllers/products-controller'
import { ensureAuthenticated } from '@/middlewares/ensureAuthenticated'
import { verifyUserAuthorization } from '@/middlewares/verify-userAuthorization'

const productsRoutes = Router()
const productsController = new ProductsController()

//Aplicar autorização em todas as rotas abaixo
// productsRoutes.use(verifyUserAuthorization(['sale', 'admin']))
productsRoutes.get('/', productsController.index)
productsRoutes.post(
  '/',
  ensureAuthenticated,
  verifyUserAuthorization(['sale', 'admin']),
  productsController.create
)

export { productsRoutes }
