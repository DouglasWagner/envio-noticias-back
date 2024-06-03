import ICreateSendMail from "./ICreateSendMail";
export default interface ISendMailService {
  create(maileSend: ICreateSendMail): Promise<void>
}
