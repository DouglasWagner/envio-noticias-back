import { container } from 'tsyringe'
import { tokens } from '@di/tokens'
import { Config } from '@config/Config'
import { Routes } from '@presentation/http/Routes'
import { DocsController } from '@presentation/http/controllers/DocsController'
import { DocsService } from '@infrastructure/docs/DocsService'
import UserRepository from '@domain/authentication/repositories/UserRepository'
import AuthenticationService from '@domain/authentication/services/AuthenticationService'
import { LoginController } from '@presentation/http/controllers/Authentication/LoginController'
import PasswordResetController from '@presentation/http/controllers/Authentication/PasswordResetController'
import { AuthenticationRoutes } from '@presentation/http/routes/AuthenticationRoutes'
import AuthenticationMiddleware from '@presentation/http/middlewares/AuthenticationMiddleware'
import CompanyRepository from '@domain/company/repositories/CompanyRepository'
import CompanyService from '@domain/company/services/CompanyService'
import { CompanyRoutes } from '@presentation/http/routes/CompanyRoutes'
import { CompanyCreateController } from '@presentation/http/controllers/company/CompanyCreateController'
import { CompanyUpdateController } from '@presentation/http/controllers/company/CompanyUpdateController'
import { CreateUserController } from '@presentation/http/controllers/Authentication/CreateUserController'
import GetUserListController from '@presentation/http/controllers/Authentication/GetUserListController'
import GetUserController from '@presentation/http/controllers/Authentication/GetUserController'
import UpdateUserController from '@presentation/http/controllers/User/UpdateUserController'
import { PasswordChangeController } from '@presentation/http/controllers/User/PasswordChangeController'
import { UserRoutes } from '@presentation/http/routes/UserRoutes'

import { SectorRoutes } from '@presentation/http/routes/SectorRouter'
import { SectorGetController } from '@presentation/http/controllers/Sectors/SectorGetController'
import SectorService from '@domain/sectors/services/SectorService'
import SectorRepository from '@domain/sectors/repositories/SectorRepository'
import { ReleaseRoutes } from '@presentation/http/routes/ReleaseRoutes'
import ReleaseService from '@domain/release/services/ReleaseService'
import { ReleaseCreateController } from '@presentation/http/controllers/release/ReleaseCreateController'
import ReleaseRepository from '@domain/release/repositories/ReleaseRepository'
import { ReleaseListController } from '@presentation/http/controllers/release/ReleaseListController'
import { GroupRoutes } from '@presentation/http/routes/GroupRoutes'
import { GroupListController } from '@presentation/http/controllers/group/GroupListController'
import GroupService from '@domain/group/services/GroupService'
import GroupRepository from '@domain/group/repositories/GroupRepository'
import { GroupCreateController } from '@presentation/http/controllers/group/GroupCreateController'
import { ReleaseUpdateController } from '@presentation/http/controllers/release/ReleaseUpdateController'
import { ReleaseDeleteController } from '@presentation/http/controllers/release/ReleaseDeleteController'
import { ReleaseImagesCreateController } from '@presentation/http/controllers/release/ReleaseImagesCreateController'

import ReleaseImageService from '@domain/release/services/ReleaseImageService'
import EmailListRepository from '@domain/emailList/repositories/EmailListRepository'
import EmailListService from '@domain/emailList/services/EmailListService'
import EmailSendService from '@domain/emailList/services/EmailSendService'
import { EmailListController } from '@presentation/http/controllers/emailList/EmailListController'
import { EmailListCreateController } from '@presentation/http/controllers/emailList/EmailListCreateController'
import { EmailListShowController } from '@presentation/http/controllers/emailList/EmailListShowController'
import { EmailListDeleteController } from '@presentation/http/controllers/emailList/EmailListDeleteController'
import { EmailListUpdateController } from '@presentation/http/controllers/emailList/EmailListUpdateController'
import { EmailListRoutes } from '@presentation/http/routes/EmailListRoutes'

import { GalleryReleaseRoutes } from '@presentation/http/routes/GalleryReleaseRoute'
import { GalleryReleaseDeleteController } from '@presentation/http/controllers/GalleryRelease/GalleryReleaseDeleteController'
import GalleryService from '@domain/gallery/services/GalleryService'
import GalleryRepository from '@domain/gallery/repositories/GalleryRepository'

import { SendReleaseToMeRoutes } from '@presentation/http/routes/SendReleaseToMeRoutes'
import { SendReleaseToMeSendController } from '@presentation/http/controllers/SendMail/SendReleaseToMeSendController'
import { SendReleaseToEmailListRoutes } from '@presentation/http/routes/SendReleaseToEmailListRoutes'
import { SendReleaseToEmailListSendController } from '@presentation/http/controllers/SendMail/SendReleaseToEmailListSendController'
import { SendMailTestService } from '@domain/sendEmail/services/SendMailTestService'
import SendEmailRepository from '@domain/sendEmail/repositories/SendMailRepository'
import { MailsenderProvider } from '@domain/sendEmail/providers/MailsenderProvider'
import { SendMailService } from '@domain/sendEmail/services/SendMailListService'
import { HtmlHelper } from '@domain/sendEmail/helper/htmlHelper'

// Creates a new child container based on root container
const childContainer = container.createChildContainer()

// App registers
childContainer.registerSingleton(tokens.Config, Config)
childContainer.registerSingleton(tokens.Routes, Routes)

// Midlewares
childContainer.registerSingleton(
  tokens.AuthenticationMiddleware,
  AuthenticationMiddleware
)

// Docs
childContainer.registerSingleton(tokens.DocsController, DocsController)
childContainer.registerSingleton(tokens.DocsService, DocsService)

// Autentication
childContainer.registerSingleton(tokens.UserRepository, UserRepository)
childContainer.registerSingleton(tokens.LoginController, LoginController)
childContainer.registerSingleton(
  tokens.AuthenticationRoutes,
  AuthenticationRoutes
)
childContainer.registerSingleton(
  tokens.AuthenticationService,
  AuthenticationService
)
childContainer.registerSingleton(
  tokens.CreateUserController,
  CreateUserController
)
childContainer.registerSingleton(
  tokens.PasswordChangeController,
  PasswordChangeController
)
childContainer.registerSingleton(
  tokens.PasswordResetController,
  PasswordResetController
)

//Sectors
childContainer.registerSingleton(tokens.SectorRoutes, SectorRoutes)
childContainer.registerSingleton(
  tokens.SectorGetController,
  SectorGetController
)
childContainer.registerSingleton(tokens.SectorRepository, SectorRepository)
childContainer.registerSingleton(tokens.SectorService, SectorService)
//endingn Sectors

// User

childContainer.registerSingleton(tokens.UserRoutes, UserRoutes)
childContainer.registerSingleton(
  tokens.GetUserListController,
  GetUserListController
)
childContainer.registerSingleton(tokens.GetUserController, GetUserController)
childContainer.registerSingleton(
  tokens.UpdateUserController,
  UpdateUserController
)

// Company
childContainer.registerSingleton(tokens.CompanyRepository, CompanyRepository)
childContainer.registerSingleton(tokens.CompanyService, CompanyService)
childContainer.registerSingleton(tokens.CompanyRoutes, CompanyRoutes)
childContainer.registerSingleton(
  tokens.CompanyCreateController,
  CompanyCreateController
)
childContainer.registerSingleton(
  tokens.CompanyUpdateController,
  CompanyUpdateController
)

// Release
childContainer.registerSingleton(tokens.ReleaseRoutes, ReleaseRoutes)
childContainer.registerSingleton(
  tokens.ReleaseCreateController,
  ReleaseCreateController
)
childContainer.registerSingleton(
  tokens.ReleaseListController,
  ReleaseListController
)
childContainer.registerSingleton(
  tokens.ReleaseUpdateController,
  ReleaseUpdateController
)
childContainer.registerSingleton(
  tokens.ReleaseDeleteController,
  ReleaseDeleteController
)
childContainer.registerSingleton(tokens.ReleaseService, ReleaseService)
childContainer.registerSingleton(tokens.ReleaseRepository, ReleaseRepository)

//Galery
childContainer.registerSingleton(
  tokens.ReleaseImagesCreateController,
  ReleaseImagesCreateController
)

childContainer.registerSingleton(
  tokens.ReleaseImageService,
  ReleaseImageService
)

childContainer.registerSingleton(tokens.GalleryReleaseRoutes, GalleryReleaseRoutes)
childContainer.registerSingleton(tokens.GalleryReleaseDeleteController, GalleryReleaseDeleteController)
childContainer.registerSingleton(tokens.GalleryService, GalleryService)
childContainer.registerSingleton(tokens.GalleryRepository, GalleryRepository)

//Group
childContainer.registerSingleton(tokens.GroupRoutes, GroupRoutes)
childContainer.registerSingleton(
  tokens.GroupListController,
  GroupListController
)
childContainer.registerSingleton(
  tokens.GroupCreateController,
  GroupCreateController
)
childContainer.registerSingleton(tokens.GroupService, GroupService)
childContainer.registerSingleton(tokens.GroupRepository, GroupRepository)

// Email List
childContainer.registerSingleton(
  tokens.EmailListRepository,
  EmailListRepository
)
childContainer.registerSingleton(tokens.EmailListService, EmailListService)
childContainer.registerSingleton(tokens.EmailSendService, EmailSendService)
childContainer.registerSingleton(
  tokens.EmailListController,
  EmailListController
)
childContainer.registerSingleton(
  tokens.EmailListCreateController,
  EmailListCreateController
)
childContainer.registerSingleton(
  tokens.EmailListShowController,
  EmailListShowController
)
childContainer.registerSingleton(
  tokens.EmailListDeleteController,
  EmailListDeleteController
)
childContainer.registerSingleton(
  tokens.EmailListUpdateController,
  EmailListUpdateController
)
// Send Release
childContainer.registerSingleton(
  tokens.SendReleaseToMeRoutes,
  SendReleaseToMeRoutes
)
childContainer.registerSingleton(
  tokens.SendReleaseToMeSendController,
  SendReleaseToMeSendController
)
childContainer.registerSingleton(
  tokens.SendReleaseToEmailListRoutes,
  SendReleaseToEmailListRoutes
)

childContainer.registerSingleton(
  tokens.SendReleaseToEmailListSendController,
  SendReleaseToEmailListSendController
)

childContainer.registerSingleton(
  tokens.EmailListRoutes, 
  EmailListRoutes
)

childContainer.registerSingleton(
  tokens.SendEmailTestService, 
  SendMailTestService
)

childContainer.registerSingleton(
  tokens.SendEmailRepository, 
  SendEmailRepository
)

childContainer.registerSingleton(
  tokens.MailsenderProvider, 
  MailsenderProvider
)

childContainer.registerSingleton(
  tokens.SendMailService, 
  SendMailService
)

childContainer.registerSingleton(
  tokens.HtmlHelper, 
  HtmlHelper
)

export { childContainer as container }
