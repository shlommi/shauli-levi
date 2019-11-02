import { useRouter } from 'next/router'

export default function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
	paddingBottom:  router.pathname === href ? '3px' : null,
	borderBottom: router.pathname === href ? '2px solid #BEAF78': null,
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}