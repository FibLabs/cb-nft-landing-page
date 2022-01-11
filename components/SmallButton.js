import Link from 'next/link'

export default function SmallButton() {
  return (
    <>
      <Link href="">
        <a className="text-white uppercase bg-green-700 hover:bg-green-600 px-7 py-3 font-VT323 text-2xl">
          Mint Now
        </a>
      </Link>
    </>
  )
}