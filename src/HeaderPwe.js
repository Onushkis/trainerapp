import React from 'react'
import { usePWAInstall } from 'react-use-pwa-install'

const HeaderPwe = () => {
    const install = usePWAInstall()
  return (

    <header>
			<h1>My app</h1>
			{install && <button onClick={install}>Install</button>}
		</header>
  )
}

export default HeaderPwe
