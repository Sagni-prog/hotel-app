import React from 'react'

const links = ['Home', 'About', 'Rooms', 'Resto & Bar']
const data = links.map(link=>{
    return <li> <a href='#'> {link}</a></li>
})
function FooterLinks() {
  return (
    <div>
        <h1>FooterLinks</h1>
        <ul>{data}</ul>
    </div>
    
  )
}

export default FooterLinks