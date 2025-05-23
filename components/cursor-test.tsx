"use client"

import { useEffect } from "react"

export default function CursorTest() {
  useEffect(() => {
    console.log("Cursor test component mounted")
  }, [])

  return (
    <>
        {/* <div className="fixed top-4 right-4 bg-card p-4 rounded-md z-50 text-sm">
          <p>Move your mouse and click anywhere to test effects</p>
        </div> */}
    </>

  )
}
