export const tokens = {
  // App general
  Config: Symbol('Config'),
  Logger: Symbol('Logger'),
  Routes: Symbol('Routes'),
  App: Symbol('App'),

  //Midlewares
  AuthenticationMiddleware: Symbol('AuthenticationMiddleware'),

  // Infrastructure
  DocsService: Symbol('DocsService'),
  DocsController: Symbol('DocsController'),
  StatusService: Symbol('StatusService'),

  // Domain: Authentication
  AuthenticationService: Symbol('AuthenticationService'),
  LoginController: Symbol('LoginController'),
  LoginGoogleController: Symbol('LoginGoogleController'),
  LogoutController: Symbol('LogoutController'),
  AuthenticationRoutes: Symbol('AuthenticationRoutes'),
  CreateUserController: Symbol('CreateUserController'),
  PasswordChangeController: Symbol('PasswordChangeController'),
  UserRepository: Symbol('UserRepository'),
  PasswordResetController: Symbol('PasswordResetController'),

  // Domain: User
  UserRoutes: Symbol('UserRoutes'),
  GetUserListController: Symbol('GetUserListController'),
  GetUserController: Symbol('GetUserController'),
  UpdateUserController: Symbol('UpdateUserController'),

  // Domain: Sectors
  SectorRoutes: Symbol('SectorRouter'),
  SectorRepository: Symbol('SectorRepository'),
  SectorGetController: Symbol('SectorGetController'),
  SectorService: Symbol('SectorService'),

  // Domain: Company
  CompanyRepository: Symbol('CompanyRepository'),
  CompanyService: Symbol('CompanyService'),
  CompanyRoutes: Symbol('CompanyRoutes'),
  CompanyCreateController: Symbol('CompanyCreateController'),
  CompanyUpdateController: Symbol('CompanyUpdateController'),
  CompanyGetTeamsController: Symbol('CompanyGetTeamsController'),

  // Domain: Initiative
  InitiativeRepository: Symbol('InitiativeRepository'),
  InitiativeService: Symbol('InitiativeService'),
  InitiativeImportController: Symbol('InitiativeImportController'),
  InitiativeRoutes: Symbol('InitiativeRoutes'),
  InitiativeListByCompany: Symbol('InitiativeListByCompany'),
  InitiativeCreateController: Symbol('InitiativeCreateController'),
  InitiativeUpdateController: Symbol('InitiativeUpdateController'),
  InitiativeFindOneController: Symbol('InitiativeFindOneController'),
  InitiativeFollowController: Symbol('InitiativeFollowController'),
  InitiativeUnfollowController: Symbol('InitiativeUnfollowController'),

  // Domain: Team
  TeamRepository: Symbol('TeamRepository'),
  TeamService: Symbol('TeamService'),

  // Domain: Post
  PostRepository: Symbol('PostRepository'),
  PostService: Symbol('PostService'),
  CreatePostController: Symbol('CreatePostController'),
  UpdatePostController: Symbol('UpdatePostController'),
  PostRoutes: Symbol('PostRoutes'),
  GetFeedController: Symbol('GetFeedController'),
  GetPostController: Symbol('GetPostController'),

  // Domain: Notification
  NotificationController: Symbol('NotificationController'),
  WhatsAppService: Symbol('WhatsAppService'),
  EmailService: Symbol('EmailService'),

  // Domain: Release
  ReleaseRoutes: Symbol('ReleaseRoutes'),
  ReleaseCreateController: Symbol('ReleaseCreateController'),
  ReleaseListController: Symbol('ReleaseListController'),
  ReleaseUpdateController: Symbol('ReleaseUpdateController'),
  ReleaseDeleteController: Symbol('ReleaseDeleteController'),
  ReleaseService: Symbol('ReleaseService'),
  ReleaseRepository: Symbol('ReleaseRepository'),

  // Domain: ReleaseImage
  ReleaseImagesCreateController: Symbol('ReleaseImagesCreateController'),
  ReleaseImageService: Symbol('ReleaseImageService'),

  // Domain: Group
  GroupRoutes: Symbol('GroupRoutes'),
  GroupListController: Symbol('GroupListController'),
  GroupCreateController: Symbol('GroupCreateController'),
  GroupService: Symbol('GroupService'),
  GroupRepository: Symbol('GroupRepository'),

  // Domain: Gallery
  GalleryReleaseRoutes: Symbol('GalleryReleaseRoutes'),
  GalleryReleaseDeleteController: Symbol('GalleryReleaseDeleteController'),
  GalleryService: Symbol('GalleryService'),
  GalleryRepository: Symbol('GalleryRepository'),

  // Domain: EmailList
  EmailListRepository: Symbol('EmailListRepository'),
  EmailListService: Symbol('EmailListService'),
  EmailSendService: Symbol('EmailSendService'),
  EmailListController: Symbol('EmailListController'),
  EmailListCreateController: Symbol('EmailListCreateController'),
  EmailListDeleteController: Symbol('EmailListDeleteController'),
  EmailListUpdateController: Symbol('EmailListUpdateController'),
  EmailListShowController: Symbol('EmailListShowController'),
  EmailListRoutes: Symbol('EmailListRoutes'),

  // Domain: SendRelease
  SendReleaseToMeRoutes: Symbol('SendReleaseToMeRoutes'),
  SendReleaseToMeSendController: Symbol('SendReleaseToMeSendController'),
  SendReleaseToEmailListRoutes: Symbol('SendReleaseToEmailListRoutes'),
  SendReleaseToEmailListSendController: Symbol('SendReleaseToEmailListSendController'),
  SendReleaseToEmailTestListSendController: Symbol('SendReleaseToEmailTestListSendController'),
  SendEmailRepository: Symbol('SendEmailRepository'),
  SendEmailTestService: Symbol('SendEmailTestService'),
  MailsenderProvider: Symbol('MailsenderProvider'),
  SendMailService: Symbol('SendMailService'),
  HtmlHelper: Symbol('HtmlHelper'),
}
