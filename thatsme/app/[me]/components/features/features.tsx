import React from 'react'

import { useEditor } from '@/app/states/editor'
import { useError } from '@/app/states/errorstate'

export default function FeaturesPages() {


    const { toggleBoolean, page, setPage, option, setOption } = useEditor()
    const { showError } = useError()

  return (
    <>

    </>
  )
}
