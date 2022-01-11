import Link from 'next/link'

export default function BigButton({ to, text, color, textColor, openNewTab }) {
  return (
    <>
      <Link href={to}>
        <a target={openNewTab ? '_blank' : '_self'} className={`text-${textColor} 
        ${color === 'green' ? 'bg-green-700 hover:bg-green-600' : ''}
        ${color === 'yellow' ? 'bg-orange-400 hover:bg-orange-500' : ''}
        px-7 py-3 font-VT323 text-3xl uppercase 
        md:px-9 md:pb-4 md:pt-3 md:text-4xl`}>
          { text }
        </a>
      </Link>
    </>
  )
}