do ($ = jQuery)->
  searchRoot = ->
    if exportRoot is undefined or exportRoot is null
      setTimeout searchRoot, 10
    do ready
  ready = ->
    $('.animateccLinkButton').click ->
      return false
    $('.top').click ->
      exportRoot.gotoAndPlay('TO_TOP')
      return false
    $('.about').click ->
      exportRoot.gotoAndPlay('TO_ABOUT')
      return false
    $('.contact').click ->
      exportRoot.gotoAndPlay('TO_CONTACT')
      return false
  $ ->
    do searchRoot
