import React from 'react';

const MailchimpForm = `
<div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
  <style type="text/css">
        #mc_embed_signup{background:#fff; false;clear:left; font-size:14px;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style><style type="text/css">
        #mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
#mergeRow-gdpr {margin-top: 20px;}
#mergeRow-gdpr fieldset label {font-weight: normal;}
#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
</style>
<div id="mc_embed_signup">
    <form action="https://meetcontent.us12.list-manage.com/subscribe/post?u=e3bb0652e72dbb8d536b7086d&amp;id=4a6432d922&amp;v_id=6914&amp;f_id=002572e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll"><h2>Suscríbete a nuestra lista de correo</h2>
            <div class="mc-field-group"><label for="mce-EMAIL">Dirección Email <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"><div class="content__gdpr"><label><strong>Protección de datos</strong></label><p style="margin:0px">De acuerdo con el reglamento general de protección de datos, necesitamos tu consentimiento expreso para recibir comunicaciones electrónicas de nuestra parte.</p><fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field"><label class="checkbox subfield" for="gdpr90946"><input type="checkbox" id="gdpr_90946" name="gdpr[90946]" class="gdpr" value="Y"><span>Proporciono mi dirección de correo para recibir emails de parte de MeetContent Iberia</span></label></fieldset><p style="margin:10px 0 10px">Puedes cancelar tu suscripción en cualquier momento mediante el enlace que añadimos en el pié de página de todos nuestros correos electrónicos.</p></div></div>
<div hidden=""><input type="hidden" name="tags" value="10527658"></div>
        <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>
    <div style="position: absolute; left: -5000px;" aria-hidden="true">
        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
        <input type="text" name="b_e3bb0652e72dbb8d536b7086d_4a6432d922" tabindex="-1" value="">
    </div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button-mailchimp-embed " value="Me Suscribo">
                <p style="margin: 0px auto;"><a href="http://eepurl.com/ixVaz2" title="Mailchimp: marketing por correo electrónico fácil y divertido"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
            </div>
        </div>
        <div class="content__gdprLegal"><p style="margin:0px;font-size:12px">Usamos Mailchimp como nuestra plataforma de contacto. Al suscribirte reconoces que tu información será compartida con Mailchimp. En caso de duda, <a href="https://mailchimp.com/legal/terms">consulta la política de privacidad de Mailchimp</a>.</p></div>
    </div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
`

export default function MailchimpEmbedIberia() {
  return (
<div dangerouslySetInnerHTML={{__html: MailchimpForm}}/>
  );
}
