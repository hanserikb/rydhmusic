# Rydh Music website
https://rydhmusic.com

## About
The goal was to create a very simple landing page with a low loading time, skipping as many external requests as possible. Styles, scripts and SVG icons are automatically inlined in the document form the help of different plugins.

### Tech
* dploy - Uploads the complete public folder to a web host via FTP.
* HtmlWebpackPlugin creates a HTML file from a template, adding script & style tags
* ScriptExtHtmlWebpackPlugin - Converts script tags to inline scripts;
* StyleExtHtmlWebpackPlugin - Converts stylesheet link tags to inline styles.
* ExtractTextWebpackPlugin - Used to convert the CSS code to raw text instead of JS code
* HtmlWebpackInlineSVGPlugin - Transforms svg-images referenced in img-tags to inline SVG code.