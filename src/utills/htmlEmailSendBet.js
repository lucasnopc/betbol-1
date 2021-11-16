// Email HTML body
export function HtmlEmailSendBet(note) {
    // Some simple styling options
    const backgroundColor = '#131527'
    const textColor = '#444444'
    const mainBackgroundColor = '#ffffff'
    const buttonBackgroundColor = '#fd8200'
    const buttonBorderColor = '#fd8200'
    const buttonTextColor = '#ffffff'
  
    // Uses tables for layout and inline CSS due to email client limitations
    return `
      <body style="background: ${backgroundColor};">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
      <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
      <img src="https://betbol.io/logo.png" />
      </td>
      </tr>
      </table>
      <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
      <tr>
      <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
      Você fez uma aposta na betbol
      </td>
      </tr>
      ${note.map(b => {
        return ``
      })}
        
     
      <tr>
        <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
        <tr>
        <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${process.env.NEXTAUTH_URL}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">Acessar minha conta Betbol</a></td>
            </tr>
            </table>
            </td>
            </tr>
            <tr>
            <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
            Se você não solicitou este e-mail, pode ignorá-lo com segurança.
            </td>
            </tr>
            </table>
  </body>
  `
  }
  
  export function TextEmailSendBet({ url, site }) {
    `Acesse seu painel Betbol ${site}\n${url}\n\n`
  }