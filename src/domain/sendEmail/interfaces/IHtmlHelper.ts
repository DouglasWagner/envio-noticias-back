import ICreateSendMail from "./ICreateSendMail";

export default interface IHtmlHelper {
  generateHtmlForRelease(mailSend: ICreateSendMail): string
}
