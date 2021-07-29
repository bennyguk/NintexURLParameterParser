<script type="text/javascript">
// A script to collect parameter values from the URL and set WorkItemID and Analyst field values in the form.

// Wait for the form to load before firing the script. Load parameters and values from the URL.
window.onload = function() {
var params = getUrlParams();

// Set the value of WorkItemID form field from the URL parameters.
var workItemID = document.querySelector('[id^="ctl00_ctl39_g_4cf3b399_e5c3_438f_82a8_e047accc5f5c_ctl00_ListForm2_formFiller_FormView_ctl04_ctl01_ctl03"]').id;

// If the Analyst parameter is missing, set the value to a zero length string.
if(getUrlParams().WorkItemID == null) {
document.getElementById(workItemID).value = "";
}
else {
document.getElementById(workItemID).value = getUrlParams().WorkItemID;
}
// Sets the WorkItemID field to read only (Could not get this to work properly in Nintex, easy in JScript).
document.getElementById(workItemID).readOnly = True;

// Set the value of WorkItemID form field from the URL parameters.
var analyst = document.querySelector('[id^="ctl00_ctl39_g_4cf3b399_e5c3_438f_82a8_e047accc5f5c_ctl00_ListForm2_formFiller_FormView_ctl04_ctl02_ctl03"]').id;

// If the Analyst parameter is missing, set the value to an empty string.
if(getUrlParams().Analyst == null) {
document.getElementById(analyst).value = "";
}
else {
document.getElementById(analyst).value = getUrlParams().Analyst;
}
// Sets the Analyst field to read only (Could not get this to work properly in Nintex, easy in JScript).
document.getElementById(analyst).readOnly = True;

// Function to parse URL parameters and values.
function getUrlParams() {

  var paramMap = {};
  if (location.search.length == 0) {
    return paramMap;
  }
  var parts = location.search.substring(1).split("&");

  for (var i = 0; i < parts.length; i ++) {
    var component = parts[i].split("=");
    paramMap [decodeURIComponent(component[0])] = decodeURIComponent(component[1]);
  }
  return paramMap;
}
};

</script>
