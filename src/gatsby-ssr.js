import React from "react"

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const includeInDevelopment = !!(pluginOptions.includeInDevelopment)
  const isEnabled = (includeInDevelopment || process.env.NODE_ENV === 'production')

  if (!isEnabled) {
    return null
  }

  return setPostBodyComponents([
    <script
      key={`gatsby-plugin-splitbee`}
      dangerouslySetInnerHTML={{
        __html: `
(function(){var w=window;var sb=w.splitbee;var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Splitbee=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://cdn.splitbee.io/sb.js';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}function ld(){setTimeout(l, ${pluginOptions.delayTimeout || 0});}if(w.attachEvent){w.attachEvent('onload',ld);}else{w.addEventListener('load',ld,false);}})()
        `
      }}
    />
  ])
}
