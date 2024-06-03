import { injectable } from "tsyringe";
import ICreateRelease from "../interfaces/ICreateSendMail";
import IHtmlHelper from "../interfaces/IHtmlHelper";

@injectable()
export class HtmlHelper implements IHtmlHelper {
  generateHtmlForRelease(mailSend: ICreateRelease): string {
    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

          <title>${mailSend.title}</title>
          <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
            }
            .email-container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                border: 1px solid #dcdcdc;
            }
            .logo-text-container {
                display: flex;
                align-items: center;
                padding: 20px;
                background-color: #fbfcfd;
                color: rgb(4, 5, 5);
            }
            .logo-text-container img {
                margin-right: 20px;
                width: 80px;
                height: 80px;
            }
            .email-header {
                background-color: #fbfcfd;
                color: rgb(11, 116, 109);
                text-align: center;
                padding: 20px;
            }
            .email-header h1 {
                margin: 0;
            }
            .email-body {
                padding: 20px;
                background-color: #dee2e642;
            }
            .text {
                margin-left: 20px;
                margin-top: 20px;
                font-size: small;
            }
            .email-footer {
                text-align: center;
                padding: 10px;
                background-color: #fbfcfd;
                color: rgb(62, 60, 60);
                font-size: smaller;
            }
            .link {
                display: inline-block;
                padding: 10px 20px;
                margin-top: 20px;
                color: rgb(36, 0, 196);
                text-decoration: none;
                border-radius: 5px;
            }
            .button {
                display: inline-block;
                padding: 10px 20px;
                margin-top: 20px;
                color: rgb(36, 0, 196);
                text-decoration: none;
                border-radius: 5px;
            }
            .image-gallery {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .image-gallery img {
                width: calc(33.333% - 10px);
                max-width: 100%;
                height: auto;
            }
            hr {
                border: 0;
                border-top: 1px solid #dcdcdc;
                margin: 20px 0;
                opacity: 0.6;
            }
            @media only screen and (max-width: 600px) {
                .email-container {
                    width: 100%;
                    border: none;
                }
                .logo-text-container {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .logo-text-container img {
                    margin: 0 0 10px 0;
                }
                .email-header,
                .email-footer {
                    padding: 10px;
                }
                .button {
                    padding: 10px 15px;
                }
                .image-gallery img {
                    width: calc(50% - 10px);  
                }    
            }
          </style>
      </head>
    <body>
        <div class="email-container">
            <div class="logo-text-container">
                <img src="${mailSend.company?.image_path}" alt="logo">
            </div>
            <hr>
            <div class="email-header">
                <h1>${mailSend.title}</h1>
                <h3>${mailSend.subtitle}</h3>
            </div>
            <div class="email-body">
                <p>${mailSend.call}</p>
                <hr>       
                <a href="https://www.ticker.press/" class="link">Continuar lendo</a>
                <p class="text"> Ou copie e cole esse link para visualizar em outra página: <a href="">www.tickerpress/company/releaseID</a></p>
            </div>
            <div class="email-footer">
              <p>Enviado por ${mailSend.company?.name}</p>
              <p>${mailSend.company?.city}, ${mailSend.company?.state} | <a href="https://www.com.br">https://www.linkempresa.com.br</a></p>
              <p>Você recebeu este e-mail pois autorizou receber informações da Empresa ao efetuar seu cadastro.<br>
              Se deseja não receber mais mensagens como esta, <a href="">descadastre-se.</a> </p>
            </div>
        </div>
    </body>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </html>
    `
  }
}
