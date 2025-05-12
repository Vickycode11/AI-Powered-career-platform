import React, { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.botpressWebChat.init({
        botId: '<Julie>',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '<4f0aa186-dec4-4586-91c1-f638bcb9cd25>',
      })
    }
  }, [])

  return <div id="webchat" />
}

export default Chatbot