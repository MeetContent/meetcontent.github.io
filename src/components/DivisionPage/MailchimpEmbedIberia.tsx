import React from 'react';

export default function MailchimpEmbedIberia() {
  return (
    <div id="mc_embed_shell">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n        #mc_embed_signup{background:#fff; false;clear:left; font-size:14px; max-width: 60ch }\n        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n    ',
        }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n        #mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}\n        #mergeRow-gdpr {margin-top: 20px;}\n        #mergeRow-gdpr fieldset label {font-weight: normal;}\n        #mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}\n    ',
        }}
      />
      <div id="mc_embed_signup">
        <form
          action="https://meetcontent.us12.list-manage.com/subscribe/post?u=e3bb0652e72dbb8d536b7086d&id=4a6432d922&v_id=6914&f_id=002572e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Suscríbete a nuestra lista de correo</h2>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Dirección Email <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                defaultValue=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="Subscribe"
                  id="mc-embedded-subscribe"
                  className="button-mailchimp-embed"
                  defaultValue="Me Suscribo"
                />
                <p style={{ margin: '0px auto' }}>
                  <a
                    href="http://eepurl.com/ixVaz2"
                    title="Mailchimp: marketing por correo electrónico fácil y divertido"
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        backgroundColor: 'transparent',
                        borderRadius: '4px',
                      }}
                    >
                      <img
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{
                          width: '220px',
                          maxWidth: '100%',
                          height: '40px',
                          display: 'flex',
                          padding: '2px 0px',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div
              id="mergeRow-gdpr"
              className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
            >
              <div className="content__gdpr">
                <label>
                  <strong>Protección de datos</strong>
                </label>
                <p style={{ margin: '0px' }}>
                  De acuerdo con el reglamento general de protección de datos,
                  necesitamos tu consentimiento expreso para recibir
                  comunicaciones electrónicas de nuestra parte.
                </p>
                <fieldset
                  className="mc_fieldset gdprRequired mc-field-group"
                  name="interestgroup_field"
                >
                  <label
                    className="checkbox subfield"
                    htmlFor="gdpr90946"
                  >
                    <input
                      type="checkbox"
                      id="gdpr_90946"
                      name="gdpr[90946]"
                      className="gdpr"
                      defaultValue="Y"
                    />
                    <span>
                      Proporciono mi direccón para recibir emails de MeetContent Iberia
                    </span>
                  </label>
                </fieldset>
                <p style={{ margin: '10px 0 10px' }}>
                  Puedes cancelar tu suscripción en cualquier momento mediante
                  el enlace que añadimos en el pié de página de todos nuestros
                  correos electrónicos.
                </p>
              </div>
              <div className="content__gdprLegal">
                <p style={{ margin: '0px', font-size: '12px'}}>
                  Usamos Mailchimp como nuestra plataforma de contacto. Al
                  suscribirte reconoces que tu información será compartida con
                  Mailchimp. En caso de duda,{' '}
                  <a href="https://mailchimp.com/legal/terms">
                    consulta la política de privacidad de Mailchimp
                  </a>
                  .
                </p>
              </div>
            </div>
            <div hidden>
              <input
                type="hidden"
                name="tags"
                defaultValue={10527658}
              />
            </div>
            <div
              id="mce-responses"
              className="clear foot"
            >
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              />
            </div>
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              /* real people should not fill this in and expect good things - do
              not remove this or risk form bot signups */
              <input
                type="text"
                name="b_e3bb0652e72dbb8d536b7086d_4a6432d922"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
