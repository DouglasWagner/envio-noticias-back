import { SendEmail } from "../entities/SendEmail.entity";

export default interface ISendMailRepository{
   save(sendEmail: SendEmail): Promise<SendEmail>
}
