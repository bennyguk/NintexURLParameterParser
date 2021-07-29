# NintexURLParameterParser
A script to be used with SharePoint Nintex forms to collect parameter values from the URL and set Work Item ID and Analyst field values in the form.
The script was originally designed for use with Service Manager fields, but could easily be adapted for other puroses.

## To use
Using SharePoint designer, browse to the SharePoint list that the Nintex form uses. Edit the NewForm.aspx file and insert the script below `<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">`

When browsing to the URL of the form, simply append `?WorkItemID=SR12345&analyst=joeblogs` after NewForm.aspx.

## Additional information

**Please note:** You will need to specify different field IDs for document.querySelector. I've left ours in the script for reference only.
