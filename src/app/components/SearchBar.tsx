"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "../styles/SearchBar.module.css"

function SearchBar() {
  const [cidade, setCidade] = useState("")
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!cidade.trim()) return
    router.push(`/cidade/${encodeURIComponent(cidade.trim())}`)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Pesquisar cidade..."
        className={styles.input}
      />
      <button type="submit" className={styles.botao}>Ver</button>
    </form>
  )
}

export default SearchBar