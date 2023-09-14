<script>
  import { onMount } from "svelte";

  onMount(() => {
    if (typeof MauticSDKLoaded == 'undefined') {
        window.MauticSDKLoaded = true;
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://mautic.clubrotariodedavid.org/media/js/mautic-form.js?vaf10b91b';
        script.onload = function() {
            window.MauticSDK.onLoad();
        };
        head.appendChild(script);
        window.MauticDomain = 'https://mautic.clubrotariodedavid.org';
        window.MauticLang = {
            'submittingMessage': "Please wait..."
        }
    } else if (typeof MauticSDK != 'undefined') {
        MauticSDK.onLoad();
    }
  });
</script>

<style>
  .mauticform_wrapper { max-width: 600px; margin: 10px auto; padding: 20px }
  .mauticform-innerform {}
  .mauticform-post-success { border: 1px solid green; background: #cbffcb; }
  .mauticform-name { font-weight: bold; font-size: 1.5em; margin-bottom: 3px; }
  .mauticform-description { margin-top: 2px; margin-bottom: 10px; }
  .mauticform-error { margin-bottom: 10px; color: red; }
  .mauticform-message { margin-bottom: 10px;color: green; }
  .mauticform-row { display: block; margin-bottom: 20px; }
  .mauticform-label { font-size: 1.1em; display: block; font-weight: bold; margin-bottom: 5px; }
  .mauticform-row.mauticform-required .mauticform-label:after { color: #e32; content: " *"; display: inline; }
  .mauticform-helpmessage { display: block; font-size: 0.9em; margin-bottom: 3px; }
  .mauticform-errormsg { display: block; color: red; margin-top: 2px; }
  .mauticform-selectbox, .mauticform-input, .mauticform-textarea { width: 100%; padding: 0.5em 0.5em; border: 1px solid #CCC; background: #fff; box-shadow: 0px 0px 0px #fff inset; border-radius: 4px; box-sizing: border-box; }
  .mauticform-checkboxgrp-row {}
  .mauticform-checkboxgrp-label { font-weight: normal; }
  .mauticform-checkboxgrp-checkbox {}
  .mauticform-radiogrp-row {}
  .mauticform-radiogrp-label { font-weight: normal; }
  .mauticform-radiogrp-radio {}
  .mauticform-button-wrapper .mauticform-button.btn-default, .mauticform-pagebreak-wrapper .mauticform-pagebreak.btn-default { color: #5d6c7c;background-color: #ffffff;border-color: #dddddd;}
  .mauticform-button-wrapper .mauticform-button, .mauticform-pagebreak-wrapper .mauticform-pagebreak { display: inline-block;margin-bottom: 0;font-weight: 600;text-align: center;vertical-align: middle;cursor: pointer;background-image: none;border: 1px solid transparent;white-space: nowrap;padding: 6px 12px;font-size: 13px;line-height: 1.3856;border-radius: 3px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}
  .mauticform-button-wrapper .mauticform-button.btn-default[disabled], .mauticform-pagebreak-wrapper .mauticform-pagebreak.btn-default[disabled] { background-color: #ffffff; border-color: #dddddd; opacity: 0.75; cursor: not-allowed; }
  .mauticform-pagebreak-wrapper .mauticform-button-wrapper {  display: inline; }

  .mauticform-field-hidden { display:none }
</style>

<div id="mauticform_wrapper_rotaryedutechforpanamaorgcontactform" class="mauticform_wrapper">
  <form autocomplete="false" method="post" action="https://mautic.clubrotariodedavid.org/form/submit?formId=9" id="mauticform_rotaryedutechforpanamaorgcontactform" data-mautic-form="rotaryedutechforpanamaorgcontactform" enctype="multipart/form-data">
      <div class="mauticform-error" id="mauticform_rotaryedutechforpanamaorgcontactform_error"></div>
      <div class="mauticform-message" id="mauticform_rotaryedutechforpanamaorgcontactform_message"></div>
      <div class="mauticform-innerform">

        <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">

          <div id="mauticform_rotaryedutechforpanamaorgcontactform_f_name" data-validate="f_name" data-validation-type="text" class="mauticform-row mauticform-text mauticform-field-1 mauticform-required">
              <label id="mauticform_label_rotaryedutechforpanamaorgcontactform_f_name" for="mauticform_input_rotaryedutechforpanamaorgcontactform_f_name" class="mauticform-label">First Name</label>
              <input id="mauticform_input_rotaryedutechforpanamaorgcontactform_f_name" name="mauticform[f_name]" value="" class="mauticform-input" type="text">
              <span class="mauticform-errormsg" style="display: none;">This is required.</span>
          </div>

          <div id="mauticform_rotaryedutechforpanamaorgcontactform_last_name" data-validate="last_name" data-validation-type="text" class="mauticform-row mauticform-text mauticform-field-2 mauticform-required">
              <label id="mauticform_label_rotaryedutechforpanamaorgcontactform_last_name" for="mauticform_input_rotaryedutechforpanamaorgcontactform_last_name" class="mauticform-label">Last Name</label>
              <input id="mauticform_input_rotaryedutechforpanamaorgcontactform_last_name" name="mauticform[last_name]" value="" class="mauticform-input" type="text">
              <span class="mauticform-errormsg" style="display: none;">This is required.</span>
          </div>

          <div id="mauticform_rotaryedutechforpanamaorgcontactform_email" data-validate="email" data-validation-type="email" class="mauticform-row mauticform-email mauticform-field-3 mauticform-required">
              <label id="mauticform_label_rotaryedutechforpanamaorgcontactform_email" for="mauticform_input_rotaryedutechforpanamaorgcontactform_email" class="mauticform-label">Email</label>
              <input id="mauticform_input_rotaryedutechforpanamaorgcontactform_email" name="mauticform[email]" value="" class="mauticform-input" type="email">
              <span class="mauticform-errormsg" style="display: none;">This is required.</span>
          </div>

          <div id="mauticform_rotaryedutechforpanamaorgcontactform_f_message" class="mauticform-row mauticform-text mauticform-field-4">
              <label id="mauticform_label_rotaryedutechforpanamaorgcontactform_f_message" for="mauticform_input_rotaryedutechforpanamaorgcontactform_f_message" class="mauticform-label">Message</label>
              <textarea id="mauticform_input_rotaryedutechforpanamaorgcontactform_f_message" name="mauticform[f_message]" class="mauticform-textarea"></textarea>
              <span class="mauticform-errormsg" style="display: none;"></span>
          </div>

          <div id="mauticform_rotaryedutechforpanamaorgcontactform_submit" class="mauticform-row mauticform-button-wrapper mauticform-field-5">
              <button type="submit" name="mauticform[submit]" id="mauticform_input_rotaryedutechforpanamaorgcontactform_submit" value="" class="mauticform-button btn btn-default">Submit</button>
          </div>
          </div>
      </div>

      <input type="hidden" name="mauticform[formId]" id="mauticform_rotaryedutechforpanamaorgcontactform_id" value="9">
      <input type="hidden" name="mauticform[return]" id="mauticform_rotaryedutechforpanamaorgcontactform_return" value="">
      <input type="hidden" name="mauticform[formName]" id="mauticform_rotaryedutechforpanamaorgcontactform_name" value="rotaryedutechforpanamaorgcontactform">

    </form>
</div>
