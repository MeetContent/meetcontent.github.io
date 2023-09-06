import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './DivisionPage.module.css';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type DivisionPageProps = {
  name: string;
  description: string;
  about: JSX.Element;
  newsletterLink: string;
  slackLink?: string;
  meetupsLink: string;
  blogLink: string;
};

const MailchimpEmbedIberia = `
<div id="mc_embed_shell">
<link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
<style type="text/css">
  #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
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
      <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
      <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div><div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"><div class="content__gdpr"><label>Protección de datos</label><p>De acuerdo con el reglamento general de protección de datos, necesitamos tu consentimiento expreso para recibir comunicaciones electrónicas de nuestra parte.</p><fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field"><label class="checkbox subfield" for="gdpr90946"><input type="checkbox" id="gdpr_90946" name="gdpr[90946]" class="gdpr" value="Y"><span>Proporciono mi dirección de correo para recibir emails de parte de MeetContent Iberia</span></label></fieldset><p>Puedes cancelar tu suscripción en cualquier momento mediante el enlace que añadimos en el pié de página de todos nuestros correos electrónicos.</p></div><div class="content__gdprLegal"><p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms">Learn more</a> about Mailchimp's privacy practices.</p></div></div>
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
          <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
          <p style="margin: 0px auto;"><a href="http://eepurl.com/ixVaz2" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
      </div>
  </div>
</div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
`

export default function DivisionPageIberia({
  name,
  description,
  about,
  newsletterLink,
  slackLink,
  meetupsLink,
  blogLink,
}: DivisionPageProps) {
  const { siteConfig } = useDocusaurusContext();
  const globalSlackLink = siteConfig.customFields.slackLink as string;

  return (
    <Layout
      title={name}
      description={description}
    >
      <div className={clsx('container', styles.pageWrapper)}>
        <div className={styles.header}>
          <h1 className={styles.title}>MeetContent {name}</h1>
          <div className={styles.subtitle}>{description}</div>
        </div>
        <div className={styles.about}>{about}</div>

        <div dangerouslySetInnerHTML={{__html: MailchimpEmbedIberia}}/>

        <div className={styles.links}>
          <Link
            href={slackLink || globalSlackLink}
            className={clsx('button', 'button--primary', styles.fullWidthLink)}
          >
            Contacta con nosotros en Slack
          </Link>
          <Link
            to={meetupsLink}
            className="button button--primary"
          >
            Descubre nuestros Meetups
          </Link>
          <Link
            to={blogLink}
            className="button button--primary"
          >
            Consulta nuestros artículos
          </Link>
        </div>
      </div>
    </Layout>
  );
}

