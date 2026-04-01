"use client"

import dynamic from "next/dynamic"

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
)

type Props = {
  src: string
  tamanho?: number
}

function IconClima({ src, tamanho = 80 }: Props) {
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{ width: tamanho, height: tamanho }}
    />
  )
}

export default IconClima